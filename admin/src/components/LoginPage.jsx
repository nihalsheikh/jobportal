import { useEffect, useState, useRef } from "react";
import { loginPageStyles as s } from "../assets/dummyStyles.js";
import logoFallback from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CircleAlert,
  CircleCheck,
  Eye,
  EyeOff,
  X,
  Mail,
  Lock,
  Ellipsis,
} from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const navigate = useNavigate();

  // Dots Background Effect
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const mouse = { x: -1000, y: -1000, tx: -1000, ty: -1000 };

    const handleResize = () => {
      const parent = canvas.parentNode;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.tx = -1000;
      mouse.ty = -1000;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mouse.tx === -1000) {
        mouse.x += (-1000 - mouse.x) * 0.1;
        mouse.y += (-1000 - mouse.y) * 0.1;
      } else {
        if (mouse.x === -1000) {
          mouse.x = mouse.tx;
          mouse.y = mouse.ty;
        } else {
          mouse.x += (mouse.tx - mouse.x) * 0.12;
          mouse.y += (mouse.ty - mouse.y) * 0.12;
        }
      }

      const width = canvas.width;
      const height = canvas.height;
      time += 0.05;

      const spacing = 24;
      const radius = 1.5;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const homeX = c * spacing;
          const homeY = r * spacing;

          const dx = homeX - mouse.x;
          const dy = homeY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let offsetX = 0;
          let offsetY = 0;
          let scaleFactor = 1;
          let alphaFactor = 1;

          const maxDist = 160;
          if (dist < maxDist && mouse.x !== -1000) {
            const force = 1 - dist / maxDist;
            const push = Math.sin(force * Math.PI) * 16;

            if (dist > 0) {
              offsetX = (dx / dist) * push;
              offsetY = (dy / dist) * push;
            }

            scaleFactor = 1 + force * 1.2;
            alphaFactor = 1 + force * 1.5;
          }

          const ambientWave =
            Math.sin(homeX * 0.01 + homeY * 0.015 + time) * 1.2;
          offsetY += ambientWave;

          const drawX = homeX + offsetX;
          const drawY = homeY + offsetY;

          ctx.beginPath();
          ctx.arc(drawX, drawY, radius * scaleFactor, 0, Math.PI * 2);

          const baseAlpha = 0.28;
          const alpha = Math.max(0.04, Math.min(0.75, baseAlpha * alphaFactor));

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Toast Notification
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(
        () => setToast({ visible: false, message: "", type: "success" }),
        3000,
      );
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Email Validation
  const validateEmail = (emailStr) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(emailStr);
  };

  const isEmailValid = validateEmail(email);
  const isFormValid = isEmailValid && password.length >= 6;

  // Submit Email and Password
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setToast({
        visible: true,
        message: "Please fill in all fields",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      // Admin Login
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });

      if (res.data.user.role !== "admin") {
        setToast({
          visible: true,
          message: "Access Denied. Admin Only.",
          type: "error",
        });
        setLoading(false);
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setToast({
        visible: true,
        message: "Login Successful",
        type: "success",
      });

      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response?.data);

      setToast({
        visible: true,
        message: error.response?.data?.message || "Something went wrong.",
        type: "error",
      });

      setLoading(false);
    }
  };

  const closeToast = () =>
    setToast({ visible: false, message: "", type: "success" });

  const toastBorderColor =
    toast.type === "success" ? s.toastBorderSuccess : s.toastBorderError;

  const toastIcon =
    toast.type === "success" ? (
      <CircleCheck className={s.toastIconSuccess} size={20} />
    ) : (
      <CircleAlert className={s.toastIconError} size={20} />
    );

  return (
    <div
      className={s.pageContainer}
      style={{
        backgroundImage: "linear-gradient(to bottom, #C8102E, #E53935)",
        backgroundSize: "100% 100%",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      <style>{s.animations}</style>

      {/* Elegant glassmorphism depth glow leaks */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Alert */}
      {toast.visible && (
        <div className={`${s.toastContainer} ${toastBorderColor}`} role="alert">
          {toastIcon}
          <p className={s.toastMessage}>{toast.message}</p>
          <button onClick={closeToast} className={s.toastCloseBtn}>
            <X size={18} />
          </button>
        </div>
      )}

      {/* Center card wrapper */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6">
        {/* Card Container with glass ring border */}
        <div className={s.cardContainer}>
          <div className={s.card}>
            {/* Custom Pixel Block Logo */}
            <div className={s.logoSection}>
              <img
                src={logoFallback}
                alt="Emberly"
                className={`${s.logoImage} h-20 w-20`}
              />
            </div>

            <p className={s.subtitle}>Emberly Administration</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className={s.form}>
              {/* Email Input */}
              <div className="mb-4">
                <div className={s.labelRow}>
                  <label htmlFor="email" className={s.label}>
                    Email
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                    <Mail
                      size={18}
                      className={`transition-all duration-300 ${
                        !email
                          ? "text-gray-400"
                          : isEmailValid
                            ? "text-emerald-500 scale-110"
                            : "text-rose-400"
                      }`}
                    />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@emberly.com"
                    required
                    className={`${s.inputBase} pl-11 ${
                      email && !isEmailValid
                        ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                        : ""
                    } ${
                      isEmailValid
                        ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-200"
                        : ""
                    }`}
                  />
                  {email && (
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                      {isEmailValid ? (
                        <CircleCheck
                          size={16}
                          className="text-emerald-500 animate-scale-up"
                        />
                      ) : (
                        <CircleAlert
                          size={16}
                          className="text-rose-400 animate-fade-in"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <div className={s.labelRow}>
                  <label htmlFor="password" className={s.label}>
                    Password
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                    <Lock
                      size={18}
                      className={`transition-all duration-300 ${
                        !password
                          ? "text-gray-400"
                          : password.length >= 6
                            ? "text-emerald-500 scale-110"
                            : "text-amber-500 animate-pulse"
                      }`}
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className={`${s.inputBase} pl-11 ${s.inputPr12} ${
                      password && password.length < 6
                        ? "border-amber-300 focus:border-amber-500 focus:ring-amber-200"
                        : ""
                    } ${
                      password.length >= 6
                        ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-200"
                        : ""
                    }`}
                  />
                  {/* Show/Hide Password Eye Button */}
                  <div className={s.eyeButtonWrapper}>
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className={s.eyeButton}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                id="submit-button"
                type="submit"
                disabled={loading || !isFormValid}
                className={`${s.submitBtn} ${
                  isFormValid && !loading
                    ? s.submitBtnActive
                    : s.submitBtnDisabled
                }`}
              >
                {loading ? (
                  <>
                    <Ellipsis className="w-4 h-4 animate-spin text-zinc-400" />
                    Authenticating...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

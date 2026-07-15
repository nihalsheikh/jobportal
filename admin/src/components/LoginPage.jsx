import { useState } from "react";
import { loginPageStyles as s } from "../assets/dummyStyles.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const navigate = useNavigate()

  return (
    <div className={s.pageContainer}>
      <div>adad</div>
    </div>
  );
};

export default LoginPage;

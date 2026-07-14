// src/context/ThemeContext.jsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext(null);

const applyDataTheme = (dark) => {
  if (dark) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("emberly-theme");
    return saved ? saved === "dark" : true; // default: dark
  });

  // Track current value in a ref so toggleTheme has zero dependencies
  const isDarkRef = useRef(isDarkMode);

  // Apply theme attribute on first mount
  useEffect(() => {
    applyDataTheme(isDarkMode);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTheme = useCallback((event) => {
    const nextDark = !isDarkRef.current;

    // Ripple origin = where the user clicked
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    // endRadius must reach the farthest corner of the screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // All DOM mutations inside startViewTransition must be synchronous.
    // flushSync forces React to flush state updates before the API
    // takes the "after" snapshot.
    const update = () => {
      applyDataTheme(nextDark);
      localStorage.setItem("emberly-theme", nextDark ? "dark" : "light");
      isDarkRef.current = nextDark;
      flushSync(() => setIsDarkMode(nextDark));
    };

    // Graceful fallback for Firefox/Safari if API is unsupported
    if (!document.startViewTransition) {
      update();
      return;
    }

    const transition = document.startViewTransition(update);

    // Once the API has both snapshots, animate a circle from the click point
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "ease-in",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, []); // stable — no deps needed because of isDarkRef

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

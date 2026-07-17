import { useLocation, useNavigate } from "react-router-dom";
import { navbarStyles as s } from "../assets/dummyStyles.js";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  BriefcaseBusiness,
  Building,
  Building2,
  ChevronDown,
  House,
  List,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Sun,
  User,
  UserRoundCheck,
  X,
} from "lucide-react";
import logoFallback from "../assets/logo.webp";
import { useTheme } from "../context/ThemeContext.jsx";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", Icon: House },
  { key: "jobs", label: "Jobs", Icon: BriefcaseBusiness },
  { key: "listJob", label: "List Job", Icon: List },
  { key: "company", label: "Companies", Icon: Building2 },
  {
    key: "companyQuestions",
    label: "Company Questions",
    Icon: Building,
    dropdown: [{ key: "listCompanyQ", label: "List Company Questions" }],
  },
  {
    key: "roleQuestions",
    label: "Role Questions",
    Icon: UserRoundCheck,
    dropdown: [{ key: "listRoleQ", label: "List Role Questions" }],
  },
];

const ROUTES = {
  dashboard: "/",
  company: "/companies",
  jobs: "/addjobs",
  listJob: "/list/jobs",
  companyQuestions: "/company-questions",
  listCompanyQ: "/list/company-questions",
  roleQuestions: "/role-questions",
  listRoleQ: "/list/role-questions",
  signin: "/signin",
};

const Navbar = ({ logoSrc, brandName = "Emberly", onNavigate }) => {
  const { isDarkMode, toggleTheme: onThemeToggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location.pathname]);

  const pathToKey = (pathname) => {
    const found = Object.entries(ROUTES).find(([key, path]) => {
      if (path === "/") return pathname === "/";
      return (
        pathname === path ||
        pathname.startsWith(path + "/") ||
        pathname.startsWith(path)
      );
    });

    return found ? found[0] : "dashboard";
  };

  const [active, setActive] = useState(pathToKey(location.pathname));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navContainerRef = useRef(null);
  const itemRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const [openDropdownKey, setOpenDropdownKey] = useState(null);
  const navCloseTimeoutRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  // screensize
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isLGOnly = windowWidth >= 1024 && windowWidth < 1280;

  // when clicked outside of dropdown, close dropdown
  useEffect(() => {
    if (!isLGOnly) return;
    const handleDocClick = (e) => {
      const container = navContainerRef.current;
      if (!container) return;
      if (!container.contains(e.target)) {
        setOpenDropdownKey(null);
      }
    };
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [isLGOnly]);

  // sync active state with current route
  useEffect(() => {
    const key = pathToKey(location.pathname);
    setActive(key);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Measure and update indicator position – useLayoutEffect prevents flicker
  const updateIndicator = useCallback(() => {
    const container = navContainerRef.current;
    const activeEl = itemRefs.current[active];
    if (!container || !activeEl) {
      setIndicatorStyle({ left: 0, width: 0 });
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    setIndicatorStyle({
      left: activeRect.left - containerRect.left,
      width: activeRect.width,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateIndicator();
    let rafId = null;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateIndicator);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateIndicator]);

  // Navigate
  const handleNavigate = (key) => {
    const path = ROUTES[key] ?? "/";
    setActive(key);
    onNavigate?.(key);
    navigate(path);
    setMobileMenuOpen(false);
    setOpenDropdownKey(null);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
    setMobileMenuOpen(false);
  };

  // Logo image source
  const logoToUse = logoSrc ?? logoFallback;

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const userMenuContainerRef = useRef(null);

  // show dropdown
  const openUserMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setUserMenuOpen(true);
  };
  const startCloseTimer = (delay = 250) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setUserMenuOpen(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  const openNavDropdown = (key) => {
    if (navCloseTimeoutRef.current) {
      clearTimeout(navCloseTimeoutRef.current);
      navCloseTimeoutRef.current = null;
    }
    setOpenDropdownKey(key);
  };
  const closeNavDropdownDelayed = (delay = 200) => {
    if (navCloseTimeoutRef.current) clearTimeout(navCloseTimeoutRef.current);
    navCloseTimeoutRef.current = setTimeout(() => {
      setOpenDropdownKey(null);
      navCloseTimeoutRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (navCloseTimeoutRef.current) clearTimeout(navCloseTimeoutRef.current);
    };
  }, []);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.navContainer}>
          <div className={s.navContent}>
            {/* logo */}
            <div
              className={s.logoContainer}
              onClick={() => handleNavigate("dashboard")}
            >
              <div className={s.logoWrapper}>
                {logoToUse ? (
                  <img src={logoToUse} alt="logo" className={s.logoImage} />
                ) : (
                  <span className={s.logoFallback}>{brandName[0]}</span>
                )}
              </div>

              <div className={s.logoTextContainer}>
                <span className={s.logoBrandName}>{brandName}</span>
                <span className={s.logoSubtitle}>Find your dream job</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className={s.desktopNav}>
              <div ref={navContainerRef} className={s.navIndicatorContainer}>
                {active && indicatorStyle.width > 0 && (
                  <div
                    className={s.activeIndicator}
                    style={{
                      left: indicatorStyle.left,
                      width: indicatorStyle.width,
                      boxShadow:
                        "0 0 8px rgba(245, 48, 75, 0.5), 0 0 20px rgba(245, 48, 75, 0.2)",
                    }}
                  />
                )}

                <ul className={s.navList}>
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.Icon;

                    const isActiveParent =
                      active === item.key ||
                      (item.dropdown &&
                        isLGOnly &&
                        item.dropdown.some((sub) => active === sub.key));

                    return (
                      <React.Fragment key={item.key}>
                        <li
                          className={s.navItem}
                          onMouseEnter={() =>
                            item.dropdown &&
                            isLGOnly &&
                            openNavDropdown(item.key)
                          }
                          onMouseLeave={() =>
                            item.dropdown &&
                            isLGOnly &&
                            closeNavDropdownDelayed(200)
                          }
                        >
                          <div
                            ref={(el) => {
                              itemRefs.current[item.key] = el;
                              if (item.dropdown && el && isLGOnly) {
                                item.dropdown.forEach((sub) => {
                                  itemRefs.current[sub.key] = el;
                                });
                              }
                            }}
                            className={s.navItemWrapper}
                          >
                            <button
                              onClick={(e) => {
                                if (item.dropdown && isLGOnly) {
                                  e.preventDefault();
                                  setOpenDropdownKey((prev) =>
                                    prev === item.key ? null : item.key,
                                  );
                                  return;
                                }
                                handleNavigate(item.key);
                              }}
                              className={`${s.navButton} ${isActiveParent ? s.navButtonActive : s.navButtonInactive}`}
                            >
                              <Icon className={s.navButtonIcon} />
                              <span className={s.navButtonText}>
                                {item.label}
                              </span>

                              {item.dropdown && isLGOnly && (
                                <ChevronDown className={s.navDropdownIcon} />
                              )}
                            </button>
                          </div>

                          {item.dropdown && isLGOnly && (
                            <div
                              className={`
                                ${s.dropdownPanel}
                                ${openDropdownKey === item.key ? s.dropdownVisible : s.dropdownHidden}`}
                              onMouseEnter={() => openNavDropdown(item.key)}
                              onMouseLeave={() => closeNavDropdownDelayed(200)}
                            >
                              <div className={s.dropdownCaret}></div>
                              <div
                                className={`
                                  ${s.dropdownContent}
                                  ${openDropdownKey === item.key ? "animate-border" : "bg-transparent"}`}
                                style={{
                                  background:
                                    openDropdownKey === item.key
                                      ? undefined
                                      : "transparent",
                                }}
                              >
                                <div className={s.dropdownInner}>
                                  {item.dropdown.map((sub) => {
                                    const isActiveSub = active === sub.key;

                                    return (
                                      <button
                                        key={sub.key}
                                        onClick={() => handleNavigate(sub.key)}
                                        className={`
                                          ${s.dropdownItem}
                                          ${isActiveSub ? s.dropdownItemActive : s.dropdownItemInactive}`}
                                      >
                                        <span
                                          className={s.dropdownItemDot}
                                        ></span>
                                        <span>{sub.label}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </li>

                        {!isLGOnly &&
                          item.dropdown &&
                          item.dropdown.map((sub) => {
                            const isActiveSub = active === sub.key;

                            return (
                              <li key={sub.key} className={s.subNavItem}>
                                <div
                                  ref={(el) => {
                                    itemRefs.current[sub.key] = el;
                                  }}
                                  className={s.navItemWrapper}
                                >
                                  <button
                                    onClick={() => handleNavigate(sub.key)}
                                    className={`
                                      ${s.subNavButton}
                                      ${isActiveSub ? s.subNavButtonActive : s.subNavButtonInactive}`}
                                  >
                                    <span className={s.subNavDot}></span>
                                    <span className={s.navButtonText}>
                                      {sub.label}
                                    </span>
                                  </button>
                                </div>
                              </li>
                            );
                          })}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right side */}
            <div className={s.rightActions}>
              <div className={s.desktopAuth}>
                {/* Theme Toggle Button */}
                <button
                  onClick={onThemeToggle}
                  className={s.themeToggleBtn}
                  title={
                    isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                  }
                >
                  <span
                    key={isDarkMode ? "sun" : "moon"}
                    className="theme-icon-enter"
                  >
                    {isDarkMode ? (
                      <Sun className={s.themeToggleIcon} />
                    ) : (
                      <Moon className={s.themeToggleIcon} />
                    )}
                  </span>
                </button>

                {/* Sign-in/Sign-out Button */}
                {user ? (
                  <div
                    ref={userMenuContainerRef}
                    className={s.userMenuContainer}
                    onMouseEnter={openUserMenu}
                    onMouseLeave={() => startCloseTimer(250)}
                  >
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                        setUserMenuOpen((s) => !s);
                      }}
                      className={s.userMenuButton}
                    >
                      <User className={s.userIcon} />
                      <span className={s.userName}>{user.name}</span>

                      <ChevronDown className={s.userDropdownIcon} />
                    </button>

                    <div
                      className={`
                        ${s.userDropdown}
                        ${userMenuOpen ? s.userDropdownVisible : s.userDropdownHidden}`}
                    >
                      <div
                        className={`
                          ${s.dropdownContent}
                          ${userMenuOpen ? "animate-border" : "bg-transparent"}`}
                        style={{
                          background: userMenuOpen ? undefined : "transparent",
                        }}
                      >
                        <div className={s.userDropdownInner}>
                          <button
                            onClick={handleLogout}
                            className={s.logoutButton}
                          >
                            <LogOut className={s.logoutIcon} />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigate("signin")}
                    className={`${s.loginButton} flex gap-2`}
                  >
                    <span className={s.loginButtonOverlay}></span>
                    <span className={s.loginButtonContent}>
                      <LogIn className={s.loginIcon} />
                    </span>
                    <span>Sign In</span>
                  </button>
                )}
              </div>

              {/* Theme Toggle aside burger menu */}
              <button
                onClick={onThemeToggle}
                className={s.mobileHeaderThemeBtn}
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <span
                  key={isDarkMode ? "sun-top" : "moon-top"}
                  className="theme-icon-enter"
                >
                  {isDarkMode ? (
                    <Sun className={s.themeToggleIcon} />
                  ) : (
                    <Moon className={s.themeToggleIcon} />
                  )}
                </span>
              </button>

              {/* Burger Menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={s.mobileMenuButton}
              >
                {mobileMenuOpen ? (
                  <X className={s.mobileMenuIcon} />
                ) : (
                  <Menu className={s.mobileMenuIcon} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Navigation */}
          {mobileMenuOpen && (
            <div className={s.mobileMenu}>
              <div className={s.mobileMenuContent}>
                {NAV_ITEMS.map((item) => {
                  const Icon = item.Icon;
                  const isActiveParent = active === item.key;

                  return (
                    <div key={item.key} className={s.mobileNavItem}>
                      <button
                        onClick={() => handleNavigate(item.key)}
                        className={`
                          ${s.mobileNavButton}
                          ${isActiveParent ? s.mobileNavButtonActive : s.mobileNavButtonInactive}`}
                      >
                        <Icon className={s.mobileNavIcon} />
                        <span className={s.mobileNavText}>{item.label}</span>
                      </button>

                      {item.dropdown && (
                        <div className={s.mobileDropdown}>
                          {item.dropdown.map((sub) => {
                            const isActiveSub = active === sub.key;

                            return (
                              <button
                                key={sub.key}
                                onClick={() => handleNavigate(sub.key)}
                                className={`
                                  ${s.mobileDropdownItem}
                                  ${isActiveSub ? s.mobileDropdownItemActive : s.mobileDropdownItemInactive}`}
                              >
                                {sub.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile Sign-in/Sign-out */}
                {user ? (
                  <>
                    <div className={s.mobileUserInfo}>
                      <span className={s.mobileUserInfoContent}>
                        <User className={s.userIcon} />
                        <span className={s.userName}>{user.name}</span>
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className={s.mobileLogoutButton}
                    >
                      <LogOut className={s.mobileNavIcon} />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <div className={s.mobileLoginContainer}>
                    <button
                      onClick={() => handleNavigate("signin")}
                      className={s.mobileLoginButton}
                    >
                      <LogIn className={s.mobileNavIcon} />
                      <span>Sign In</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <style>{s.animations}</style>
    </header>
  );
};

export default Navbar;

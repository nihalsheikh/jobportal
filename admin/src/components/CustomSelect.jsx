import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { dashboardStyles as s } from "../assets/dummyStyles.js";

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select...",
  icon: Icon,
  compact = false,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className={s.customSelectWrapper} ref={wrapperRef}>
      {Icon && !compact && <Icon className={s.filterSearchIcon} />}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`${compact ? s.customSelectButtonCompact : s.customSelectButton} ${
          open ? s.customSelectButtonOpen : ""
        }`}
      >
        <span
          className={selected ? s.customSelectValue : s.customSelectPlaceholder}
        >
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`${s.customSelectChevron} ${open ? s.customSelectChevronOpen : ""}`}
        />
      </button>

      {open && (
        <div
          className={compact ? s.customSelectPanelCompact : s.customSelectPanel}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`${s.customSelectOptionBase} ${
                opt.value === value
                  ? s.customSelectOptionActive
                  : s.customSelectOptionInactive
              }`}
            >
              <span className="truncate">{opt.label}</span>
              {opt.value === value && (
                <span className={s.customSelectOptionDot} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Dropdown.module.css";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options?: readonly DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: ComponentSize;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
}

const CHEVRON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")";

export function Dropdown({
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = "Select…",
  size = "md",
  invalid = false,
  disabled = false,
  className,
  ...ariaProps
}: DropdownProps) {
  const baseId = useId();
  const listboxId = `${baseId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const [open, setOpen] = useState(false);
  const selectedValue = value ?? internalValue;

  const enabledIndexes = options
    .map((option, index) => (option.label === "" || option.disabled ? -1 : index))
    .filter((index) => index >= 0);

  const selectedIndex = options.findIndex((option) => option.value === selectedValue);
  const [activeIndex, setActiveIndex] = useState(() =>
    enabledIndexes.includes(0) ? 0 : enabledIndexes[0] ?? -1,
  );

  const openPopup = useCallback(() => {
    if (disabled) return;
    const target =
      selectedIndex >= 0 && enabledIndexes.includes(selectedIndex)
        ? selectedIndex
        : enabledIndexes[0];
    setActiveIndex(target ?? -1);
    setOpen(true);
  }, [disabled, selectedIndex, enabledIndexes]);

  const closePopup = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  const select = (optionValue: string) => {
    setInternalValue(optionValue);
    onChange?.(optionValue);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const move = (direction: 1 | -1) => {
    if (enabledIndexes.length === 0) return;
    const current = enabledIndexes.includes(activeIndex)
      ? enabledIndexes.indexOf(activeIndex)
      : 0;
    const next =
      enabledIndexes[(current + direction + enabledIndexes.length) % enabledIndexes.length];
    if (next != null) setActiveIndex(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openPopup();
      }
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        move(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        move(-1);
        break;
      case "Home":
        event.preventDefault();
        if (enabledIndexes[0] != null) setActiveIndex(enabledIndexes[0]);
        break;
      case "End":
        event.preventDefault();
        if (enabledIndexes[enabledIndexes.length - 1] != null) {
          setActiveIndex(enabledIndexes[enabledIndexes.length - 1]!);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (activeIndex >= 0 && options[activeIndex] && enabledIndexes.includes(activeIndex)) {
          select(options[activeIndex]?.value ?? "");
        }
        break;
      case "Escape":
        event.preventDefault();
        closePopup();
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  const selectedOption = options.find((option) => option.value === selectedValue);

  return (
    <div ref={rootRef} className={[styles.root, className].filter(Boolean).join(" ")} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        className={[
          styles.trigger,
          styles[size],
          open ? styles.open : null,
          invalid ? styles.invalid : null,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => (open ? setOpen(false) : openPopup())}
        {...ariaProps}
      >
        <span className={selectedOption ? styles.label : styles.placeholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span
          className={[styles.chevron, open ? styles.chevronOpen : null].filter(Boolean).join(" ")}
          style={{ backgroundImage: CHEVRON }}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-activedescendant={activeIndex >= 0 ? `${baseId}-option-${activeIndex}` : undefined}
          className={styles.menu}
        >
          {options.map((option, index) =>
            option.label === "" ? (
              <div key={option.value} className={styles.header} role="presentation">
                {option.value}
              </div>
            ) : (
              <div
                key={option.value}
                id={`${baseId}-option-${index}`}
                role="option"
                aria-selected={option.value === selectedValue}
                aria-disabled={option.disabled || undefined}
                className={[
                  styles.option,
                  index === activeIndex ? styles.active : null,
                  option.value === selectedValue ? styles.selected : null,
                  option.disabled ? styles.disabled : null,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (!option.disabled) select(option.value);
                }}
                onMouseEnter={() => {
                  if (!option.disabled && option.label !== "") setActiveIndex(index);
                }}
              >
                {option.label}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
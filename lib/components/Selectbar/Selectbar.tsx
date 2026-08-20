import { useState } from "react";
import styles from "./Selectbar.module.css";

export type SelectbarSize = "sm" | "md" | "lg";

export interface SelectbarOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectbarProps {
  options?: readonly SelectbarOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: SelectbarSize;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export function Selectbar({
  options = [],
  value,
  defaultValue,
  onChange,
  size = "md",
  className,
  ...ariaProps
}: SelectbarProps) {
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue ?? options[0]?.value,
  );
  const selectedValue = value ?? internalValue;

  const select = (optionValue: string) => {
    setInternalValue(optionValue);
    onChange?.(optionValue);
  };

  return (
    <div
      role="group"
      className={[styles.bar, styles[size], className].filter(Boolean).join(" ")}
      {...ariaProps}
    >
      {options.map((option) => {
        const selected = option.value === selectedValue;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            disabled={option.disabled}
            className={[
              styles.option,
              selected ? styles.selected : null,
              option.disabled ? styles.disabled : null,
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => select(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
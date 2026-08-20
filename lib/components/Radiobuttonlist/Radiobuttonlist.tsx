import { useState, type ChangeEvent } from "react";
import styles from "./Radiobuttonlist.module.css";

export interface RadiobuttonlistOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadiobuttonlistProps {
  options?: readonly RadiobuttonlistOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  legend?: string;
  name: string;
  className?: string;
}

export function Radiobuttonlist({
  options = [],
  value,
  defaultValue,
  onChange,
  legend,
  name,
  className,
}: RadiobuttonlistProps) {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const selectedValue = value ?? internalValue;

  const select = (optionValue: string) => {
    setInternalValue(optionValue);
    onChange?.(optionValue);
  };

  return (
    <fieldset className={[styles.group, className].filter(Boolean).join(" ")}>
      {legend != null && <legend className={styles.legend}>{legend}</legend>}
      <ul className={styles.list}>
        {options.map((option) => {
          const checked = option.value === selectedValue;
          return (
            <li
              key={option.value}
              className={[styles.item, option.disabled ? styles.disabled : null]
                .filter(Boolean)
                .join(" ")}
            >
              <label className={styles.label}>
                <input
                  type="radio"
                  className={styles.radio}
                  name={name}
                  value={option.value}
                  checked={checked}
                  disabled={option.disabled}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    select(event.target.value)
                  }
                />
                <span>{option.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
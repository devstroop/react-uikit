import { useState, type ChangeEvent } from 'react';
import styles from './CheckBoxList.module.css';

export interface CheckBoxListOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckBoxListProps {
  options?: readonly CheckBoxListOption[];
  value?: readonly string[];
  defaultValue?: readonly string[];
  onChange?: (values: string[]) => void;
  legend?: string;
  name?: string;
  className?: string;
}

export function CheckBoxList({
  options = [],
  value,
  defaultValue = [],
  onChange,
  legend,
  name,
  className,
}: CheckBoxListProps) {
  const [internalValue, setInternalValue] = useState<string[]>(() => [
    ...defaultValue,
  ]);
  const checkedValues = value ?? internalValue;

  const toggle = (optionValue: string, checked: boolean) => {
    const next = checked
      ? [...checkedValues, optionValue]
      : checkedValues.filter((v) => v !== optionValue);
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <fieldset className={[styles.group, className].filter(Boolean).join(' ')}>
      {legend != null && <legend className={styles.legend}>{legend}</legend>}
      <ul className={styles.list}>
        {options.map((option) => {
          const checked = checkedValues.includes(option.value);
          return (
            <li
              key={option.value}
              className={[styles.item, option.disabled ? styles.disabled : null]
                .filter(Boolean)
                .join(' ')}
            >
              <label className={styles.label}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  name={name}
                  value={option.value}
                  checked={checked}
                  disabled={option.disabled}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    toggle(option.value, event.target.checked)
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

import { useState, type ReactElement } from "react";
import styles from "./Selectbar.module.css";

export type SelectbarSize = "sm" | "md" | "lg";

export type SelectbarOrientation = "horizontal" | "vertical";

export interface SelectbarOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectbarBaseProps {
  options?: readonly SelectbarOption[];
  orientation?: SelectbarOrientation;
  size?: SelectbarSize;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export interface SelectbarSingleProps extends SelectbarBaseProps {
  multiple?: false;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export interface SelectbarMultiProps extends SelectbarBaseProps {
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
}

/**
 * Loose escape hatch: un-narrowed `string | string[]` usage without a
 * `multiple` discriminant. Prefer Single/Multi for type safety.
 * (Method shorthand keeps this compatible with both strict signatures.)
 */
export interface SelectbarLooseProps extends SelectbarBaseProps {
  multiple?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?(value: string | string[]): void;
}

export type SelectbarProps = SelectbarSingleProps | SelectbarMultiProps | SelectbarLooseProps;

function toArray(value: string | string[] | undefined): string[] {
  return value == null ? [] : Array.isArray(value) ? value : [value];
}

export function Selectbar(props: SelectbarSingleProps): ReactElement;
export function Selectbar(props: SelectbarMultiProps): ReactElement;
export function Selectbar(props: SelectbarLooseProps): ReactElement;
export function Selectbar(props: SelectbarLooseProps): ReactElement {
  const {
    options = [],
    value,
    defaultValue,
    multiple: multipleProp,
    orientation = "horizontal",
    onChange,
    size = "md",
    className,
    ...ariaProps
  } = props as SelectbarBaseProps & {
    value?: string | string[];
    defaultValue?: string | string[];
    multiple?: boolean;
    onChange?: (value: string | string[]) => void;
  };
  const multiple = multipleProp ?? false;
  const [internalValue, setInternalValue] = useState<string | string[] | undefined>(
    defaultValue ?? (multiple ? [] : options[0]?.value),
  );
  const resolved = value ?? internalValue;
  // An explicit `multiple` always wins: `multiple={false}` with an array
  // value stays single (selects nothing, heals to string on next click)
  // instead of flipping to multi and emitting string[] where the single
  // signature promises string. When `multiple` is omitted (loose
  // string|string[] usage), infer from the runtime value so a controlled
  // array keeps working as multi — the previous, non-breaking behavior.
  const isMulti = multipleProp === true || (multipleProp === undefined && Array.isArray(resolved));

  const select = (optionValue: string) => {
    if (!isMulti) {
      setInternalValue(optionValue);
      onChange?.(optionValue);
      return;
    }
    const current = toArray(resolved);
    const next = current.includes(optionValue)
      ? current.filter((v) => v !== optionValue)
      : [...current, optionValue];
    setInternalValue(next);
    onChange?.(next);
  };

  const isSelected = (optionValue: string) =>
    isMulti ? toArray(resolved).includes(optionValue) : resolved === optionValue;

  return (
    <div
      role="group"
      className={[
        styles.bar,
        styles[size],
        orientation === "vertical" ? styles.vertical : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...ariaProps}
    >
      {options.map((option) => {
        const selected = isSelected(option.value);
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

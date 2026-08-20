import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import type { ComponentSize } from "../../sizes";
import { Icon } from "../Icon/Icon";
import styles from "./Numeric.module.css";

export type NumericSize = ComponentSize;

export interface NumericProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "value" | "defaultValue" | "onChange" | "min" | "max" | "step"
  > {
  size?: NumericSize;
  invalid?: boolean;
  value?: number | null;
  defaultValue?: number | null;
  onChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  incrementLabel?: string;
  decrementLabel?: string;
}

function parseNumeric(value: string): number | null {
  const num = parseFloat(value);
  return Number.isNaN(num) ? null : num;
}

function sanitizeText(raw: string): string {
  let out = "";
  let seenDot = false;
  for (const ch of raw) {
    if (ch >= "0" && ch <= "9") out += ch;
    else if (ch === "." && !seenDot) {
      seenDot = true;
      out += ch;
    } else if (ch === "-" && out.length === 0) {
      out += ch;
    }
  }
  return out;
}

function clamp(value: number, min: number | undefined, max: number | undefined): number {
  const lo = min ?? -Infinity;
  const hi = max ?? Infinity;
  return Math.min(hi, Math.max(lo, value));
}

function snapToStep(value: number, min: number | undefined, step: number): number {
  if (min === undefined) return value;
  return min + Math.round((value - min) / step) * step;
}

function stepValue(
  value: string,
  direction: 1 | -1,
  min: number | undefined,
  max: number | undefined,
  step: number,
): number {
  const EPS = 1e-9;
  const current = parseNumeric(value) ?? (min ?? 0);
  let next: number;
  if (min === undefined) {
    next = current + direction * step;
  } else if (direction > 0) {
    next = min + Math.ceil((current - min + EPS) / step) * step;
  } else {
    next = min + Math.floor((current - min - EPS) / step) * step;
  }
  return clamp(next, min, max);
}

export const Numeric = forwardRef<HTMLInputElement, NumericProps>(function Numeric(
  {
    size = "md",
    invalid = false,
    className,
    disabled,
    value,
    defaultValue,
    onChange,
    min,
    max,
    step: stepSize = 1,
    incrementLabel = "Increment",
    decrementLabel = "Decrement",
    onBlur,
    onKeyDown,
    ...props
  },
  ref,
) {
  const [text, setText] = useState(defaultValue != null ? String(defaultValue) : "");
  const isControlled = value !== undefined;
  const displayed = isControlled ? (value == null ? "" : String(value)) : text;

  const commit = (next: string) => {
    if (!isControlled) setText(next);
    onChange?.(parseNumeric(next));
  };

  const commitNumber = (next: number) => {
    if (!isControlled) setText(String(next));
    onChange?.(next);
  };

  const stepBy = (direction: 1 | -1) => {
    if (disabled) return;
    commitNumber(stepValue(displayed, direction, min, max, stepSize));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    commit(sanitizeText(event.target.value));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      stepBy(1);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      stepBy(-1);
    }
    onKeyDown?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const current = parseNumeric(displayed);
    if (current === null) {
      if (!isControlled) setText("");
      onChange?.(null);
    } else {
      commitNumber(clamp(snapToStep(current, min, stepSize), min, max));
    }
    onBlur?.(event);
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={displayed}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={[styles.input, styles[size], invalid ? styles.invalid : null, className]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={invalid || undefined}
        {...props}
      />
      <button
        type="button"
        className={[styles.button, styles.up].join(" ")}
        aria-label={incrementLabel}
        disabled={disabled}
        onClick={() => stepBy(1)}
      >
        <Icon name="chevron-up" size={14} />
      </button>
      <button
        type="button"
        className={[styles.button, styles.down].join(" ")}
        aria-label={decrementLabel}
        disabled={disabled}
        onClick={() => stepBy(-1)}
      >
        <Icon name="chevron-down" size={14} />
      </button>
    </div>
  );
});
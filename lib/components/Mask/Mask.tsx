import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Mask.module.css";

export type MaskSize = ComponentSize;

export interface MaskProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "value" | "defaultValue" | "onChange"
  > {
  size?: MaskSize;
  invalid?: boolean;
  mask: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function formatMasked(value: string, mask: string): string {
  let digits = value.replace(/\D/g, "");
  let out = "";
  for (const ch of mask) {
    if (ch === "#") {
      if (digits.length === 0) break;
      out += digits[0] ?? "";
      digits = digits.slice(1);
    } else if (digits.length > 0) {
      out += ch;
    } else {
      break;
    }
  }
  return out;
}

export const Mask = forwardRef<HTMLInputElement, MaskProps>(function Mask(
  {
    size = "md",
    invalid = false,
    mask,
    value,
    defaultValue = "",
    onChange,
    className,
    onKeyDown,
    ...props
  },
  ref,
) {
  const [text, setText] = useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const displayed = isControlled ? (value ?? "") : text;

  const commit = (raw: string) => {
    const next = formatMasked(raw, mask);
    if (!isControlled) setText(next);
    onChange?.(next);
    return next;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    commit(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      const caret = event.currentTarget.selectionStart ?? displayed.length;
      const before = displayed[caret - 1];
      if (before !== undefined && !/\d/.test(before)) {
        event.preventDefault();
        const digits = displayed.replace(/\D/g, "");
        commit(formatMasked(digits.slice(0, -1), mask));
      }
    }
    onKeyDown?.(event);
  };

  return (
    <input
      ref={ref}
      type="text"
      value={displayed}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className={[styles.mask, styles[size], invalid ? styles.invalid : null, className]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
});
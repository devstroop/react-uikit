import { forwardRef, useState, type InputHTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import { Icon } from "../Icon/Icon";
import styles from "./Password.module.css";

export type PasswordSize = ComponentSize;

export interface PasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: PasswordSize;
  invalid?: boolean;
  showLabel?: string;
  hideLabel?: string;
}

export const Password = forwardRef<HTMLInputElement, PasswordProps>(function Password(
  {
    size = "md",
    invalid = false,
    className,
    disabled,
    showLabel = "Show password",
    hideLabel = "Hide password",
    ...props
  },
  ref,
) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        type={visible ? "text" : "password"}
        disabled={disabled}
        className={[styles.input, styles[size], invalid ? styles.invalid : null, className]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={invalid || undefined}
        {...props}
      />
      <button
        type="button"
        className={styles.toggle}
        aria-pressed={visible}
        aria-label={visible ? hideLabel : showLabel}
        disabled={disabled}
        onClick={() => setVisible((v) => !v)}
      >
        <Icon name={visible ? "eye-off" : "eye"} size={16} />
      </button>
    </div>
  );
});
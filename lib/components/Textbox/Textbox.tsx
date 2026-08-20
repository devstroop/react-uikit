import { forwardRef, type InputHTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Textbox.module.css";

export type TextboxSize = ComponentSize;

export interface TextboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: TextboxSize;
  invalid?: boolean;
}

export const Textbox = forwardRef<HTMLInputElement, TextboxProps>(function Textbox(
  { size = "md", invalid = false, className, type = "text", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={[styles.textbox, styles[size], invalid ? styles.invalid : null, className]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
});

import { forwardRef, useState, type ButtonHTMLAttributes } from "react";
import styles from "./Togglebutton.module.css";

export type TogglebuttonSize = "sm" | "md" | "lg";

export interface TogglebuttonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onChange?: (pressed: boolean) => void;
  size?: TogglebuttonSize;
  fullWidth?: boolean;
}

export const Togglebutton = forwardRef<HTMLButtonElement, TogglebuttonProps>(
  function Togglebutton(
    {
      pressed,
      defaultPressed = false,
      onChange,
      size = "md",
      fullWidth = false,
      className,
      type = "button",
      ...props
    },
    ref,
  ) {
    const [internalPressed, setInternalPressed] = useState(defaultPressed);
    const isPressed = pressed ?? internalPressed;

    const handleClick = () => {
      const next = !isPressed;
      setInternalPressed(next);
      onChange?.(next);
    };

    return (
      <button
        ref={ref}
        type={type}
        aria-pressed={isPressed}
        className={[
          styles.toggle,
          styles[size],
          isPressed ? styles.pressed : null,
          fullWidth ? styles.fullWidth : null,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={handleClick}
        {...props}
      />
    );
  },
);
import { type HTMLAttributes } from "react";
import styles from "./Header.module.css";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Pin to the viewport top while body scrolls (Radzen header parity). */
  sticky?: boolean;
}

export function Header({ sticky = false, className, children, ...props }: HeaderProps) {
  return (
    <header
      className={[styles.header, sticky ? styles.sticky : null, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </header>
  );
}
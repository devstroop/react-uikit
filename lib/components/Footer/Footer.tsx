import { type HTMLAttributes } from 'react';
import styles from './Footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Pin to the viewport bottom while body scrolls. */
  sticky?: boolean;
}

export function Footer({
  sticky = false,
  className,
  children,
  ...props
}: FooterProps) {
  return (
    <footer
      className={[styles.footer, sticky ? styles.sticky : null, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </footer>
  );
}

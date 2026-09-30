import { type HTMLAttributes } from 'react';
import styles from './Body.module.css';

export interface BodyProps extends HTMLAttributes<HTMLElement> {
  as?: 'main' | 'div';
  children?: React.ReactNode;
  /** Inner padding. Set false for edge-to-edge content (media, maps). */
  padded?: boolean;
}

export function Body({
  as = 'main',
  padded = true,
  className,
  children,
  ...props
}: BodyProps) {
  const Tag = as;
  return (
    <Tag
      className={[styles.body, padded ? null : styles.bare, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}

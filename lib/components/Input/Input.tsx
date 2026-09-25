import { forwardRef, type InputHTMLAttributes } from 'react';
import type { ComponentSize } from '../../sizes';
import styles from './Input.module.css';

export type InputSize = ComponentSize;

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  size?: InputSize;
  invalid?: boolean;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', invalid = false, className, visible = true, ...props },
  ref
) {
  if (visible === false) return null;
  return (
    <input
      ref={ref}
      className={[
        styles.input,
        styles[size],
        invalid ? styles.invalid : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
});

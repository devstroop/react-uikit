import { forwardRef, type InputHTMLAttributes } from 'react';
import type { ComponentSize } from '../../sizes';
import styles from './Textbox.module.css';

export type TextboxSize = ComponentSize;

export interface TextboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  size?: TextboxSize;
  invalid?: boolean;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
  function Textbox(
    {
      size = 'md',
      invalid = false,
      className,
      visible = true,
      type = 'text',
      ...props
    },
    ref
  ) {
    if (visible === false) return null;
    return (
      <input
        ref={ref}
        type={type}
        className={[
          styles.textbox,
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
  }
);

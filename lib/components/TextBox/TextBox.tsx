import { forwardRef, type InputHTMLAttributes } from 'react';
import type { ComponentSize } from '../../sizes';
import styles from './TextBox.module.css';

export type TextBoxSize = ComponentSize;

export interface TextBoxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  size?: TextBoxSize;
  invalid?: boolean;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  function TextBox(
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
        // Size hook for containers (FormField reads it to size the box).
        data-size={size}
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

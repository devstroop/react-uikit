import { forwardRef, type TextareaHTMLAttributes } from 'react';
import type { ComponentSize } from '../../sizes';
import styles from './TextArea.module.css';

export type TextAreaSize = ComponentSize;

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextAreaSize;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  invalid?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { size = 'md', resize = 'none', invalid = false, className, ...props },
    ref
  ) {
    return (
      <textarea
        ref={ref}
        // Size hook for containers (FormField reads it to size the box).
        data-size={size}
        className={[
          styles.textarea,
          styles[size],
          styles[`resize-${resize}`],
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

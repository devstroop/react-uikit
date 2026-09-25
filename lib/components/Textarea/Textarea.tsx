import { forwardRef, type TextareaHTMLAttributes } from 'react';
import type { ComponentSize } from '../../sizes';
import styles from './Textarea.module.css';

export type TextareaSize = ComponentSize;

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextareaSize;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { size = 'md', resize = 'none', invalid = false, className, ...props },
    ref
  ) {
    return (
      <textarea
        ref={ref}
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

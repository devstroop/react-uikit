import { forwardRef, useEffect, useRef, type InputHTMLAttributes } from 'react';
import styles from './CheckBox.module.css';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Mixed state. `indeterminate` is a DOM property, not an HTML
   * attribute, so it is applied imperatively; browsers expose the mixed
   * state to assistive tech and render the dash via `:indeterminate`.
   */
  indeterminate?: boolean;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function CheckBox({ className, indeterminate = false, ...props }, ref) {
    const innerRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);
    return (
      <input
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        type="checkbox"
        className={[styles.checkbox, className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
);

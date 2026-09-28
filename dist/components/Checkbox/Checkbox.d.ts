import { InputHTMLAttributes } from 'react';
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Mixed state. `indeterminate` is a DOM property, not an HTML
     * attribute, so it is applied imperatively; browsers expose the mixed
     * state to assistive tech and render the dash via `:indeterminate`.
     */
    indeterminate?: boolean;
}
export declare const Checkbox: import('react').ForwardRefExoticComponent<CheckboxProps & import('react').RefAttributes<HTMLInputElement>>;

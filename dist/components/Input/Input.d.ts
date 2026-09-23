import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type InputSize = ComponentSize;
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    invalid?: boolean;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare const Input: import('react').ForwardRefExoticComponent<InputProps & import('react').RefAttributes<HTMLInputElement>>;

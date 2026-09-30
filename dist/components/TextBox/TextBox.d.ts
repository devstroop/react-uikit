import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type TextBoxSize = ComponentSize;
export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: TextBoxSize;
    invalid?: boolean;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare const TextBox: import('react').ForwardRefExoticComponent<TextBoxProps & import('react').RefAttributes<HTMLInputElement>>;

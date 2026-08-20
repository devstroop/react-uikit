import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type TextboxSize = ComponentSize;
export interface TextboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: TextboxSize;
    invalid?: boolean;
}
export declare const Textbox: import('react').ForwardRefExoticComponent<TextboxProps & import('react').RefAttributes<HTMLInputElement>>;

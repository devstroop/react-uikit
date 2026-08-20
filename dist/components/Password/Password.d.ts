import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type PasswordSize = ComponentSize;
export interface PasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    size?: PasswordSize;
    invalid?: boolean;
    showLabel?: string;
    hideLabel?: string;
}
export declare const Password: import('react').ForwardRefExoticComponent<PasswordProps & import('react').RefAttributes<HTMLInputElement>>;

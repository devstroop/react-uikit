import { ButtonHTMLAttributes } from 'react';
export type TogglebuttonSize = "sm" | "md" | "lg";
export interface TogglebuttonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    pressed?: boolean;
    defaultPressed?: boolean;
    onChange?: (pressed: boolean) => void;
    size?: TogglebuttonSize;
    fullWidth?: boolean;
}
export declare const Togglebutton: import('react').ForwardRefExoticComponent<TogglebuttonProps & import('react').RefAttributes<HTMLButtonElement>>;

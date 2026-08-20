import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type MaskSize = ComponentSize;
export interface MaskProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange"> {
    size?: MaskSize;
    invalid?: boolean;
    mask: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export declare function formatMasked(value: string, mask: string): string;
export declare const Mask: import('react').ForwardRefExoticComponent<MaskProps & import('react').RefAttributes<HTMLInputElement>>;

import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type NumericSize = ComponentSize;
export interface NumericProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange" | "min" | "max" | "step"> {
    size?: NumericSize;
    invalid?: boolean;
    value?: number | null;
    defaultValue?: number | null;
    onChange?: (value: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    incrementLabel?: string;
    decrementLabel?: string;
}
export declare const Numeric: import('react').ForwardRefExoticComponent<NumericProps & import('react').RefAttributes<HTMLInputElement>>;

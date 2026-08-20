import { InputHTMLAttributes } from 'react';
export type DatepickerSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface DatepickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "onChange"> {
    size?: DatepickerSize;
    invalid?: boolean;
    value?: string;
    defaultValue?: string;
    format?: string;
    min?: string;
    max?: string;
    showTime?: boolean;
    showButton?: boolean;
    allowClear?: boolean;
    inline?: boolean;
    disabledDates?: readonly string[];
    locale?: string;
    onChange?: (value: string) => void;
    onValueChange?: (value: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
    ariaLabel?: string;
    triggerLabel?: string;
    clearLabel?: string;
}
export declare const Datepicker: import('react').ForwardRefExoticComponent<DatepickerProps & import('react').RefAttributes<HTMLInputElement>>;

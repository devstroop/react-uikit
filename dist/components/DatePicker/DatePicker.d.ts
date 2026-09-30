import { InputHTMLAttributes } from 'react';
export type DatePickerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
    size?: DatePickerSize;
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
export declare const DatePicker: import('react').ForwardRefExoticComponent<DatePickerProps & import('react').RefAttributes<HTMLInputElement>>;

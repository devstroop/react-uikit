import { InputHTMLAttributes } from 'react';
export type TimeSpanPickerPrecision = 'day' | 'hour' | 'minute' | 'second';
export type TimeSpanPickerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface TimeSpanPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
    size?: TimeSpanPickerSize;
    invalid?: boolean;
    value?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
    step?: string;
    precision?: TimeSpanPickerPrecision;
    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    allowClear?: boolean;
    inline?: boolean;
    onChange?: (value: string) => void;
    onValueChange?: (value: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
    ariaLabel?: string;
    triggerLabel?: string;
    clearLabel?: string;
}
export declare function parseTimeSpan(value: string): number | null;
/**
 * Normalizes any supported duration string (ISO 8601 or .NET `[d.]HH:MM:SS`)
 * into canonical `HH:MM:SS` form, prefixed with `d.` when whole days are
 * present. `precision` trims the smallest displayed unit.
 */
export declare function formatTimeSpan(value: string, precision?: TimeSpanPickerPrecision): string;
export declare const TimeSpanPicker: import('react').ForwardRefExoticComponent<TimeSpanPickerProps & import('react').RefAttributes<HTMLInputElement>>;

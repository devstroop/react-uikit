import { InputHTMLAttributes } from 'react';
export type TimespanpickerPrecision = "day" | "hour" | "minute" | "second";
export type TimespanpickerSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface TimespanpickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "onChange"> {
    size?: TimespanpickerSize;
    invalid?: boolean;
    value?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
    step?: string;
    precision?: TimespanpickerPrecision;
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
export declare function formatTimeSpan(value: string, precision?: TimespanpickerPrecision): string;
export declare const Timespanpicker: import('react').ForwardRefExoticComponent<TimespanpickerProps & import('react').RefAttributes<HTMLInputElement>>;

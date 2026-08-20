import { CSSProperties } from 'react';
export interface ListboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ListboxProps {
    options?: readonly ListboxOption[];
    value?: string | string[];
    defaultValue?: string | string[];
    multiple?: boolean;
    onChange?: (value: string | string[]) => void;
    className?: string;
    style?: CSSProperties;
    "aria-label"?: string;
    "aria-labelledby"?: string;
}
export declare function Listbox({ options, value, defaultValue, multiple, onChange, className, style, ...ariaProps }: ListboxProps): import("react").JSX.Element;

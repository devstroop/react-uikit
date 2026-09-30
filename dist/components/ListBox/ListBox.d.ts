import { CSSProperties } from 'react';
export interface ListBoxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ListBoxProps {
    options?: readonly ListBoxOption[];
    value?: string | string[];
    defaultValue?: string | string[];
    multiple?: boolean;
    onChange?: (value: string | string[]) => void;
    className?: string;
    style?: CSSProperties;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}
export declare function ListBox({ options, value, defaultValue, multiple, onChange, className, style, ...ariaProps }: ListBoxProps): import("react").JSX.Element;

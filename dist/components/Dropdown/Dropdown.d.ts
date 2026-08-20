import { ComponentSize } from '../../sizes';
export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface DropdownProps {
    options?: readonly DropdownOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    size?: ComponentSize;
    invalid?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
    "aria-label"?: string;
}
export declare function Dropdown({ options, value, defaultValue, onChange, placeholder, size, invalid, disabled, className, ...ariaProps }: DropdownProps): import("react").JSX.Element;

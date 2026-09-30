import { ComponentSize } from '../../sizes';
export interface DropDownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface DropDownProps {
    options?: readonly DropDownOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    size?: ComponentSize;
    invalid?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
    'aria-label'?: string;
}
export declare function DropDown({ options, value, defaultValue, onChange, placeholder, size, invalid, disabled, className, ...ariaProps }: DropDownProps): import("react").JSX.Element;

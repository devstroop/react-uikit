export interface CheckboxlistOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface CheckboxlistProps {
    options?: readonly CheckboxlistOption[];
    value?: readonly string[];
    defaultValue?: readonly string[];
    onChange?: (values: string[]) => void;
    legend?: string;
    name?: string;
    className?: string;
}
export declare function Checkboxlist({ options, value, defaultValue, onChange, legend, name, className, }: CheckboxlistProps): import("react").JSX.Element;

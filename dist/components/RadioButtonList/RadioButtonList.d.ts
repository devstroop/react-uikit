export interface RadioButtonListOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface RadioButtonListProps {
    options?: readonly RadioButtonListOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    legend?: string;
    name: string;
    className?: string;
}
export declare function RadioButtonList({ options, value, defaultValue, onChange, legend, name, className, }: RadioButtonListProps): import("react").JSX.Element;

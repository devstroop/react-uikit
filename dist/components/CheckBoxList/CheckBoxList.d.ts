export interface CheckBoxListOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface CheckBoxListProps {
    options?: readonly CheckBoxListOption[];
    value?: readonly string[];
    defaultValue?: readonly string[];
    onChange?: (values: string[]) => void;
    legend?: string;
    name?: string;
    className?: string;
}
export declare function CheckBoxList({ options, value, defaultValue, onChange, legend, name, className, }: CheckBoxListProps): import("react").JSX.Element;

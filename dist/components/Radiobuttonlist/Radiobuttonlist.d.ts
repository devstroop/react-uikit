export interface RadiobuttonlistOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface RadiobuttonlistProps {
    options?: readonly RadiobuttonlistOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    legend?: string;
    name: string;
    className?: string;
}
export declare function Radiobuttonlist({ options, value, defaultValue, onChange, legend, name, className, }: RadiobuttonlistProps): import("react").JSX.Element;

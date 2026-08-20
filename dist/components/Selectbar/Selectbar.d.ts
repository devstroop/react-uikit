export type SelectbarSize = "sm" | "md" | "lg";
export interface SelectbarOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectbarProps {
    options?: readonly SelectbarOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    size?: SelectbarSize;
    className?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
}
export declare function Selectbar({ options, value, defaultValue, onChange, size, className, ...ariaProps }: SelectbarProps): import("react").JSX.Element;

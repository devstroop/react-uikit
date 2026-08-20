export type SliderOrientation = "horizontal" | "vertical";
export interface SliderProps {
    value?: number;
    valueMin?: number;
    valueMax?: number;
    min?: number;
    max?: number;
    step?: number;
    range?: boolean;
    orientation?: SliderOrientation;
    disabled?: boolean;
    label?: string;
    minLabel?: string;
    maxLabel?: string;
    tabIndex?: number;
    className?: string;
    onChange?: (value: number | {
        min: number;
        max: number;
    }) => void;
    onInput?: (value: number | {
        min: number;
        max: number;
    }) => void;
    onValueChange?: (value: number | {
        min: number;
        max: number;
    }) => void;
    onInputChange?: (value: number | {
        min: number;
        max: number;
    }) => void;
}
export declare const Slider: ({ value, valueMin, valueMax, min, max, step, range, orientation, disabled, label, minLabel, maxLabel, tabIndex, className, onChange, onInput, onValueChange, onInputChange, }: SliderProps) => import("react").JSX.Element;

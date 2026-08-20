export interface RatingProps {
    value?: number;
    stars?: number;
    readOnly?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    clearLabel?: string;
    rateLabel?: string;
    tabIndex?: number;
    className?: string;
    onChange?: (value: number) => void;
    onValueChange?: (value: number) => void;
}
export declare const Rating: ({ value, stars, readOnly, disabled, ariaLabel, clearLabel, rateLabel, tabIndex, className, onChange, onValueChange, }: RatingProps) => import("react").JSX.Element;

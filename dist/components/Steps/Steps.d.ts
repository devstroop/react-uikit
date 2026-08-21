export interface StepsItem {
    text: string;
    icon?: string;
    disabled?: boolean;
}
export interface StepsProps {
    items: StepsItem[];
    selectedIndex?: number;
    SelectedIndex?: number;
    defaultIndex?: number;
    linear?: boolean;
    Linear?: boolean;
    onChange?: (index: number) => void;
    Change?: (index: number) => void;
    onSelectedIndexChange?: (index: number) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Steps({ items, selectedIndex, SelectedIndex, defaultIndex, linear, Linear, onChange, Change, onSelectedIndexChange, ariaLabel, className, }: StepsProps): import("react").JSX.Element;

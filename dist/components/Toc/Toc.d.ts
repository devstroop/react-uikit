export interface TocItem {
    text: string;
    selector: string;
}
export interface TocItemEventArgs {
    text: string;
    selector: string;
}
export interface TocProps {
    items: TocItem[];
    selector?: string;
    Selector?: string;
    orientation?: "vertical" | "horizontal";
    Orientation?: "vertical" | "horizontal";
    onClick?: (args: TocItemEventArgs) => void;
    Click?: (args: TocItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Toc({ items, selector, Selector, orientation, Orientation, onClick, Click, ariaLabel, className, }: TocProps): import("react").JSX.Element;

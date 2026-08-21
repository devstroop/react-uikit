export interface SplitterPane {
    size?: string;
    min?: string;
    max?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    label?: string;
    children: React.ReactNode;
}
export interface SplitterResizeArgs {
    paneIndex: number;
    newSize: number;
    cancel: boolean;
}
export interface SplitterCollapseArgs {
    paneIndex: number;
    collapse: boolean;
    cancel: boolean;
}
export interface SplitterProps {
    orientation?: "horizontal" | "vertical";
    Orientation?: "horizontal" | "vertical";
    panes: SplitterPane[];
    onResize?: (args: SplitterResizeArgs) => void;
    Resize?: (args: SplitterResizeArgs) => void;
    onCollapse?: (args: SplitterCollapseArgs) => void;
    Collapse?: (args: SplitterCollapseArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Splitter({ orientation, Orientation, panes, onResize, Resize, onCollapse, Collapse, ariaLabel, className, }: SplitterProps): import("react").JSX.Element;

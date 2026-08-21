export interface VirtualColumn {
    property: string;
    title?: string;
    width?: string;
}
export interface VirtualGridProps {
    count: number;
    rowHeight?: number;
    height?: number;
    loadData: (args: {
        skip: number;
        top: number;
    }) => Promise<Record<string, unknown>[]>;
    columns?: VirtualColumn[];
    ariaLabel?: string;
    className?: string;
}
export declare function VirtualGrid({ count, rowHeight, height, loadData, columns, ariaLabel, className }: VirtualGridProps): import("react").JSX.Element;

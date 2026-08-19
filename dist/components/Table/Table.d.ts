import { ReactNode } from 'react';
export type GridLines = "default" | "both" | "none" | "horizontal" | "vertical";
export interface Column<T> {
    key: string;
    header: ReactNode;
    align?: "start" | "center" | "end";
    render?: (row: T) => ReactNode;
}
export interface TableProps<T> {
    columns: readonly Column<T>[];
    rows: readonly T[];
    rowKey: (row: T) => string;
    empty?: ReactNode;
    caption?: ReactNode;
    gridLines?: GridLines;
    allowAlternatingRows?: boolean;
    className?: string;
}
export declare function Table<T>({ columns, rows, rowKey, empty, caption, gridLines, allowAlternatingRows, className, }: TableProps<T>): import("react").JSX.Element;

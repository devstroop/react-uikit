import { ReactNode } from 'react';
export type GridLines = 'default' | 'both' | 'none' | 'horizontal' | 'vertical';
export interface Column<T> {
    key: string;
    header: ReactNode;
    align?: 'start' | 'center' | 'end';
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
    /** Called when a row is clicked. */
    onRowClick?: (row: T) => void;
    /** Key of the currently selected row (for highlighting). */
    selectedRowKey?: string;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function Table<T>({ columns, rows, rowKey, empty, caption, gridLines, allowAlternatingRows, className, onRowClick, selectedRowKey, visible, }: TableProps<T>): import("react").JSX.Element | null;

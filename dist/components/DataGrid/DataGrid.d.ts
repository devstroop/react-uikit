import { ReactNode } from 'react';
import { GridColumn } from './grid';
export type PagerPosition = "Top" | "Bottom" | "TopAndBottom";
export interface DataGridProps<TItem = unknown> {
    columns: readonly GridColumn<TItem>[];
    rows: readonly TItem[];
    rowKey: (row: TItem) => string | number;
    allowSorting?: boolean;
    allowMultiColumnSorting?: boolean;
    showSortIndex?: boolean;
    allowFiltering?: boolean;
    filterCaseSensitivity?: "CaseSensitive" | "CaseInsensitive";
    logicalOperator?: "And" | "Or";
    allowPaging?: boolean;
    pageSize?: number;
    pageSizeOptions?: readonly number[];
    pageNumbersCount?: number;
    pagerPosition?: PagerPosition;
    showPagingSummary?: boolean;
    showPageSizeSelector?: boolean;
    isLoading?: boolean;
    empty?: ReactNode;
    ariaLabel?: string;
    className?: string;
    onRowClick?: (row: TItem) => void;
}
export declare function DataGrid<TItem = unknown>({ columns, rows, rowKey, allowSorting, allowMultiColumnSorting, showSortIndex, allowFiltering, filterCaseSensitivity, logicalOperator, allowPaging, pageSize, pageSizeOptions, pageNumbersCount, pagerPosition, showPagingSummary, showPageSizeSelector, isLoading, empty, ariaLabel, className, onRowClick, }: DataGridProps<TItem>): import("react").JSX.Element;

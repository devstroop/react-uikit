import { ReactNode } from 'react';
import { FilterCaseSensitivity, FilterOperator, LogicalFilterOperator, SortDescriptor } from '../DataFilter/filter';
export type GridTextAlign = "left" | "center" | "right";
export type GridSortOrder = "Ascending" | "Descending";
export interface GridColumn<TItem = unknown> {
    property?: string;
    title?: string;
    header?: ReactNode;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    format?: string;
    type?: "string" | "number" | "boolean" | "date" | "enum";
    align?: GridTextAlign;
    sortable?: boolean;
    filterable?: boolean;
    frozen?: boolean;
    visible?: boolean;
    render?: (row: TItem, context: {
        index: number;
    }) => ReactNode;
}
export type GridSelectionMode = "None" | "Single" | "Multiple";
export declare function gridColumnKey<TItem = unknown>(column: GridColumn<TItem>, index: number): string;
export declare function gridFrozenOffsets<TItem = unknown>(entries: readonly {
    key: string;
    column: GridColumn<TItem>;
}[], widths: Readonly<Record<string, string>>): Readonly<Record<string, string>>;
export interface GridFilterState {
    value?: string;
    operator?: FilterOperator;
}
export interface GridState {
    sorts: readonly SortDescriptor[];
    filters: ReadonlyMap<string, GridFilterState>;
    pageNumber: number;
    pageSize: number;
}
export interface GridStateOptions {
    logicalOperator?: LogicalFilterOperator;
    caseSensitivity?: FilterCaseSensitivity;
    types?: Readonly<Record<string, "string" | "number" | "boolean" | "date" | "enum">>;
}
export declare function columnValue<TItem>(row: TItem, property?: string): unknown;
export declare function formatValue(value: unknown, format?: string): string;
export declare function cycleSort(sorts: readonly SortDescriptor[], property: string, options?: {
    multi?: boolean;
}): SortDescriptor[];
export declare function sortedItems<T>(items: readonly T[], sorts: readonly SortDescriptor[]): T[];
export interface PageResult<T> {
    items: T[];
    pageCount: number;
    pageNumber: number;
    total: number;
}
export declare function paginate<T>(items: readonly T[], pageNumber: number, pageSize: number): PageResult<T>;
export interface GridView<T> extends PageResult<T> {
    sorts: readonly SortDescriptor[];
    filters: ReadonlyMap<string, GridFilterState>;
    pageSize: number;
}
export declare function applyGridState<T>(items: readonly T[], state: GridState, options?: GridStateOptions): GridView<T>;
export declare function defaultOperatorForType(type: string): FilterOperator;

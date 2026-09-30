import { ReactNode } from 'react';
import { FilterCaseSensitivity, FilterOperator, LogicalFilterOperator, SortDescriptor } from '../DataFilter/filter';
export type GridTextAlign = 'left' | 'center' | 'right';
export type GridSortOrder = 'Ascending' | 'Descending';
export interface GridColumn<TItem = unknown> {
    property?: string;
    title?: string;
    header?: ReactNode;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    format?: string;
    type?: 'string' | 'number' | 'boolean' | 'date' | 'enum';
    align?: GridTextAlign;
    sortable?: boolean;
    filterable?: boolean;
    frozen?: boolean;
    visible?: boolean;
    render?: (row: TItem, context: {
        index: number;
    }) => ReactNode;
}
export type GridSelectionMode = 'None' | 'Single' | 'Multiple';
export interface GridGroup {
    key: string;
    display: string;
    property: string;
    title: string;
    count: number;
    level: number;
}
export interface GridGroupedItem<TItem = unknown> {
    type: 'group' | 'row';
    group?: GridGroup;
    row?: TItem;
}
export declare function groupItems<TItem>(items: readonly TItem[], groupBy: readonly string[], columns: readonly GridColumn<TItem>[], expanded: ReadonlySet<string>, getValue: (row: TItem, property: string) => unknown): GridGroupedItem<TItem>[];
/** Collects every group node key in the data (for default-expanded state). */
export declare function collectGroupKeys<TItem>(items: readonly TItem[], groupBy: readonly string[], getValue: (row: TItem, property: string) => unknown): Set<string>;
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
    types?: Readonly<Record<string, 'string' | 'number' | 'boolean' | 'date' | 'enum'>>;
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
    /** Filtered + sorted rows before pagination (aggregate/export source). */
    filtered: T[];
    sorts: readonly SortDescriptor[];
    filters: ReadonlyMap<string, GridFilterState>;
    pageSize: number;
}
export declare function applyGridState<T>(items: readonly T[], state: GridState, options?: GridStateOptions): GridView<T>;
export declare function defaultOperatorForType(type: string): FilterOperator;
export type GridAggregateType = 'count' | 'sum' | 'avg' | 'min' | 'max' | 'custom';
export interface GridAggregate<TItem = unknown> {
    property: string;
    type: GridAggregateType;
    format?: string;
    title?: string;
    compute?: (rows: readonly TItem[]) => unknown;
}
/**
 * Footer aggregate over a row set. sum/avg/min/max coerce numeric values
 * and ignore the rest; an empty numeric set yields undefined (renders '').
 */
export declare function aggregateValue<TItem>(rows: readonly TItem[], aggregate: GridAggregate<TItem>, getValue: (row: TItem, property: string) => unknown): unknown;
/** RFC 4180 CSV with CRLF rows; quotes fields containing comma/quote/newline. */
export declare function toCsv<TItem>(rows: readonly TItem[], columns: readonly GridColumn<TItem>[], getValue?: (row: TItem, property?: string) => unknown): string;
export interface GridRange {
    /** Zero-based index of the first requested row. */
    start: number;
    /** Number of rows requested (current page size). */
    count: number;
    pageNumber: number;
    pageSize: number;
    sorts: readonly SortDescriptor[];
    filters: readonly {
        property: string;
        operator: FilterOperator;
        value: string;
    }[];
    logicalOperator: LogicalFilterOperator;
}

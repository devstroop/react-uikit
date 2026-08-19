import { ReactNode } from 'react';
import { FilterOperator, FilterPropertyType, LogicalFilterOperator } from './filter';
export interface DataFilterProperty {
    name: string;
    title?: string;
    type?: FilterPropertyType;
    values?: readonly {
        value: string;
        label: string;
    }[];
    editor?: (props: {
        value: unknown;
        onChange: (value: unknown) => void;
    }) => ReactNode;
}
export interface DataFilterRow {
    property: string;
    operator: FilterOperator;
    value: unknown;
    secondOperator?: FilterOperator;
    secondValue?: unknown;
    logicalOperator?: LogicalFilterOperator;
}
export interface DataFilterProps<TItem = unknown> {
    properties: readonly DataFilterProperty[];
    logicalOperator?: LogicalFilterOperator;
    filterCaseSensitivity?: "CaseSensitive" | "CaseInsensitive";
    initialRows?: readonly DataFilterRow[];
    uniqueFilters?: boolean;
    className?: string;
    viewChanged?: (items: TItem[]) => void;
    items?: readonly TItem[];
    children?: ReactNode;
}
export declare function DataFilter<TItem = unknown>({ properties, logicalOperator, filterCaseSensitivity, initialRows, uniqueFilters, className, viewChanged, items, children, }: DataFilterProps<TItem>): import("react").JSX.Element;

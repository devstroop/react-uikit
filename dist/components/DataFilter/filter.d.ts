export type FilterOperator = "Equals" | "NotEquals" | "LessThan" | "LessThanOrEquals" | "GreaterThan" | "GreaterThanOrEquals" | "Contains" | "StartsWith" | "EndsWith" | "DoesNotContain" | "In" | "NotIn" | "IsNull" | "IsEmpty" | "IsNotNull" | "IsNotEmpty" | "Custom";
export declare const FILTER_OPERATORS: readonly FilterOperator[];
export type LogicalFilterOperator = "And" | "Or";
export type SortOrder = "Ascending" | "Descending";
export type FilterCaseSensitivity = "CaseSensitive" | "CaseInsensitive";
export declare const DEFAULT_OPERATOR_BY_TYPE: Record<FilterPropertyType, FilterOperator>;
export type FilterPropertyType = "string" | "number" | "boolean" | "date" | "enum";
export interface FilterDescriptor {
    property: string;
    operator: FilterOperator;
    value?: unknown;
    secondOperator?: FilterOperator;
    secondValue?: unknown;
    logicalOperator?: LogicalFilterOperator;
}
export interface CompositeFilterDescriptor {
    operator: "And" | "Or";
    logicalOperator?: LogicalFilterOperator;
    filters: FilterNode[];
}
export type FilterNode = FilterDescriptor | CompositeFilterDescriptor;
export interface SortDescriptor {
    property: string;
    sortOrder: SortOrder;
}
export interface ApplyFiltersOptions {
    logicalOperator?: LogicalFilterOperator;
    caseSensitivity?: FilterCaseSensitivity;
}
export declare function getByPath(object: unknown, path: string): unknown;
export declare function matchesFilters(item: unknown, filters: FilterNode, options?: ApplyFiltersOptions): boolean;
export declare function applyFilters<T>(items: readonly T[], filters: FilterNode, options?: ApplyFiltersOptions): T[];
export declare function toFilterString(filters: FilterNode): string;
export declare function toODataFilterString(filters: FilterNode, options?: ApplyFiltersOptions): string;
export declare function sortItems<T>(items: readonly T[], sortDescriptors: readonly SortDescriptor[]): T[];

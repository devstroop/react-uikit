import type { ReactNode } from "react";
import {
  applyFilters,
  getByPath,
  sortItems,
  type FilterCaseSensitivity,
  type FilterDescriptor,
  type FilterOperator,
  type LogicalFilterOperator,
  type SortDescriptor,
} from "../DataFilter/filter";

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
  render?: (row: TItem, context: { index: number }) => ReactNode;
}

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

function coerceFilterValue(
  value: string | undefined,
  type: "string" | "number" | "boolean" | "date" | "enum",
): unknown {
  if (value === undefined) return undefined;
  switch (type) {
    case "number": {
      const n = Number(value);
      return Number.isNaN(n) ? value : n;
    }
    case "date": {
      const d = new Date(value);
      return Number.isNaN(d.getTime()) ? value : d;
    }
    case "boolean":
      return value === "true" ? true : value === "false" ? false : value;
    default:
      return value;
  }
}

export function columnValue<TItem>(row: TItem, property?: string): unknown {
  if (property == null) return undefined;
  return getByPath(row, property);
}

export function formatValue(value: unknown, format?: string): string {
  if (format == null || format === "") return String(value ?? "");
  const n = /^N(\d+)$/i.exec(format);
  if (n && typeof value === "number") return value.toFixed(Number(n[1]));
  if (format === "d" || format === "D") {
    const date = value instanceof Date ? value : typeof value === "string" ? new Date(value) : null;
    if (date != null && !Number.isNaN(date.getTime())) return date.toLocaleDateString();
    return String(value ?? "");
  }
  return String(value ?? "");
}

const SORT_CYCLE: readonly (GridSortOrder | null)[] = ["Ascending", "Descending", null];

export function cycleSort(
  sorts: readonly SortDescriptor[],
  property: string,
  options: { multi?: boolean } = {},
): SortDescriptor[] {
  const current = sorts.find((s) => s.property === property);
  const next = SORT_CYCLE[(current ? SORT_CYCLE.indexOf(current.sortOrder) : -1) + 1] ?? null;
  if (next == null) return sorts.filter((s) => s.property !== property);
  if (!options.multi) return [{ property, sortOrder: next }];
  return [...sorts.filter((s) => s.property !== property), { property, sortOrder: next }];
}

export function sortedItems<T>(items: readonly T[], sorts: readonly SortDescriptor[]): T[] {
  return sortItems(items, sorts);
}

export interface PageResult<T> {
  items: T[];
  pageCount: number;
  pageNumber: number;
  total: number;
}

export function paginate<T>(
  items: readonly T[],
  pageNumber: number,
  pageSize: number,
): PageResult<T> {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const clamped = Math.min(Math.max(1, pageNumber), pageCount);
  const start = (clamped - 1) * pageSize;
  return { items: items.slice(start, start + pageSize), pageCount, pageNumber: clamped, total: items.length };
}

export interface GridView<T> extends PageResult<T> {
  sorts: readonly SortDescriptor[];
  filters: ReadonlyMap<string, GridFilterState>;
  pageSize: number;
}

export function applyGridState<T>(
  items: readonly T[],
  state: GridState,
  options: GridStateOptions = {},
): GridView<T> {
  const descriptors: FilterDescriptor[] = [...state.filters.entries()]
    .filter(([, f]) => f.value !== "" && f.value !== undefined)
    .map(([property, f]) => ({
      property,
      operator: f.operator ?? "Contains",
      value: coerceFilterValue(f.value, options.types?.[property] ?? "string"),
    }) as FilterDescriptor);
  const filtered =
    descriptors.length > 0
      ? applyFilters(items, { operator: options.logicalOperator ?? "And", filters: descriptors }, {
          logicalOperator: options.logicalOperator ?? "And",
          caseSensitivity: options.caseSensitivity ?? "CaseInsensitive",
        })
      : items;
  const sorted = sortedItems(filtered, state.sorts);
  const page = paginate(sorted, state.pageNumber, state.pageSize);
  return { ...page, sorts: state.sorts, filters: state.filters, pageSize: state.pageSize };
}

export function defaultOperatorForType(type: string): FilterOperator {
  if (type === "number" || type === "date") return "Equals";
  return "Contains";
}
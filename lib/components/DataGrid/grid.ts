import type { ReactNode } from 'react';
import {
  applyFilters,
  getByPath,
  sortItems,
  type FilterCaseSensitivity,
  type FilterDescriptor,
  type FilterOperator,
  type LogicalFilterOperator,
  type SortDescriptor,
} from '../DataFilter/filter';

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
  render?: (row: TItem, context: { index: number }) => ReactNode;
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

/** Joins per-level values into a unique expansion key per group node. */
const GROUP_KEY_SEP = String.fromCharCode(31);

export function groupItems<TItem>(
  items: readonly TItem[],
  groupBy: readonly string[],
  columns: readonly GridColumn<TItem>[],
  expanded: ReadonlySet<string>,
  getValue: (row: TItem, property: string) => unknown
): GridGroupedItem<TItem>[] {
  if (groupBy.length === 0) return items.map((row) => ({ type: 'row', row }));

  const findColumn = (property: string) =>
    columns.find((c) => c.property === property);

  const build = (
    rows: readonly TItem[],
    level: number,
    path: readonly string[]
  ): GridGroupedItem<TItem>[] => {
    const property = groupBy[level];
    if (property === undefined)
      return rows.map((row) => ({ type: 'row', row }));
    const column = findColumn(property);
    const map = new Map<string, TItem[]>();
    const order: string[] = [];
    rows.forEach((row) => {
      const part = String(getValue(row, property) ?? '');
      const bucket = map.get(part);
      if (bucket) bucket.push(row);
      else {
        map.set(part, [row]);
        order.push(part);
      }
    });
    const flattened: GridGroupedItem<TItem>[] = [];
    order.forEach((part) => {
      const bucket = map.get(part) as TItem[];
      const key = [...path, part].join(GROUP_KEY_SEP);
      const first = bucket[0];
      const value = first !== undefined ? getValue(first, property) : undefined;
      flattened.push({
        type: 'group',
        group: {
          key,
          display: formatValue(value, column?.format),
          property,
          title: column?.title ?? property,
          count: bucket.length,
          level,
        },
      });
      if (expanded.has(key))
        flattened.push(...build(bucket, level + 1, [...path, part]));
    });
    return flattened;
  };

  return build(items, 0, []);
}

/** Collects every group node key in the data (for default-expanded state). */
export function collectGroupKeys<TItem>(
  items: readonly TItem[],
  groupBy: readonly string[],
  getValue: (row: TItem, property: string) => unknown
): Set<string> {
  const keys = new Set<string>();
  const walk = (
    rows: readonly TItem[],
    level: number,
    path: readonly string[]
  ): void => {
    const property = groupBy[level];
    if (property === undefined || rows.length === 0) return;
    const map = new Map<string, TItem[]>();
    const order: string[] = [];
    rows.forEach((row) => {
      const part = String(getValue(row, property) ?? '');
      const bucket = map.get(part);
      if (bucket) bucket.push(row);
      else {
        map.set(part, [row]);
        order.push(part);
      }
    });
    order.forEach((part) => {
      const key = [...path, part].join(GROUP_KEY_SEP);
      keys.add(key);
      walk(map.get(part) as TItem[], level + 1, [...path, part]);
    });
  };
  walk(items, 0, []);
  return keys;
}

export function gridColumnKey<TItem = unknown>(
  column: GridColumn<TItem>,
  index: number
): string {
  return column.property ?? `col-${index}`;
}

export function gridFrozenOffsets<TItem = unknown>(
  entries: readonly { key: string; column: GridColumn<TItem> }[],
  widths: Readonly<Record<string, string>>
): Readonly<Record<string, string>> {
  const offsets: Record<string, string> = {};
  let running = 0;
  entries.forEach(({ key, column }) => {
    if (!column.frozen) return;
    offsets[key] = running === 0 ? '0px' : `${running}px`;
    const width = widths[key] ?? column.width ?? '8rem';
    running += parseFloat(width);
  });
  return offsets;
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
  types?: Readonly<
    Record<string, 'string' | 'number' | 'boolean' | 'date' | 'enum'>
  >;
}

function coerceFilterValue(
  value: string | undefined,
  type: 'string' | 'number' | 'boolean' | 'date' | 'enum'
): unknown {
  if (value === undefined) return undefined;
  switch (type) {
    case 'number': {
      const n = Number(value);
      return Number.isNaN(n) ? value : n;
    }
    case 'date': {
      const d = new Date(value);
      return Number.isNaN(d.getTime()) ? value : d;
    }
    case 'boolean':
      return value === 'true' ? true : value === 'false' ? false : value;
    default:
      return value;
  }
}

export function columnValue<TItem>(row: TItem, property?: string): unknown {
  if (property == null) return undefined;
  return getByPath(row, property);
}

export function formatValue(value: unknown, format?: string): string {
  if (format == null || format === '') return String(value ?? '');
  const n = /^N(\d+)$/i.exec(format);
  if (n && typeof value === 'number') return value.toFixed(Number(n[1]));
  if (format === 'd' || format === 'D') {
    const date =
      value instanceof Date
        ? value
        : typeof value === 'string'
          ? new Date(value)
          : null;
    if (date != null && !Number.isNaN(date.getTime()))
      return date.toLocaleDateString();
    return String(value ?? '');
  }
  return String(value ?? '');
}

const SORT_CYCLE: readonly (GridSortOrder | null)[] = [
  'Ascending',
  'Descending',
  null,
];

export function cycleSort(
  sorts: readonly SortDescriptor[],
  property: string,
  options: { multi?: boolean } = {}
): SortDescriptor[] {
  const current = sorts.find((s) => s.property === property);
  const next =
    SORT_CYCLE[(current ? SORT_CYCLE.indexOf(current.sortOrder) : -1) + 1] ??
    null;
  if (next == null) return sorts.filter((s) => s.property !== property);
  if (!options.multi) return [{ property, sortOrder: next }];
  return [
    ...sorts.filter((s) => s.property !== property),
    { property, sortOrder: next },
  ];
}

export function sortedItems<T>(
  items: readonly T[],
  sorts: readonly SortDescriptor[]
): T[] {
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
  pageSize: number
): PageResult<T> {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const clamped = Math.min(Math.max(1, pageNumber), pageCount);
  const start = (clamped - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    pageNumber: clamped,
    total: items.length,
  };
}

export interface GridView<T> extends PageResult<T> {
  /** Filtered + sorted rows before pagination (aggregate/export source). */
  filtered: T[];
  sorts: readonly SortDescriptor[];
  filters: ReadonlyMap<string, GridFilterState>;
  pageSize: number;
}

export function applyGridState<T>(
  items: readonly T[],
  state: GridState,
  options: GridStateOptions = {}
): GridView<T> {
  const descriptors: FilterDescriptor[] = [...state.filters.entries()]
    .filter(([, f]) => f.value !== '' && f.value !== undefined)
    .map(
      ([property, f]) =>
        ({
          property,
          operator: f.operator ?? 'Contains',
          value: coerceFilterValue(
            f.value,
            options.types?.[property] ?? 'string'
          ),
        }) as FilterDescriptor
    );
  const filtered =
    descriptors.length > 0
      ? applyFilters(
          items,
          { operator: options.logicalOperator ?? 'And', filters: descriptors },
          {
            logicalOperator: options.logicalOperator ?? 'And',
            caseSensitivity: options.caseSensitivity ?? 'CaseInsensitive',
          }
        )
      : items;
  const sorted = sortedItems(filtered, state.sorts);
  const page = paginate(sorted, state.pageNumber, state.pageSize);
  return {
    ...page,
    filtered: sorted,
    sorts: state.sorts,
    filters: state.filters,
    pageSize: state.pageSize,
  };
}

export function defaultOperatorForType(type: string): FilterOperator {
  if (type === 'number' || type === 'date') return 'Equals';
  return 'Contains';
}

export type GridAggregateType =
  'count' | 'sum' | 'avg' | 'min' | 'max' | 'custom';

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
export function aggregateValue<TItem>(
  rows: readonly TItem[],
  aggregate: GridAggregate<TItem>,
  getValue: (row: TItem, property: string) => unknown
): unknown {
  if (aggregate.type === 'custom') return aggregate.compute?.(rows);
  if (aggregate.type === 'count') return rows.length;
  const numbers: number[] = [];
  rows.forEach((row) => {
    const value = getValue(row, aggregate.property);
    if (value == null || value === '') return;
    const n = Number(value);
    if (Number.isFinite(n)) numbers.push(n);
  });
  switch (aggregate.type) {
    case 'sum':
      return numbers.length > 0
        ? numbers.reduce((total, n) => total + n, 0)
        : undefined;
    case 'avg':
      return numbers.length > 0
        ? numbers.reduce((total, n) => total + n, 0) / numbers.length
        : undefined;
    case 'min':
      return numbers.length > 0 ? Math.min(...numbers) : undefined;
    case 'max':
      return numbers.length > 0 ? Math.max(...numbers) : undefined;
    default:
      return undefined;
  }
}

/** RFC 4180 CSV with CRLF rows; quotes fields containing comma/quote/newline. */
export function toCsv<TItem>(
  rows: readonly TItem[],
  columns: readonly GridColumn<TItem>[],
  getValue: (row: TItem, property?: string) => unknown = columnValue
): string {
  const escape = (value: string): string =>
    /["\r\n,]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
  const lines: string[] = [
    columns.map((c) => escape(c.title ?? c.property ?? '')).join(','),
  ];
  rows.forEach((row) => {
    lines.push(
      columns
        .map((c) => escape(formatValue(getValue(row, c.property), c.format)))
        .join(',')
    );
  });
  return `${lines.join('\r\n')}\r\n`;
}

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

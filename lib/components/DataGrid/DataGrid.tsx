import { useMemo, useState, type ReactNode } from "react";
import { FILTER_OPERATORS } from "../DataFilter/filter";
import type { FilterOperator, SortDescriptor } from "../DataFilter/filter";
import { Pager } from "./Pager";
import { applyGridState, columnValue, cycleSort, defaultOperatorForType, formatValue } from "./grid";
import type { GridColumn, GridFilterState } from "./grid";
import styles from "./DataGrid.module.css";

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

const ARIA_SORT: Record<string, "ascending" | "descending" | "none"> = {
  Ascending: "ascending",
  Descending: "descending",
};

function isFilterable<TItem>(column: GridColumn<TItem>, allowFiltering: boolean): boolean {
  return column.filterable ?? allowFiltering;
}

function isSortable<TItem>(column: GridColumn<TItem>, allowSorting: boolean): boolean {
  return column.sortable ?? allowSorting;
}

export function DataGrid<TItem = unknown>({
  columns,
  rows,
  rowKey,
  allowSorting = false,
  allowMultiColumnSorting = false,
  showSortIndex = false,
  allowFiltering = false,
  filterCaseSensitivity = "CaseInsensitive",
  logicalOperator = "And",
  allowPaging = false,
  pageSize = 10,
  pageSizeOptions,
  pageNumbersCount = 5,
  pagerPosition = "Bottom",
  showPagingSummary = true,
  showPageSizeSelector = true,
  isLoading = false,
  empty = "No records found",
  ariaLabel,
  className,
  onRowClick,
}: DataGridProps<TItem>) {
  const [sorts, setSorts] = useState<SortDescriptor[]>([]);
  const [filters, setFilters] = useState<Map<string, GridFilterState>>(new Map());
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const view = useMemo(
    () =>
      applyGridState(rows, { sorts, filters, pageNumber, pageSize: currentPageSize }, {
        logicalOperator,
        caseSensitivity: filterCaseSensitivity,
        types: Object.fromEntries(
          columns
            .filter((c) => c.type != null && c.property != null)
            .map((c) => [c.property as string, c.type as "string" | "number" | "boolean" | "date" | "enum"]),
        ),
      }),
    [rows, sorts, filters, pageNumber, currentPageSize, logicalOperator, filterCaseSensitivity, columns],
  );

  const handleSort = (property: string) => {
    if (property === "") return;
    setSorts(cycleSort(sorts, property, { multi: allowMultiColumnSorting }));
  };

  const handleFilter = (property: string, next: GridFilterState) => {
    setFilters((prev) => {
      const copy = new Map(prev);
      copy.set(property, next);
      return copy;
    });
    setPageNumber(1);
  };

  const handlePageSize = (size: number) => {
    setCurrentPageSize(size);
    setPageNumber(1);
  };

  const topPager = allowPaging && (pagerPosition === "Top" || pagerPosition === "TopAndBottom");
  const bottomPager = allowPaging && (pagerPosition === "Bottom" || pagerPosition === "TopAndBottom");
  const showFilterRow = allowFiltering && columns.some((c) => isFilterable(c, allowFiltering));

  const renderCell = (column: GridColumn<TItem>, row: TItem, index: number): ReactNode => {
    if (column.render) return column.render(row, { index });
    return formatValue(columnValue(row, column.property), column.format);
  };

  const cellClass = (column: GridColumn<TItem>): string => {
    const parts = [styles.cell];
    if (column.align === "center") parts.push(styles.center);
    if (column.align === "right") parts.push(styles.right);
    if (column.frozen) parts.push(styles.frozen);
    return parts.join(" ");
  };

  return (
    <div className={[styles.grid, className].filter(Boolean).join(" ")}>
      {topPager && (
        <Pager
          pageNumber={view.pageNumber}
          pageSize={view.pageSize}
          count={view.total}
          pageSizeOptions={pageSizeOptions}
          pageNumbersCount={pageNumbersCount}
          showSummary={showPagingSummary}
          showPageSizeSelector={showPageSizeSelector}
          onPageChange={setPageNumber}
          onPageSizeChange={handlePageSize}
        />
      )}
      <div
        className={styles.data}
        role="grid"
        aria-rowcount={view.total + 1}
        aria-busy={isLoading || undefined}
        aria-label={ariaLabel}
      >
        <table className={styles.table}>
          <colgroup>
            {columns.map((c, i) => (
              <col
                key={c.property ?? `col-${i}`}
                style={{ width: c.width, minWidth: c.minWidth, maxWidth: c.maxWidth }}
              />
            ))}
          </colgroup>
          <thead>
            <tr>
              {columns.map((c, i) => {
                const sortable = isSortable(c, allowSorting);
                const sort = sorts.find((s) => s.property === c.property);
                const sortIndex = sort ? sorts.indexOf(sort) + 1 : 0;
                const align = c.align ?? "left";
                return (
                  <th
                    key={c.property ?? `col-${i}`}
                    aria-sort={sortable && sort ? ARIA_SORT[sort.sortOrder] : "none"}
                    className={[
                      styles.header,
                      align === "center" ? styles.center : "",
                      align === "right" ? styles.right : "",
                      c.frozen ? styles.frozen : "",
                    ].filter(Boolean).join(" ")}
                    scope="col"
                  >
                    {sortable ? (
                      <button
                        type="button"
                        className={styles.sortButton}
                        onClick={() => c.property != null && handleSort(c.property)}
                        aria-label={
                          sort
                            ? sort.sortOrder === "Ascending"
                              ? `Sort ${c.title ?? c.property} descending`
                              : `Sort ${c.title ?? c.property} ascending`
                            : `Sort ${c.title ?? c.property} ascending`
                        }
                      >
                        {c.title ?? c.property}
                        {sort && (
                          <span className={styles.sortIndicator} aria-hidden="true">
                            {sort.sortOrder === "Ascending" ? "▲" : "▼"}
                          </span>
                        )}
                        {sortIndex > 1 && showSortIndex && (
                          <span className={styles.sortIndex}>{sortIndex}</span>
                        )}
                      </button>
                    ) : (
                      c.title ?? c.property
                    )}
                  </th>
                );
              })}
            </tr>
            {showFilterRow && (
              <tr>
                {columns.map((c, i) => {
                  if (!isFilterable(c, allowFiltering)) return <td key={i} className={styles.filterCell} />;
                  const state = filters.get(c.property ?? "");
                  return (
                    <td key={c.property} className={styles.filterCell}>
                      <label className={styles.visuallyHidden} htmlFor={`df-${c.property}`}>
                        Filter {c.title ?? c.property}
                      </label>
                      <select
                        id={`df-${c.property}`}
                        className={styles.filterSelect}
                        value={state?.operator ?? defaultOperatorForType(c.type ?? "string")}
                        onChange={(e) =>
                          handleFilter(c.property ?? "", { ...state, operator: e.target.value as FilterOperator })
                        }
                        aria-label={`${c.title ?? c.property} operator`}
                      >
                        {FILTER_OPERATORS.filter((op) => op !== "Custom").map((op) => (
                          <option key={op} value={op}>
                            {op}
                          </option>
                        ))}
                      </select>
                      <input
                        className={styles.filterInput}
                        value={state?.value ?? ""}
                        onChange={(e) =>
                          handleFilter(c.property ?? "", { ...state, value: e.target.value })
                        }
                        placeholder={`Filter ${c.title ?? c.property}`}
                        aria-label={`${c.title ?? c.property} value`}
                      />
                    </td>
                  );
                })}
              </tr>
            )}
          </thead>
          <tbody>
            {view.items.map((row, i) => (
              <tr
                key={rowKey(row)}
                className={onRowClick ? styles.clickable : undefined}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((c, j) => (
                  <td key={c.property ?? `col-${j}`} className={cellClass(c)}>
                    {renderCell(c, row, i)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {view.items.length === 0 && !isLoading && <div className={styles.empty}>{empty}</div>}
        {isLoading && (
          <div className={styles.loading} role="status">
            Loading…
          </div>
        )}
      </div>
      {bottomPager && (
        <Pager
          pageNumber={view.pageNumber}
          pageSize={view.pageSize}
          count={view.total}
          pageSizeOptions={pageSizeOptions}
          pageNumbersCount={pageNumbersCount}
          showSummary={showPagingSummary}
          showPageSizeSelector={showPageSizeSelector}
          onPageChange={setPageNumber}
          onPageSizeChange={handlePageSize}
        />
      )}
    </div>
  );
}
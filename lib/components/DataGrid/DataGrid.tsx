import { useMemo, useRef, useState, type ReactNode } from "react";
import { FILTER_OPERATORS } from "../DataFilter/filter";
import type { FilterOperator, SortDescriptor } from "../DataFilter/filter";
import { Pager } from "./Pager";
import { applyGridState, columnValue, cycleSort, defaultOperatorForType, formatValue, gridColumnKey, gridFrozenOffsets, groupItems } from "./grid";
import type { GridColumn, GridFilterState, GridSelectionMode } from "./grid";
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
  selectionMode?: GridSelectionMode;
  selectedKeys?: readonly (string | number)[];
  onSelectionChange?: (keys: readonly (string | number)[]) => void;
  showColumnPicker?: boolean;
  columnPickerText?: string;
  allowColumnResize?: boolean;
  allowColumnReorder?: boolean;
  allowGrouping?: boolean;
  groupPanelText?: string;
  groupExpanded?: boolean;
  editMode?: "None" | "Single" | "EditRow";
  allowRowCreate?: boolean;
  onRowUpdate?: (original: TItem, updated: TItem) => void;
  onRowCreate?: (row: TItem) => void;
  onRowDelete?: (row: TItem) => void;
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

function isInteractiveTarget(target: EventTarget | null): boolean {
  return target instanceof HTMLElement && Boolean(target.closest("button, select, input, a, label, [data-dt-grid-resize]"));
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
  selectionMode = "None",
  selectedKeys,
  onSelectionChange,
  showColumnPicker = false,
  columnPickerText = "Columns",
  allowColumnResize = false,
  allowColumnReorder = false,
  allowGrouping = false,
  groupPanelText = "Drag a column header here to group",
  groupExpanded = true,
  editMode = "None",
  allowRowCreate = false,
  onRowUpdate,
  onRowCreate,
  onRowDelete,
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
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map((c, i) => gridColumnKey(c, i)),
  );
  const [visibleColumns, setVisibleColumns] = useState<Set<string>>(
    () => new Set(columns.map((c, i) => (c.visible !== false ? gridColumnKey(c, i) : "")).filter(Boolean)),
  );
  const [columnWidths, setColumnWidths] = useState<Record<string, string>>({});
  const [pickerOpen, setPickerOpen] = useState(false);
  const [groupBy, setGroupBy] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Set<string> | null>(null);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, unknown>>({});
  const resizeRef = useRef<{ key: string; startX: number; startWidth: number } | null>(null);
  const dragRef = useRef<string | null>(null);

  const columnByKey = useMemo(() => {
    const map = new Map<string, GridColumn<TItem>>();
    columns.forEach((c, i) => map.set(gridColumnKey(c, i), c));
    return map;
  }, [columns]);
  const effectiveColumns = useMemo(
    () =>
      columnOrder
        .filter((key) => visibleColumns.has(key))
        .map((key) => ({ key, column: columnByKey.get(key) }))
        .filter((entry): entry is { key: string; column: GridColumn<TItem> } => entry.column != null),
    [columnOrder, visibleColumns, columnByKey],
  );
  const frozenOffsets = useMemo(
    () => gridFrozenOffsets(effectiveColumns, columnWidths),
    [effectiveColumns, columnWidths],
  );
  const showCommandColumn = editMode !== "None" || onRowDelete != null || allowRowCreate;

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

  const groupedColumn = useMemo(
    () => (groupBy ? columns.find((c) => c.property === groupBy) : undefined),
    [groupBy, columns],
  );
  const expanded = useMemo(
    () =>
      expandedGroups ??
      new Set(groupExpanded ? view.items.map((row) => String(columnValue(row, groupBy ?? "") ?? "")) : []),
    [expandedGroups, groupExpanded, view.items, groupBy],
  );
  const groupedItems = useMemo(
    () =>
      groupItems(view.items, groupBy ?? undefined, groupedColumn, expanded, columnValue, (v) =>
        formatValue(v, groupedColumn?.format),
      ),
    [view.items, groupBy, groupedColumn, expanded],
  );
  const renderColumns = useMemo(
    () => (groupBy ? effectiveColumns.filter((e) => e.column.property !== groupBy) : effectiveColumns),
    [effectiveColumns, groupBy],
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

  const handleSelection = (row: TItem) => {
    if (selectionMode === "None") return;
    const key = rowKey(row);
    const current = selectedKeys ?? [];
    let next: readonly (string | number)[];
    if (selectionMode === "Single") {
      next = current.length === 1 && current[0] === key ? [] : [key];
    } else {
      next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key];
    }
    onSelectionChange?.(next);
  };

  const handleRowClick = (row: TItem) => {
    onRowClick?.(row);
  };

  const handleResizeStart = (key: string, startX: number, startWidth: number) => {
    resizeRef.current = { key, startX, startWidth };
  };

  const handleResizeMove = (clientX: number) => {
    const resize = resizeRef.current;
    if (!resize) return;
    const delta = clientX - resize.startX;
    const width = Math.max(48, resize.startWidth + delta);
    setColumnWidths((prev) => ({ ...prev, [resize.key]: `${width}px` }));
  };

  const handleResizeEnd = () => {
    resizeRef.current = null;
  };

  const handleReorderStart = (key: string) => {
    dragRef.current = key;
  };

  const handleReorderDrop = (targetKey: string) => {
    const sourceKey = dragRef.current;
    dragRef.current = null;
    if (!sourceKey || sourceKey === targetKey) return;
    setColumnOrder((prev) => {
      const next = [...prev];
      const sourceIndex = next.indexOf(sourceKey);
      const targetIndex = next.indexOf(targetKey);
      if (sourceIndex < 0 || targetIndex < 0) return prev;
      next.splice(sourceIndex, 1);
      next.splice(targetIndex, 0, sourceKey);
      return next;
    });
  };

  const handlePickerToggle = (key: string) => {
    setVisibleColumns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleGroupDrop = () => {
    const sourceKey = dragRef.current;
    dragRef.current = null;
    if (!sourceKey || !allowGrouping) return;
    const entry = columnByKey.get(sourceKey);
    const property = entry?.property;
    if (!property) return;
    setGroupBy(property);
    setExpandedGroups(null);
  };

  const handleGroupRemove = () => {
    setGroupBy(null);
    setExpandedGroups(null);
  };

  const handleGroupToggle = (key: string) => {
    setExpandedGroups((prev) => {
      const current = prev ?? new Set(groupExpanded ? view.items.map((row) => String(columnValue(row, groupBy ?? "") ?? "")) : []);
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleEditStart = (row: TItem) => {
    const seed: Record<string, unknown> = {};
    columns.forEach((c) => {
      if (c.property) seed[c.property] = columnValue(row, c.property);
    });
    setEditValues(seed);
    setEditKey(String(rowKey(row)));
  };

  const handleCreateStart = () => {
    const seed: Record<string, unknown> = {};
    columns.forEach((c) => {
      if (c.property && c.type === "boolean") seed[c.property] = false;
    });
    setEditValues(seed);
    setEditKey("__new__");
  };

  const handleEditCancel = () => {
    setEditKey(null);
    setEditValues({});
  };

  const handleEditSave = (original?: TItem) => {
    if (editKey === "__new__") {
      const row = Object.fromEntries(
        columns.filter((c) => c.property).map((c) => [c.property, editValues[c.property as string]]),
      ) as TItem;
      onRowCreate?.(row);
    } else if (original != null) {
      const updated = { ...original, ...editValues } as TItem;
      onRowUpdate?.(original, updated);
    }
    handleEditCancel();
  };

  const topPager = allowPaging && (pagerPosition === "Top" || pagerPosition === "TopAndBottom");
  const bottomPager = allowPaging && (pagerPosition === "Bottom" || pagerPosition === "TopAndBottom");
  const showFilterRow = allowFiltering && columns.some((c) => isFilterable(c, allowFiltering));

  const renderCell = (column: GridColumn<TItem>, row: TItem, index?: number): ReactNode => {
    if (column.render) return column.render(row, { index: index ?? 0 });
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
          ariaLabel={bottomPager ? "Pagination (top)" : "Pagination"}
          onPageChange={setPageNumber}
          onPageSizeChange={handlePageSize}
        />
      )}
      {(allowGrouping || allowRowCreate || showColumnPicker) && (
        <div className={styles.toolbar}>
          {allowGrouping && (
            <div
              className={[styles.groupPanel, groupBy ? styles.groupPanelActive : ""].filter(Boolean).join(" ")}
              data-dt-grid-group-panel
              onDragOver={allowGrouping ? (e) => e.preventDefault() : undefined}
              onDrop={allowGrouping ? handleGroupDrop : undefined}
            >
              {groupBy ? (
                <span className={styles.groupChip}>
                  {groupedColumn?.title ?? groupBy}:{" "}
                  <button type="button" className={styles.groupRemove} onClick={handleGroupRemove} aria-label={`Remove group by ${groupedColumn?.title ?? groupBy}`}>
                    ×
                  </button>
                </span>
              ) : (
                <span className={styles.groupPanelText}>{groupPanelText}</span>
              )}
            </div>
          )}
          {allowRowCreate && (
            <button type="button" className={styles.pickerButton} onClick={handleCreateStart}>
              Add row
            </button>
          )}
          {showColumnPicker && (
            <div className={styles.picker}>
              <button
                type="button"
                className={styles.pickerButton}
                aria-haspopup="menu"
                aria-expanded={pickerOpen}
                onClick={() => setPickerOpen((open) => !open)}
              >
                {columnPickerText}
              </button>
              {pickerOpen && (
                <div className={styles.pickerPanel} role="menu" aria-label={columnPickerText}>
                  {columns.map((c, i) => {
                    const key = gridColumnKey(c, i);
                    return (
                      <label key={key} className={styles.pickerItem}>
                        <input
                          type="checkbox"
                          checked={visibleColumns.has(key)}
                          onChange={() => handlePickerToggle(key)}
                        />
                        {c.title ?? c.property}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <div className={styles.data}>
        <table
          className={styles.table}
          role="grid"
          aria-rowcount={view.total + 1}
          aria-label={ariaLabel}
          aria-busy={isLoading || undefined}
        >
          <colgroup>
            {renderColumns.map(({ key, column }) => (
              <col
                key={key}
                style={{
                  width: columnWidths[key] ?? column.width,
                  minWidth: column.minWidth,
                  maxWidth: column.maxWidth,
                }}
              />
            ))}
            {showCommandColumn && <col style={{ width: "8rem" }} />}
          </colgroup>
          <thead>
            <tr>
              {renderColumns.map(({ key, column: c }) => {
                const sortable = isSortable(c, allowSorting);
                const sort = sorts.find((s) => s.property === c.property);
                const sortIndex = sort ? sorts.indexOf(sort) + 1 : 0;
                const align = c.align ?? "left";
                return (
                  <th
                    key={key}
                    aria-sort={sortable && sort ? ARIA_SORT[sort.sortOrder] : "none"}
                    className={[
                      styles.header,
                      align === "center" ? styles.center : "",
                      align === "right" ? styles.right : "",
                      c.frozen ? styles.frozen : "",
                    ].filter(Boolean).join(" ")}
                    style={c.frozen ? { left: frozenOffsets[key] } : undefined}
                    scope="col"
                    draggable={allowColumnReorder || allowGrouping || undefined}
                    onDragStart={
                      allowColumnReorder || allowGrouping
                        ? (e) => {
                            if (e.dataTransfer) e.dataTransfer.effectAllowed = "move";
                            handleReorderStart(key);
                          }
                        : undefined
                    }
                    onDragOver={allowColumnReorder ? (e) => e.preventDefault() : undefined}
                    onDrop={allowColumnReorder ? () => handleReorderDrop(key) : undefined}
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
                    {allowColumnResize && (
                      <span
                        className={styles.resizeHandle}
                        data-dt-grid-resize
                        role="separator"
                        aria-orientation="vertical"
                        aria-label={`Resize ${c.title ?? c.property}`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const base = columnWidths[key] ?? c.width;
                          const width = base ? parseFloat(base) : 96;
                          handleResizeStart(key, e.clientX, Number.isFinite(width) ? width : 96);
                        }}
                        onMouseMove={(e) => {
                          if (resizeRef.current?.key === key) handleResizeMove(e.clientX);
                        }}
                        onMouseUp={handleResizeEnd}
                        onMouseLeave={() => {
                          if (resizeRef.current?.key === key) handleResizeEnd();
                        }}
                      />
                    )}
                  </th>
                );
              })}
              {showCommandColumn && (
                <th className={styles.header} scope="col">
                  Actions
                </th>
              )}
            </tr>
            {showFilterRow && (
              <tr>
                {renderColumns.map(({ key, column: c }) => {
                  if (!isFilterable(c, allowFiltering)) return <td key={key} className={styles.filterCell} />;
                  const state = filters.get(c.property ?? "");
                  return (
                    <td key={key} className={styles.filterCell}>
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
            {editKey === "__new__" && (
              <tr className={styles.editRow}>
                {renderColumns.map(({ key, column: c }) => (
                  <td key={key} className={styles.editCell}>
                    {c.property && (
                      <input
                        className={styles.editInput}
                        type={c.type === "number" ? "number" : c.type === "boolean" ? "checkbox" : "text"}
                        checked={c.type === "boolean" ? Boolean(editValues[c.property]) : undefined}
                        value={c.type === "boolean" ? undefined : String(editValues[c.property] ?? "")}
                        onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            [c.property as string]: c.type === "boolean" ? e.target.checked : e.target.value,
                          }))
                        }
                        aria-label={`${c.title ?? c.property} (new)`}
                      />
                    )}
                  </td>
                ))}
                {showCommandColumn && (
                  <td className={styles.editCell}>
                    <button type="button" className={styles.commandButton} onClick={() => handleEditSave()}>
                      Save
                    </button>
                    <button type="button" className={styles.commandButton} onClick={handleEditCancel}>
                      Cancel
                    </button>
                  </td>
                )}
              </tr>
            )}
            {groupedItems.map((item) => {
              if (item.type === "group" && item.group) {
                const isExpanded = expanded.has(item.group.key);
                return (
                  <tr key={`group-${item.group.key}`} className={styles.groupRow}>
                    <td colSpan={renderColumns.length + (showCommandColumn ? 1 : 0)} className={styles.groupCell}>
                      <button
                        type="button"
                        className={styles.groupToggle}
                        aria-expanded={isExpanded}
                        onClick={() => handleGroupToggle(item.group!.key)}
                      >
                        <span aria-hidden="true">{isExpanded ? "▼" : "▶"}</span>
                        {item.group.title}: {item.group.display} ({item.group.count})
                      </button>
                    </td>
                  </tr>
                );
              }
              const row = item.row as TItem;
              const key = rowKey(row);
              const selected = (selectedKeys ?? []).includes(key);
              const editing = editKey != null && editKey === String(key);
              return (
                <tr
                  key={key}
                  className={[
                    onRowClick || selectionMode !== "None" ? styles.clickable : "",
                    selected ? styles.selected : "",
                    editing ? styles.editRow : "",
                  ].filter(Boolean).join(" ")}
                  aria-selected={selectionMode !== "None" ? selected : undefined}
                  onClick={
                    onRowClick || selectionMode !== "None"
                      ? (e) => {
                          if (isInteractiveTarget(e.target)) return;
                          handleRowClick(row);
                          handleSelection(row);
                        }
                      : undefined
                  }
                >
                  {renderColumns.map(({ key: colKey, column: c }) => (
                    <td
                      key={colKey}
                      className={cellClass(c)}
                      style={c.frozen ? { left: frozenOffsets[colKey] } : undefined}
                    >
                      {editing && c.property ? (
                        <input
                          className={styles.editInput}
                          type={c.type === "number" ? "number" : c.type === "boolean" ? "checkbox" : "text"}
                          checked={c.type === "boolean" ? Boolean(editValues[c.property]) : undefined}
                          value={c.type === "boolean" ? undefined : String(editValues[c.property] ?? "")}
                          onChange={(e) =>
                            setEditValues((prev) => ({
                              ...prev,
                              [c.property as string]: c.type === "boolean" ? e.target.checked : e.target.value,
                            }))
                          }
                          aria-label={`${c.title ?? c.property} (edit)`}
                        />
                      ) : (
                        renderCell(c, row)
                      )}
                    </td>
                  ))}
                  {showCommandColumn && (
                    <td className={styles.commandCell}>
                      {editing ? (
                        <>
                          <button type="button" className={styles.commandButton} onClick={() => handleEditSave(row)}>
                            Save
                          </button>
                          <button type="button" className={styles.commandButton} onClick={handleEditCancel}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          {editMode !== "None" && (
                            <button type="button" className={styles.commandButton} onClick={() => handleEditStart(row)}>
                              Edit
                            </button>
                          )}
                          {onRowDelete && (
                            <button type="button" className={styles.commandButton} onClick={() => onRowDelete(row)}>
                              Delete
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
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
          ariaLabel={topPager ? "Pagination (bottom)" : "Pagination"}
          onPageChange={setPageNumber}
          onPageSizeChange={handlePageSize}
        />
      )}
    </div>
  );
}
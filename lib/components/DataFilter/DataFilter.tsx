import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Select } from "../Select/Select";
import { applyFilters, DEFAULT_OPERATOR_BY_TYPE, FILTER_OPERATORS } from "./filter";
import type {
  CompositeFilterDescriptor,
  FilterDescriptor,
  FilterNode,
  FilterOperator,
  FilterPropertyType,
  LogicalFilterOperator,
} from "./filter";
import styles from "./DataFilter.module.css";

export interface DataFilterProperty {
  name: string;
  title?: string;
  type?: FilterPropertyType;
  values?: readonly { value: string; label: string }[];
  editor?: (props: { value: unknown; onChange: (value: unknown) => void }) => ReactNode;
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
  viewChanged?: (items: readonly TItem[]) => void;
  items?: readonly TItem[];
  children?: ReactNode;
}

interface RowState {
  id: number;
  property: string;
  operator: FilterOperator;
  value: unknown;
  secondOperator?: FilterOperator;
  secondValue?: unknown;
  logicalOperator?: LogicalFilterOperator;
}

const OPERATOR_LABELS: Record<FilterOperator, string> = {
  Equals: "Equals",
  NotEquals: "Not equals",
  LessThan: "Less than",
  LessThanOrEquals: "Less than or equals",
  GreaterThan: "Greater than",
  GreaterThanOrEquals: "Greater than or equals",
  Contains: "Contains",
  StartsWith: "Starts with",
  EndsWith: "Ends with",
  DoesNotContain: "Does not contain",
  In: "In",
  NotIn: "Not in",
  IsNull: "Is null",
  IsEmpty: "Is empty",
  IsNotNull: "Is not null",
  IsNotEmpty: "Is not empty",
  Custom: "Custom",
};

function ValueEditor({
  property,
  value,
  onChange,
}: {
  property: DataFilterProperty;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  if (property.editor != null) {
    return <>{property.editor({ value, onChange })}</>;
  }
  const type = property.type ?? "string";
  if (type === "enum" && property.values != null) {
    return (
      <Select
        aria-label={property.title ?? property.name}
        className={styles.value}
        options={property.values}
        value={String(value ?? "")}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }
  if (type === "boolean") {
    return (
      <Select
        aria-label={property.title ?? property.name}
        className={styles.value}
        options={[
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" },
        ]}
        value={value == null ? "" : String(value)}
        onChange={(event) => {
          if (event.target.value === "") onChange(undefined);
          else onChange(event.target.value === "true");
        }}
      />
    );
  }
  const inputProps =
    type === "number"
      ? { type: "number" as const }
      : type === "date"
        ? { type: "date" as const }
        : { type: "text" as const };
  return (
    <input
      aria-label={property.title ?? property.name}
      className={styles.value}
      {...inputProps}
      value={value == null ? "" : String(value)}
      onChange={(event) => onChange(type === "number" && event.target.value !== "" ? Number(event.target.value) : event.target.value)}
    />
  );
}

export function DataFilter<TItem = unknown>({
  properties,
  logicalOperator = "And",
  filterCaseSensitivity = "CaseInsensitive",
  initialRows,
  uniqueFilters = false,
  className,
  viewChanged,
  items,
  children,
}: DataFilterProps<TItem>) {
  const [rows, setRows] = useState<RowState[]>(() =>
    initialRows != null && initialRows.length > 0
      ? initialRows.map((row, index) => ({ id: index, ...row }))
      : [{ id: 0, property: properties[0]?.name ?? "", operator: DEFAULT_OPERATOR_BY_TYPE[properties[0]?.type ?? "string"], value: undefined }],
  );

  const updateRow = (id: number, patch: Partial<RowState>) => {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };

  const addRow = () => {
    const last = rows[rows.length - 1];
    const nextId = Math.max(0, ...rows.map((row) => row.id)) + 1;
    const property = properties[0];
    setRows((current) => [
      ...current,
      {
        id: nextId,
        property: last?.property ?? property?.name ?? "",
        operator: DEFAULT_OPERATOR_BY_TYPE[properties.find((p) => p.name === (last?.property ?? property?.name))?.type ?? "string"],
        value: undefined,
      },
    ]);
  };

  const removeRow = (id: number) => {
    setRows((current) => (current.length > 1 ? current.filter((row) => row.id !== id) : current));
  };

  const descriptors = useMemo<FilterNode[]>(() => {
    const nullishOps: readonly FilterOperator[] = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"];
    const nodes: FilterNode[] = [];
    for (const row of rows) {
      if (row.property === "") continue;
      const emptyValue = row.value == null || row.value === "";
      if (emptyValue && !nullishOps.includes(row.operator)) continue;
      const descriptor: FilterDescriptor = {
        property: row.property,
        operator: row.operator,
        value: row.value,
      };
      if (row.secondOperator != null && row.secondValue !== undefined) {
        descriptor.secondOperator = row.secondOperator;
        descriptor.secondValue = row.secondValue;
        descriptor.logicalOperator = row.logicalOperator ?? "And";
      }
      nodes.push(descriptor);
    }
    return nodes;
  }, [rows]);

  const applied = useMemo(() => {
    if (items == null) return items;
    if (descriptors.length === 0) return items;
    const composite: CompositeFilterDescriptor = { operator: logicalOperator, filters: descriptors };
    return applyFilters(items, composite, { caseSensitivity: filterCaseSensitivity });
  }, [items, descriptors, logicalOperator, filterCaseSensitivity]);

  useEffect(() => {
    if (viewChanged != null && items != null) viewChanged(applied ?? []);
  }, [applied]);

  const propertyOf = (name: string): DataFilterProperty =>
    properties.find((p) => p.name === name) ?? { name, type: "string" };

  return (
    <div className={[styles.filter, className].filter(Boolean).join(" ")}>
      <div className={styles.rows} role="group" aria-label="Filter conditions">
        {rows.map((row, index) => {
          const property = propertyOf(row.property);
          const operators = uniqueFilters ? [DEFAULT_OPERATOR_BY_TYPE[property.type ?? "string"]] : FILTER_OPERATORS;
          return (
            <div key={row.id} className={styles.row}>
              {index > 0 ? (
                <span className={styles.join} aria-hidden="true">
                  {logicalOperator}
                </span>
              ) : null}
              <Select
                aria-label={`Condition ${index + 1} property`}
                className={styles.property}
                value={row.property}
                onChange={(event) => {
                  const next = properties.find((p) => p.name === event.target.value);
                  updateRow(row.id, {
                    property: event.target.value,
                    operator: DEFAULT_OPERATOR_BY_TYPE[next?.type ?? "string"],
                    value: undefined,
                  });
                }}
                options={properties.map((p) => ({ value: p.name, label: p.title ?? p.name }))}
              />
              <Select
                aria-label={`Condition ${index + 1} operator`}
                className={styles.operator}
                value={row.operator}
                onChange={(event) => updateRow(row.id, { operator: event.target.value as FilterOperator })}
                options={operators.map((operator) => ({ value: operator, label: OPERATOR_LABELS[operator] }))}
              />
              <ValueEditor property={property} value={row.value} onChange={(value) => updateRow(row.id, { value })} />
              <button
                type="button"
                className={styles.remove}
                aria-label={`Remove condition ${index + 1}`}
                onClick={() => removeRow(row.id)}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.bar}>
        <button type="button" className={styles.add} onClick={addRow}>
          Add filter
        </button>
        {children != null ? <div className={styles.custom}>{children}</div> : null}
        {items != null ? (
          <span className={styles.summary} aria-live="polite">
            {(applied?.length ?? 0)} of {items.length}
          </span>
        ) : null}
      </div>
    </div>
  );
}
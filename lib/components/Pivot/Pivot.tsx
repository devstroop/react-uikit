import styles from "./Pivot.module.css";

export interface PivotField {
  property: string;
  title?: string;
}

export interface PivotAggregate extends PivotField {
  aggregate: "Sum" | "Average" | "Count" | "Min" | "Max";
}

export interface PivotProps {
  data: Record<string, unknown>[];
  rowFields?: PivotField[];
  columnFields?: PivotField[];
  aggregateFields?: PivotAggregate[];
  onFieldsChange?: (args: { rowFields: PivotField[]; columnFields: PivotField[]; aggregateFields: PivotAggregate[] }) => void;
  ariaLabel?: string;
  className?: string;
}

const AGG: Record<PivotAggregate["aggregate"], (vals: number[]) => number> = {
  Sum: (v) => v.reduce((a, b) => a + b, 0),
  Average: (v) => (v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0),
  Count: (v) => v.length,
  Min: (v) => Math.min(...v),
  Max: (v) => Math.max(...v),
};

function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

export function Pivot({ data, rowFields = [], columnFields = [], aggregateFields = [], onFieldsChange, ariaLabel = "Pivot table", className }: PivotProps) {
  const rows = rowFields;
  const cols = columnFields;
  const aggs = aggregateFields;

  const remove = (zone: "row" | "col" | "agg", property: string, agg?: string) => {
    const nextRows = zone === "row" ? rows.filter((f) => f.property !== property) : rows;
    const nextCols = zone === "col" ? cols.filter((f) => f.property !== property) : cols;
    const nextAggs = zone === "agg" ? aggs.filter((f) => !(f.property === property && f.aggregate === agg)) : aggs;
    onFieldsChange?.({ rowFields: nextRows, columnFields: nextCols, aggregateFields: nextAggs });
  };

  const keyOf = (row: Record<string, unknown>, fields: PivotField[]): string =>
    fields.map((f) => String(row[f.property])).join("");

  const rowKeys = [...new Set(rows.length ? data.map((r) => keyOf(r, rows)) : [""])].sort();
  const colKeys = [...new Set(cols.length ? data.map((r) => keyOf(r, cols)) : [""])].sort();

  const cellValue = (rowKey: string, colKey: string, agg: PivotAggregate): number => {
    const matched = data.filter((r) => keyOf(r, rows) === rowKey && keyOf(r, cols) === colKey);
    const vals = matched.map((r) => Number(r[agg.property])).filter((n) => !Number.isNaN(n));
    if (!vals.length && agg.aggregate !== "Count") return 0;
    return AGG[agg.aggregate](agg.aggregate === "Count" ? matched.map(() => 1) : vals);
  };

  const chip = (zone: "row" | "col" | "agg", property: string, title: string, extra?: string) => (
    <button
      key={`${zone}-${title}-${extra ?? ""}`}
      type="button"
      className={styles.chip}
      aria-label={`Remove ${zone} field ${title}`}
      onClick={() => remove(zone, property, extra)}
    >
      {title}
      {extra ? ` (${extra})` : ""}
    </button>
  );

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      <div className={styles.fields}>
        {rows.map((f) => chip("row", f.property, f.title ?? f.property))}
        {cols.map((f) => chip("col", f.property, f.title ?? f.property))}
        {aggs.map((f) => chip("agg", f.property, f.title ?? f.property, f.aggregate))}
      </div>
      <table className={styles.table} role="grid" aria-label={ariaLabel}>
        <thead>
          <tr>
            <th scope="col">{rows.map((f) => f.title ?? f.property).join(" / ") || "Total"}</th>
            {colKeys.map((c) => (
              <th key={c} scope="col">{c || "—"}</th>
            ))}
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {rowKeys.map((rk) => (
            <tr key={rk}>
              <th scope="row">{rk || "—"}</th>
              {colKeys.map((ck) => (
                <td key={ck} title={fmt(cellValue(rk, ck, aggs[0] ?? { property: "", aggregate: "Count" }))}>
                  {aggs.length ? fmt(cellValue(rk, ck, aggs[0]!)) : ""}
                </td>
              ))}
              <td className={styles.total}>
                {aggs.length
                  ? fmt(
                      AGG[aggs[0]!.aggregate](
                        colKeys.flatMap((ck) => data.filter((r) => keyOf(r, rows) === rk && keyOf(r, cols) === ck).map((r) => Number(r[aggs[0]!.property]))).filter((n) => !Number.isNaN(n)),
                      ),
                    )
                  : ""}
              </td>
            </tr>
          ))}
          <tr className={styles.totalRow}>
            <th scope="row">Total</th>
            {colKeys.map((ck) => (
              <td key={ck}>
                {aggs.length
                  ? fmt(
                      AGG[aggs[0]!.aggregate](
                        data.filter((r) => keyOf(r, cols) === ck).map((r) => Number(r[aggs[0]!.property])).filter((n) => !Number.isNaN(n)),
                      ),
                    )
                  : ""}
              </td>
            ))}
            <td>
              {aggs.length
                ? fmt(AGG[aggs[0]!.aggregate](data.map((r) => Number(r[aggs[0]!.property])).filter((n) => !Number.isNaN(n))))
                : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

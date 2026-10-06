import styles from './Pivot.module.css';

export interface PivotField {
  property: string;
  title?: string;
}

export interface PivotAggregate extends PivotField {
  aggregate: 'Sum' | 'Average' | 'Count' | 'Min' | 'Max' | 'First' | 'Last';
}

export interface PivotProps {
  data: Record<string, unknown>[];
  rowFields?: PivotField[];
  columnFields?: PivotField[];
  aggregateFields?: PivotAggregate[];
  onFieldsChange?: (args: {
    rowFields: PivotField[];
    columnFields: PivotField[];
    aggregateFields: PivotAggregate[];
  }) => void;
  ariaLabel?: string;
  className?: string;
}

const AGG: Record<PivotAggregate['aggregate'], (vals: number[]) => number> = {
  Sum: (v) => v.reduce((a, b) => a + b, 0),
  Average: (v) => (v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0),
  Count: (v) => v.length,
  Min: (v) => Math.min(...v),
  Max: (v) => Math.max(...v),
  First: (v) => v[0] ?? 0,
  Last: (v) => v[v.length - 1] ?? 0,
};

function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

export function Pivot({
  data,
  rowFields = [],
  columnFields = [],
  aggregateFields = [],
  onFieldsChange,
  ariaLabel = 'Pivot table',
  className,
}: PivotProps) {
  const rows = rowFields;
  const cols = columnFields;
  const aggs = aggregateFields;

  const remove = (
    zone: 'row' | 'col' | 'agg',
    property: string,
    agg?: string
  ) => {
    const nextRows =
      zone === 'row' ? rows.filter((f) => f.property !== property) : rows;
    const nextCols =
      zone === 'col' ? cols.filter((f) => f.property !== property) : cols;
    const nextAggs =
      zone === 'agg'
        ? aggs.filter((f) => !(f.property === property && f.aggregate === agg))
        : aggs;
    onFieldsChange?.({
      rowFields: nextRows,
      columnFields: nextCols,
      aggregateFields: nextAggs,
    });
  };

  const keyOf = (
    row: Record<string, unknown>,
    fields: PivotField[]
  ): string => {
    if (fields.length === 0) return '';
    if (fields.length === 1) return String(row[fields[0]!.property]);
    return fields
      .map((f) =>
        String(row[f.property]).replace(/\\/g, '\\\\').split('').join('\\x01')
      )
      .join('');
  };

  const rowKeys = [
    ...new Set(rows.length ? data.map((r) => keyOf(r, rows)) : ['']),
  ].sort();
  const colKeys = [
    ...new Set(cols.length ? data.map((r) => keyOf(r, cols)) : ['']),
  ].sort();

  const matched = (rowKey?: string, colKey?: string) =>
    data.filter(
      (r) =>
        (rowKey == null || keyOf(r, rows) === rowKey) &&
        (colKey == null || keyOf(r, cols) === colKey)
    );

  const aggregate = (
    items: Record<string, unknown>[],
    agg: PivotAggregate
  ): number => {
    if (agg.aggregate === 'Count') return items.length;
    const vals = items
      .map((r) => Number(r[agg.property]))
      .filter((n) => !Number.isNaN(n));
    if (!vals.length) return 0;
    return AGG[agg.aggregate](vals);
  };

  // One aggregate renders bare (stable output); multiple aggregates are
  // labelled so cell, row-total, and column-total values stay readable.
  const fmtAggs = (items: Record<string, unknown>[]): string => {
    const labelled = aggs.length > 1;
    return aggs
      .map((a) => {
        const text = fmt(aggregate(items, a));
        return labelled ? `${text} (${a.aggregate})` : text;
      })
      .join(', ');
  };

  const chip = (
    zone: 'row' | 'col' | 'agg',
    property: string,
    title: string,
    extra?: string
  ) => (
    <button
      key={`${zone}-${title}-${extra ?? ''}`}
      type="button"
      className={styles.chip}
      aria-label={`Remove ${zone} field ${title}`}
      onClick={() => remove(zone, property, extra)}
    >
      {title}
      {extra ? ` (${extra})` : ''}
    </button>
  );

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <div className={styles.fields}>
        {rows.map((f) => chip('row', f.property, f.title ?? f.property))}
        {cols.map((f) => chip('col', f.property, f.title ?? f.property))}
        {aggs.map((f) =>
          chip('agg', f.property, f.title ?? f.property, f.aggregate)
        )}
      </div>
      <table className={styles.table} role="grid" aria-label={ariaLabel}>
        <thead>
          <tr>
            <th scope="col">
              {rows.map((f) => f.title ?? f.property).join(' / ') || 'Total'}
            </th>
            {colKeys.map((c) => (
              <th key={c} scope="col">
                {c || '—'}
              </th>
            ))}
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {rowKeys.map((rk) => (
            <tr key={rk}>
              <th scope="row">{rk || '—'}</th>
              {colKeys.map((ck) => (
                <td
                  key={ck}
                  title={aggs.length ? fmtAggs(matched(rk, ck)) : undefined}
                >
                  {aggs.length ? fmtAggs(matched(rk, ck)) : ''}
                </td>
              ))}
              <td className={styles.total}>
                {aggs.length ? fmtAggs(matched(rk)) : ''}
              </td>
            </tr>
          ))}
          <tr className={styles.totalRow}>
            <th scope="row">Total</th>
            {colKeys.map((ck) => (
              <td key={ck}>
                {aggs.length ? fmtAggs(matched(undefined, ck)) : ''}
              </td>
            ))}
            <td>{aggs.length ? fmtAggs(data) : ''}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

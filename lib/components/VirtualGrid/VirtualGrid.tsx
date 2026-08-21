import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./VirtualGrid.module.css";

export interface VirtualColumn {
  property: string;
  title?: string;
  width?: string;
}

export interface VirtualGridProps {
  count: number;
  rowHeight?: number;
  height?: number;
  loadData: (args: { skip: number; top: number }) => Promise<Record<string, unknown>[]>;
  columns?: VirtualColumn[];
  ariaLabel?: string;
  className?: string;
}

export function VirtualGrid({ count, rowHeight = 40, height = 320, loadData, columns = [], ariaLabel = "Virtual grid", className }: VirtualGridProps) {
  const [rows, setRows] = useState<Map<number, Record<string, unknown>>>(new Map());
  const [scrollTop, setScrollTop] = useState(0);
  const pending = useRef<Set<number>>(new Set());

  const visibleCount = Math.ceil(height / rowHeight);
  const first = Math.max(0, Math.floor(scrollTop / rowHeight) - 3);
  const last = Math.min(count, first + visibleCount + 6);

  const ensure = useCallback(
    (skip: number, top: number) => {
      let missing = false;
      for (let i = skip; i < top; i++) {
        if (!rows.has(i) && !pending.current.has(i)) missing = true;
      }
      if (!missing) return;
      for (let i = skip; i < top; i++) pending.current.add(i);
      void loadData({ skip, top }).then((slice) => {
        setRows((prev) => {
          const next = new Map(prev);
          slice.forEach((row, idx) => next.set(skip + idx, row));
          return next;
        });
        for (let i = skip; i < top; i++) pending.current.delete(i);
      });
    },
    [rows, loadData],
  );

  useEffect(() => {
    ensure(first, last);
  }, [first, last]);

  const items: React.ReactNode[] = [];
  for (let i = first; i < last; i++) {
    const row = rows.get(i) ?? {};
    items.push(
      <div key={i} className={styles.row} role="row" style={{ height: rowHeight }}>
        {columns.map((c) => (
          <div key={c.property} role="gridcell" className={styles.cell} style={c.width ? { width: c.width } : undefined}>
            {String(row[c.property] ?? "")}
          </div>
        ))}
      </div>,
    );
  }

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      role="grid"
      aria-label={ariaLabel}
      aria-rowcount={count}
      tabIndex={0}
      style={{ height }}
      onScroll={(e) => setScrollTop((e.target as HTMLDivElement).scrollTop)}
      onKeyDown={(e) => {
        const el = e.currentTarget;
        if (e.key === "ArrowDown") { e.preventDefault(); el.scrollTop += rowHeight; }
        else if (e.key === "ArrowUp") { e.preventDefault(); el.scrollTop -= rowHeight; }
        else if (e.key === "PageDown") { e.preventDefault(); el.scrollTop += height; }
        else if (e.key === "PageUp") { e.preventDefault(); el.scrollTop -= height; }
      }}
    >
      <div style={{ height: first * rowHeight }} aria-hidden="true" />
      <div className={styles.header} role="row">
        {columns.map((c) => (
          <div key={c.property} role="columnheader" className={styles.headCell} style={{ height: rowHeight, ...(c.width ? { width: c.width } : {}) }}>
            {c.title ?? c.property}
          </div>
        ))}
      </div>
      {items}
      <div style={{ height: Math.max(0, (count - last) * rowHeight) }} aria-hidden="true" />
    </div>
  );
}

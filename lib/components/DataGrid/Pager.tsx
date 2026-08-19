import type { ReactNode } from "react";
import styles from "./Pager.module.css";

export interface PagerProps {
  pageNumber: number;
  pageSize: number;
  count: number;
  pageSizeOptions?: readonly number[];
  pageNumbersCount?: number;
  showSummary?: boolean;
  showPageSizeSelector?: boolean;
  pageSizeText?: string;
  className?: string;
  onPageChange?: (pageNumber: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  summaryTemplate?: (context: { count: number; pageNumber: number; pageSize: number }) => ReactNode;
  ariaLabel?: string;
}

function pageItems(pageNumber: number, pageCount: number, max: number): (number | "ellipsis")[] {
  if (pageCount <= max) return Array.from({ length: pageCount }, (_, i) => i + 1);
  const half = Math.floor(max / 2);
  let start = Math.max(1, pageNumber - half);
  const end = Math.min(pageCount, start + max - 1);
  start = Math.max(1, end - max + 1);
  const items: (number | "ellipsis")[] = [];
  for (let i = start; i <= end; i++) items.push(i);
  if (start > 2) items.unshift("ellipsis");
  if (start > 1) items.unshift(1);
  if (end < pageCount - 1) items.push("ellipsis");
  if (end < pageCount) items.push(pageCount);
  return items;
}

export function Pager({
  pageNumber,
  pageSize,
  count,
  pageSizeOptions,
  pageNumbersCount = 5,
  showSummary = true,
  showPageSizeSelector = true,
  pageSizeText = "Items per page",
  className,
  onPageChange,
  onPageSizeChange,
  summaryTemplate,
  ariaLabel = "Pagination",
}: PagerProps) {
  const pageCount = Math.max(1, Math.ceil(count / pageSize));
  const current = Math.min(Math.max(1, pageNumber), pageCount);
  const items = pageItems(current, pageCount, pageNumbersCount);
  return (
    <nav className={[styles.pager, className].filter(Boolean).join(" ")} aria-label={ariaLabel}>
      {showSummary && (
        <span className={styles.summary} aria-live="polite">
          {summaryTemplate
            ? summaryTemplate({ count, pageNumber: current, pageSize })
            : `Page ${current} of ${pageCount}`}
        </span>
      )}
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          disabled={current <= 1}
          onClick={() => onPageChange?.(current - 1)}
          aria-label="Previous page"
        >
          ‹
        </button>
        {items.map((item, i) =>
          item === "ellipsis" ? (
            <span key={`e${i}`} className={styles.ellipsis} aria-hidden="true">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              className={[styles.button, item === current ? styles.active : ""].filter(Boolean).join(" ")}
              aria-current={item === current ? "page" : undefined}
              onClick={() => onPageChange?.(item)}
            >
              {item}
            </button>
          ),
        )}
        <button
          type="button"
          className={styles.button}
          disabled={current >= pageCount}
          onClick={() => onPageChange?.(current + 1)}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
      {showPageSizeSelector && pageSizeOptions && pageSizeOptions.length > 0 && (
        <label className={styles.size}>
          {pageSizeText}
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
            aria-label={pageSizeText}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      )}
    </nav>
  );
}
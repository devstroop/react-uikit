import { useState, useCallback, type ReactNode } from "react";
import styles from "./Pager.module.css";

export interface PageEventArgs {
  page: number;
  skip: number;
  top: number;
  pageCount: number;
  pageSize: number;
}

export interface PagingInformation {
  count: number;
  pageNumber: number;
  pageSize: number;
  pageCount: number;
}

export interface PagerProps {
  count: number;
  pageSize: number;
  page?: number;
  /** @deprecated use `page` */
  pageNumber?: number;
  defaultPage?: number;
  pageSizeOptions?: readonly number[];
  pageNumbersCount?: number;
  alwaysVisible?: boolean;
  horizontalAlign?: "left" | "center" | "right" | "justify";
  showPagingSummary?: boolean;
  /** @deprecated use showPagingSummary */
  showSummary?: boolean;
  showPageSizeSelector?: boolean;
  pagingSummaryFormat?: string;
  pagingSummaryTemplate?: (info: PagingInformation) => ReactNode;
  /** @deprecated use pagingSummaryTemplate */
  summaryTemplate?: (ctx: { count: number; pageNumber: number; pageSize: number }) => ReactNode;
  pageSizeText?: string;
  firstPageTitle?: string;
  prevPageTitle?: string;
  nextPageTitle?: string;
  lastPageTitle?: string;
  pageTitleFormat?: string;
  pageAriaLabelFormat?: string;
  onPageChange?: (args: PageEventArgs) => void;
  onPageSizeChange?: (pageSize: number) => void;
  ariaLabel?: string;
  className?: string;
}

function formatSummary(template: string, page: number, pageCount: number, count: number): string {
  return template.replace("{0}", String(page)).replace("{1}", String(pageCount)).replace("{2}", String(count));
}

function formatPage(template: string, page: number): string {
  return template.replace("{0}", String(page));
}

function pageItems(current: number, pageCount: number, max: number): (number | "ellipsis")[] {
  if (pageCount <= max) return Array.from({ length: pageCount }, (_, i) => i + 1);
  const half = Math.floor(max / 2);
  let start = Math.max(1, current - half);
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
  count,
  pageSize,
  page,
  pageNumber,
  defaultPage = 1,
  pageSizeOptions,
  pageNumbersCount = 5,
  alwaysVisible = false,
  horizontalAlign = "left",
  showPagingSummary,
  showSummary,
  showPageSizeSelector = true,
  pagingSummaryFormat = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate,
  summaryTemplate,
  pageSizeText = "Items per page",
  firstPageTitle = "First page",
  prevPageTitle = "Previous page",
  nextPageTitle = "Next page",
  lastPageTitle = "Last page",
  pageTitleFormat = "Page {0}",
  pageAriaLabelFormat = "Page {0}",
  onPageChange,
  onPageSizeChange,
  ariaLabel = "Pagination",
  className,
}: PagerProps) {
  const rawPage = page ?? pageNumber ?? defaultPage;
  const [internalPage, setInternalPage] = useState(rawPage);
  const isControlled = page !== undefined || pageNumber !== undefined;
  const uncontrolledPage = isControlled ? rawPage : internalPage;
  const pageCount = Math.max(1, Math.ceil(count / pageSize));
  const current = Math.min(Math.max(1, uncontrolledPage), pageCount);

  const effectiveShowSummary = showPagingSummary ?? showSummary ?? true;

  const showPager = alwaysVisible || pageCount > 1;

  const items = pageItems(current, pageCount, pageNumbersCount);

  const emitPageChange = useCallback(
    (nextPage: number) => {
      const clamped = Math.min(Math.max(1, nextPage), pageCount);
      if (!isControlled) setInternalPage(clamped);
      const skip = (clamped - 1) * pageSize;
      onPageChange?.({ page: clamped, skip, top: pageSize, pageCount, pageSize });
    },
    [isControlled, onPageChange, pageCount, pageSize],
  );

  const alignClass =
    horizontalAlign === "center"
      ? styles.alignCenter
      : horizontalAlign === "right"
        ? styles.alignRight
        : horizontalAlign === "justify"
          ? styles.alignJustify
          : styles.alignLeft;

  const summaryInfo: PagingInformation = { count, pageNumber: current, pageSize, pageCount };

  // Sync if controlled page changes externally — no effect needed, current derives from props

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const buttons = Array.from(e.currentTarget.querySelectorAll<HTMLButtonElement>("button[data-pager-page]"));
    const idx = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (idx === -1) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = buttons[idx + 1] ?? buttons[0];
      next?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = buttons[idx - 1] ?? buttons[buttons.length - 1];
      prev?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttons[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttons[buttons.length - 1]?.focus();
    }
  };

  if (!showPager) return null;

  return (
    <nav className={[styles.pager, alignClass, className].filter(Boolean).join(" ")} aria-label={ariaLabel}>
      {effectiveShowSummary && (
        <span className={styles.summary} aria-live="polite">
          {pagingSummaryTemplate
            ? pagingSummaryTemplate(summaryInfo)
            : summaryTemplate
              ? summaryTemplate({ count, pageNumber: current, pageSize })
              : formatSummary(pagingSummaryFormat, current, pageCount, count)}
        </span>
      )}
      <div className={styles.controls} role="group" aria-label={ariaLabel} onKeyDown={handleKeyDown}>
        <button
          type="button"
          className={styles.button}
          disabled={current <= 1}
          onClick={() => emitPageChange(1)}
          aria-label={firstPageTitle}
          title={firstPageTitle}
        >
          «
        </button>
        <button
          type="button"
          className={styles.button}
          disabled={current <= 1}
          onClick={() => emitPageChange(current - 1)}
          aria-label={prevPageTitle}
          title={prevPageTitle}
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
              data-pager-page={item}
              className={[styles.button, item === current ? styles.active : ""].filter(Boolean).join(" ")}
              aria-current={item === current ? "page" : undefined}
              aria-label={formatPage(pageAriaLabelFormat, item)}
              title={formatPage(pageTitleFormat, item)}
              onClick={() => emitPageChange(item)}
            >
              {item}
            </button>
          ),
        )}
        <button
          type="button"
          className={styles.button}
          disabled={current >= pageCount}
          onClick={() => emitPageChange(current + 1)}
          aria-label={nextPageTitle}
          title={nextPageTitle}
        >
          ›
        </button>
        <button
          type="button"
          className={styles.button}
          disabled={current >= pageCount}
          onClick={() => emitPageChange(pageCount)}
          aria-label={lastPageTitle}
          title={lastPageTitle}
        >
          »
        </button>
      </div>
      {showPageSizeSelector && pageSizeOptions && pageSizeOptions.length > 0 && (
        <label className={styles.size}>
          <span>{pageSizeText}</span>
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

import { useMemo, useState, type ReactNode } from "react";
import styles from "./DataList.module.css";
import { Pager } from "../DataGrid/Pager";

export interface DataListProps<T> {
  data: readonly T[];
  pageSize?: number;
  pageSizeOptions?: readonly number[];
  wrapItems?: boolean;
  itemTemplate?: (item: T, index: number) => ReactNode;
  emptyMessage?: ReactNode;
  emptyTemplate?: ReactNode;
  loadingTemplate?: ReactNode;
  isLoading?: boolean;
  showPageSizeSelector?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function DataList<T>({
  data,
  pageSize = 10,
  pageSizeOptions,
  wrapItems = false,
  itemTemplate,
  emptyMessage = "No records found",
  emptyTemplate,
  loadingTemplate,
  isLoading = false,
  showPageSizeSelector = true,
  className,
  ariaLabel = "Data list",
}: DataListProps<T>) {
  const [pageNumber, setPageNumber] = useState(1);
  const [size, setSize] = useState(pageSize);
  const count = data.length;
  const pageCount = Math.max(1, Math.ceil(count / size));
  const current = Math.min(Math.max(1, pageNumber), pageCount);
  const view = useMemo(() => {
    const start = (current - 1) * size;
    return data.slice(start, start + size);
  }, [data, current, size]);

  const containerClass = wrapItems ? styles.grid : styles.stacked;

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")} aria-label={ariaLabel}>
      {isLoading && loadingTemplate != null ? (
        loadingTemplate
      ) : count === 0 ? (
        emptyTemplate != null ? (
          emptyTemplate
        ) : (
          <div className={styles.empty}>{emptyMessage}</div>
        )
      ) : (
        <div className={containerClass}>
          {view.map((item, index) => (
            <div key={index} className={styles.item}>
              {itemTemplate ? itemTemplate(item, index) : String(item)}
            </div>
          ))}
        </div>
      )}
      <Pager
        pageNumber={current}
        pageSize={size}
        count={count}
        pageSizeOptions={pageSizeOptions}
        showPageSizeSelector={showPageSizeSelector}
        onPageChange={setPageNumber}
        onPageSizeChange={(next) => {
          setSize(next);
          setPageNumber(1);
        }}
      />
    </div>
  );
}
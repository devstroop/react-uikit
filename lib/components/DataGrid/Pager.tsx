import type { ReactNode } from "react";
import { Pager as StandalonePager } from "../Pager/Pager";
import type { PageEventArgs } from "../Pager/Pager";

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

export function Pager(props: PagerProps) {
  const { pageNumber, onPageChange, summaryTemplate, showSummary, ...rest } = props;
  const handlePageChange = onPageChange
    ? (args: PageEventArgs) => onPageChange(args.page)
    : undefined;
  return (
    <StandalonePager
      page={pageNumber}
      showPagingSummary={showSummary}
      pagingSummaryFormat="Page {0} of {1}"
      pageAriaLabelFormat="{0}"
      pageTitleFormat="{0}"
      alwaysVisible
      pagingSummaryTemplate={
        summaryTemplate
          ? (info) => summaryTemplate({ count: info.count, pageNumber: info.pageNumber, pageSize: info.pageSize })
          : undefined
      }
      onPageChange={handlePageChange}
      {...rest}
    />
  );
}

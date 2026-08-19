import { ReactNode } from 'react';
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
    summaryTemplate?: (context: {
        count: number;
        pageNumber: number;
        pageSize: number;
    }) => ReactNode;
}
export declare function Pager({ pageNumber, pageSize, count, pageSizeOptions, pageNumbersCount, showSummary, showPageSizeSelector, pageSizeText, className, onPageChange, onPageSizeChange, summaryTemplate, }: PagerProps): import("react").JSX.Element;

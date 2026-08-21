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
    ariaLabel?: string;
}
export declare function Pager(props: PagerProps): import("react").JSX.Element;

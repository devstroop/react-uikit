import { ReactNode } from 'react';
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
    summaryTemplate?: (ctx: {
        count: number;
        pageNumber: number;
        pageSize: number;
    }) => ReactNode;
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
export declare function Pager({ count, pageSize, page, pageNumber, defaultPage, pageSizeOptions, pageNumbersCount, alwaysVisible, horizontalAlign, showPagingSummary, showSummary, showPageSizeSelector, pagingSummaryFormat, pagingSummaryTemplate, summaryTemplate, pageSizeText, firstPageTitle, prevPageTitle, nextPageTitle, lastPageTitle, pageTitleFormat, pageAriaLabelFormat, onPageChange, onPageSizeChange, ariaLabel, className, }: PagerProps): import("react").JSX.Element | null;

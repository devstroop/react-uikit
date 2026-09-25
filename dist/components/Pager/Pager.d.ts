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
    defaultPage?: number;
    pageSizeOptions?: readonly number[];
    pageNumbersCount?: number;
    alwaysVisible?: boolean;
    horizontalAlign?: 'left' | 'center' | 'right' | 'justify';
    showPagingSummary?: boolean;
    showPageSizeSelector?: boolean;
    pagingSummaryFormat?: string;
    pagingSummaryTemplate?: (info: PagingInformation) => ReactNode;
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
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function Pager({ count, pageSize, page, defaultPage, pageSizeOptions, pageNumbersCount, alwaysVisible, horizontalAlign, showPagingSummary, showPageSizeSelector, pagingSummaryFormat, pagingSummaryTemplate, pageSizeText, firstPageTitle, prevPageTitle, nextPageTitle, lastPageTitle, pageTitleFormat, pageAriaLabelFormat, onPageChange, onPageSizeChange, ariaLabel, className, visible, }: PagerProps): import("react").JSX.Element | null;

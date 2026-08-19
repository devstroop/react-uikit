import { ReactNode } from 'react';
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
export declare function DataList<T>({ data, pageSize, pageSizeOptions, wrapItems, itemTemplate, emptyMessage, emptyTemplate, loadingTemplate, isLoading, showPageSizeSelector, className, ariaLabel, }: DataListProps<T>): import("react").JSX.Element;

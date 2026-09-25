import { HTMLAttributes } from 'react';
export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnOrder = number | 'first' | 'last';
export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    size?: ColumnSize;
    offset?: ColumnOffset;
    sizeXs?: ColumnSize;
    offsetXs?: ColumnOffset;
    sizeSm?: ColumnSize;
    offsetSm?: ColumnOffset;
    sizeMd?: ColumnSize;
    offsetMd?: ColumnOffset;
    sizeLg?: ColumnSize;
    offsetLg?: ColumnOffset;
    sizeXl?: ColumnSize;
    offsetXl?: ColumnOffset;
    sizeXx?: ColumnSize;
    offsetXx?: ColumnOffset;
    order?: ColumnOrder;
    orderXs?: ColumnOrder;
    orderSm?: ColumnOrder;
    orderMd?: ColumnOrder;
    orderLg?: ColumnOrder;
    orderXl?: ColumnOrder;
    orderXx?: ColumnOrder;
}
export declare function Column({ className, style, ...props }: ColumnProps): import("react").JSX.Element;

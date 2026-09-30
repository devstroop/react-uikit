import { type CSSProperties, type HTMLAttributes } from 'react';
import styles from './Column.module.css';

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

// Breakpoint tiers mirror Radzen (base + xs/sm/md/lg/xl/xx) and the dx-*
// utility scale: xs 576, sm 768, md 1024, lg 1280, xl 1920, xx 2560
// (min-width, applies at and above — see Column.module.css).
const TIERS = [
  ['', 'size', 'offset', 'order'],
  ['xs', 'sizeXs', 'offsetXs', 'orderXs'],
  ['sm', 'sizeSm', 'offsetSm', 'orderSm'],
  ['md', 'sizeMd', 'offsetMd', 'orderMd'],
  ['lg', 'sizeLg', 'offsetLg', 'orderLg'],
  ['xl', 'sizeXl', 'offsetXl', 'orderXl'],
  ['xx', 'sizeXx', 'offsetXx', 'orderXx'],
] as const;

function assertSize(name: string, value: number): void {
  if (!Number.isInteger(value) || value < 1 || value > 12) {
    throw new RangeError(
      `Column property ${name} value should be between 1 and 12.`
    );
  }
}

function assertOffset(name: string, value: number): void {
  if (!Number.isInteger(value) || value < 0 || value > 12) {
    throw new RangeError(
      `Column property ${name} value should be between 0 and 12.`
    );
  }
}

function assertOrder(name: string, value: number): void {
  if (!Number.isInteger(value) || value < 0 || value > 12) {
    throw new RangeError(
      `Column property ${name} value should be between 0 and 12 or first/last.`
    );
  }
}

function orderClass(tier: string, order: ColumnOrder, name: string): string {
  if (order === 'first') return `${tier}OrderFirst`;
  if (order === 'last') return `${tier}OrderLast`;
  assertOrder(name, order);
  return `${tier}Order${order}`;
}

export function Column({ className, style, ...props }: ColumnProps) {
  const classes = [styles.column];
  const mergedStyle: CSSProperties = { ...style };
  for (const [tier, sizeProp, offsetProp, orderProp] of TIERS) {
    const size = props[sizeProp];
    const offset = props[offsetProp];
    const order = props[orderProp];
    if (size != null) {
      assertSize(sizeProp, size);
      const cls = styles[`${tier}Size${size}`];
      if (cls) classes.push(cls);
    }
    if (offset != null) {
      assertOffset(offsetProp, offset);
      const cls = styles[`${tier}Offset${offset}`];
      if (cls) classes.push(cls);
    }
    if (order != null) {
      const cls = styles[orderClass(tier, order, orderProp)];
      if (cls) classes.push(cls);
    }
  }
  const {
    size: _s,
    offset: _o,
    sizeXs: _xs,
    offsetXs: _oxs,
    sizeSm: _sm,
    offsetSm: _osm,
    sizeMd: _md,
    offsetMd: _omd,
    sizeLg: _lg,
    offsetLg: _olg,
    sizeXl: _xl,
    offsetXl: _oxl,
    sizeXx: _xx,
    offsetXx: _oxx,
    order: _ord,
    orderXs: _oxs2,
    orderSm: _osm2,
    orderMd: _omd2,
    orderLg: _olg2,
    orderXl: _oxl2,
    orderXx: _oxx2,
    ...rest
  } = props;
  return (
    <div
      className={[...classes, className].filter(Boolean).join(' ')}
      style={mergedStyle}
      {...rest}
    />
  );
}

import { type CSSProperties, type HTMLAttributes } from "react";
import styles from "./Column.module.css";

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type ColumnOrder = number | "first" | "last";

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  size?: ColumnSize;
  offset?: ColumnOffset;
  sizeSm?: ColumnSize;
  offsetSm?: ColumnOffset;
  sizeMd?: ColumnSize;
  offsetMd?: ColumnOffset;
  sizeLg?: ColumnSize;
  offsetLg?: ColumnOffset;
  sizeXl?: ColumnSize;
  offsetXl?: ColumnOffset;
  sizeXxl?: ColumnSize;
  offsetXxl?: ColumnOffset;
  order?: ColumnOrder;
  orderSm?: ColumnOrder;
  orderMd?: ColumnOrder;
  orderLg?: ColumnOrder;
  orderXl?: ColumnOrder;
  orderXxl?: ColumnOrder;
}

const TIERS = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"],
] as const;

const ORDER_CLASS: Record<"first" | "last", string> = {
  first: "orderFirst",
  last: "orderLast",
};

function orderStyle(order: ColumnOrder): CSSProperties {
  if (typeof order === "number") return { order };
  return {};
}

export function Column({ className, style, ...props }: ColumnProps) {
  const classes = [styles.column];
  const mergedStyle: CSSProperties = { ...style };
  for (const [tier, sizeProp, offsetProp, orderProp] of TIERS) {
    const size = props[sizeProp];
    const offset = props[offsetProp];
    const order = props[orderProp];
    if (size != null) {
      classes.push(styles[`${tier}Size${size}`]);
    }
    if (offset != null && offset > 0) {
      classes.push(styles[`${tier}Offset${offset}`]);
    }
    if (order === "first" || order === "last") {
      const name = `${tier}${ORDER_CLASS[order]}`;
      if (styles[name]) classes.push(styles[name]);
    } else if (order != null) {
      Object.assign(mergedStyle, orderStyle(order));
    }
  }
  const {
    size: _s, offset: _o, sizeSm: _sm, offsetSm: _osm, sizeMd: _md, offsetMd: _omd,
    sizeLg: _lg, offsetLg: _olg, sizeXl: _xl, offsetXl: _oxl, sizeXxl: _xxl, offsetXxl: _oxxl,
    order: _ord, orderSm: _osm2, orderMd: _omd2, orderLg: _olg2, orderXl: _oxl2, orderXxl: _oxxl2,
    ...rest
  } = props;
  return <div className={[...classes, className].filter(Boolean).join(" ")} style={mergedStyle} {...rest} />;
}
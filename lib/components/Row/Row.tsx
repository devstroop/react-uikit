import { type CSSProperties, type HTMLAttributes } from "react";
import { type ComponentSize } from "../../sizes";
import styles from "./Row.module.css";

export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline" | "normal";

export type RowJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "normal"
  | "left"
  | "right"
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type RowWrap = boolean | "nowrap" | "wrap" | "wrap-reverse";

export type RowGap = ComponentSize | number | string;

const GAP_TIERS: Record<ComponentSize, string> = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl",
};

const GAP_ROW_TIERS: Record<ComponentSize, string> = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl",
};

function gapClass(gap: RowGap | undefined): string | null {
  if (typeof gap !== "string") return null;
  return (GAP_TIERS as Record<string, string | undefined>)[gap] ?? null;
}

function gapRowClass(gap: RowGap | undefined): string | null {
  if (typeof gap !== "string") return null;
  return (GAP_ROW_TIERS as Record<string, string | undefined>)[gap] ?? null;
}

function resolveWrap(wrap: RowWrap | undefined): string | null {
  if (wrap === false || wrap === "nowrap") return "noWrap";
  if (wrap === "wrap-reverse") return "wrapReverse";
  return null;
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gap?: RowGap;
  rowGap?: RowGap;
  align?: RowAlign;
  justify?: RowJustify;
  wrap?: RowWrap;
}

export function Row({
  gap,
  rowGap,
  align = "stretch",
  justify = "start",
  wrap = true,
  className,
  style,
  ...props
}: RowProps) {
  const tier = gapClass(gap);
  const rowTier = gapRowClass(rowGap);
  const mergedStyle: CSSProperties = {
    ...(gap != null && !tier
      ? { gap: typeof gap === "number" ? `${gap}px` : gap }
      : {}),
    ...(rowGap != null && !rowTier
      ? { rowGap: typeof rowGap === "number" ? `${rowGap}px` : rowGap }
      : {}),
    ...style,
  };
  return (
    <div
      className={[
        styles.row,
        styles[align],
        styles[`justify-${justify}`],
        resolveWrap(wrap) != null ? styles[resolveWrap(wrap) as string] : null,
        tier ? styles[tier] : null,
        rowTier ? styles[rowTier] : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={mergedStyle}
      {...props}
    />
  );
}
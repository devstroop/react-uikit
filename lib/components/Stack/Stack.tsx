import { type CSSProperties, type HTMLAttributes } from "react";
import { type ComponentSize } from "../../sizes";
import styles from "./Stack.module.css";

export type StackOrientation = "horizontal" | "vertical";

export type StackWrap = boolean | "nowrap" | "wrap" | "wrap-reverse";

export type StackGap = ComponentSize | number | string;

const GAP_TIERS: Record<ComponentSize, string> = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl",
};

function gapClass(gap: StackGap | undefined): string | null {
  if (typeof gap !== "string") return null;
  return (GAP_TIERS as Record<string, string | undefined>)[gap] ?? null;
}

function wrapValue(wrap: StackWrap | undefined): string {
  if (wrap === false || wrap === "nowrap") return "nowrap";
  if (wrap === "wrap-reverse") return "wrap-reverse";
  return "wrap";
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: StackOrientation;
  reverse?: boolean;
  wrap?: StackWrap;
  gap?: StackGap;
  align?: "start" | "center" | "end" | "stretch" | "baseline" | "normal";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly";
  className?: string;
  style?: CSSProperties;
}

export function Stack({
  orientation = "vertical",
  reverse = false,
  wrap = true,
  gap = "sm",
  align,
  justify,
  className,
  style,
  ...props
}: StackProps) {
  const tier = gapClass(gap);
  const direction = orientation === "horizontal" ? (reverse ? "row-reverse" : "row") : (reverse ? "column-reverse" : "column");
  const mergedStyle: CSSProperties = {
    ...(gap != null && !tier
      ? { gap: typeof gap === "number" ? `${gap}px` : gap }
      : {}),
    ...style,
  };
  return (
    <div
      className={[
        styles.stack,
        styles[`dir-${direction}`],
        wrapValue(wrap) !== "wrap" ? styles[`wrap-${wrapValue(wrap)}`] : null,
        align != null ? styles[`align-${align}`] : null,
        justify != null ? styles[`justify-${justify}`] : null,
        tier ? styles[tier] : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={mergedStyle}
      {...props}
    />
  );
}
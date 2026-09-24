import { forwardRef, type ElementType, type HTMLAttributes } from "react";
import styles from "./Typography.module.css";

export type TypographyVariant =
  | "display-1"
  | "display-2"
  | "display-3"
  | "display-4"
  | "display-5"
  | "display-6"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle-1"
  | "subtitle-2"
  | "body-1"
  | "body-2"
  | "button"
  | "caption"
  | "overline";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  /** Tag override (Radzen TagName parity: Div/Span/P/H1-H6/A/Button/Pre
   * all expressible; Auto = ELEMENT_BY_VARIANT default below). */
  as?: ElementType;
  align?: TypographyAlign;
}

const ELEMENT_BY_VARIANT: Record<TypographyVariant, ElementType> = {
  "display-1": "h1",
  "display-2": "h2",
  "display-3": "h3",
  "display-4": "h4",
  "display-5": "h5",
  "display-6": "h6",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  // Radzen parity: subtitles render as h6.
  "subtitle-1": "h6",
  "subtitle-2": "h6",
  "body-1": "p",
  "body-2": "p",
  // Radzen parity: Button text style renders inline.
  button: "span",
  caption: "span",
  overline: "span",
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(function Typography(
  { variant = "body-1", as, align, className, children, ...props },
  ref,
) {
  const Tag = as ?? ELEMENT_BY_VARIANT[variant];
  return (
    <Tag
      ref={ref}
      className={[styles.typography, styles[variant], align ? styles[`align-${align}`] : null, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
});
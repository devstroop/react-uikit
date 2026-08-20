import { forwardRef, type ElementType, type HTMLAttributes } from "react";
import styles from "./Typography.module.css";

export type TypographyVariant =
  | "display-1"
  | "display-2"
  | "display-3"
  | "display-4"
  | "display-5"
  | "display-6"
  | "body-1"
  | "body-2"
  | "caption"
  | "overline";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
}

const ELEMENT_BY_VARIANT: Record<TypographyVariant, ElementType> = {
  "display-1": "h1",
  "display-2": "h2",
  "display-3": "h3",
  "display-4": "h4",
  "display-5": "h5",
  "display-6": "h6",
  "body-1": "p",
  "body-2": "p",
  caption: "span",
  overline: "span",
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(function Typography(
  { variant = "body-1", as, className, children, ...props },
  ref,
) {
  const Tag = as ?? ELEMENT_BY_VARIANT[variant];
  return (
    <Tag
      ref={ref}
      className={[styles.typography, styles[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
});
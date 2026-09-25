import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Text.module.css";

/**
 * Display style. Mirrors Radzen `TextStyle` exactly: DisplayH1-H6 are the
 * large display ramp, H1-H6 standard headings, Subtitle1/2, Body1/2,
 * Button label text, Caption, Overline.
 */
export type TextStyle =
  | "DisplayH1"
  | "DisplayH2"
  | "DisplayH3"
  | "DisplayH4"
  | "DisplayH5"
  | "DisplayH6"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "Subtitle1"
  | "Subtitle2"
  | "Body1"
  | "Body2"
  | "Button"
  | "Caption"
  | "Overline";

/**
 * Rendered element. Mirrors Radzen `TagName` (`Auto` = chosen from
 * TextStyle, like Radzen's automatic tag) plus `Strong`, which Radzen
 * lacks but our call sites need to preserve strong semantics.
 */
export type TextTagName =
  | "Auto"
  | "Div"
  | "Span"
  | "P"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "A"
  | "Button"
  | "Pre"
  | "Strong";

/** Horizontal alignment. Mirrors Radzen `TextAlign`. */
export type TextAlign = "Left" | "Right" | "Center" | "Justify" | "Start" | "End" | "JustifyAll";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  textStyle?: TextStyle;
  tagName?: TextTagName;
  textAlign?: TextAlign;
  /**
   * Plain text content. Takes precedence over children when set,
   * like Radzen's `Text` parameter.
   */
  text?: ReactNode;
  /** Render nothing when false (Radzen Visible parity). Defaults to true. */
  visible?: boolean;
}

const ELEMENT_BY_TEXT_STYLE: Record<TextStyle, ElementType> = {
  DisplayH1: "h1",
  DisplayH2: "h2",
  DisplayH3: "h3",
  DisplayH4: "h4",
  DisplayH5: "h5",
  DisplayH6: "h6",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  // Radzen parity: subtitles render as h6.
  Subtitle1: "h6",
  Subtitle2: "h6",
  Body1: "p",
  Body2: "p",
  Button: "span",
  Caption: "span",
  Overline: "span",
};

const CLASS_BY_TEXT_STYLE: Record<TextStyle, string> = {
  DisplayH1: "display-1",
  DisplayH2: "display-2",
  DisplayH3: "display-3",
  DisplayH4: "display-4",
  DisplayH5: "display-5",
  DisplayH6: "display-6",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  Subtitle1: "subtitle-1",
  Subtitle2: "subtitle-2",
  Body1: "body-1",
  Body2: "body-2",
  Button: "button",
  Caption: "caption",
  Overline: "overline",
};

const ELEMENT_BY_TAG_NAME: Record<Exclude<TextTagName, "Auto">, ElementType> = {
  Div: "div",
  Span: "span",
  P: "p",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  A: "a",
  Button: "button",
  Pre: "pre",
  Strong: "strong",
};

const CLASS_BY_ALIGN: Record<TextAlign, string> = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify",
};

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    textStyle = "Body1",
    tagName = "Auto",
    textAlign,
    text,
    visible = true,
    className,
    children,
    ...props
  },
  ref,
) {
  if (visible === false) return null;
  const Tag = tagName === "Auto" ? ELEMENT_BY_TEXT_STYLE[textStyle] : ELEMENT_BY_TAG_NAME[tagName];
  return (
    <Tag
      ref={ref}
      className={[
        styles.typography,
        styles[CLASS_BY_TEXT_STYLE[textStyle]],
        textAlign ? styles[CLASS_BY_ALIGN[textAlign]] : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {text ?? children}
    </Tag>
  );
});

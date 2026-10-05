import {
  forwardRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Text.module.css';

/**
 * Display style. Mirrors Radzen `TextStyle` (displayH1-H6 are the large
 * display ramp, h1-h6 standard headings, subtitle1/2, body1/2, button
 * label text, caption, overline) with camelCase values.
 */
export type TextStyle =
  | 'displayH1'
  | 'displayH2'
  | 'displayH3'
  | 'displayH4'
  | 'displayH5'
  | 'displayH6'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

/**
 * Rendered element. Mirrors Radzen `TagName` (`auto` = chosen from
 * TextStyle, like Radzen's automatic tag) plus `strong`, which Radzen
 * lacks but our call sites need to preserve strong semantics.
 */
export type TextTagName =
  | 'auto'
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'a'
  | 'button'
  | 'pre'
  | 'strong';

/** Horizontal alignment. Mirrors Radzen `TextAlign`. */
export type TextAlign =
  'left' | 'right' | 'center' | 'justify' | 'start' | 'end' | 'justifyAll';

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
  displayH1: 'h1',
  displayH2: 'h2',
  displayH3: 'h3',
  displayH4: 'h4',
  displayH5: 'h5',
  displayH6: 'h6',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  // Radzen parity: subtitles render as h6.
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
  overline: 'span',
};

const CLASS_BY_TEXT_STYLE: Record<TextStyle, string> = {
  displayH1: 'display-1',
  displayH2: 'display-2',
  displayH3: 'display-3',
  displayH4: 'display-4',
  displayH5: 'display-5',
  displayH6: 'display-6',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle-1',
  subtitle2: 'subtitle-2',
  body1: 'body-1',
  body2: 'body-2',
  button: 'button',
  caption: 'caption',
  overline: 'overline',
};

const ELEMENT_BY_TAG_NAME: Record<Exclude<TextTagName, 'auto'>, ElementType> = {
  div: 'div',
  span: 'span',
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  a: 'a',
  button: 'button',
  pre: 'pre',
  strong: 'strong',
};

const CLASS_BY_ALIGN: Record<TextAlign, string> = {
  left: 'align-left',
  right: 'align-right',
  center: 'align-center',
  justify: 'align-justify',
  start: 'align-left',
  end: 'align-right',
  justifyAll: 'align-justify',
};

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    textStyle = 'body1',
    tagName = 'auto',
    textAlign,
    text,
    visible = true,
    className,
    children,
    ...props
  },
  ref
) {
  if (visible === false) return null;
  const Tag =
    tagName === 'auto'
      ? ELEMENT_BY_TEXT_STYLE[textStyle]
      : ELEMENT_BY_TAG_NAME[tagName];
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
        .join(' ')}
      {...props}
    >
      {text ?? children}
    </Tag>
  );
});

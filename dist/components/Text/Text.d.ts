import { HTMLAttributes, ReactNode } from 'react';
/**
 * Display style. Mirrors Radzen `TextStyle` (displayH1-H6 are the large
 * display ramp, h1-h6 standard headings, subtitle1/2, body1/2, button
 * label text, caption, overline) with camelCase values.
 */
export type TextStyle = 'displayH1' | 'displayH2' | 'displayH3' | 'displayH4' | 'displayH5' | 'displayH6' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
/**
 * Rendered element. Mirrors Radzen `TagName` (`auto` = chosen from
 * TextStyle, like Radzen's automatic tag) plus `strong`, which Radzen
 * lacks but our call sites need to preserve strong semantics.
 */
export type TextTagName = 'auto' | 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'button' | 'pre' | 'strong';
/** Horizontal alignment. Mirrors Radzen `TextAlign`. */
export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end' | 'justifyAll';
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
export declare const Text: import('react').ForwardRefExoticComponent<TextProps & import('react').RefAttributes<HTMLElement>>;

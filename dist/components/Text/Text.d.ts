import { HTMLAttributes, ReactNode } from 'react';
/**
 * Display style. Mirrors Radzen `TextStyle` exactly: DisplayH1-H6 are the
 * large display ramp, H1-H6 standard headings, Subtitle1/2, Body1/2,
 * Button label text, Caption, Overline.
 */
export type TextStyle = 'DisplayH1' | 'DisplayH2' | 'DisplayH3' | 'DisplayH4' | 'DisplayH5' | 'DisplayH6' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Subtitle1' | 'Subtitle2' | 'Body1' | 'Body2' | 'Button' | 'Caption' | 'Overline';
/**
 * Rendered element. Mirrors Radzen `TagName` (`Auto` = chosen from
 * TextStyle, like Radzen's automatic tag) plus `Strong`, which Radzen
 * lacks but our call sites need to preserve strong semantics.
 */
export type TextTagName = 'Auto' | 'Div' | 'Span' | 'P' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'A' | 'Button' | 'Pre' | 'Strong';
/** Horizontal alignment. Mirrors Radzen `TextAlign`. */
export type TextAlign = 'Left' | 'Right' | 'Center' | 'Justify' | 'Start' | 'End' | 'JustifyAll';
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

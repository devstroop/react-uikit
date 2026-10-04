export interface MarkdownProps {
    /** Markdown source. */
    value: string;
    /** Allow raw HTML through (still sanitized). Defaults to false. */
    allowHtml?: boolean;
    /** Resizable container (both axes). Defaults to false. */
    resize?: boolean;
    ariaLabel?: string;
    className?: string;
}
/**
 * Rendered Markdown (uikit#100): parses a fixed subset (headings, bold,
 * italic, strikethrough, code, links, lists, quotes, rules, fences) and
 * sanitizes the output. Raw HTML is escaped unless `allowHtml` is set —
 * and DOMPurify runs either way, so scripts never survive.
 */
export declare function Markdown({ value, allowHtml, resize, ariaLabel, className, }: MarkdownProps): import("react").JSX.Element;

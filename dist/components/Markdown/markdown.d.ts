/**
 * Small Markdown subset parser (uikit#100): headings, bold, italic,
 * strikethrough, inline code, links, lists, quotes, rules, fenced code.
 * Raw HTML is escaped unless `allowHtml` is set; link targets are
 * scheme-checked either way (`javascript:` etc. never survive). The htmx
 * twin (`window.dxMarkdown.render`) implements the same contract — keep
 * the two in sync and mirror the shared vectors in both test files.
 */
export interface MarkdownRenderOptions {
    allowHtml?: boolean;
}
export declare function renderMarkdown(source: string, options?: MarkdownRenderOptions): string;

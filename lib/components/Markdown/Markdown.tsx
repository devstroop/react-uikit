import { useMemo } from 'react';
import DOMPurify from 'dompurify';
import { renderMarkdown } from './markdown';
import styles from './Markdown.module.css';

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
export function Markdown({
  value,
  allowHtml = false,
  resize = false,
  ariaLabel = 'Markdown content',
  className,
}: MarkdownProps) {
  const html = useMemo(
    () => DOMPurify.sanitize(renderMarkdown(value, { allowHtml })),
    [value, allowHtml]
  );
  return (
    <div
      className={[styles.markdown, resize ? styles.resize : '', className]
        .filter(Boolean)
        .join(' ')}
      role="article"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

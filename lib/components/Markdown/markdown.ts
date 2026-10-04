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

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function safeHref(url: string): string | null {
  const cleaned = url.trim();
  if (
    /^(https?:|mailto:|\/|#)/i.test(cleaned) ||
    (/^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(cleaned) &&
      !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(cleaned))
  ) {
    return cleaned;
  }
  return null;
}

const CODE_PLACEHOLDER = '\u0000';

function inline(text: string, allowHtml: boolean): string {
  // Extract code spans first so their contents are never formatted.
  const spans: string[] = [];
  let out = text.replace(/`([^`\n]+)`/g, (_m, code: string) => {
    spans.push(`<code>${escapeHtml(code)}</code>`);
    return `${CODE_PLACEHOLDER}${spans.length - 1}${CODE_PLACEHOLDER}`;
  });
  if (!allowHtml) out = escapeHtml(out);
  out = out
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    .replace(/(?<!\w)\*([^*\n]+)\*(?!\w)/g, '<em>$1</em>')
    .replace(/(?<!\w)_([^_\n]+)_(?!\w)/g, '<em>$1</em>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    .replace(
      /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
      (_m, label: string, url: string) => {
        const href = safeHref(url);
        return href == null
          ? label
          : `<a href="${escapeHtml(href)}">${label}</a>`;
      }
    );
  out = out.replace(
    new RegExp(`${CODE_PLACEHOLDER}(\\d+)${CODE_PLACEHOLDER}`, 'g'),
    (_m, i: string) => spans[Number(i)] ?? ''
  );
  return out;
}

export function renderMarkdown(
  source: string,
  options: MarkdownRenderOptions = {}
): string {
  const allowHtml = options.allowHtml === true;
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  const blocks: string[] = [];
  let i = 0;

  const flushList = (items: string[], ordered: boolean): void => {
    const tag = ordered ? 'ol' : 'ul';
    blocks.push(
      `<${tag}>${items.map((item) => `<li>${inline(item, allowHtml)}</li>`).join('')}</${tag}>`
    );
  };

  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*$/.test(line)) {
      i += 1;
      continue;
    }
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    const level = heading?.[1];
    const text = heading?.[2];
    if (level !== undefined && text !== undefined) {
      blocks.push(
        `<h${level.length}>${inline(text.trim(), allowHtml)}</h${level.length}>`
      );
      i += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(line)) {
      const lang = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(line)?.[2] ?? '';
      const body: string[] = [];
      i += 1;
      while (i < lines.length && !/^(`{3,}|~{3,})\s*$/.test(lines[i])) {
        body.push(lines[i]);
        i += 1;
      }
      i += 1;
      const cls = lang ? ` class="language-${escapeHtml(lang)}"` : '';
      blocks.push(
        `<pre><code${cls}>${escapeHtml(body.join('\n'))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(line)) {
      const quoted: string[] = [];
      while (i < lines.length && /^>\s?(.*)$/.test(lines[i])) {
        quoted.push(/^>\s?(.*)$/.exec(lines[i])?.[1] ?? '');
        i += 1;
      }
      blocks.push(
        `<blockquote>${quoted.map((q) => `<p>${inline(q, allowHtml)}</p>`).join('')}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(line.trim())) {
      blocks.push('<hr>');
      i += 1;
      continue;
    }
    const unordered = /^\s*[-*+]\s+(.*)$/.exec(line);
    if (unordered) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = /^\s*[-*+]\s+(.*)$/.exec(lines[i]);
        if (!m) break;
        items.push(m[1]);
        i += 1;
      }
      flushList(items, false);
      continue;
    }
    const ordered = /^\s*\d+[.)]\s+(.*)$/.exec(line);
    if (ordered) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = /^\s*\d+[.)]\s+(.*)$/.exec(lines[i]);
        if (!m) break;
        items.push(m[1]);
        i += 1;
      }
      flushList(items, true);
      continue;
    }
    const paragraph: string[] = [];
    while (
      i < lines.length &&
      !/^\s*$/.test(lines[i]) &&
      !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
        lines[i]
      )
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }
    blocks.push(`<p>${inline(paragraph.join('\n'), allowHtml)}</p>`);
  }
  return blocks.join('\n');
}

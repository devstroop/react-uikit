import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Markdown } from './Markdown';
import { renderMarkdown } from './markdown';

/**
 * Shared contract vectors (uikit#100): the htmx twin
 * (`window.dxMarkdown.render`) implements the same contract — keep the
 * two vector lists in sync.
 */
export const MARKDOWN_VECTORS: Array<[string, string, string]> = [
  ['heading', '# Hi', '<h1>Hi</h1>'],
  ['heading level', '### Sub', '<h3>Sub</h3>'],
  ['bold stars', '**b**', '<p><strong>b</strong></p>'],
  ['bold under', '__b__', '<p><strong>b</strong></p>'],
  ['italic star', '*i*', '<p><em>i</em></p>'],
  ['italic under', '_i_', '<p><em>i</em></p>'],
  ['no intra-word italic', 'foo_bar', '<p>foo_bar</p>'],
  ['strike', '~~s~~', '<p><del>s</del></p>'],
  ['code span', '`c`', '<p><code>c</code></p>'],
  ['code protects markup', '`**b**`', '<p><code>**b**</code></p>'],
  ['link', '[t](https://x.test)', '<p><a href="https://x.test">t</a></p>'],
  ['link drops javascript', '[t](javascript:alert(1))', '<p>t</p>'],
  ['link relative', '[t](/p)', '<p><a href="/p">t</a></p>'],
  ['ul', '- a\n- b', '<ul><li>a</li><li>b</li></ul>'],
  ['ol', '1. a\n2. b', '<ol><li>a</li><li>b</li></ol>'],
  ['quote', '> q', '<blockquote><p>q</p></blockquote>'],
  ['rule', '---', '<hr>'],
  ['fence', '```js\nx\n```', '<pre><code class="language-js">x</code></pre>'],
  ['paragraph', 'a\nb', '<p>a\nb</p>'],
  ['escapes html', '<b>x</b>', '<p>&lt;b&gt;x&lt;/b&gt;</p>'],
];

describe('renderMarkdown', () => {
  for (const [name, source, expected] of MARKDOWN_VECTORS) {
    it(name, () => {
      expect(renderMarkdown(source)).toBe(expected);
    });
  }

  it('passes raw html through with allowHtml', () => {
    expect(renderMarkdown('<b>x</b>', { allowHtml: true })).toBe(
      '<p><b>x</b></p>'
    );
  });
});

describe('Markdown', () => {
  it('renders sanitized markup with an article role', () => {
    render(<Markdown value={'# Hi\n\n**b** <script>alert(1)</script>'} />);
    const article = screen.getByRole('article', { name: 'Markdown content' });
    expect(article.querySelector('h1')?.textContent).toBe('Hi');
    expect(article.querySelector('strong')?.textContent).toBe('b');
    expect(article.querySelector('script')).toBeNull();
  });

  it('resize adds the resizable shell', () => {
    const { container } = render(<Markdown value="hi" resize />);
    expect(container.firstElementChild?.className).toMatch(/resize/);
  });
});

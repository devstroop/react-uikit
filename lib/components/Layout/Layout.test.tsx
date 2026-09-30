import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Body } from '../Body/Body';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Layout } from './Layout';

function layout(container: HTMLElement) {
  const root = container.firstElementChild;
  const row = root?.querySelector(':scope > div');
  const children = (node: Element | null | undefined) =>
    node ? [...node.children] : [];
  return { root, row, children: children(root), rowChildren: children(row) };
}

describe('Layout', () => {
  it('renders header above, footer below, sidebars flanking body', () => {
    const { container } = render(
      <Layout>
        <Header />
        <Sidebar />
        <Body />
        <Footer />
      </Layout>
    );
    const { children, rowChildren } = layout(container);
    expect(children[0]?.tagName).toBe('HEADER');
    expect(children[children.length - 1]?.tagName).toBe('FOOTER');
    expect(rowChildren[0]?.tagName).toBe('ASIDE');
    expect(rowChildren[1]?.tagName).toBe('MAIN');
  });

  it('arranges sections by region, not authored order', () => {
    const { container } = render(
      <Layout>
        <Footer />
        <Body />
        <Header />
        <Sidebar />
      </Layout>
    );
    const { children, rowChildren } = layout(container);
    expect(children[0]?.tagName).toBe('HEADER');
    expect(children[children.length - 1]?.tagName).toBe('FOOTER');
    expect(rowChildren[0]?.tagName).toBe('ASIDE');
    expect(rowChildren[1]?.tagName).toBe('MAIN');
  });

  it('places right sidebars after the body', () => {
    const { container } = render(
      <Layout>
        <Sidebar position="right" />
        <Body />
      </Layout>
    );
    const { rowChildren } = layout(container);
    expect(rowChildren[0]?.tagName).toBe('MAIN');
    expect(rowChildren[1]?.tagName).toBe('ASIDE');
    expect(rowChildren[1]?.className).toContain('right');
  });

  it('renders a body-only layout', () => {
    const { container } = render(<Layout>{<Body>page</Body>}</Layout>);
    const { rowChildren } = layout(container);
    expect(rowChildren.length).toBe(1);
    expect(rowChildren[0]?.tagName).toBe('MAIN');
  });

  it('spreads attributes and styles onto the root div', () => {
    const { container } = render(
      <Layout id="shell" style={{ minHeight: 320 }} data-test="x" />
    );
    const root = container.firstElementChild;
    expect(root?.getAttribute('id')).toBe('shell');
    expect(root?.getAttribute('data-test')).toBe('x');
    expect(root?.getAttribute('style')).toContain('min-height: 320px');
  });

  it('renders children without a wrapper when bare', () => {
    const { container } = render(
      <Layout bare>
        <p>naked</p>
      </Layout>
    );
    expect(container.firstElementChild?.tagName).toBe('P');
    expect(container.firstElementChild?.className ?? '').not.toMatch(
      /layout|row/
    );
  });

  it('routes logical end position after the body', () => {
    const { container } = render(
      <Layout>
        <Sidebar position="end" />
        <Body />
      </Layout>
    );
    const { rowChildren } = layout(container);
    expect(rowChildren[0]?.tagName).toBe('MAIN');
    expect(rowChildren[1]?.tagName).toBe('ASIDE');
    expect(rowChildren[1]?.className).toContain('end');
  });

  it('engages grid placement for a single fullHeight sidebar', () => {
    const { container } = render(
      <Layout>
        <Header />
        <Sidebar fullHeight />
        <Body />
        <Footer />
      </Layout>
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain('grid');
    expect(root?.querySelector('header')?.parentElement?.className).toContain(
      'gridHeader'
    );
    expect(root?.querySelector('aside')).not.toBeNull();
    expect(root?.querySelector('main')?.parentElement?.className).toContain(
      'gridBody'
    );
    expect(root?.querySelector('footer')?.parentElement?.className).toContain(
      'gridFooter'
    );
  });

  it('stacks duplicate regions inside one grid cell', () => {
    const { container } = render(
      <Layout>
        <Header>one</Header>
        <Header>two</Header>
        <Sidebar fullHeight />
        <Body />
      </Layout>
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain('grid');
    const headers = root?.querySelectorAll('header') ?? [];
    expect(headers.length).toBe(2);
    expect(headers[0]?.parentElement?.className).toContain('gridHeader');
    expect(headers[1]?.parentElement?.className).toContain('gridHeader');
  });

  it('mirrors the grid for a right fullHeight sidebar', () => {
    const { container } = render(
      <Layout>
        <Sidebar position="end" fullHeight />
        <Body />
      </Layout>
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain('grid');
    expect(root?.className).toContain('gridRight');
  });

  it('keeps flex layout without fullHeight or with two sidebars', () => {
    const { container, rerender } = render(
      <Layout>
        <Sidebar />
        <Body />
      </Layout>
    );
    expect(container.firstElementChild?.className).not.toContain('grid');
    rerender(
      <Layout>
        <Sidebar fullHeight />
        <Sidebar position="right" fullHeight />
        <Body />
      </Layout>
    );
    expect(container.firstElementChild?.className).not.toContain('grid');
  });
});

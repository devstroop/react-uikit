import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Column } from './Column';

describe('Column', () => {
  it('renders a div with the column class and no width by default', () => {
    const { container } = render(<Column>content</Column>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe('DIV');
    expect(element?.className).toContain('column');
    expect(element?.className).not.toMatch(/Size\d/);
    expect(element?.className).not.toMatch(/Offset\d/);
    expect(element?.className).not.toMatch(/Order\d|OrderFirst|OrderLast/);
  });

  it('applies the size class for size 6', () => {
    const { container } = render(<Column size={6} />);
    expect(container.firstElementChild?.className).toContain('Size6');
  });

  it('applies the offset class for offset 2', () => {
    const { container } = render(<Column offset={2} />);
    expect(container.firstElementChild?.className).toContain('Offset2');
  });

  it('emits the offset class for offset 0 (Radzen parity)', () => {
    const { container } = render(<Column offset={0} />);
    expect(container.firstElementChild?.className).toContain('Offset0');
  });

  it('applies responsive tier classes for xs–xx', () => {
    const { container } = render(
      <Column
        sizeXs={12}
        sizeSm={6}
        sizeMd={6}
        sizeLg={3}
        sizeXl={4}
        sizeXx={6}
        offsetXs={1}
        offsetSm={2}
        offsetXx={3}
      />
    );
    const cls = container.firstElementChild?.className ?? '';
    expect(cls).toContain('xsSize12');
    expect(cls).toContain('smSize6');
    expect(cls).toContain('mdSize6');
    expect(cls).toContain('lgSize3');
    expect(cls).toContain('xlSize4');
    expect(cls).toContain('xxSize6');
    expect(cls).toContain('xsOffset1');
    expect(cls).toContain('smOffset2');
    expect(cls).toContain('xxOffset3');
  });

  it('spreads attributes onto the div', () => {
    const { container } = render(<Column id="c1" data-test="x" />);
    expect(container.firstElementChild?.getAttribute('id')).toBe('c1');
    expect(container.firstElementChild?.getAttribute('data-test')).toBe('x');
  });
});

describe('Column order (Radzen parity)', () => {
  it('applies order first/last as classes', () => {
    const { container, rerender } = render(<Column order="first" />);
    expect(container.firstElementChild?.className).toContain('OrderFirst');
    rerender(<Column order="last" />);
    expect(container.firstElementChild?.className).toContain('OrderLast');
  });

  it('applies numeric order as a class, never inline style', () => {
    const { container } = render(<Column order={5} />);
    const element = container.firstElementChild as HTMLElement;
    expect(element.className).toContain('Order5');
    expect(element.getAttribute('style')).toBeNull();
  });

  it('applies responsive order classes per breakpoint', () => {
    const { container } = render(
      <Column orderSm="last" orderMd={1} orderXl="first" orderXx={2} />
    );
    const classes = container.firstElementChild?.className ?? '';
    expect(classes).toContain('smOrderLast');
    expect(classes).toContain('mdOrder1');
    expect(classes).toContain('xlOrderFirst');
    expect(classes).toContain('xxOrder2');
  });
});

describe('Column validation (Radzen parity)', () => {
  it('throws for size outside 1–12', () => {
    expect(() => render(<Column size={13 as never} />)).toThrow(RangeError);
    expect(() => render(<Column size={0 as never} />)).toThrow(RangeError);
  });

  it('throws for offset outside 0–12', () => {
    expect(() => render(<Column offset={13 as never} />)).toThrow(RangeError);
  });

  it('throws for numeric order outside 0–12', () => {
    expect(() => render(<Column order={99} />)).toThrow(RangeError);
  });
});

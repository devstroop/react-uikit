import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Row } from './Row';

describe('Row', () => {
  it('renders a div with the row class and default wrap', () => {
    const { container } = render(<Row>content</Row>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe('DIV');
    expect(element?.className).toContain('row');
    expect(element?.className).not.toContain('noWrap');
  });

  it('applies align and justify modifier classes', () => {
    const { container } = render(<Row align="center" justify="between" />);
    const element = container.firstElementChild;
    expect(element?.className).toContain('center');
    expect(element?.className).toContain('justify-between');
  });

  it('turns numeric gap into px and passes strings through', () => {
    const { container, rerender } = render(<Row gap={24} />);
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      'column-gap: 24px'
    );
    rerender(<Row gap="2rem" />);
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      'column-gap: 2rem'
    );
  });

  it('does not put an inline gap shorthand on the row (rowGap stays independent)', () => {
    const { container } = render(<Row gap="0.5rem" rowGap={20} />);
    const style = container.firstElementChild?.getAttribute('style') ?? '';
    expect(style).toContain('column-gap: 0.5rem');
    expect(style).not.toMatch(/(^|;\s*)gap:/);
    expect(style).toContain('row-gap: 20px');
  });

  it('maps align="normal" to its class', () => {
    const { container } = render(<Row align="normal" />);
    expect(container.firstElementChild?.className).toContain('normal');
    expect(container.firstElementChild?.className).not.toContain(
      'justify-normal'
    );
  });

  it('treats digits-only strings as px (Radzen Gap parity)', () => {
    const { container, rerender } = render(<Row gap="16" />);
    const element = container.firstElementChild as HTMLElement;
    expect(element.getAttribute('style')).toContain('column-gap: 16px');
    expect(element.className).not.toContain('gap');
    rerender(<Row gap="2rem" />);
    expect(
      (container.firstElementChild as HTMLElement).getAttribute('style')
    ).toContain('column-gap: 2rem');
  });

  it('applies no-wrap when wrap is false', () => {
    const { container } = render(<Row wrap={false} />);
    expect(container.firstElementChild?.className).toContain('noWrap');
  });

  it('spreads attributes onto the div', () => {
    const { container } = render(<Row id="r1" aria-label="row" />);
    const element = container.firstElementChild;
    expect(element?.getAttribute('id')).toBe('r1');
    expect(element?.getAttribute('aria-label')).toBe('row');
  });
});
describe('Row flex parity (#108)', () => {
  it('supports wrap-reverse and nowrap string values', () => {
    const { container, rerender } = render(<Row wrap="wrap-reverse" />);
    expect(container.firstElementChild?.className).toContain('wrapReverse');
    rerender(<Row wrap="nowrap" />);
    expect(container.firstElementChild?.className).toContain('noWrap');
  });

  it('maps justify aliases and new values to classes', () => {
    const { container, rerender } = render(<Row justify="space-between" />);
    expect(container.firstElementChild?.className).toContain(
      'justify-space-between'
    );
    rerender(<Row justify="left" />);
    expect(container.firstElementChild?.className).toContain('justify-left');
    rerender(<Row justify="normal" />);
    expect(container.firstElementChild?.className).toContain('justify-normal');
  });

  it('applies rowGap as inline style', () => {
    const { container, rerender } = render(<Row rowGap={8} />);
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      'row-gap: 8px'
    );
    rerender(<Row rowGap="12" />);
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      'row-gap: 12px'
    );
  });
});
describe('Row column-gap variable (grid parity)', () => {
  it('syncs --dx-col-gap inline for explicit gaps', () => {
    const { container, rerender } = render(<Row gap={24} />);
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      '--dx-col-gap: 24px'
    );
    rerender(<Row gap="2rem" />);
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      '--dx-col-gap: 2rem'
    );
  });

  it('leaves --dx-col-gap to the stylesheet when gap is unset', () => {
    const { container } = render(<Row />);
    const element = container.firstElementChild as HTMLElement;
    expect(element.className).toContain('row');
    expect(element.getAttribute('style')).toBeNull();
  });
});

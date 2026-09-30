import { render } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { Icon, iconNames, type IconName } from './Icon';

describe('Icon', () => {
  it('renders a ligature span with aria-hidden by default', () => {
    const { container } = render(<Icon icon="check" />);
    const el = container.querySelector('span');
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent('check');
    expect(el).toHaveAttribute('aria-hidden', 'true');
  });

  it('defaults to the --dx-icon-size token (no tier class, no inline size)', () => {
    const { container } = render(<Icon icon="check" />);
    const el = container.querySelector('span');
    expect(el).toHaveClass(/icon/);
    expect(el?.getAttribute('style')).toBeNull();
  });

  it('maps size tiers to font-size scale classes', () => {
    const { container, rerender } = render(<Icon icon="person" size="xs" />);
    expect(container.querySelector('span')).toHaveClass(/xs/);
    rerender(<Icon icon="person" size="xl" />);
    expect(container.querySelector('span')).toHaveClass(/xl/);
  });

  it('honors numeric size as px font-size', () => {
    const { container } = render(<Icon icon="person" size={24} />);
    expect(container.querySelector('span')).toHaveStyle({ fontSize: '24px' });
  });

  it('applies the color prop as ink', () => {
    const { container } = render(<Icon icon="person" color="red" />);
    expect(container.querySelector('span')).toHaveStyle({ color: 'red' });
  });

  it('merges className and forwards style, ref, and aria overrides', () => {
    const ref = createRef<HTMLSpanElement>();
    const { container } = render(
      <Icon
        icon="info"
        aria-hidden={false}
        role="img"
        className="extra"
        style={{ fontWeight: 700 }}
        ref={ref}
      />
    );
    const el = container.querySelector('span');
    expect(el).toHaveAttribute('aria-hidden', 'false');
    expect(el).toHaveAttribute('role', 'img');
    expect(el).toHaveClass('extra');
    expect(el).toHaveStyle({ fontWeight: '700' });
    expect(ref.current).toBe(el);
  });

  it('accepts unlisted ligatures beyond the curated union', () => {
    const custom: IconName = 'local_shipping';
    const { container } = render(<Icon icon={custom} />);
    expect(container.querySelector('span')).toHaveTextContent('local_shipping');
  });

  it('curates the documented ligature set', () => {
    for (const name of [
      'menu',
      'close',
      'search',
      'light_mode',
      'dark_mode',
      'visibility',
      'visibility_off',
    ] as const) {
      expect(iconNames).toContain(name);
    }
  });
});

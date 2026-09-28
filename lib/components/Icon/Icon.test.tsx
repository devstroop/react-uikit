import { render } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { Icon, iconNames, type IconName } from './Icon';
import { iconSets, iconSetNames } from './sets';

describe('Icon', () => {
  it('renders an inline svg with aria-hidden and focusable=false by default', () => {
    const { container } = render(<Icon name="check" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
  });

  it('applies default size (md tier), viewBox, and strokeWidth', () => {
    const { container } = render(<Icon name="check" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('width');
    expect(svg).toHaveClass(/md/);
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('stroke-width', '2');
  });

  it('maps size tiers to the font-size scale classes', () => {
    const { container, rerender } = render(<Icon name="user" size="xs" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass(/xs/);
    rerender(<Icon name="user" size="xl" />);
    expect(container.querySelector('svg')).toHaveClass(/xl/);
  });

  it('honors numeric size and strokeWidth props', () => {
    const { container } = render(
      <Icon name="user" size={24} strokeWidth={1.5} />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('stroke-width', '1.5');
  });

  it('renders the glyph path for the requested name', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('allows overriding aria-hidden via props', () => {
    const { container } = render(
      <Icon name="info" aria-hidden={false} role="img" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'false');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('forwards className and a ref to the svg', () => {
    const ref = createRef<SVGSVGElement>();
    const { container } = render(
      <Icon name="close" ref={ref} className="my-icon" />
    );
    expect(ref.current).toBe(container.querySelector('svg'));
    expect(ref.current).toHaveClass('my-icon');
  });

  it('exports 43 icon names', () => {
    expect(iconNames).toHaveLength(43);
    expect(iconNames).toContain('check');
    expect(iconNames).toContain('chevron-down');
    expect(iconNames).toContain('settings');
    expect(iconNames).toContain('link');
    expect(iconNames).toContain('star');
    expect(iconNames).toContain('star-outline');
    expect(iconNames).toContain('ban');
  });
});

describe('Icon with namespaced sets', () => {
  it('renders a stroke-set glyph with legacy root defaults', () => {
    const { container } = render(<Icon name="lucide:home" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('stroke', 'currentColor');
    expect(svg).toHaveAttribute('stroke-width', '2');
    expect(container.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('renders fill-set glyphs with fill=currentColor and no stroke', () => {
    const { container } = render(<Icon name="mdi:home" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'currentColor');
    expect(svg).toHaveAttribute('stroke', 'none');
    expect(container.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('uses the set default strokeWidth unless overridden', () => {
    const { container, rerender } = render(<Icon name="heroicons:check" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'stroke-width',
      '1.5'
    );
    rerender(<Icon name="heroicons:check" strokeWidth={3} />);
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '3');
  });

  it('applies per-glyph viewBox overrides from the set', () => {
    const { container } = render(<Icon name="fa6-solid:star" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'viewBox',
      '0 0 576 512'
    );
    expect(container.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('keeps size tiers and ref forwarding for set glyphs', () => {
    const ref = createRef<SVGSVGElement>();
    const { container } = render(
      <Icon name="ph:house" size="lg" ref={ref} className="brand" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass(/lg/);
    expect(svg).toHaveClass('brand');
    expect(ref.current).toBe(svg);
  });

  it('uses the real 16-unit grid for bootstrap-icons, not 24', () => {
    const { container } = render(<Icon name="bi:check" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'viewBox',
      '0 0 16 16'
    );
    expect(container.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('resolves octicon dimensions against its 16-unit height', () => {
    const { container, rerender } = render(<Icon name="octicon:check" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'viewBox',
      '0 0 12 16'
    );
    rerender(<Icon name="octicon:eye-off" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'viewBox',
      '0 0 16 14'
    );
    rerender(<Icon name="octicon:home" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'viewBox',
      '0 0 16 16'
    );
  });

  it('renders an empty svg for an unknown glyph in a known set', () => {
    const { container } = render(<Icon name="mdi:definitely-not-real" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('path')).toHaveLength(0);
  });

  it('renders an empty svg for an unknown prefix', () => {
    const { container } = render(<Icon name={'nope:home' as IconName} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('path')).toHaveLength(0);
  });

  it('exposes a well-formed registry of 16 sets', () => {
    expect(iconSetNames).toHaveLength(16);
    expect(iconSetNames).toContain('feather');
    expect(iconSetNames).toContain('mdi');
    expect(iconSetNames).toContain('fa6-brands');
    for (const prefix of iconSetNames) {
      const set = iconSets[prefix];
      const glyphs = Object.keys(set.icons);
      expect(glyphs.length).toBeGreaterThan(0);
      expect(['stroke', 'fill']).toContain(set.style);
      expect(set.viewBox).toMatch(/^0 0 \d+ \d+$/);
      for (const body of Object.values(set.icons)) {
        expect(body.trimStart().startsWith('<')).toBe(true);
        expect(body).not.toContain('<svg');
        expect(body).not.toContain('\n');
      }
      if (set.viewBoxBy) {
        for (const vb of Object.values(set.viewBoxBy)) {
          expect(vb).toMatch(/^0 0 \d+ \d+$/);
        }
      }
    }
  });

  it('keeps feather in sync with the legacy glyph list', () => {
    const feather = iconSets.feather;
    for (const name of iconNames) {
      expect(feather.icons[name]).toBeTruthy();
    }
  });
});

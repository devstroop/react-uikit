import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LinearGauge } from './LinearGauge';

describe('LinearGauge', () => {
  it('renders meter semantics with ticks and value', () => {
    const { container } = render(
      <LinearGauge value={40} min={0} max={100} ariaLabel="Load" />
    );
    const meter = screen.getByRole('meter', { name: 'Load' });
    expect(meter).toHaveAttribute('aria-valuenow', '40');
    expect(meter).toHaveAttribute('aria-valuemin', '0');
    expect(meter).toHaveAttribute('aria-valuemax', '100');
    // 5 default ticks
    expect(container.querySelectorAll('text').length).toBeGreaterThanOrEqual(5);
    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('fills proportionally to the value', () => {
    const { container, rerender } = render(
      <LinearGauge value={25} min={0} max={100} />
    );
    const widths = () =>
      [...container.querySelectorAll('rect')]
        .filter((r) => r.getAttribute('fill') === 'var(--dx-primary-color)')
        .map((r) => Number(r.getAttribute('width')));
    const before = Math.max(...widths());
    rerender(<LinearGauge value={75} min={0} max={100} />);
    const after = Math.max(...widths());
    // 75/25 = 3x the fill width (main=280, pad=8 -> 66 vs 198)
    expect(after / before).toBeCloseTo(3, 2);
  });

  it('renders range bands under the fill', () => {
    const { container } = render(
      <LinearGauge
        value={80}
        min={0}
        max={100}
        ranges={[{ from: 0, to: 50, color: '#00ff00' }]}
      />
    );
    const band = [...container.querySelectorAll('rect')].find(
      (r) => r.getAttribute('fill') === '#00ff00'
    );
    expect(band).not.toBeUndefined();
    expect(band?.getAttribute('opacity')).toBe('0.35');
  });

  it('vertical grows bottom to top', () => {
    const { container } = render(
      <LinearGauge value={0} min={0} max={100} orientation="vertical" />
    );
    const svg = container.querySelector('svg')!;
    // vertical shell is taller than wide
    expect(Number(svg.getAttribute('height'))).toBeGreaterThan(
      Number(svg.getAttribute('width'))
    );
  });

  it('clamps outside values', () => {
    const { container } = render(<LinearGauge value={250} min={0} max={100} />);
    const meter = screen.getByRole('meter');
    expect(meter).toHaveAttribute('aria-valuenow', '250');
    // fill capped at the track end (main - pad = 272)
    const widths = [...container.querySelectorAll('rect')].map((r) =>
      Number(r.getAttribute('width'))
    );
    expect(Math.max(...widths)).toBeLessThanOrEqual(272);
  });
});

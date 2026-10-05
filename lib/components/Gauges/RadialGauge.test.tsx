import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RadialGauge } from './RadialGauge';

describe('RadialGauge', () => {
  it('renders meter semantics with ticks and value', () => {
    const { container } = render(
      <RadialGauge value={40} min={0} max={100} ariaLabel="Speed" />
    );
    const meter = screen.getByRole('meter', { name: 'Speed' });
    expect(meter).toHaveAttribute('aria-valuenow', '40');
    expect(meter).toHaveAttribute('aria-valuemin', '0');
    expect(meter).toHaveAttribute('aria-valuemax', '100');
    // 8 default ticks + value label
    expect(container.querySelectorAll('text').length).toBeGreaterThanOrEqual(8);
    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('points the needle by value fraction', () => {
    const needle = () =>
      [...container.querySelectorAll('line')].find(
        (l) => l.getAttribute('stroke-width') === '4'
      )!;
    const { container, rerender } = render(
      <RadialGauge value={0} min={0} max={100} />
    );
    // angle 0 = top: (100, 100 - 64)
    expect(needle().getAttribute('x2')).toBe('100');
    expect(needle().getAttribute('y2')).toBe('36');
    rerender(<RadialGauge value={25} min={0} max={100} />);
    // quarter turn = right: (100 + 64, 100), within the 359.999 paint fudge
    expect(Number(needle().getAttribute('x2'))).toBeCloseTo(164, 0);
    expect(Number(needle().getAttribute('y2'))).toBeCloseTo(100, 0);
  });

  it('renders range bands and extra pointers', () => {
    const { container } = render(
      <RadialGauge
        value={80}
        min={0}
        max={100}
        ranges={[{ from: 0, to: 50, color: '#00ff00' }]}
        pointers={[{ value: 90, color: '#ff0000' }]}
      />
    );
    const band = [...container.querySelectorAll('path')].find(
      (p) => p.getAttribute('stroke') === '#00ff00'
    );
    expect(band).not.toBeUndefined();
    const needles = [...container.querySelectorAll('line')].filter(
      (l) => l.getAttribute('stroke-width') === '4'
    );
    // value needle + one extra pointer
    expect(needles.length).toBe(2);
  });

  it('clamps outside values', () => {
    render(<RadialGauge value={250} min={0} max={100} />);
    expect(screen.getByRole('meter')).toHaveAttribute('aria-valuenow', '250');
  });

  it('hides ticks and value on demand', () => {
    const { container } = render(
      <RadialGauge
        value={40}
        ticks={{ count: 0, showLabels: false }}
        showValue={false}
      />
    );
    expect(container.querySelectorAll('text').length).toBe(0);
  });
});

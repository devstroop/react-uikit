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

  it('labels ticks with display text, not raw floats', () => {
    // GAP-007: an 8-tick split of any range lands on repeating decimals, and
    // the unrounded strings collided around the arc.
    const { container } = render(
      <RadialGauge value={2.5} min={0} max={5} ticks={{ count: 8 }} />
    );
    expect(
      [...container.querySelectorAll('svg text')].map((t) => t.textContent)
    ).toEqual(['0', '0.71', '1.43', '2.14', '2.86', '3.57', '4.29', '5']);
  });
  it('groups large tick values', () => {
    const { container } = render(
      <RadialGauge value={9000} min={0} max={19940} ticks={{ count: 8 }} />
    );
    expect(
      [...container.querySelectorAll('svg text')].map((t) => t.textContent)
    ).toEqual([
      '0',
      '2,848.57',
      '5,697.14',
      '8,545.71',
      '11,394.29',
      '14,242.86',
      '17,091.43',
      '19,940',
    ]);
  });

  it('keeps whole-number ticks bare', () => {
    const { container } = render(
      <RadialGauge value={40} min={0} max={100} ticks={{ count: 5 }} />
    );
    expect(
      [...container.querySelectorAll('svg text')].map((t) => t.textContent)
    ).toEqual(['0', '25', '50', '75', '100']);
  });

  it('places ticks on an explicit step, Radzen Scale Step parity', () => {
    // The reference dashboard asks Radzen for Step=1 on a 0-5 scale; the even
    // 8-mark split could not land on integers.
    const { container } = render(
      <RadialGauge value={2.5} min={0} max={5} ticks={{ step: 1 }} />
    );
    expect(
      [...container.querySelectorAll('svg text')].map((t) => t.textContent)
    ).toEqual(['0', '1', '2', '3', '4', '5']);
  });

  it('stops stepping at max', () => {
    const { container } = render(
      <RadialGauge value={9} min={0} max={9} ticks={{ step: 2 }} />
    );
    expect(
      [...container.querySelectorAll('svg text')].map((t) => t.textContent)
    ).toEqual(['0', '2', '4', '6', '8']);
  });

  it('hides the scale on count 0 even with a step', () => {
    const { container } = render(
      <RadialGauge value={40} ticks={{ count: 0, step: 10 }} />
    );
    expect(container.querySelectorAll('svg text').length).toBe(0);
  });
});

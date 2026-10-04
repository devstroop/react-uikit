import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ArcGauge } from './ArcGauge';

describe('ArcGauge', () => {
  it('renders meter semantics with the value range', () => {
    render(<ArcGauge value={40} min={0} max={100} ariaLabel="Speed" />);
    const meter = screen.getByRole('meter', { name: 'Speed' });
    expect(meter).toHaveAttribute('aria-valuenow', '40');
    expect(meter).toHaveAttribute('aria-valuemin', '0');
    expect(meter).toHaveAttribute('aria-valuemax', '100');
    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('draws a partial value arc below the full range', () => {
    const { container } = render(<ArcGauge value={50} min={0} max={100} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
    const track = paths[0]!.getAttribute('d');
    const value = paths[1]!.getAttribute('d');
    expect(track).not.toBe(value);
  });

  it('draws no value arc at the minimum and clamps above max', () => {
    const { container, rerender } = render(
      <ArcGauge value={0} min={0} max={100} />
    );
    expect(container.querySelectorAll('path').length).toBe(1);
    rerender(<ArcGauge value={250} min={0} max={100} />);
    expect(container.querySelectorAll('path').length).toBe(2);
  });

  it('picks stepped stop colors by fraction', () => {
    const stops = [
      { offset: 0, color: '#00ff00' },
      { offset: 0.75, color: '#ff0000' },
    ];
    const { container, rerender } = render(
      <ArcGauge value={50} min={0} max={100} colorStops={stops} />
    );
    expect(container.querySelectorAll('path')[1]?.getAttribute('stroke')).toBe(
      '#00ff00'
    );
    rerender(<ArcGauge value={90} min={0} max={100} colorStops={stops} />);
    expect(container.querySelectorAll('path')[1]?.getAttribute('stroke')).toBe(
      '#ff0000'
    );
  });

  it('hides the value label on demand and formats it', () => {
    const { container, rerender } = render(
      <ArcGauge value={12.345} formatValue={(v) => `${v.toFixed(1)}%`} />
    );
    expect(screen.getByText('12.3%')).toBeInTheDocument();
    rerender(<ArcGauge value={12.345} showValue={false} />);
    expect(container.textContent).not.toContain('12.3');
  });
});

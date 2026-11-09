import { describe, expect, it } from 'vitest';
import { axisIntervals, niceScale, sliceColor } from './chart-shared';
import type { ChartSeries } from './chart-shared';

const series = (over: Partial<ChartSeries> = {}): ChartSeries =>
  ({
    type: 'pie',
    data: [],
    categoryProperty: 'cat',
    valueProperty: 'val',
    ...over,
  }) as ChartSeries;

describe('niceScale', () => {
  it('snaps a wide axis to a readable tick count', () => {
    // GAP-005: the revenue axis (0-3,100) used to derive step 100 and print
    // 32 labels on top of each other.
    const scale = niceScale(0, 3100);
    expect(scale.step).toBe(1000);
    expect(scale.ticks).toEqual([0, 1000, 2000, 3000, 4000]);
  });

  it('reproduces the step the Radzen reference derives', () => {
    // Measured off parity-blazor: 0-3,100 -> $0..$4,000 and 0-19,940 ->
    // $0..$20,000, both at 5 labels. Those are 300px charts, so the axis spans
    // 244px and Radzen asks for ceil(244/100) = 3 intervals.
    expect(niceScale(0, 3100, undefined, 3).step).toBe(1000);
    expect(niceScale(0, 19940, undefined, 3).step).toBe(5000);
    expect(niceScale(0, 19940, undefined, 3).ticks).toEqual([
      0, 5000, 10000, 15000, 20000,
    ]);
  });

  it('only ever steps by {1, 2, 5, 10} x 10^k', () => {
    const mantissa = (n: number) =>
      n / Math.pow(10, Math.floor(Math.log10(Math.abs(n))));
    const axes: [number, number][] = [
      [0, 7.4],
      [0, 130],
      [0, 420],
      [0, 1],
      [0, 0.003],
      [-45, 62],
      [980, 1010],
      [0, 12],
    ];
    for (const [min, max] of axes) {
      const step = niceScale(min, max).step;
      const m = mantissa(step);
      expect([1, 2, 5, 10], `step ${step} of ${min}-${max}`).toContainEqual(m);
    }
  });

  it('expands the domain to whole steps, so the tick count can exceed the ask', () => {
    // Radzen floors/ceils onto the nice step after choosing it
    // (`LinearScale.cs:140,145`), which is why -45..62 lands on 20 and grows to
    // eight labels rather than inventing a 2.5 step to stay at five.
    const scale = niceScale(-45, 62);
    expect(scale.step).toBe(20);
    expect(scale.min).toBe(-60);
    expect(scale.max).toBe(80);
    expect(scale.ticks).toHaveLength(8);
  });

  it('spaces ticks by pixels, the way TickDistance = 100 does', () => {
    expect(axisIntervals(100)).toBe(1);
    expect(axisIntervals(184)).toBe(2);
    expect(axisIntervals(244)).toBe(3);
    expect(axisIntervals(344)).toBe(4);
    expect(axisIntervals(0)).toBe(1);
  });

  it('snaps to {1, 2, 5} per decade, never to 2.5', () => {
    // rough = 3 for 0-12 at four intervals: Radzen rounds 3 up to 5, so a 2.5
    // step is not something the reference can draw.
    expect(niceScale(0, 12).step).toBe(5);
    expect(niceScale(0, 130).step).toBe(50);
    expect(niceScale(0, 100).step).toBe(20);
  });

  it('honors an explicit step instead of snapping', () => {
    const scale = niceScale(0, 100, 20);
    expect(scale.ticks).toEqual([0, 20, 40, 60, 80, 100]);
    expect(niceScale(0, 7, 3).step).toBe(3);
  });

  it('rounds fractional ticks without accumulating drift', () => {
    const scale = niceScale(0, 1, 0.1);
    expect(scale.ticks).toHaveLength(11);
    expect(scale.ticks.at(-1)).toBe(1);
    expect(scale.ticks).toContain(0.3);
  });

  it('flat data still gives a finite axis', () => {
    // A constant series collapses min onto max; the scale must not emit an
    // empty or NaN tick list, which is what Chart's own divide guard expects.
    const scale = niceScale(5, 5);
    expect(scale.ticks.length).toBeGreaterThanOrEqual(1);
    for (const t of scale.ticks) expect(Number.isFinite(t)).toBe(true);
    expect(scale.step).toBeGreaterThan(0);
  });
});

describe('sliceColor', () => {
  it('walks the palette by category index', () => {
    expect(sliceColor(series(), 0)).toBe('var(--dx-palette-0-color)');
    expect(sliceColor(series(), 1)).toBe('var(--dx-palette-1-color)');
    expect(sliceColor(series(), 6)).toBe('var(--dx-palette-0-color)');
  });

  it('respects an explicit series color', () => {
    expect(sliceColor(series({ color: '#123456' }), 3)).toBe('#123456');
  });
});

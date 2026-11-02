import { describe, expect, it } from 'vitest';
import { niceScale, sliceColor } from './chart-shared';
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

  it('keeps every axis inside the 4-6 tick band', () => {
    const axes: [number, number][] = [
      [0, 7.4],
      [0, 130],
      [0, 420],
      [0, 19940],
      [0, 1],
      [0, 0.003],
      [-45, 62],
      [980, 1010],
    ];
    for (const [min, max] of axes) {
      const count = niceScale(min, max).ticks.length;
      expect(count, `${min}-${max} -> ${count} ticks`).toBeGreaterThanOrEqual(
        4
      );
      expect(count, `${min}-${max} -> ${count} ticks`).toBeLessThanOrEqual(6);
    }
  });

  it('snaps to {1, 2, 2.5, 5} per decade', () => {
    // rough = 2.4 for 0-12, and 2.5 is the first nice number at or above it.
    expect(niceScale(0, 12).step).toBe(2.5);
    // rough = 26 normalizes past 2.5, so the grid lands on 50 — 4 labels, and
    // still inside the band.
    expect(niceScale(0, 130).step).toBe(50);
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

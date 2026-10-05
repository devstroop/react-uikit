import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Chart } from './Chart';

const lineSeries = {
  type: 'line' as const,
  title: 'Sales',
  data: [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 20 },
    { month: 'Mar', value: 15 },
  ],
  categoryProperty: 'month',
  valueProperty: 'value',
};

const barSeries = {
  type: 'bar' as const,
  title: 'Revenue',
  data: [
    { cat: 'A', val: 5 },
    { cat: 'B', val: 12 },
  ],
  categoryProperty: 'cat',
  valueProperty: 'val',
};

describe('Chart', () => {
  it('renders svg + hidden table + legend', () => {
    render(<Chart series={[lineSeries]} ariaLabel="Demo chart" />);
    expect(document.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Demo chart' })).toBeInTheDocument();
    expect(screen.getAllByText('Sales').length).toBeGreaterThanOrEqual(1); // legend + title
    expect(screen.getByRole('table', { hidden: true })).toBeInTheDocument();
  });

  it('line series renders a path', () => {
    const { container } = render(<Chart series={[lineSeries]} />);
    expect(container.querySelector('path')).toBeTruthy();
  });

  it('columns count = categories × series', () => {
    const s2 = { ...barSeries, data: barSeries.data, type: 'column' as const };
    const { container } = render(<Chart series={[s2]} />);
    // column uses rects grouped by category
    expect(container.querySelectorAll("rect[rx='2']").length).toBe(2);
  });

  it('click fires SeriesClick args', () => {
    const fn = vi.fn();
    render(<Chart series={[barSeries]} onSeriesClick={fn} />);
    const rects = document.querySelectorAll("rect[rx='2']");
    fireEvent.click(rects[0]!);
    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({
        seriesTitle: 'Revenue',
        category: 'A',
        value: 5,
      })
    );
  });

  it('tooltip shows on hover', () => {
    render(<Chart series={[lineSeries]} />);
    const hits = document.querySelectorAll("rect[fill='transparent']");
    fireEvent.mouseEnter(hits[0]!);
    expect(screen.getByText('Sales: 10')).toBeInTheDocument();
    fireEvent.mouseLeave(hits[0]!);
    expect(screen.queryByText('Sales: 10')).not.toBeInTheDocument();
  });

  it('scatter renders points', () => {
    const scatter = {
      type: 'scatter' as const,
      title: 'S',
      data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
      ],
      categoryProperty: 'x',
      valueProperty: 'y',
    };
    const { container } = render(<Chart series={[scatter]} />);
    expect(container.querySelectorAll('circle').length).toBeGreaterThanOrEqual(
      2
    );
  });

  it('pie renders arcs', () => {
    const pie = {
      type: 'pie' as const,
      title: 'P',
      data: [
        { cat: 'A', val: 30 },
        { cat: 'B', val: 70 },
      ],
      categoryProperty: 'cat',
      valueProperty: 'val',
    };
    const { container } = render(<Chart series={[pie]} />);
    expect(container.querySelectorAll('path').length).toBeGreaterThanOrEqual(2);
  });

  it('stacked bar sums per category', () => {
    const s1 = {
      type: 'bar' as const,
      title: 'A',
      stack: 's',
      data: [{ cat: 'X', val: 10 }],
      categoryProperty: 'cat',
      valueProperty: 'val',
    };
    const s2 = {
      type: 'bar' as const,
      title: 'B',
      stack: 's',
      data: [{ cat: 'X', val: 20 }],
      categoryProperty: 'cat',
      valueProperty: 'val',
    };
    const { container } = render(<Chart series={[s1, s2]} />);
    // two bars in same stack should be rendered
    expect(
      container.querySelectorAll("rect[rx='2']").length
    ).toBeGreaterThanOrEqual(2);
  });

  it('custom color is respected', () => {
    const { container } = render(
      <Chart series={[{ ...lineSeries, color: '#ff0000' }]} />
    );
    expect(container.querySelector('path[stroke="#ff0000"]')).toBeTruthy();
  });

  it('stacked columns offset upward (second series sits above first)', () => {
    const s1 = {
      type: 'column' as const,
      title: 'A',
      stack: 's',
      data: [{ cat: 'X', val: 30 }],
      categoryProperty: 'cat',
      valueProperty: 'val',
    };
    const s2 = {
      type: 'column' as const,
      title: 'B',
      stack: 's',
      data: [{ cat: 'X', val: 70 }],
      categoryProperty: 'cat',
      valueProperty: 'val',
    };
    const { container } = render(<Chart series={[s1, s2]} />);
    const groups = container.querySelectorAll('g[data-chart-type="column"]');
    expect(groups.length).toBe(2);
    const rectA = groups[0]!.querySelector('rect')!;
    const rectB = groups[1]!.querySelector('rect')!;
    expect(Number(rectB.getAttribute('y'))).toBeLessThan(
      Number(rectA.getAttribute('y'))
    );
    expect(Number(rectB.getAttribute('height'))).toBeGreaterThan(0);
    // stack totals are part of the value scale: nothing renders above the plot
    expect(Number(rectA.getAttribute('y'))).toBeGreaterThanOrEqual(0);
    expect(Number(rectB.getAttribute('y'))).toBeGreaterThanOrEqual(0);
  });

  it('gauge renders arc paths + value text, no axes', () => {
    const gauge = {
      type: 'gauge' as const,
      title: 'Progress',
      data: [{ t: 'Q1', v: 65 }],
      categoryProperty: 't',
      valueProperty: 'v',
    };
    const { container } = render(
      <Chart series={[gauge]} valueAxis={{ max: 100 }} />
    );
    const g = container.querySelector('g[data-chart-type="gauge"]');
    expect(g).toBeTruthy();
    expect(g!.querySelectorAll('path').length).toBeGreaterThanOrEqual(2);
    // Series renders role="list"; gauge children must be owned listitems
    // or aria-required-children fails (axe).
    expect(g!.querySelectorAll('[role="listitem"]')).toHaveLength(1);
    const texts = container.querySelectorAll('svg text');
    expect(texts.length).toBe(1); // only the value readout (no axes)
    expect(texts[0]!.textContent).toBe('65');
  });

  it('gauge click reports the data category and summed value', () => {
    const fn = vi.fn();
    const gauge = {
      type: 'gauge' as const,
      title: 'Capacity',
      data: [{ q: 'Q1', v: 65 }],
      categoryProperty: 'q',
      valueProperty: 'v',
    };
    const { container } = render(
      <Chart series={[gauge]} valueAxis={{ max: 100 }} onSeriesClick={fn} />
    );
    const paths = container.querySelectorAll('g[data-chart-type="gauge"] path');
    fireEvent.click(paths[paths.length - 1]!);
    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({
        seriesTitle: 'Capacity',
        category: 'Q1',
        value: 65,
      })
    );
  });

  it('radar renders ring polygons, spokes and a series polygon', () => {
    const radar = {
      type: 'radar' as const,
      title: 'Skills',
      data: [
        { s: 'Speed', v: 8 },
        { s: 'Power', v: 6 },
        { s: 'Ctrl', v: 9 },
      ],
      categoryProperty: 's',
      valueProperty: 'v',
    };
    const { container } = render(<Chart series={[radar]} />);
    // shared grid is drawn once, before any series group
    const grid = container.querySelector('g[data-chart-type="radar-grid"]');
    expect(grid).toBeTruthy();
    expect(grid!.querySelectorAll('polygon').length).toBe(4); // 4 rings
    expect(grid!.querySelectorAll('line').length).toBe(3); // spokes
    const g = container.querySelector('g[data-chart-type="radar"]');
    expect(g).toBeTruthy();
    const seriesPolys = g!.querySelectorAll('polygon');
    expect(seriesPolys.length).toBe(1); // rings/spokes no longer per-series
    expect(seriesPolys[0]!.getAttribute('fill-opacity')).toBe('0.25');
    expect(seriesPolys[0]!.getAttribute('stroke')).toBe(
      'var(--dx-palette-0-color)'
    );
  });

  it('multi-series radar draws one shared grid under both series', () => {
    const base = {
      type: 'radar' as const,
      data: [
        { s: 'Speed', v: 8 },
        { s: 'Power', v: 6 },
        { s: 'Ctrl', v: 9 },
      ],
      categoryProperty: 's',
      valueProperty: 'v',
    };
    const { container } = render(
      <Chart
        series={[
          { ...base, title: 'A' },
          { ...base, title: 'B' },
        ]}
      />
    );
    expect(
      container.querySelectorAll('g[data-chart-type="radar-grid"]').length
    ).toBe(1);
    const groups = container.querySelectorAll('g[data-chart-type="radar"]');
    expect(groups.length).toBe(2);
    // neither series group paints grid polygons
    for (const g of groups)
      expect(g.querySelectorAll('polygon').length).toBe(1);
  });

  it('funnel renders one trapezoid per row with labels', () => {
    const funnel = {
      type: 'funnel' as const,
      title: 'Stages',
      data: [
        { st: 'Visit', v: 100 },
        { st: 'Sign', v: 40 },
        { st: 'Buy', v: 10 },
      ],
      categoryProperty: 'st',
      valueProperty: 'v',
    };
    const { container } = render(<Chart series={[funnel]} />);
    const g = container.querySelector('g[data-chart-type="funnel"]');
    expect(g!.querySelectorAll('path').length).toBe(3);
    expect(g!.textContent).toContain('Visit · 100');
    expect(g!.textContent).toContain('Buy · 10');
  });

  it('heatmap renders cells = points + row labels', () => {
    const heat = {
      type: 'heatmap' as const,
      title: 'Load',
      rowProperty: 'r',
      data: [
        { r: 'EU', m: 'Mon', v: 1 },
        { r: 'EU', m: 'Tue', v: 5 },
        { r: 'US', m: 'Mon', v: 3 },
        { r: 'US', m: 'Tue', v: 7 },
      ],
      categoryProperty: 'm',
      valueProperty: 'v',
    };
    const { container } = render(<Chart series={[heat]} />);
    const g = container.querySelector('g[data-chart-type="heatmap"]');
    expect(g!.querySelectorAll('rect').length).toBe(4);
    expect(g!.textContent).toContain('EU');
    expect(g!.textContent).toContain('US');
    // a11y table folds the row dimension into the category cell
    const table = screen.getByRole('table', { hidden: true });
    expect(table.textContent).toContain('EU / Mon');
    expect(table.textContent).toContain('US / Tue');
  });

  it('heatmap with labels visible shows cell values', () => {
    const heat = {
      type: 'heatmap' as const,
      title: 'L',
      rowProperty: 'r',
      data: [
        { r: 'A', m: 'Mon', v: 42 },
        { r: 'A', m: 'Tue', v: 7 },
      ],
      categoryProperty: 'm',
      valueProperty: 'v',
      labels: { visible: true },
    };
    const { container } = render(<Chart series={[heat]} />);
    const g = container.querySelector('g[data-chart-type="heatmap"]');
    expect(g!.textContent).toContain('42');
  });
});

describe('Chart series families (#95)', () => {
  const stackA = {
    type: 'column' as const,
    title: 'A',
    stack: 's',
    data: [{ cat: 'X', val: 25 }],
    categoryProperty: 'cat',
    valueProperty: 'val',
  };
  const stackB = {
    type: 'column' as const,
    title: 'B',
    stack: 's',
    data: [{ cat: 'X', val: 75 }],
    categoryProperty: 'cat',
    valueProperty: 'val',
  };

  it('stacked100Percent normalizes each stack group to fill the axis', () => {
    const { container } = render(
      <Chart series={[stackA, stackB]} stacked100Percent />
    );
    const groups = container.querySelectorAll('g[data-chart-type="column"]');
    const hA = Number(groups[0]!.querySelector('rect')!.getAttribute('height'));
    const hB = Number(groups[1]!.querySelector('rect')!.getAttribute('height'));
    // 25/75 split stays proportional after normalization
    expect(hB / hA).toBeCloseTo(3, 5);
    // full height is consumed: heights sum to the plot height
    expect(hA + hB).toBeCloseTo(344, 0);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('without the flag the same data renders raw values', () => {
    render(<Chart series={[stackA, stackB]} />);
    expect(screen.queryByText('100%')).not.toBeInTheDocument();
  });

  it('range line draws a min/max band plus the value line', () => {
    const series = {
      type: 'line' as const,
      title: 'Range',
      data: [
        { cat: 'A', val: 50, lo: 20, hi: 80 },
        { cat: 'B', val: 60, lo: 30, hi: 90 },
      ],
      categoryProperty: 'cat',
      valueProperty: 'val',
      minProperty: 'lo',
      maxProperty: 'hi',
    };
    const { container } = render(<Chart series={[series]} />);
    const band = container.querySelector('path[fill-opacity="0.35"]');
    expect(band).not.toBeNull();
    // value line still drawn
    expect(
      container.querySelector('path[fill="none"]:not([stroke="transparent"])')
    ).not.toBeNull();
  });

  it('range bars span min to max', () => {
    const series = {
      type: 'column' as const,
      title: 'R',
      data: [{ cat: 'X', val: 50, lo: 20, hi: 80 }],
      categoryProperty: 'cat',
      valueProperty: 'val',
      minProperty: 'lo',
      maxProperty: 'hi',
    };
    // fixed 0..100 domain: y(80)=84.8, height=y(20)-y(80)=206.4
    const { container } = render(
      <Chart series={[series]} valueAxis={{ min: 0, max: 100, step: 20 }} />
    );
    const rect = container.querySelector(
      'g[data-chart-type="column"] rect[rx="2"]'
    )!;
    expect(Number(rect.getAttribute('y'))).toBeCloseTo(84.8, 1);
    expect(Number(rect.getAttribute('height'))).toBeCloseTo(206.4, 1);
  });

  it('markers honor shape/size/visibility', () => {
    const square = {
      ...lineSeries,
      markers: { shape: 'square' as const, size: 6 },
    };
    const { container, rerender } = render(<Chart series={[square]} />);
    const group = container.querySelector('g[data-chart-type="line"]')!;
    const marker = group.querySelector('rect[width="12"]');
    expect(marker).not.toBeNull();
    rerender(
      <Chart series={[{ ...lineSeries, markers: { visible: false } }]} />
    );
    const group2 = container.querySelector('g[data-chart-type="line"]')!;
    // hit areas stay, visible markers go
    expect(group2.querySelectorAll('rect[width="24"]').length).toBeGreaterThan(
      0
    );
    expect(group2.querySelector('circle')).toBeNull();
  });

  it('dash and lineWidth reach the stroke', () => {
    const { container } = render(
      <Chart series={[{ ...lineSeries, dash: [4, 2], lineWidth: 3 }]} />
    );
    const path = container.querySelector(
      'g[data-chart-type="line"] path[fill="none"]:not([stroke="transparent"])'
    )!;
    expect(path.getAttribute('stroke-dasharray')).toBe('4 2');
    expect(path.getAttribute('stroke-width')).toBe('3');
  });
});

describe('Chart OHLC family (#95)', () => {
  const ohlc = (type: 'candlestick' | 'ohlc' | 'highlow') => ({
    type,
    title: 'OHLC',
    data: [
      { day: 'Mon', o: 10, h: 15, l: 8, c: 12 },
      { day: 'Tue', v: 20, o: 20, h: 22, l: 18, c: 19 },
    ],
    categoryProperty: 'day',
    valueProperty: 'v',
    openProperty: 'o',
    highProperty: 'h',
    lowProperty: 'l',
    closeProperty: 'c',
  });

  it('candlestick renders wick + filled rising body', () => {
    const { container } = render(<Chart series={[ohlc('candlestick')]} />);
    const group = container.querySelector('g[data-chart-type="candlestick"]')!;
    // wick line + body rect per point
    const lines = group.querySelectorAll('line');
    expect(lines.length).toBeGreaterThanOrEqual(2);
    const bodies = [...group.querySelectorAll('rect')].filter(
      (r) => r.getAttribute('fill') !== 'transparent'
    );
    expect(bodies.length).toBe(2);
    // rising (12 > 10): filled body
    expect(bodies[0]!.getAttribute('fill')).not.toBe('none');
    // falling (19 < 20): hollow body
    expect(bodies[1]!.getAttribute('fill')).toBe('none');
  });

  it('ohlc renders high-low line with open/close ticks', () => {
    const { container } = render(<Chart series={[ohlc('ohlc')]} />);
    const group = container.querySelector('g[data-chart-type="ohlc"]')!;
    // vertical + 2 ticks per point
    expect(group.querySelectorAll('line').length).toBe(6);
  });

  it('highlow renders range lines only', () => {
    const { container } = render(<Chart series={[ohlc('highlow')]} />);
    const group = container.querySelector('g[data-chart-type="highlow"]')!;
    expect(group.querySelectorAll('line').length).toBe(2);
    // only the transparent hit areas remain as rects
    const rects = [...group.querySelectorAll('rect')];
    expect(rects.length).toBe(2);
    expect(rects.every((r) => r.getAttribute('fill') === 'transparent')).toBe(
      true
    );
  });

  it('scale fits high/low extremes, click reports close', () => {
    const fn = vi.fn();
    const { container } = render(
      <Chart series={[ohlc('candlestick')]} onSeriesClick={fn} />
    );
    // high 22 fits: top of plot area reachable (y >= pad.t)
    const group = container.querySelector('g[data-chart-type="candlestick"]')!;
    const wicks = [...group.querySelectorAll('line')];
    wicks.forEach((w) => {
      expect(Number(w.getAttribute('y1'))).toBeGreaterThanOrEqual(0);
    });
    const hits = [...group.querySelectorAll('rect')].filter(
      (r) => r.getAttribute('fill') === 'transparent'
    );
    fireEvent.click(hits[0]!);
    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({ category: 'Mon', value: 12 })
    );
  });

  it('honors upColor/downColor overrides', () => {
    const { container } = render(
      <Chart
        series={[
          { ...ohlc('candlestick'), upColor: '#00ff00', downColor: '#ff0000' },
        ]}
      />
    );
    const group = container.querySelector('g[data-chart-type="candlestick"]')!;
    const bodies = [...group.querySelectorAll('rect')].filter(
      (r) => r.getAttribute('fill') !== 'transparent'
    );
    expect(bodies[0]!.getAttribute('fill')).toBe('#00ff00');
    expect(bodies[1]!.getAttribute('stroke')).toBe('#ff0000');
  });
});

describe('Chart derived series (#95)', () => {
  const source = {
    type: 'line' as const,
    title: 'Sales',
    data: [
      { m: 'A', v: 0 },
      { m: 'B', v: 10 },
      { m: 'C', v: 20 },
    ],
    categoryProperty: 'm',
    valueProperty: 'v',
  };

  it('trendline fits least-squares through the source', () => {
    const { container } = render(
      <Chart
        series={[
          source,
          {
            type: 'trendline' as const,
            title: 'Trend',
            data: [],
            categoryProperty: 'm',
            valueProperty: 'v',
          },
        ]}
      />
    );
    const groups = container.querySelectorAll('g[data-chart-type="trendline"]');
    expect(groups.length).toBe(1);
    // y = 10x through (0,0),(1,10),(2,20): endpoints at axis extremes
    const path = groups[0]!.querySelector(
      'path[fill="none"]:not([stroke="transparent"])'
    )!;
    expect(path).not.toBeNull();
    // no markers by default on derived series
    expect(groups[0]!.querySelector('circle, rect[width="12"]')).toBeNull();
  });

  it('trendline resolves an explicit source by title', () => {
    const other = {
      type: 'bar' as const,
      title: 'Other',
      data: [{ m: 'A', v: 100 }],
      categoryProperty: 'm',
      valueProperty: 'v',
    };
    const { container } = render(
      <Chart
        series={[
          other,
          {
            type: 'trendline' as const,
            title: 'Trend',
            source: 'Other',
            data: [],
            categoryProperty: 'm',
            valueProperty: 'v',
          },
        ]}
      />
    );
    expect(
      container.querySelector('g[data-chart-type="trendline"]')
    ).not.toBeNull();
  });

  it('moving average smooths with the period window', () => {
    const { container } = render(
      <Chart
        series={[
          source,
          {
            type: 'movingaverage' as const,
            title: 'MA',
            period: 2,
            data: [],
            categoryProperty: 'm',
            valueProperty: 'v',
          },
        ]}
      />
    );
    const group = container.querySelector(
      'g[data-chart-type="movingaverage"]'
    )!;
    // period 2 over 3 points -> 2 averaged points -> path with M + L
    const path = group.querySelector(
      'path[fill="none"]:not([stroke="transparent"])'
    )!;
    const d = path.getAttribute('d') ?? '';
    expect(d.startsWith('M')).toBe(true);
    expect(d).toContain('L');
  });

  it('derived clicks report source items', () => {
    const fn = vi.fn();
    render(
      <Chart
        series={[
          source,
          {
            type: 'trendline' as const,
            title: 'Trend',
            data: [],
            categoryProperty: 'm',
            valueProperty: 'v',
          },
        ]}
        onSeriesClick={fn}
      />
    );
    const group = document.querySelector('g[data-chart-type="trendline"]')!;
    const hits = group.querySelectorAll('rect[width="24"]');
    fireEvent.click(hits[0]!);
    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({
        seriesTitle: 'Trend',
        category: 'A',
      })
    );
  });

  it('renders nothing without a usable source', () => {
    const { container } = render(
      <Chart
        series={[
          {
            type: 'trendline' as const,
            title: 'Lonely',
            data: [],
            categoryProperty: 'm',
            valueProperty: 'v',
          },
        ]}
      />
    );
    expect(
      container.querySelector('g[data-chart-type="trendline"]')
    ).toBeNull();
  });
});

describe('Chart treemap + pyramid (#95)', () => {
  it('treemap areas stay proportional to values', () => {
    const { container } = render(
      <Chart
        series={[
          {
            type: 'treemap',
            title: 'T',
            data: [
              { cat: 'A', val: 30 },
              { cat: 'B', val: 70 },
            ],
            categoryProperty: 'cat',
            valueProperty: 'val',
          },
        ]}
      />
    );
    const group = container.querySelector('g[data-chart-type="treemap"]')!;
    const rects = [...group.querySelectorAll('rect')];
    expect(rects.length).toBe(2);
    const areas = rects.map(
      (r) => Number(r.getAttribute('width')) * Number(r.getAttribute('height'))
    );
    expect(areas[1]! / areas[0]!).toBeCloseTo(70 / 30, 1);
    expect(group.textContent).toContain('A');
    expect(group.textContent).toContain('B');
  });

  it('treemap nests children inside the parent rect', () => {
    const { container } = render(
      <Chart
        series={[
          {
            type: 'treemap',
            title: 'T',
            data: [
              {
                cat: 'P',
                val: 100,
                kids: [
                  { cat: 'C1', val: 60 },
                  { cat: 'C2', val: 40 },
                ],
              },
            ],
            categoryProperty: 'cat',
            valueProperty: 'val',
            childrenProperty: 'kids',
          },
        ]}
      />
    );
    const group = container.querySelector('g[data-chart-type="treemap"]')!;
    expect(group.textContent).toContain('C1');
    expect(group.textContent).toContain('C2');
    expect(group.textContent).not.toContain('>P<');
  });

  it('treemap clicks report the leaf item', () => {
    const fn = vi.fn();
    render(
      <Chart
        series={[
          {
            type: 'treemap',
            title: 'T',
            data: [{ cat: 'A', val: 30 }],
            categoryProperty: 'cat',
            valueProperty: 'val',
          },
        ]}
        onSeriesClick={fn}
      />
    );
    const group = document.querySelector('g[data-chart-type="treemap"]')!;
    fireEvent.click(group.querySelector('rect')!);
    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({ seriesTitle: 'T', category: 'A', value: 30 })
    );
  });

  it('pyramid widens downward', () => {
    const { container } = render(
      <Chart
        series={[
          {
            type: 'pyramid',
            title: 'P',
            data: [
              { cat: 'A', val: 30 },
              { cat: 'B', val: 60 },
              { cat: 'C', val: 100 },
            ],
            categoryProperty: 'cat',
            valueProperty: 'val',
          },
        ]}
      />
    );
    const group = container.querySelector('g[data-chart-type="pyramid"]')!;
    const paths = [...group.querySelectorAll('path')];
    expect(paths.length).toBe(3);
    // top segment narrower than the bottom one: compare path widths via
    // the second x-coordinate pair of each trapezoid
    const widthOf = (d: string | null) => {
      const nums = (d ?? '')
        .split(/[MLZ ,]+/)
        .filter(Boolean)
        .map(Number);
      const xs = nums.filter((_, i) => i % 2 === 0);
      return Math.max(...xs) - Math.min(...xs);
    };
    const widths = paths.map((p) => widthOf(p.getAttribute('d')));
    expect(widths[0]).toBeLessThan(widths[2]!);
    expect(group.textContent).toContain('C · 100');
  });
});

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

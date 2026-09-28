export type SeriesClickArgs = {
  seriesTitle: string;
  category: string;
  value: number;
  item: Record<string, unknown>;
};

export interface ChartSeries {
  type:
    | 'line'
    | 'area'
    | 'bar'
    | 'column'
    | 'scatter'
    | 'bubble'
    | 'pie'
    | 'donut'
    | 'gauge'
    | 'radar'
    | 'funnel'
    | 'heatmap';
  data: Record<string, unknown>[];
  categoryProperty: string;
  valueProperty: string;
  /** Row axis for heatmap series (y dimension). */
  rowProperty?: string;
  title?: string;
  color?: string;
  stack?: string;
  labels?: { visible?: boolean };
  innerRadius?: number;
  sizeProperty?: string;
}

export interface ChartProps {
  series: ChartSeries[];
  width?: number;
  height?: number;
  valueAxis?: {
    min?: number;
    max?: number;
    step?: number;
    title?: string;
    gridlines?: boolean;
  };
  categoryAxis?: { title?: string; gridlines?: boolean };
  showLegend?: boolean;
  tooltipVisible?: boolean;
  onSeriesClick?: (args: SeriesClickArgs) => void;
  ariaLabel?: string;
  className?: string;
}

export interface ChartScale {
  min: number;
  max: number;
  step: number;
  ticks: number[];
}

export interface ChartPad {
  t: number;
  r: number;
  b: number;
  l: number;
}

/** Everything a series renderer needs from the chart shell. */
export interface ChartRenderContext {
  categories: readonly string[];
  scale: ChartScale;
  pad: ChartPad;
  plotW: number;
  plotH: number;
  xFor: (catIdx: number) => number;
  yFor: (val: number) => number;
  colorFor: (idx: number, ser: ChartSeries) => string;
  tooltipVisible: boolean;
  showTip: (x: number, y: number, text: string) => void;
  hideTip: () => void;
  handleClick: (
    ser: ChartSeries,
    cat: string,
    val: number,
    item: Record<string, unknown>
  ) => void;
  series: readonly ChartSeries[];
}

export const PALETTE = [
  'var(--dx-palette-0-color)',
  'var(--dx-palette-1-color)',
  'var(--dx-palette-2-color)',
  'var(--dx-palette-3-color)',
  'var(--dx-palette-4-color)',
  'var(--dx-palette-5-color)',
];

/** Series types drawn against the shared category/value axes. */
export const VALUE_AXIS_TYPES = new Set([
  'line',
  'area',
  'bar',
  'column',
  'scatter',
  'bubble',
]);

/** Series types showing the bottom category axis (heatmap has x categories). */
export const CATEGORY_AXIS_TYPES = new Set([...VALUE_AXIS_TYPES, 'heatmap']);

export function niceScale(min: number, max: number, step?: number) {
  const range = max - min || 1;
  const raw = step ?? Math.pow(10, Math.floor(Math.log10(range / 4)));
  const nMin = Math.floor(min / raw) * raw;
  const nMax = Math.ceil(max / raw) * raw;
  const ticks: number[] = [];
  for (let v = nMin; v <= nMax + 1e-9; v += raw)
    ticks.push(Number(v.toFixed(6)));
  return { min: nMin, max: nMax, step: raw, ticks };
}

export interface ChartPoint {
  cat: string;
  val: number;
  size?: number;
  item: Record<string, unknown>;
}

export function pointsFor(series: ChartSeries): ChartPoint[] {
  return series.data.map((d) => ({
    cat: String(d[series.categoryProperty] ?? ''),
    val: Number(d[series.valueProperty]),
    size: series.sizeProperty ? Number(d[series.sizeProperty]) : undefined,
    item: d,
  }));
}

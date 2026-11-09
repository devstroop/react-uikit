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
    | 'heatmap'
    | 'candlestick'
    | 'ohlc'
    | 'highlow'
    | 'trendline'
    | 'movingaverage'
    | 'treemap'
    | 'pyramid'
    | 'spider'
    | 'sankey'
    | 'contour';
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
  /** Range band: property holding the low value (needs maxProperty too). */
  minProperty?: string;
  /** Range band: property holding the high value (needs minProperty too). */
  maxProperty?: string;
  /** OHLC open value property (candlestick/ohlc/highlow). */
  openProperty?: string;
  /** OHLC high value property (candlestick/ohlc/highlow). */
  highProperty?: string;
  /** OHLC low value property (candlestick/ohlc/highlow). */
  lowProperty?: string;
  /** OHLC close value property (candlestick/ohlc/highlow). */
  closeProperty?: string;
  /** Derived-series source: title of the series to compute from.
   * Defaults to the nearest previous cartesian series. */
  source?: string;
  /** Moving-average window in points. Defaults to 3. */
  period?: number;
  /** Treemap children property for one-or-more nesting levels. */
  childrenProperty?: string;
  /** Sankey source-node property (link origin id). */
  sourceProperty?: string;
  /** Contour iso-level count. Defaults to 5. */
  levels?: number;
  /** Contour density grid resolution (cells per axis). Defaults to 28. */
  resolution?: number;
  /** Sankey target-node property (link destination id). */
  targetProperty?: string;
  /** Rising-period color for candlestick bodies. Defaults to series color. */
  upColor?: string;
  /** Falling-period color for candlestick bodies. Defaults to danger. */
  downColor?: string;
  /** Point markers for line/area/scatter/bubble. Defaults to visible circles. */
  markers?: {
    shape?: 'circle' | 'square' | 'diamond' | 'triangle';
    size?: number;
    visible?: boolean;
  };
  /** Stroke dash for line/area (SVG dasharray string or dash list). */
  dash?: string | number[];
  /** Stroke width for line/area. Defaults to 2. */
  lineWidth?: number;
}

export interface ChartProps {
  series: ChartSeries[];
  width?: number | string;
  height?: number | string;
  valueAxis?: {
    min?: number;
    max?: number;
    step?: number;
    title?: string;
    gridlines?: boolean;
    /** Tick text. Parity for Radzen's `RadzenValueAxis Formatter`, which is how
     * the reference renders `$1,000`: without a knob here a consumer cannot
     * reach that output at all. Defaults to grouped, 2-decimal text. */
    format?: (value: number) => string;
  };
  categoryAxis?: {
    title?: string;
    gridlines?: boolean;
    /** Category label text, the counterpart of `RadzenCategoryAxis Formatter`. */
    format?: (category: string) => string;
  };
  showLegend?: boolean;
  /** Normalize every stack group to percentages (full-stacked). */
  stacked100Percent?: boolean;
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
  /** Numeric text for ticks and data labels: the axis `format` when given,
   * otherwise the shared grouped tick formatter. */
  fmt: (val: number) => string;
  colorFor: (idx: number, ser: ChartSeries) => string;
  tooltipVisible: boolean;
  /** Full-stacked percent mode: value labels/tooltips carry a % suffix. */
  percent?: boolean;
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

/** A slice's fill. Pie/donut categories are colored individually, the way
 * Radzen's pie legend pairs each category with its own swatch; a series that
 * pins `color` keeps every slice in that color instead. Shared with the legend
 * so the swatch always matches the arc it names. */
export function sliceColor(ser: ChartSeries, pointIndex: number): string {
  return ser.color ?? PALETTE[pointIndex % PALETTE.length]!;
}

/** Series types drawn against the shared category/value axes. */
export const VALUE_AXIS_TYPES = new Set([
  'line',
  'area',
  'bar',
  'column',
  'scatter',
  'bubble',
  'candlestick',
  'ohlc',
  'highlow',
  'trendline',
  'movingaverage',
]);

/** Series types showing the bottom category axis (heatmap has x categories). */
export const CATEGORY_AXIS_TYPES = new Set([...VALUE_AXIS_TYPES, 'heatmap']);

/** Series Radzen fills from a baseline, and therefore extends the value axis to
 * include 0 for. Range, price, line and point series are excluded. */
export const BASELINE_AXIS_TYPES = new Set(['bar', 'column', 'area']);

/** Radzen's nice-number rounding (`ScaleBase.cs:138-194`): the set is
 * {1, 2, 5, 10} per decade with thresholds <1.5, <3, <7. There is no 2.5 —
 * the previous set could invent a step Radzen never draws. */
function niceNumber(value: number): number {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const normalized = value / magnitude;
  const nice =
    normalized < 1.5 ? 1 : normalized < 3 ? 2 : normalized < 7 ? 5 : 10;
  return nice * magnitude;
}

/** Radzen spaces ticks by pixels rather than by a fixed count: `TickDistance`
 * is 100 (`AxisBase.cs:83`) over the axis extent (`LinearScale.cs:87`). */
export const TICK_DISTANCE = 100;

export const axisIntervals = (axisPixels: number): number =>
  Math.max(1, Math.ceil(Math.abs(axisPixels) / TICK_DISTANCE));

/** `intervals` defaults to what a ~350px plot yields, the height the parity
 * reference draws at. */
export function niceScale(
  min: number,
  max: number,
  step?: number,
  intervals = 4
) {
  const range = max - min || 1;
  // An explicit step is the contract and is used as given; only the derived
  // step is snapped to a nice number.
  const interval = step ?? niceNumber(range / Math.max(1, intervals));
  const nMin = Math.floor(min / interval) * interval;
  const nMax = Math.ceil(max / interval) * interval;
  // Indexed rather than accumulated: repeated += of a fractional interval
  // drifts, and the drift decides whether the last tick exists.
  const count = Math.round((nMax - nMin) / interval);
  const ticks: number[] = [];
  for (let i = 0; i <= count; i++)
    ticks.push(Number((nMin + i * interval).toFixed(6)));
  return { min: nMin, max: nMax, step: interval, ticks };
}

export interface ChartPoint {
  cat: string;
  val: number;
  min?: number;
  max?: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  size?: number;
  item: Record<string, unknown>;
}

export function pointsFor(series: ChartSeries): ChartPoint[] {
  const num = (prop: string | undefined, d: Record<string, unknown>) =>
    prop != null ? Number(d[prop]) : undefined;
  return series.data.map((d) => ({
    cat: String(d[series.categoryProperty] ?? ''),
    val: Number(d[series.valueProperty]),
    open: num(series.openProperty, d),
    high: num(series.highProperty, d),
    low: num(series.lowProperty, d),
    close: num(series.closeProperty, d),
    min: series.minProperty != null ? Number(d[series.minProperty]) : undefined,
    max: series.maxProperty != null ? Number(d[series.maxProperty]) : undefined,
    size: series.sizeProperty ? Number(d[series.sizeProperty]) : undefined,
    item: d,
  }));
}

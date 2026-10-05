export type SeriesClickArgs = {
    seriesTitle: string;
    category: string;
    value: number;
    item: Record<string, unknown>;
};
export interface ChartSeries {
    type: 'line' | 'area' | 'bar' | 'column' | 'scatter' | 'bubble' | 'pie' | 'donut' | 'gauge' | 'radar' | 'funnel' | 'heatmap' | 'candlestick' | 'ohlc' | 'highlow' | 'trendline' | 'movingaverage';
    data: Record<string, unknown>[];
    categoryProperty: string;
    valueProperty: string;
    /** Row axis for heatmap series (y dimension). */
    rowProperty?: string;
    title?: string;
    color?: string;
    stack?: string;
    labels?: {
        visible?: boolean;
    };
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
    width?: number;
    height?: number;
    valueAxis?: {
        min?: number;
        max?: number;
        step?: number;
        title?: string;
        gridlines?: boolean;
    };
    categoryAxis?: {
        title?: string;
        gridlines?: boolean;
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
    colorFor: (idx: number, ser: ChartSeries) => string;
    tooltipVisible: boolean;
    /** Full-stacked percent mode: value labels/tooltips carry a % suffix. */
    percent?: boolean;
    showTip: (x: number, y: number, text: string) => void;
    hideTip: () => void;
    handleClick: (ser: ChartSeries, cat: string, val: number, item: Record<string, unknown>) => void;
    series: readonly ChartSeries[];
}
export declare const PALETTE: string[];
/** Series types drawn against the shared category/value axes. */
export declare const VALUE_AXIS_TYPES: Set<string>;
/** Series types showing the bottom category axis (heatmap has x categories). */
export declare const CATEGORY_AXIS_TYPES: Set<string>;
export declare function niceScale(min: number, max: number, step?: number): {
    min: number;
    max: number;
    step: number;
    ticks: number[];
};
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
export declare function pointsFor(series: ChartSeries): ChartPoint[];

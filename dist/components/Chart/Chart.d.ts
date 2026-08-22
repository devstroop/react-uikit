export type SeriesClickArgs = {
    seriesTitle: string;
    category: string;
    value: number;
    item: Record<string, unknown>;
};
export interface ChartSeries {
    type: "line" | "area" | "bar" | "column";
    data: Record<string, unknown>[];
    categoryProperty: string;
    valueProperty: string;
    title?: string;
    color?: string;
    labels?: {
        visible?: boolean;
    };
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
    tooltipVisible?: boolean;
    onSeriesClick?: (args: SeriesClickArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Chart({ series, width, height, valueAxis, categoryAxis, showLegend, tooltipVisible, onSeriesClick, ariaLabel, className, }: ChartProps): import("react").JSX.Element;

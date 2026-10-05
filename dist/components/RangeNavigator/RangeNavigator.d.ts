export interface RangeWindow {
    start: number;
    end: number;
}
export interface RangeNavigatorProps {
    min?: number;
    max?: number;
    /** Controlled window. Omit for uncontrolled. */
    value?: RangeWindow;
    /** Initial window for uncontrolled mode. Defaults to the full domain. */
    defaultValue?: RangeWindow;
    /** Fires on every committed window change. */
    onChange?: (window: RangeWindow) => void;
    /** Optional sparkline data rendered in the track. */
    data?: number[];
    /** Minimum window span in domain units. Defaults to 0 (free). */
    minSpan?: number;
    ariaLabel?: string;
    className?: string;
}
/**
 * Range navigator (uikit#97): a zoom/pan window over a value domain.
 * Two slider handles bound the window; dragging a handle (or the window
 * body) and arrow keys move it. Wire `onChange` into a chart's value
 * axis for linked zooming (the linkage itself stays consumer-side).
 */
export declare function RangeNavigator({ min, max, value, defaultValue, onChange, data, minSpan, ariaLabel, className, }: RangeNavigatorProps): import("react").JSX.Element;

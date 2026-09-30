import { ReactNode } from 'react';
import { ChartRenderContext, ChartSeries } from './chart-shared';
/** Shared radar background (rings + spokes), drawn once per chart so later
 * series groups never paint the grid over earlier series' data. */
export declare function renderRadarGrid(ctx: ChartRenderContext): ReactNode;
export declare function renderSeries(ctx: ChartRenderContext, ser: ChartSeries, sIdx: number): ReactNode;

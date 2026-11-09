/**
 * Tick placement for the gauges.
 *
 * Radzen drives its gauge scales with an explicit `Step`
 * (`RadzenRadialGaugeScale Step="1"`), while the kit's documented knob is a
 * tick *count*. Both are supported: a step wins when given, otherwise the range
 * is divided into `count` positions.
 */
/** Positions between `min` and `max` (inclusive of `min`), stepping by `step`
 * when it is given and otherwise split evenly into `count` marks. `count: 0`
 * hides the scale; an explicit step wins over the even split. */
export declare function gaugeTicks(min: number, max: number, count: number, step?: number): number[];

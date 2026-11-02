/**
 * Tick placement + label text for the gauges.
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
/** Label text for a tick value. An even split of most ranges lands on repeating
 * decimals — 0-5 in 8 marks yields 0.7142857142857143 — and the unrounded
 * strings collide around the arc (GAP-007). */
export declare const gaugeTickLabel: (value: number) => string;

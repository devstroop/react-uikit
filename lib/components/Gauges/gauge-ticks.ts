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
export function gaugeTicks(
  min: number,
  max: number,
  count: number,
  step?: number
): number[] {
  if (count <= 0) return [];
  if (step && step > 0) {
    // Indexed rather than accumulated: adding a fractional step drifts, and the
    // drift decides whether the last tick is still inside the arc.
    const last = Math.floor((max - min) / step + 1e-9);
    return Array.from({ length: last + 1 }, (_, i) =>
      Number((min + i * step).toFixed(6))
    );
  }
  if (count === 1) return [min];
  return Array.from(
    { length: count },
    (_, i) => min + ((max - min) * i) / (count - 1)
  );
}

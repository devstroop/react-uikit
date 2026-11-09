/** Tick text for any numeric scale: thousands grouped and at most two
 * decimals, so a derived step reads `2,848.57` rather than the 17-character
 * float that collides with its neighbours. */
export declare const tickLabel: (value: number) => string;

export interface IconSetDef {
    /** Root stroke/fill mode: stroke sets inherit stroke from the <svg>. */
    style: 'stroke' | 'fill';
    /** Default stroke-width for stroke sets (body attrs may override). */
    strokeWidth?: number;
    viewBox: string;
    icons: Record<string, string>;
    /** Sparse per-glyph viewBox overrides (sets with mixed icon grids). */
    viewBoxBy?: Record<string, string>;
}

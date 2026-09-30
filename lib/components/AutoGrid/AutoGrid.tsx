import { type CSSProperties, type HTMLAttributes } from 'react';
import { resolveGap } from '../../utils/gap';
import styles from './AutoGrid.module.css';

/** Gap: px number (unitless = pixels) or CSS length; digits-only strings are px. */
export type AutoGridGap = number | string;

export interface AutoGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Minimum track width — number (px) or any CSS length.
   * Tracks fill the row and wrap (`auto-fit`); a lone track spans
   * full width via `min(100%, …)`. Defaults to 240.
   */
  min?: number | string;
  /**
   * Gap between tracks — px number (unitless = pixels) or CSS length.
   * Defaults to 12.
   */
  gap?: AutoGridGap;
  className?: string;
  style?: CSSProperties;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function AutoGrid({
  min = 240,
  gap = 12,
  className,
  style,
  visible = true,
  ...props
}: AutoGridProps) {
  if (visible === false) return null;
  const mergedStyle: CSSProperties = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    '--dx-autogrid-min': typeof min === 'number' ? `${min}px` : (min as string),
    ...(gap != null ? { gap: resolveGap(gap) } : {}),
    ...style,
  } as CSSProperties;
  return (
    <div
      className={[styles.autogrid, className].filter(Boolean).join(' ')}
      style={mergedStyle}
      {...props}
    />
  );
}

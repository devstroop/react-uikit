import { type CSSProperties, type HTMLAttributes } from 'react';
import { type ComponentSize } from '../../sizes';
import styles from './AutoGrid.module.css';

export type AutoGridGap = ComponentSize | number | string;

const GAP_TIERS: Record<ComponentSize, string> = {
  xs: 'gapXs',
  sm: 'gapSm',
  md: 'gapMd',
  lg: 'gapLg',
  xl: 'gapXl',
};

function gapClass(gap: AutoGridGap | undefined): string | null {
  if (typeof gap !== 'string') return null;
  return (GAP_TIERS as Record<string, string | undefined>)[gap] ?? null;
}

export interface AutoGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Minimum track width — number (px) or any CSS length.
   * Tracks fill the row and wrap (`auto-fit`); a lone track spans
   * full width via `min(100%, …)`. Defaults to 240.
   */
  min?: number | string;
  /**
   * Gap between tracks — tier name, px number, or CSS value.
   * Defaults to 'md'.
   */
  gap?: AutoGridGap;
  className?: string;
  style?: CSSProperties;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function AutoGrid({
  min = 240,
  gap = 'md',
  className,
  style,
  visible = true,
  ...props
}: AutoGridProps) {
  if (visible === false) return null;
  const tier = gapClass(gap);
  const mergedStyle: CSSProperties = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    '--dx-autogrid-min': typeof min === 'number' ? `${min}px` : (min as string),
    ...(gap != null && !tier
      ? { gap: typeof gap === 'number' ? `${gap}px` : gap }
      : {}),
    ...style,
  } as CSSProperties;
  return (
    <div
      className={[styles.autogrid, tier ? styles[tier] : null, className]
        .filter(Boolean)
        .join(' ')}
      style={mergedStyle}
      {...props}
    />
  );
}

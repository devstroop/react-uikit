import { type CSSProperties, type HTMLAttributes } from 'react';
import { resolveGap } from '../../utils/gap';
import styles from './Row.module.css';

export type RowAlign =
  'start' | 'center' | 'end' | 'stretch' | 'baseline' | 'normal';

export type RowJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'normal'
  | 'left'
  | 'right'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type RowWrap = boolean | 'nowrap' | 'wrap' | 'wrap-reverse';

/** Gap: px number (unitless = pixels) or CSS length; digits-only strings are px. */
export type RowGap = number | string;

function resolveWrap(wrap: RowWrap | undefined): string | null {
  if (wrap === false || wrap === 'nowrap') return 'noWrap';
  if (wrap === 'wrap-reverse') return 'wrapReverse';
  return null;
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /** Column gap — px number (unitless = pixels) or CSS length. Unset = 16 (space-4). */
  gap?: RowGap;
  /** Row gap across wrapped lines — same values as `gap`. Unset = follows `gap`. */
  rowGap?: RowGap;
  align?: RowAlign;
  justify?: RowJustify;
  wrap?: RowWrap;
}

export function Row({
  gap,
  rowGap,
  align = 'stretch',
  justify = 'start',
  wrap = true,
  className,
  style,
  ...props
}: RowProps) {
  const columnGap = gap != null ? resolveGap(gap) : null;
  const crossGap = rowGap != null ? resolveGap(rowGap) : null;
  const mergedStyle: CSSProperties = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...(columnGap
      ? ({
          columnGap,
          '--dx-col-gap': columnGap,
        } as CSSProperties)
      : {}),
    ...(crossGap ? { rowGap: crossGap } : {}),
    ...style,
  };
  return (
    <div
      className={[
        styles.row,
        styles[align],
        styles[`justify-${justify}`],
        resolveWrap(wrap) != null ? styles[resolveWrap(wrap) as string] : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={mergedStyle}
      {...props}
    />
  );
}

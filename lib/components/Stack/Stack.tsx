import { type CSSProperties, type HTMLAttributes } from 'react';
import { resolveGap } from '../../utils/gap';
import styles from './Stack.module.css';

export type StackOrientation = 'horizontal' | 'vertical';

export type StackWrap = boolean | 'nowrap' | 'wrap' | 'wrap-reverse';

/** Gap: px number (unitless = pixels) or CSS length; digits-only strings are px. */
export type StackGap = number | string;

function wrapValue(wrap: StackWrap | undefined): string {
  if (wrap === false || wrap === 'nowrap') return 'nowrap';
  if (wrap === 'wrap-reverse') return 'wrap-reverse';
  return 'wrap';
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: StackOrientation;
  reverse?: boolean;
  wrap?: StackWrap;
  /** Spacing between children — px number (unitless = pixels) or CSS length. Defaults to 8. */
  gap?: StackGap;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline' | 'normal';
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  className?: string;
  style?: CSSProperties;
}

export function Stack({
  orientation = 'vertical',
  reverse = false,
  wrap = true,
  gap = 8,
  align,
  justify,
  className,
  style,
  ...props
}: StackProps) {
  const direction =
    orientation === 'horizontal'
      ? reverse
        ? 'row-reverse'
        : 'row'
      : reverse
        ? 'column-reverse'
        : 'column';
  const mergedStyle: CSSProperties = {
    ...(gap != null ? { gap: resolveGap(gap) } : {}),
    ...style,
  };
  return (
    <div
      className={[
        styles.stack,
        styles[`dir-${direction}`],
        wrapValue(wrap) !== 'wrap' ? styles[`wrap-${wrapValue(wrap)}`] : null,
        align != null ? styles[`align-${align}`] : null,
        justify != null ? styles[`justify-${justify}`] : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={mergedStyle}
      {...props}
    />
  );
}

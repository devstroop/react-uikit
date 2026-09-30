import { forwardRef, type HTMLAttributes } from 'react';
import type { ComponentSize } from '../../sizes';
import styles from './Icon.module.css';

/**
 * Ligature names the library itself renders (autocomplete help).
 * Any Material Symbols name works — the type stays open via
 * `(string & {})` so unlisted glyphs need no library change.
 */
export const iconNames = [
  'add',
  'block',
  'calendar_month',
  'cancel',
  'check',
  'check_circle',
  'chevron_left',
  'chevron_right',
  'close',
  'dark_mode',
  'delete',
  'download',
  'edit',
  'error',
  'folder',
  'home',
  'info',
  'keyboard_arrow_down',
  'keyboard_arrow_up',
  'key',
  'light_mode',
  'link',
  'logout',
  'menu',
  'refresh',
  'search',
  'settings',
  'shield',
  'star',
  'upload',
  'visibility',
  'visibility_off',
  'warning',
] as const;

export type IconName = (typeof iconNames)[number] | (string & {});

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Ligature glyph name (Material Symbols) or a foreign codepoint
   * when the project overrides --dx-icon-font-family. */
  icon: IconName;
  /** Glyph size: px number or tier. Defaults to --dx-icon-size. */
  size?: number | ComponentSize;
  /** Ink. Defaults to the currentColor context. */
  color?: string;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { icon, size, color, className, style, ...props },
  ref
) {
  const tier = typeof size === 'string';
  return (
    <span
      ref={ref}
      className={[styles.icon, tier ? styles[size] : null, className]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...(tier || size === undefined
          ? null
          : { fontSize: typeof size === 'number' ? `${size}px` : size }),
        ...(color === undefined ? null : { color }),
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {icon}
    </span>
  );
});

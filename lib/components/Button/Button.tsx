import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from 'react';
import type { ComponentSize } from '../../sizes';
import type { Severity } from '../../types/severity';
import type { Shade } from '../../types/shade';
import type { Variant } from '../../types/variant';
import styles from './Button.module.css';

/** Radzen Variant parity: exactly filled | flat | outlined | text. */
export type ButtonVariant = Variant;
/**
 * Supported hues — mirrors the `style-*` rules in Button.module.css
 * (every hue except `neutral`). Narrowed on purpose: wider unions
 * render unstyled with no warning.
 */
export type ButtonStyle = Exclude<Severity, 'neutral'>;
export type ButtonShade = Shade;

export type ButtonSize = ComponentSize;

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  /**
   * Severity axis — the single severity prop (Radzen ButtonStyle parity).
   * Native `style` is always plain CSS and never a hue.
   */
  severity?: ButtonStyle;
  shade?: ButtonShade;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
  /** Inline spinner + `aria-busy`, disables click. */
  loading?: boolean;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export interface ButtonButtonProps
  extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

export interface ButtonAnchorProps
  extends
    ButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Renders an anchor instead of a button (navigation CTAs). */
  href: string;
  /** Anchors use aria-disabled + click suppression (no native disabled). */
  disabled?: boolean;
}

export type ButtonProps = ButtonButtonProps | ButtonAnchorProps;

function resolveVariantStyle(
  variant: ButtonVariant | undefined,
  severity: ButtonStyle | undefined
): { variant: ButtonVariant; style: ButtonStyle } {
  const picked = severity;
  const raw = variant ?? 'filled';
  const canonical: ButtonVariant =
    raw === 'filled' || raw === 'flat' || raw === 'outlined' || raw === 'text'
      ? raw
      : 'filled';
  return { variant: canonical, style: picked ?? 'primary' };
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'filled',
      severity,
      shade = 'default',
      size = 'md',
      fullWidth = false,
      iconOnly = false,
      loading = false,
      visible = true,
      className,
      disabled,
      children,
      ...rest
    } = props;
    if (visible === false) return null;
    const resolved = resolveVariantStyle(variant, severity);
    // Radzen parity: Light and Dark button styles don't have Shades —
    // a shade prop on them is ignored, never rendered.
    const unshaded = resolved.style === 'light' || resolved.style === 'dark';
    const shadeCls = !unshaded && shade !== 'default' ? `shade-${shade}` : null;
    const classNames = [
      styles.button,
      styles[resolved.variant],
      styles[`style-${resolved.style}`],
      // backwards-compat: tone-* still emitted
      styles[`tone-${resolved.style}`],
      shadeCls ? styles[shadeCls] : null,
      styles[size],
      fullWidth ? styles.fullWidth : null,
      iconOnly ? styles.iconOnly : null,
      loading ? styles.loading : null,
      // Press feedback on every button (Radzen material parity).
      'dx-ripple',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const content = (
      <>
        {loading ? (
          <span aria-hidden="true" className={styles.spinner} />
        ) : null}
        {children}
      </>
    );

    const href = (props as { href?: string }).href;
    if (href != null) {
      const { onClick, ...anchorProps } =
        rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      const anchorDisabled = disabled || loading;
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={classNames}
          aria-disabled={anchorDisabled || undefined}
          aria-busy={loading || undefined}
          onClick={(e) => {
            if (anchorDisabled) {
              e.preventDefault();
              return;
            }
            onClick?.(e);
          }}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const { type = 'button', ...buttonProps } =
      rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        className={classNames}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

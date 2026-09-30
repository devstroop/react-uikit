import {
  forwardRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type Ref,
} from 'react';
import {
  Button,
  type ButtonButtonProps,
  type ButtonShade,
  type ButtonStyle,
  type ButtonVariant,
} from '../Button/Button';
import styles from './Togglebutton.module.css';

/** Compact 3-tier subset — same convention as Splitbutton/Selectbar. */
export type TogglebuttonSize = 'sm' | 'md' | 'lg';

export interface TogglebuttonProps extends Omit<
  ButtonButtonProps,
  'onChange' | 'size' | 'aria-pressed'
> {
  /** Controlled pressed state. */
  pressed?: boolean;
  /** Uncontrolled initial pressed state. */
  defaultPressed?: boolean;
  onChange?: (pressed: boolean) => void;
  /**
   * Variant used while pressed — Radzen `ToggleVariant` parity.
   * While released the base `variant` applies (Radzen keeps `null`
   * → base Variant too).
   */
  toggleVariant?: ButtonVariant;
  /**
   * Severity used while pressed — Radzen `ToggleButtonStyle` parity.
   * Radzen's parameter defaults to `Primary`, so a pressed toggle
   * renders the primary hue unless overridden.
   */
  toggleSeverity?: ButtonStyle;
  /**
   * Shade used while pressed — Radzen `ToggleShade` parity
   * (Radzen default `darker`).
   */
  toggleShade?: ButtonShade;
  /**
   * Content rendered while pressed; `children` render while
   * released — Radzen `ToggleIcon` parity.
   */
  toggleContent?: ReactNode;
  size?: TogglebuttonSize;
}

export const Togglebutton = forwardRef<HTMLButtonElement, TogglebuttonProps>(
  function Togglebutton(
    {
      pressed,
      defaultPressed = false,
      onChange,
      toggleVariant,
      toggleSeverity = 'primary',
      toggleShade = 'darker',
      toggleContent,
      size = 'md',
      className,
      onClick,
      children,
      variant,
      severity,
      shade,
      ...props
    },
    ref
  ) {
    const [internalPressed, setInternalPressed] = useState(defaultPressed);
    const isPressed = pressed ?? internalPressed;

    // Merge, don't overwrite: the consumer's onClick must survive
    // alongside the toggle (the pre-parity version let {...props}
    // clobber the handler).
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      const next = !isPressed;
      if (pressed === undefined) setInternalPressed(next);
      onChange?.(next);
      onClick?.(event);
    };

    return (
      <Button
        {...props}
        ref={ref as Ref<HTMLElement>}
        variant={isPressed && toggleVariant ? toggleVariant : variant}
        severity={isPressed ? toggleSeverity : severity}
        shade={isPressed ? toggleShade : shade}
        size={size}
        aria-pressed={isPressed}
        className={[isPressed ? styles.pressed : null, className]
          .filter(Boolean)
          .join(' ')}
        onClick={handleClick}
      >
        {isPressed && toggleContent !== undefined ? toggleContent : children}
      </Button>
    );
  }
);

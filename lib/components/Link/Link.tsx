import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import styles from './Link.module.css';

interface LinkBaseProps {
  /** Link text or content. */
  children?: React.ReactNode;
  /** Leading icon glyph. */
  icon?: IconName;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
  className?: string;
}

export interface LinkAnchorProps
  extends
    LinkBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Destination URL. Present → renders an anchor. */
  href: string;
}

export interface LinkButtonProps
  extends
    LinkBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  href?: undefined;
}

export type LinkProps = LinkAnchorProps | LinkButtonProps;

/**
 * Text link (RadzenLink parity, minus router coupling).
 *
 * With `href` renders a real anchor (SPA interception stays app-side,
 * e.g. `goIfPlain`). Without `href` renders a `<button type="button">`
 * with identical link styling — for actions that must read as links
 * (disclosures like "Forgot password?") while keeping button
 * semantics and keyboard behavior. Active-route matching is
 * deliberately absent: the library ships no router.
 */
export const Link = forwardRef<HTMLElement, LinkProps>(function Link(
  { children, icon, visible = true, className, ...props },
  ref
) {
  if (visible === false) return null;
  const content = (
    <>
      {icon != null && <Icon name={icon} aria-hidden="true" />}
      {children}
    </>
  );
  const cls = [styles.link, className].filter(Boolean).join(' ');
  if (props.href != null) {
    const { href, ...anchorProps } = props as LinkAnchorProps;
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        className={cls}
        href={href}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }
  const buttonProps = props as LinkButtonProps;
  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      className={cls}
      {...buttonProps}
    >
      {content}
    </button>
  );
});

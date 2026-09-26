import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { IconName } from '../Icon/Icon';
interface LinkBaseProps {
    /** Link text or content. */
    children?: React.ReactNode;
    /** Leading icon glyph. */
    icon?: IconName;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
    className?: string;
}
export interface LinkAnchorProps extends LinkBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
    /** Destination URL. Present → renders an anchor. */
    href: string;
}
export interface LinkButtonProps extends LinkBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
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
export declare const Link: import('react').ForwardRefExoticComponent<LinkProps & import('react').RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export {};

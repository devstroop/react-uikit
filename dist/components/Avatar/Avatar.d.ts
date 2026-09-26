import { ComponentSize } from '../../sizes';
export type AvatarSize = ComponentSize;
export type AvatarStatus = 'online' | 'offline' | 'away';
export type GravatarDefault = 'retro' | 'identicon' | 'monsterid' | 'wavatar' | 'mp' | 'robohash' | 'blank';
export type GravatarRating = 'g' | 'pg' | 'r' | 'x';
export interface AvatarProps {
    name?: string;
    src?: string;
    /**
     * Email for Gravatar resolution (RadzenGravatar parity, folded in).
     * Precedence: explicit `src` wins, then Gravatar, then initials.
     * The email is normalized (trim + lowercase — Radzen hashes it raw)
     * and MD5-hashed locally; only the hash leaves the browser, but the
     * request still discloses it to gravatar.com (reversible for known
     * addresses) — passing `email` is the conscious opt-in.
     */
    email?: string;
    /** Gravatar default image style when the address has no photo. */
    gravatarDefault?: GravatarDefault;
    /** Gravatar content rating ceiling. Defaults to 'g'. */
    gravatarRating?: GravatarRating;
    alt?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
    className?: string;
}
export declare function Avatar({ name, src, email, gravatarDefault, gravatarRating, alt, size, status, className, }: AvatarProps): import("react").JSX.Element;

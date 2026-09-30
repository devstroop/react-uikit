import { useMemo, useState } from 'react';
import type { ComponentSize } from '../../sizes';
import { md5Hex } from '../../utils/md5';
import styles from './Avatar.module.css';

export type AvatarSize = ComponentSize;

export type AvatarStatus = 'online' | 'offline' | 'away';

export type GravatarDefault =
  'retro' | 'identicon' | 'monsterid' | 'wavatar' | 'mp' | 'robohash' | 'blank';

export type GravatarRating = 'g' | 'pg' | 'r' | 'x';

/** Rendered px per tier (mirrors --dx-control-height-*): Gravatar's
 * `s=` wants exact pixels, so the requested image matches the tile. */
const SIZE_PX: Record<AvatarSize, number> = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52,
};

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

const PALETTE = [
  'var(--dx-palette-0-color)',
  'var(--dx-palette-1-color)',
  'var(--dx-palette-2-color)',
  'var(--dx-palette-3-color)',
  'var(--dx-palette-4-color)',
  'var(--dx-palette-5-color)',
];

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length] ?? PALETTE[0]!;
}

export function Avatar({
  name,
  src,
  email,
  gravatarDefault = 'retro',
  gravatarRating = 'g',
  alt,
  size = 'md',
  status,
  className,
}: AvatarProps) {
  const initials = useMemo(() => (name ? initialsFor(name) : '?'), [name]);
  const color = useMemo(() => (name ? colorFor(name) : PALETTE[0]), [name]);
  const gravatarSrc = useMemo(() => {
    if (src != null || email == null) return undefined;
    const normalized = email.trim().toLowerCase();
    if (normalized === '') return undefined;
    const hash = md5Hex(normalized);
    return (
      `https://secure.gravatar.com/avatar/${hash}` +
      `?d=${gravatarDefault}&s=${SIZE_PX[size]}&r=${gravatarRating}`
    );
  }, [src, email, gravatarDefault, gravatarRating, size]);
  const resolvedSrc = src ?? gravatarSrc;
  // A failed photo (broken src or unreachable Gravatar) falls back to
  // the initials tile. Compared by URL so a new source auto-recovers.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = resolvedSrc != null && failedSrc !== resolvedSrc;
  // Single announcement: with a photo the <img alt> carries the name and
  // the wrapper stays neutral; otherwise the wrapper is the image with
  // the status folded into its label (the dot itself stays aria-hidden).
  // An explicit alt="" stays decorative even with a status — the caller
  // opted out of announcement.
  const decorative = showImage && alt === '';
  const accessibleName = alt ?? name ?? 'avatar';
  const labelled = status ? `${accessibleName}, ${status}` : accessibleName;

  const content = showImage ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      className={styles.image}
      src={resolvedSrc}
      alt={decorative ? '' : status ? labelled : accessibleName}
      onError={() => setFailedSrc(resolvedSrc ?? null)}
    />
  ) : (
    <span
      aria-hidden="true"
      className={styles.initials}
      style={{ background: color }}
    >
      {initials}
    </span>
  );

  return (
    <span
      className={[
        styles.avatar,
        styles[size],
        status ? styles[status] : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role={showImage ? undefined : 'img'}
      aria-label={showImage ? undefined : labelled}
    >
      {content}
      {status && <span className={styles.status} aria-hidden="true" />}
    </span>
  );
}

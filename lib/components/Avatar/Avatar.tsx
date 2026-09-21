import { useMemo } from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Avatar.module.css";

export type AvatarSize = ComponentSize;

export type AvatarStatus = "online" | "offline" | "away";

export interface AvatarProps {
  name?: string;
  src?: string;
  alt?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  className?: string;
}

const PALETTE = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)",
];

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
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
  alt,
  size = "md",
  status,
  className,
}: AvatarProps) {
  const initials = useMemo(() => (name ? initialsFor(name) : "?"), [name]);
  const color = useMemo(() => (name ? colorFor(name) : PALETTE[0]), [name]);
  // Single announcement: with a photo the <img alt> carries the name and
  // the wrapper stays neutral; otherwise the wrapper is the image with
  // the status folded into its label (the dot itself stays aria-hidden).
  // An explicit alt="" stays decorative even with a status — the caller
  // opted out of announcement.
  const decorative = src != null && alt === "";
  const accessibleName = alt ?? name ?? "avatar";
  const labelled = status ? `${accessibleName}, ${status}` : accessibleName;

  const content = src ? (
    <img
      className={styles.image}
      src={src}
      alt={decorative ? "" : status ? labelled : accessibleName}
    />
  ) : (
    <span aria-hidden="true" className={styles.initials} style={{ background: color }}>
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
        .join(" ")}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : labelled}
    >
      {content}
      {status && <span className={styles.status} aria-hidden="true" />}
    </span>
  );
}
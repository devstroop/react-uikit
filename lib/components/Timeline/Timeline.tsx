import type { ReactNode } from "react";
import styles from "./Timeline.module.css";

export interface TimelineItem {
  label: ReactNode;
  content?: ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  reverse?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function Timeline({ items, reverse = false, ariaLabel = "Timeline", className }: TimelineProps) {
  const ordered = reverse ? [...items].reverse() : items;
  return (
    <ol
      className={[styles.root, reverse ? styles.reverse : "", className].filter(Boolean).join(" ")}
      role="list"
      aria-label={ariaLabel}
    >
      {ordered.map((item, i) => (
        <li key={i} className={styles.item}>
          <span className={styles.marker} aria-hidden="true" />
          <div className={styles.body}>
            <div className={styles.label}>{item.label}</div>
            {item.content !== undefined && <div className={styles.content}>{item.content}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}

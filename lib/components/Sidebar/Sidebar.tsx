import { useEffect, type HTMLAttributes } from "react";
import styles from "./Sidebar.module.css";

export type SidebarPosition = "left" | "right" | "start" | "end";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  position?: SidebarPosition;
  expanded?: boolean;
  responsive?: boolean;
  overlay?: boolean;
  /**
   * Span the full layout height (header through footer) instead of the
   * body row. Only honored for a single fullHeight sidebar — Layout
   * switches to grid placement for it (Radzen FullHeight parity).
   */
  fullHeight?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export function Sidebar({
  position = "left",
  expanded = true,
  responsive = false,
  overlay = false,
  fullHeight = false,
  onClose,
  className,
  children,
  ...props
}: SidebarProps) {
  useEffect(() => {
    if (!overlay || !expanded || onClose == null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [overlay, expanded, onClose]);

  return (
    <>
      {overlay && expanded ? (
        <div className={`${styles.mask} se-layout-mask`} aria-hidden="true" onClick={onClose} />
      ) : null}
      <aside
        className={[
          styles.sidebar,
          styles[position],
          !expanded ? styles.collapsed : null,
          responsive ? styles.responsive : null,
          overlay ? [styles.overlay, "se-sidebar--overlay"] : null,
          fullHeight ? styles.fullHeight : null,
          className,
        ]
          .flat()
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </aside>
    </>
  );
}

import { useEffect, type HTMLAttributes } from 'react';
import styles from './Sidebar.module.css';

export type SidebarPosition = 'left' | 'right' | 'start' | 'end';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  position?: SidebarPosition;
  expanded?: boolean;
  responsive?: boolean;
  overlay?: boolean;
  /**
   * Pin to the viewport top with independent scrolling (Radzen fixed
   * sidebar parity, without leaving flow): `position: sticky` capped
   * at viewport height, so long nav scrolls inside while the body
   * scrolls the page. Pairs with a sticky Header, which paints above
   * via `z-sticky` — but set `--dx-sidebar-sticky-top` to the header
   * height so the sidebar stops below it instead of sliding under.
   * No-op with `overlay` or `fullHeight` (a spanning sidebar
   * stretches the grid row, so sticking can never engage).
   */
  sticky?: boolean;
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
  position = 'left',
  expanded = true,
  responsive = false,
  overlay = false,
  fullHeight = false,
  sticky = false,
  onClose,
  className,
  children,
  ...props
}: SidebarProps) {
  useEffect(() => {
    if (!overlay || !expanded || onClose == null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [overlay, expanded, onClose]);

  return (
    <>
      {overlay && expanded ? (
        <div
          className={`${styles.mask} se-layout-mask`}
          aria-hidden="true"
          onClick={onClose}
        />
      ) : null}
      <aside
        className={[
          styles.sidebar,
          styles[position],
          !expanded ? styles.collapsed : null,
          responsive ? styles.responsive : null,
          overlay ? [styles.overlay, 'se-sidebar--overlay'] : null,
          fullHeight ? styles.fullHeight : null,
          sticky && !overlay && !fullHeight ? styles.sticky : null,
          className,
        ]
          .flat()
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </aside>
    </>
  );
}

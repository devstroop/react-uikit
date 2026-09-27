import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { Menu, MenuItem, type MenuItemEventArgs, type MenuItemProps } from '../Menu/Menu';
import styles from './ContextMenu.module.css';

export interface ContextMenuOpenOptions {
  /** Data mode: items render as a nested `Menu isContextMenu` (Radzen items parity,
   * extended with nesting — Radzen's flat `ContextMenuItem` list can't nest). */
  items?: ContextMenuItem[];
  /** Content mode: arbitrary popup content (Radzen `ChildContent` parity,
   * e.g. separators between menu groups). */
  content?: ReactNode;
  /** Fires before an item's own `onClick`. Return `false` to cancel anchor
   * navigation. Does NOT auto-close — call `close()` like Radzen
   * (`ContextMenuService.Close()`), so parents with submenus stay open. */
  onClick?: (args: MenuItemEventArgs) => unknown;
  ariaLabel?: string;
}

export interface ContextMenuApi {
  /** Open at the cursor: `open(event, options)` from an `onContextMenu`
   * handler. Prevents the native menu. */
  open: (event: React.MouseEvent | MouseEvent, options: ContextMenuOpenOptions) => void;
  close: () => void;
  isOpen: boolean;
}

const ContextMenuContext = createContext<ContextMenuApi | null>(null);

export function useContextMenu(): ContextMenuApi {
  const api = useContext(ContextMenuContext);
  if (!api) throw new Error('useContextMenu must be used inside <ContextMenuProvider>');
  return api;
}

interface PopupState {
  x: number;
  y: number;
  invoker: HTMLElement | null;
  options: ContextMenuOpenOptions;
}

/** Data-mode item: `MenuItem` props with nestable data children. */
export interface ContextMenuItem extends Omit<MenuItemProps, 'children' | 'onClick'> {
  children?: ContextMenuItem[];
  onClick?: (args: MenuItemEventArgs) => unknown;
}

/** Data-mode items as a flat element array: `Menu` reads its direct
 * children's props, so items must not hide behind a wrapper component. */
function itemElements(items: ContextMenuItem[]): ReactNode {
  return items.map((item, i) => {
    const { children, ...rest } = item;
    return (
      <MenuItem key={`${item.text}-${i}`} {...rest}>
        {children ? itemElements(children) : undefined}
      </MenuItem>
    );
  });
}

function Popup({ state, onClose }: { state: PopupState; onClose: () => void }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ left: state.x, top: state.y });

  // Viewport clamping: flip inside when the cursor is near an edge
  // (Radzen openPopup smart-position parity, without the JS interop).
  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    setPos({
      left: Math.max(0, Math.min(state.x, window.innerWidth - rect.width)),
      top: Math.max(0, Math.min(state.y, window.innerHeight - rect.height)),
    });
  }, [state.x, state.y, state.options]);

  // Focus into the menu on open (Radzen openContextMenu parity).
  useEffect(() => {
    boxRef.current
      ?.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])')
      ?.focus();
  }, []);

  const handleClick = useCallback(
    (args: MenuItemEventArgs) => {
      state.options.onClick?.(args);
    },
    [state.options]
  );

  return (
    <div
      ref={boxRef}
      role="presentation"
      data-dx-contextmenu-popup=""
      className={styles.popup}
      style={{ left: pos.left, top: pos.top }}
    >
      <div className={styles.menu}>
        {state.options.content ?? (
          <Menu
            isContextMenu
            responsive={false}
            ariaLabel={state.options.ariaLabel ?? 'Context menu'}
            onClick={handleClick}
            onClose={onClose}
          >
            {itemElements(state.options.items ?? [])}
          </Menu>
        )}
      </div>
    </div>
  );
}

export function ContextMenuProvider({ children }: { children: ReactNode }) {
  const [popup, setPopup] = useState<PopupState | null>(null);

  const close = useCallback(() => {
    setPopup((prev) => {
      // Radzen restoreContextMenuFocus parity: return focus to the invoker.
      if (prev?.invoker && document.body.contains(prev.invoker)) {
        prev.invoker.focus({ preventScroll: true });
      }
      return null;
    });
  }, []);

  const open = useCallback((event: React.MouseEvent | MouseEvent, options: ContextMenuOpenOptions) => {
    event.preventDefault();
    const invoker = (event.currentTarget ?? event.target) as HTMLElement | null;
    setPopup({ x: event.clientX, y: event.clientY, invoker, options });
  }, []);

  // Dismiss: outside pointer, Escape, viewport resize, route change
  // (Radzen closePopup / CloseMenu / OnNavigate parity).
  useEffect(() => {
    if (!popup) return;
    const onPointerDown = (e: PointerEvent) => {
      // The opening contextmenu gesture ends in a pointerup, not a
      // pointerdown — only genuine outside presses dismiss.
      const box = document.querySelector(`.${styles.popup}`);
      if (box && !box.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };
    const onResize = () => close();
    const onHash = () => close();
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', onHash);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('hashchange', onHash);
    };
  }, [popup, close]);

  const api = useMemo<ContextMenuApi>(
    () => ({ open, close, isOpen: popup != null }),
    [open, close, popup]
  );

  return (
    <ContextMenuContext.Provider value={api}>
      {children}
      {popup ? <Popup state={popup} onClose={close} /> : null}
    </ContextMenuContext.Provider>
  );
}

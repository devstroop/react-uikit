import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import styles from './Popup.module.css';

export interface PopupOpenOptions {
  /** Anchor element the panel positions against. */
  anchor: HTMLElement;
  /** Panel content. */
  content: ReactNode;
  /** Panel width (any CSS length). Defaults to content width. */
  width?: number | string;
  /** Panel height (any CSS length). Defaults to content height. */
  height?: number | string;
  /** Extra class on the panel. */
  className?: string;
  /** Accessible name for the panel. Defaults to "Popup". */
  ariaLabel?: string;
  /** Fires after the panel opens. */
  onOpen?: () => void;
  /** Fires after the panel closes. */
  onClose?: () => void;
}

export interface PopupApi {
  /**
   * Opens an anchored panel (Radzen openPopup parity). Replaces any open
   * panel; returns a close function for the opened panel.
   */
  open: (options: PopupOpenOptions) => () => void;
  close: () => void;
  isOpen: boolean;
}

const PopupContext = createContext<PopupApi | null>(null);

export function usePopup(): PopupApi {
  const api = useContext(PopupContext);
  if (!api) throw new Error('usePopup must be used inside <PopupProvider>');
  return api;
}

interface PopupState extends PopupOpenOptions {
  seq: number;
  invoker: HTMLElement | null;
}

function resolveLength(value: number | string | undefined): string | undefined {
  if (value == null) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

function Panel({ state }: { state: PopupState }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  // Position below the anchor, flipping above near the bottom edge and
  // clamping horizontally (Radzen openPopup smart-position parity).
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const anchor = state.anchor.getBoundingClientRect();
    const rect = box.getBoundingClientRect();
    const left = Math.max(
      0,
      Math.min(anchor.left, window.innerWidth - rect.width)
    );
    let top = anchor.bottom + 4;
    if (
      top + rect.height > window.innerHeight &&
      anchor.top - 4 - rect.height >= 0
    ) {
      top = anchor.top - 4 - rect.height;
    }
    setPos({ left, top: Math.max(0, top) });
  }, [state]);

  // Focus into the panel on open (parity with the menu popup contract).
  useEffect(() => {
    boxRef.current?.focus();
  }, []);

  return (
    <div
      ref={boxRef}
      role="dialog"
      aria-label={state.ariaLabel ?? 'Popup'}
      tabIndex={-1}
      className={[styles.popup, state.className].filter(Boolean).join(' ')}
      style={{
        left: pos?.left ?? state.anchor.getBoundingClientRect().left,
        top: pos?.top,
        width: resolveLength(state.width),
        height: resolveLength(state.height),
      }}
    >
      {state.content}
    </div>
  );
}

export function PopupProvider({ children }: { children: ReactNode }) {
  const [popup, setPopup] = useState<PopupState | null>(null);
  const seqRef = useRef(0);
  const onCloseRef = useRef<(() => void) | null>(null);

  const fireClose = useCallback(() => {
    onCloseRef.current?.();
    onCloseRef.current = null;
  }, []);

  const close = useCallback(() => {
    setPopup((prev) => {
      if (!prev) return prev;
      if (prev.invoker && document.body.contains(prev.invoker)) {
        prev.invoker.focus({ preventScroll: true });
      }
      fireClose();
      return null;
    });
  }, [fireClose]);

  const open = useCallback(
    (options: PopupOpenOptions) => {
      seqRef.current += 1;
      const seq = seqRef.current;
      onCloseRef.current = options.onClose ?? null;
      setPopup({
        ...options,
        seq,
        invoker:
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null,
      });
      options.onOpen?.();
      let closed = false;
      return () => {
        if (closed) return;
        closed = true;
        setPopup((prev) => {
          if (prev?.seq !== seq) return prev;
          if (prev.invoker && document.body.contains(prev.invoker)) {
            prev.invoker.focus({ preventScroll: true });
          }
          fireClose();
          return null;
        });
      };
    },
    [fireClose]
  );

  // Dismiss: outside pointer, Escape, viewport resize, route change.
  useEffect(() => {
    if (!popup) return;
    const onPointerDown = (e: PointerEvent) => {
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

  const api = useMemo<PopupApi>(
    () => ({ open, close, isOpen: popup != null }),
    [open, close, popup]
  );

  return (
    <PopupContext.Provider value={api}>
      {children}
      {popup && <Panel key={popup.seq} state={popup} />}
    </PopupContext.Provider>
  );
}

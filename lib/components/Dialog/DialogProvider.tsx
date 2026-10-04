import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Dialog, type DialogSize } from './Dialog';

export interface ConfirmOptions {
  title?: ReactNode;
  message?: ReactNode;
  /** OK button label. Defaults to "Confirm". */
  confirmText?: string;
  /** Cancel button label. Defaults to "Cancel". */
  cancelText?: string;
  /** OK button severity — use "danger" for destructive actions. */
  tone?: 'primary' | 'danger';
  size?: DialogSize;
}

export interface AlertOptions {
  title?: ReactNode;
  message?: ReactNode;
  /** OK button label. Defaults to "OK". */
  okText?: string;
  size?: DialogSize;
}

export interface OpenOptions {
  title?: ReactNode;
  description?: ReactNode;
  /** Arbitrary body content (the htmx twin accepts HTML or a fetch URL). */
  content?: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  width?: number | string;
  height?: number | string;
  /** Render the header close (X) button. Defaults to true. */
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  className?: string;
}

export interface OpenSideOptions extends OpenOptions {
  position: 'left' | 'right' | 'top' | 'bottom';
  /** Dim the page behind the panel. Defaults to true. */
  showMask?: boolean;
}

export interface DialogApi {
  /**
   * Opens a confirm dialog. Resolves true on confirm; false on cancel,
   * ESC, or backdrop click. Calls queue behind the open dialog.
   */
  confirm(options?: ConfirmOptions): Promise<boolean>;
  /**
   * Opens an alert dialog. Resolves when acknowledged (OK, ESC, or
   * backdrop click). Calls queue behind the open dialog.
   */
  alert(options?: AlertOptions): Promise<void>;
  /**
   * Opens an arbitrary-content dialog. Resolves with the value passed to
   * `close(result)` (ESC/backdrop resolve undefined). Queues like the
   * helpers. Draggable is intentionally unsupported (no drag primitive
   * in the library yet); the dialog stays put.
   */
  open(options?: OpenOptions): Promise<unknown>;
  /**
   * Opens a side-docked panel (same promise/queue mechanics as `open`).
   */
  openSide(options: OpenSideOptions): Promise<unknown>;
  /** Closes the top dialog, resolving its promise with `result`. */
  close(result?: unknown): void;
  /** Closes every queued dialog; pending promises resolve undefined. */
  closeAll(): void;
  /** Re-renders the open dialog (e.g. after async content updates). */
  refresh(): void;
}

type DialogRequest = {
  /** Monotonic id — keys the host dialog so promotions re-run focus. */
  seq: number;
} & (
  | {
      kind: 'confirm';
      options: ConfirmOptions;
      resolve: (confirmed: boolean) => void;
    }
  | {
      kind: 'alert';
      options: AlertOptions;
      resolve: () => void;
    }
  | {
      kind: 'custom';
      options: OpenOptions & {
        side?: OpenSideOptions['position'] | null;
        showMask?: boolean;
      };
      resolve: (result: unknown) => void;
    }
);

const DialogContext = createContext<DialogApi | null>(null);

export function useDialog(): DialogApi {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a <DialogProvider>');
  }
  return context;
}

export interface DialogProviderProps {
  children: ReactNode;
}

/**
 * Mounts a single host Dialog and exposes imperative `confirm`/`alert`
 * through `useDialog()` (Radzen DialogService parity without a portal
 * service). One dialog at a time; further calls queue FIFO.
 *
 * A default title ("Confirm"/"Alert") keeps the native dialog's
 * accessible name intact — axe's aria-dialog-name rule fails unnamed
 * dialogs.
 */
export function DialogProvider({ children }: DialogProviderProps) {
  const [queue, setQueue] = useState<DialogRequest[]>([]);
  const [, setRev] = useState(0);
  const seqRef = useRef(0);
  const seq = () => {
    seqRef.current += 1;
    return seqRef.current;
  };
  // The memoized api below must see the live queue (memoized closures
  // capture the first render's bindings), so mirror it in a ref.
  const queueRef = useRef<DialogRequest[]>([]);
  queueRef.current = queue;

  /** Settle the head of the live queue (used by the memoized api). */
  const settleHead = (result: unknown) => {
    const head = queueRef.current[0];
    if (!head) return;
    if (head.kind === 'confirm') head.resolve(Boolean(result));
    else if (head.kind === 'alert') head.resolve();
    else head.resolve(result);
    setQueue((q) => q.slice(1));
  };

  const api = useMemo<DialogApi>(
    () => ({
      confirm: (options = {}) =>
        new Promise<boolean>((resolve) => {
          setQueue((q) => [
            ...q,
            { seq: seq(), kind: 'confirm', options, resolve },
          ]);
        }),
      alert: (options = {}) =>
        new Promise<void>((resolve) => {
          setQueue((q) => [
            ...q,
            { seq: seq(), kind: 'alert', options, resolve },
          ]);
        }),
      open: (options = {}) =>
        new Promise<unknown>((resolve) => {
          setQueue((q) => [
            ...q,
            { seq: seq(), kind: 'custom', options, resolve },
          ]);
        }),
      openSide: ({ position, showMask = true, ...rest }: OpenSideOptions) =>
        new Promise<unknown>((resolve) => {
          setQueue((q) => [
            ...q,
            {
              seq: seq(),
              kind: 'custom',
              options: { ...rest, side: position, showMask },
              resolve,
            },
          ]);
        }),
      close: (result?: unknown) => settleHead(result),
      closeAll: () => {
        setQueue((q) => {
          q.forEach((r) => {
            if (r.kind === 'confirm') r.resolve(false);
            else if (r.kind === 'alert') r.resolve();
            else r.resolve(undefined);
          });
          return [];
        });
      },
      refresh: () => setRev((n) => n + 1),
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const current = queue[0];
  // Settle the head request; the state update unmounts its content and
  // promotes the next queued request (if any) in the same dialog.
  // confirm resolves its boolean, alert resolves void, custom resolves
  // the passed result.
  function settle(result: unknown) {
    if (!current) return;
    if (current.kind === 'confirm') current.resolve(Boolean(result));
    else if (current.kind === 'alert') current.resolve();
    else current.resolve(result);
    setQueue((q) => q.slice(1));
  }

  const custom = current?.kind === 'custom' ? current.options : null;
  return (
    <DialogContext.Provider value={api}>
      {children}
      <Dialog
        key={current?.seq ?? 0}
        open={queue.length > 0}
        onClose={() => settle(false)}
        title={
          current?.kind === 'custom'
            ? (custom?.title ?? 'Dialog')
            : (current?.options.title ??
              (current?.kind === 'confirm' ? 'Confirm' : 'Alert'))
        }
        description={custom?.description}
        size={current?.kind === 'custom' ? custom?.size : current?.options.size}
        width={custom?.width}
        height={custom?.height}
        side={custom?.side ?? null}
        showCloseButton={custom?.showCloseButton}
        showMask={custom?.showMask}
        closeOnOverlayClick={custom?.closeOnOverlayClick}
        closeOnEsc={custom?.closeOnEsc}
        className={custom?.className}
        footer={
          current?.kind === 'confirm' ? (
            <>
              <Button variant="text" onClick={() => settle(false)}>
                {current.options.cancelText ?? 'Cancel'}
              </Button>
              <Button
                severity={current.options.tone ?? 'primary'}
                onClick={() => settle(true)}
              >
                {current.options.confirmText ?? 'Confirm'}
              </Button>
            </>
          ) : current?.kind === 'custom' ? (
            (custom?.footer ?? (
              <Button variant="text" onClick={() => settle(undefined)}>
                Close
              </Button>
            ))
          ) : (
            <Button onClick={() => settle(true)}>
              {current?.kind === 'alert'
                ? (current.options.okText ?? 'OK')
                : 'OK'}
            </Button>
          )
        }
      >
        {current?.kind === 'custom'
          ? custom?.content
          : current?.options.message != null && (
              <Text textStyle="Body1">{current.options.message}</Text>
            )}
      </Dialog>
    </DialogContext.Provider>
  );
}

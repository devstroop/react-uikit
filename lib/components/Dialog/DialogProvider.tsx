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
  const seqRef = useRef(0);

  const api = useMemo<DialogApi>(
    () => ({
      confirm: (options = {}) =>
        new Promise<boolean>((resolve) => {
          seqRef.current += 1;
          const seq = seqRef.current;
          setQueue((q) => [...q, { seq, kind: 'confirm', options, resolve }]);
        }),
      alert: (options = {}) =>
        new Promise<void>((resolve) => {
          seqRef.current += 1;
          const seq = seqRef.current;
          setQueue((q) => [...q, { seq, kind: 'alert', options, resolve }]);
        }),
    }),
    []
  );

  const current = queue[0];
  // Settle the head request; the state update unmounts its content and
  // promotes the next queued request (if any) in the same dialog.
  const settle = (confirmed: boolean) => {
    if (!current) return;
    if (current.kind === 'confirm') current.resolve(confirmed);
    else current.resolve();
    setQueue((q) => q.slice(1));
  };

  return (
    <DialogContext.Provider value={api}>
      {children}
      <Dialog
        key={current?.seq ?? 0}
        open={queue.length > 0}
        onClose={() => settle(false)}
        title={
          current?.options.title ??
          (current?.kind === 'confirm' ? 'Confirm' : 'Alert')
        }
        size={current?.options.size}
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
          ) : (
            <Button onClick={() => settle(true)}>
              {current?.kind === 'alert'
                ? (current.options.okText ?? 'OK')
                : 'OK'}
            </Button>
          )
        }
      >
        {current?.options.message != null && (
          <Text textStyle="Body1">{current.options.message}</Text>
        )}
      </Dialog>
    </DialogContext.Provider>
  );
}

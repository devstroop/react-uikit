import { useCallback, useEffect, useId, useRef, type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Dialog.module.css';

export type DialogSize = 'sm' | 'md' | 'lg';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  /** Explicit width (any CSS length). Overrides the size tier. */
  width?: number | string;
  /** Explicit height (any CSS length). Defaults to content height. */
  height?: number | string;
  className?: string;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  width,
  height,
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descId = useId();

  // onClose identity must not disturb the open effect: a parent re-render
  // with a fresh callback would otherwise run cleanup (dropping the
  // scroll lock + ESC listener) and the re-run would no-op on the already
  // open dialog. The ref always serves the latest callback instead.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });
  // Tracks whether the current close gesture already notified the parent,
  // so the ensuing native `close` event doesn't notify a second time.
  const notifiedRef = useRef(false);
  const suppressNextNativeCloseRef = useRef(false);

  // The single user-gesture close path: ESC, backdrop, and the X button
  // all funnel here. Exactly one notification per gesture; the native
  // `close` event that follows the parent's `open` flip is suppressed.
  const requestClose = useCallback(() => {
    if (notifiedRef.current) return;
    notifiedRef.current = true;
    onCloseRef.current();
  }, []);

  const handleNativeClose = useCallback(() => {
    if (suppressNextNativeCloseRef.current) {
      suppressNextNativeCloseRef.current = false;
      return;
    }
    onCloseRef.current();
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) {
      return;
    }
    if (open && !dialog.open) {
      // Remember the opener so focus can be restored on close; move focus
      // into the dialog (close button first) so AT enters the modal.
      const opener =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      dialog.showModal();
      // Prefer the close control so focus lands predictably regardless of
      // content order; fall back to the first button if titleless.
      const firstFocus =
        dialog.querySelector<HTMLButtonElement>(
          'button[aria-label="Close dialog"]'
        ) ?? dialog.querySelector<HTMLButtonElement>('button');
      firstFocus?.focus();
      // body scroll lock without layout shift
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onCancel = (e: Event) => {
        e.preventDefault();
        // Controlled close: notify once here and let the parent's `open`
        // flip drive the native close below. Never force-close — that
        // would fire `onClose` a second time via the native handler.
        requestClose();
      };
      dialog.addEventListener('cancel', onCancel);
      return () => {
        dialog.removeEventListener('cancel', onCancel);
        document.body.style.overflow = prev;
        opener?.focus({ preventScroll: true });
      };
    } else if (!open && dialog.open) {
      // Consume the gesture flag so a parent-driven close still notifies
      // once via the native handler, while a gesture-driven close (already
      // notified through requestClose) stays silent here.
      suppressNextNativeCloseRef.current = notifiedRef.current;
      notifiedRef.current = false;
      dialog.close();
    }
  }, [open, requestClose]);

  return (
    // Backdrop dismissal is mouse-only by design; keyboard users close
    // via ESC (cancel path above) or the X button.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={ref}
      className={[styles.dialog, styles[size], className]
        .filter(Boolean)
        .join(' ')}
      style={{
        width: width ?? undefined,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: width != null ? 'none' : undefined,
        height: height ?? undefined,
      }}
      onClose={handleNativeClose}
      onClick={(e) => {
        if (e.target === ref.current) requestClose();
      }}
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descId : undefined}
    >
      {title && (
        <header className={styles.header}>
          <div>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            {description && (
              <p id={descId} className={styles.description}>
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={requestClose}
            aria-label="Close dialog"
          >
            <Icon name="close" size="sm" />
          </button>
        </header>
      )}
      {children && <div className={styles.body}>{children}</div>}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </dialog>
  );
}

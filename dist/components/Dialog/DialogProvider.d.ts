import { ReactNode } from 'react';
import { DialogSize } from './Dialog';
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
export declare function useDialog(): DialogApi;
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
export declare function DialogProvider({ children }: DialogProviderProps): import("react").JSX.Element;

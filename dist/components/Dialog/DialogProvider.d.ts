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

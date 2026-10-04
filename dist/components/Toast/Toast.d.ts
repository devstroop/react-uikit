import { ReactNode } from 'react';
import { Severity } from '../../types/severity';
export type ToastTone = Extract<Severity, 'info' | 'success' | 'warning' | 'danger'>;
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface ToastAction {
    label: ReactNode;
    onClick?: () => void;
}
export interface ToastOptions {
    title?: ReactNode;
    description?: ReactNode;
    /** Severity axis — the single severity prop (Radzen Severity parity). */
    severity?: ToastTone;
    durationMs?: number;
    /** Reuse an id to update an existing toast instead of appending (sonner parity). */
    id?: number | string;
    action?: ToastAction;
    cancel?: ToastAction;
    dismissible?: boolean;
    /** Dismiss the toast when the body is clicked (Radzen CloseOnClick parity). */
    closeOnClick?: boolean;
    /** Opaque value handed to `click` on body activation (Radzen Payload parity). */
    payload?: unknown;
    /** Body-click handler, invoked with `payload` (Radzen Click parity). */
    click?: (payload: unknown) => void;
    /** Render a bottom progress bar tracking the duration (Radzen ShowProgress parity). */
    showProgress?: boolean;
    position?: ToastPosition;
    onDismiss?: () => void;
    onAutoClose?: () => void;
}
/**
 * Radzen NotificationMessage shape: `notify()` accepts it and maps it
 * onto ToastOptions (summary/detail(+Content templates) -> title/
 * description, duration -> durationMs).
 */
export interface NotifyMessage {
    severity?: ToastTone;
    summary?: ReactNode;
    detail?: ReactNode;
    summaryContent?: ReactNode;
    detailContent?: ReactNode;
    duration?: number;
    click?: (payload: unknown) => void;
    closeOnClick?: boolean;
    payload?: unknown;
}
interface ToastContextValue {
    toast: (options: ToastOptions) => void;
    notify: (message: NotifyMessage) => void;
    notifyInfo: (summary: ReactNode, detail?: ReactNode) => void;
    notifySuccess: (summary: ReactNode, detail?: ReactNode) => void;
    notifyWarning: (summary: ReactNode, detail?: ReactNode) => void;
    notifyError: (summary: ReactNode, detail?: ReactNode) => void;
}
export declare function useToast(): ToastContextValue;
export interface ToastProviderProps {
    children: ReactNode;
    durationMs?: number;
    position?: ToastPosition;
    /** Pause every auto-dismiss timer while a toast is hovered or the tab is hidden. */
    pauseOnHover?: boolean;
    className?: string;
}
export declare function ToastProvider({ children, durationMs, position, pauseOnHover, className, }: ToastProviderProps): import("react").JSX.Element;
export {};

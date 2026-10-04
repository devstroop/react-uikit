import { ReactNode } from 'react';
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
export declare function usePopup(): PopupApi;
export declare function PopupProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;

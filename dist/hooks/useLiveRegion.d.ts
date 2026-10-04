/**
 * Imperative screen-reader announcement channel (`data-dx-live-region`
 * parity). Mounts a visually-hidden `role="status"` panel on `<body>` and
 * returns an `announce(text)` callback that overwrites it: AT reads the
 * new text aloud on every call without disrupting the visual tree.
 *
 * React-only wiring — the DOM node is created (and cleaned up on unmount)
 * by the hook, so the host does not need to render a container.
 *
 * Notes:
 * SSR / tests without a DOM simply no-op until mounted.
 * Multiple independent channels can be mounted side by side;each renders its own hidden region.
 */
export declare function useLiveRegion(): (text: string) => void;

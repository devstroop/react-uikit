/**
 * Reactive `window.matchMedia` binding (RadzenSidebar JS-sync parity).
 * Returns false on the server and before the first effect run.
 */
export declare function useMediaQuery(query: string): boolean;

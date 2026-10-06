/**
 * Theme service (uikit#98): the imperative counterpart of the
 * ThemeToggle component (and the demos' ThemeSwitcher). Owns `<html data-palette>` and
 * `<html data-theme>` plus `dx-palette`/`dx-theme` storage, and notifies
 * subscribers on every change. Components stay thin: they read through
 * `useThemeService` and write through the service verbs, so app code,
 * controls, and storage never disagree.
 */
export type Appearance = 'light' | 'dark';
export interface ThemeState {
    theme: string | null;
    appearance: Appearance | null;
}
export type ThemeListener = (state: ThemeState) => void;
/** Subscribe to theme/appearance changes. Returns an unsubscribe fn. */
export declare function subscribe(listener: ThemeListener): () => void;
/** Currently applied theme name (palette), or null when unset. */
export declare function getTheme(): string | null;
/** Apply a theme name; null clears the attribute and the stored choice. */
export declare function setTheme(name: string | null): void;
/** Currently applied appearance, or null when unset. */
export declare function getAppearance(): Appearance | null;
/** Apply an appearance; null clears the attribute and the stored choice. */
export declare function setAppearance(mode: Appearance | null): void;
export interface ThemeService {
    theme: string | null;
    appearance: Appearance | null;
    setTheme: typeof setTheme;
    setAppearance: typeof setAppearance;
    subscribe: typeof subscribe;
}
/**
 * Reactive binding to the theme service: re-renders on every change and
 * hands out the current state plus the service verbs.
 */
export declare function useThemeService(): ThemeService;
/** Reset module state. Test-only seam: jsdom suites share one document. */
export declare function __resetThemeServiceForTests(): void;

/** `read` is injectable because jsdom does not resolve custom properties from
 * stylesheets, so the real source would make the test assert nothing. */
export declare function warnIfThemeMissing(read?: () => string): void;
export declare function warnIfThemeMissingInDev(): void;

const TOKEN = '--dx-primary-color';

const MESSAGE =
  `react-uikit: ${TOKEN} resolves to nothing on this document, so every ` +
  'var(--dx-*) in the component stylesheets is unresolved and the app renders ' +
  'in browser defaults. The theme is not a side effect of importing the kit ' +
  '(GAP-015): import a theme stylesheet such as ' +
  '"@devstroop/react-uikit/themes/zen.css" plus ' +
  '"@devstroop/react-uikit/utilities.css" from your entry, or the full ' +
  '"@devstroop/react-uikit/style.css".';

const tokenValue = () =>
  // No document to inspect (SSR/prerender): treat the theme as present, since
  // the stylesheet is whatever the server linked and warning here would be noise.
  typeof document === 'undefined'
    ? 'uncheckable'
    : getComputedStyle(document.documentElement).getPropertyValue(TOKEN);

/** `read` is injectable because jsdom does not resolve custom properties from
 * stylesheets, so the real source would make the test assert nothing. */
export function warnIfThemeMissing(read: () => string = tokenValue): void {
  if (read().trim() === '') console.warn(MESSAGE);
}

/** Deferred one frame so the document's stylesheets have applied, and dev-only:
 * a production build folds `import.meta.env.DEV` to false, so this call and the
 * warning string drop out of the bundle. */
let checked = false;

export function warnIfThemeMissingInDev(): void {
  if (checked || !import.meta.env?.DEV || typeof document === 'undefined')
    return;
  checked = true;
  const run = () => warnIfThemeMissing();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    requestAnimationFrame(run);
  }
}

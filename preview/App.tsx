import { createElement, useEffect, useState } from 'react';
import { Text } from '../lib/main';
import { DocsLayout } from './layouts/DocsLayout';
import { routeTitle } from './nav';
import { resolveRoute } from './routes';

function routeFromHash(): string {
  const slug = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  return slug || '';
}

/**
 * Palette stylesheets per theme — dynamically imported so only the
 * selected palette ships its ~35k lines. Each theme's styles are scoped
 * to `[data-palette='X']` (vendored fluent/material3 files carry a light
 * + dark twin; hand-authored github/material/shadcn files carry both
 * blocks in one file). `document.documentElement.dataset.palette` is set
 * only after every stylesheet resolves, so attribute presence === CSS
 * live (the e2e axe matrix polls it).
 */
const PALETTE_LOADERS: Record<string, (() => Promise<unknown>)[]> = {
  fluent: [
    () => import('./styles/fluent-base.css'),
    () => import('./styles/fluent-dark-base.css'),
  ],
  github: [() => import('./styles/github.css')],
  material: [() => import('./styles/material.css')],
  'material-3': [
    () => import('./styles/material3-base.css'),
    () => import('./styles/material3-dark-base.css'),
  ],
  shadcn: [() => import('./styles/shadcn.css')],
};

/**
 * Preview shell: layout-agnostic app root (Blazor `Routes.razor` parity).
 * Owns routing state (hash slug), global theme/dark state, and layout
 * selection — no layout chrome of its own. Every known slug renders
 * inside `DocsLayout`; unknown slugs render the NotFound fallback with
 * no chrome, like Blazor's `<NotFound>` outside `MainLayout`.
 */
export function App() {
  const [route, setRoute] = useState(routeFromHash);
  const [theme, setTheme] = useState<string>('default');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
  }, [dark]);

  useEffect(() => {
    const root = document.documentElement;
    // Delete first: the attribute must never outlive its CSS, and the
    // e2e poll treats a stale value from the previous palette as a hang.
    delete root.dataset.palette;
    const loaders = PALETTE_LOADERS[theme];
    if (!loaders) return;
    let cancelled = false;
    void Promise.all(loaders.map((load) => load())).then(() => {
      if (!cancelled) root.dataset.palette = theme;
    });
    return () => {
      cancelled = true;
    };
  }, [theme]);

  const Page = resolveRoute(route);
  if (Page == null) {
    return <Text textStyle="Body1">Unknown demo: {routeTitle(route)}</Text>;
  }
  return (
    <DocsLayout
      route={route}
      theme={theme}
      onThemeChange={setTheme}
      dark={dark}
      onDarkChange={setDark}
    >
      {createElement(Page, { slug: route })}
    </DocsLayout>
  );
}

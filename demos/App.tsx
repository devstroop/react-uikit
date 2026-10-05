import { createElement, useEffect, useState } from 'react';
import { Button, Stack, Text } from '../lib/main';
import { DocsLayout } from './layouts/DocsLayout';
import { routeTitle } from './nav';
import { DemoPage } from './pages/demo-page';
import { resolveRoute } from './routes';

function routeFromHash(): string {
  const slug = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  return slug || '';
}

/** `tabs/keyboard` → { slug: 'tabs', anchor: 'keyboard' } — section deep links. */
function splitRoute(route: string): { slug: string; anchor: string | null } {
  const i = route.indexOf('/');
  return i === -1
    ? { slug: route, anchor: null }
    : { slug: route.slice(0, i), anchor: route.slice(i + 1) };
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
 * Demos shell: layout-agnostic app root (Blazor `Routes.razor` parity).
 * Owns routing state (hash slug), global theme/dark state, and layout
 * selection. Every slug — including unknown ones — renders inside
 * `DocsLayout`; an unknown slug shows the styled not-found page in the
 * docs chrome instead of a bare fallback.
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

  const { slug, anchor } = splitRoute(route);

  useEffect(() => {
    document.title = slug
      ? `${routeTitle(slug)} · React UIKit Demos`
      : 'React UIKit Demos';
  }, [slug]);

  // section deep link: #/slug/sectionId scrolls to the card after render
  // (mirrors the htmx demos's targetId scroll)
  useEffect(() => {
    if (!anchor) return;
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [route, anchor]);

  const Page = resolveRoute(slug);
  if (Page == null) {
    return (
      <DocsLayout
        theme={theme}
        onThemeChange={setTheme}
        dark={dark}
        onDarkChange={setDark}
      >
        <DemoPage
          title="Page not found"
          description={`No demo route matches “${routeTitle(slug)}”.`}
          sections={[
            {
              id: 'not-found',
              title: '404',
              content: (
                <Stack orientation="vertical" gap={16} align="start">
                  <Text textStyle="body1" className="dx-text-muted">
                    Check the sidebar for a component, or return to the start.
                  </Text>
                  <Button
                    variant="filled"
                    severity="primary"
                    onClick={() => {
                      window.location.hash = '#/';
                    }}
                  >
                    Go home
                  </Button>
                </Stack>
              ),
            },
          ]}
        />
      </DocsLayout>
    );
  }
  return (
    <DocsLayout
      theme={theme}
      onThemeChange={setTheme}
      dark={dark}
      onDarkChange={setDark}
    >
      {createElement(Page, { slug })}
    </DocsLayout>
  );
}

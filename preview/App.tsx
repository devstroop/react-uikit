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

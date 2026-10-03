import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  Badge,
  Body,
  Header,
  Layout,
  Link,
  PanelMenu,
  PanelMenuItem,
  Sidebar,
  SidebarToggle,
  Stack,
  Text,
  TextBox,
  ThemeSwitcher,
  ThemeToggle,
} from '../../lib/main';
import { DEMO_GROUPS } from '../nav';

/**
 * Docs layout: the preview app's chrome (Blazor `MainLayout` parity).
 * Owns only layout chrome — header, sidebar nav, body frame. Route
 * content arrives as children; routing, theme and dark-mode state stay
 * in the shell (`App.tsx`) and flow in as props, like Blazor's
 * cascading parameters. The sidebar dogfoods PanelMenu: groups are
 * collapsible panels, leaves are hash anchors whose selected state
 * syncs from the URL inside the component.
 */
export function DocsLayout({
  theme,
  onThemeChange,
  dark,
  onDarkChange,
  children,
}: {
  theme: string;
  onThemeChange: (theme: string) => void;
  dark: boolean;
  onDarkChange: (dark: boolean) => void;
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window === 'undefined' || window.innerWidth >= 768
  );

  // viewport crossing parity (htmx preview): desktop keeps the nav open,
  // crossing under 768px collapses it; crossing back reopens it
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setSidebarOpen(mq.matches);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // mobile: collapse the drawer after navigating (htmx preview parity)
  useEffect(() => {
    const onHash = () => {
      if (
        typeof window !== 'undefined' &&
        window.matchMedia &&
        !window.matchMedia('(min-width: 768px)').matches
      ) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const [query, setQuery] = useState('');
  const componentCount = useMemo(
    () => DEMO_GROUPS.reduce((n, g) => n + g.routes.length, 0),
    []
  );
  const visibleGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q === '') return DEMO_GROUPS;
    return DEMO_GROUPS.map((group) => ({
      ...group,
      routes: group.routes.filter(
        (r) =>
          r.title.toLowerCase().includes(q) || r.slug.toLowerCase().includes(q)
      ),
    })).filter((group) => group.routes.length > 0);
  }, [query]);

  return (
    <Layout>
      <Header sticky>
        <Stack orientation="horizontal" gap={12} align="center">
          <SidebarToggle
            onClick={() => setSidebarOpen((v) => !v)}
            aria-expanded={sidebarOpen}
          />
          <Link href="#/">
            <Text textStyle="H3" tagName="Strong">
              UIKit
            </Text>
          </Link>
          <Badge size="sm" severity="primary">
            React
          </Badge>
          <Badge size="sm" severity="secondary">
            {componentCount} components
          </Badge>
        </Stack>
        <Stack
          orientation="horizontal"
          gap={12}
          align="center"
          style={{ marginLeft: 'auto' }}
        >
          <ThemeSwitcher
            size="sm"
            id="preview-theme"
            value={theme}
            onChange={onThemeChange}
          />
          <ThemeToggle
            id="preview-dark"
            size="sm"
            value={dark ? 'dark' : 'light'}
            onChange={(next) => onDarkChange(next === 'dark')}
          />
        </Stack>
      </Header>
      <Sidebar expanded={sidebarOpen} sticky>
        <TextBox
          size="sm"
          type="search"
          aria-label="Filter components"
          placeholder="Search components…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value !== '' && !sidebarOpen) setSidebarOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setQuery('');
          }}
          className="dx-mb-4"
        />
        {visibleGroups.length === 0 ? (
          <Text className="dx-text-muted">
            No components match “{query.trim()}”.
          </Text>
        ) : (
          <PanelMenu ariaLabel="Components">
            {visibleGroups.map((group) => (
              <PanelMenuItem
                key={group.title}
                text={group.title}
                defaultExpanded
              >
                {group.routes.map((r) => (
                  <PanelMenuItem
                    key={r.slug}
                    text={r.title}
                    path={`#/${r.slug}`}
                  />
                ))}
              </PanelMenuItem>
            ))}
          </PanelMenu>
        )}
      </Sidebar>
      <Body className="app-body">{children}</Body>
    </Layout>
  );
}

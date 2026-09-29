import { useMemo, useState, type ReactNode } from 'react';
import {
  Badge,
  Body,
  Header,
  Layout,
  Link,
  Sidebar,
  SidebarToggle,
  Stack,
  Text,
  Textbox,
  ThemeSwitcher,
  ThemeToggle,
} from '../../lib/main';
import { DEMO_GROUPS } from '../nav';

/**
 * Docs layout: the preview app's chrome (Blazor `MainLayout` parity).
 * Owns only layout chrome — header, sidebar nav, body frame. Route
 * content arrives as children; routing, theme and dark-mode state stay
 * in the shell (`App.tsx`) and flow in as props, like Blazor's
 * cascading parameters. Pages that need no chrome (404) bypass this
 * layout entirely — same as Blazor's `<NotFound>` rendering outside
 * `MainLayout`.
 */
export function DocsLayout({
  route,
  theme,
  onThemeChange,
  dark,
  onDarkChange,
  children,
}: {
  /** Active hash slug (highlights the nav link). */
  route: string;
  theme: string;
  onThemeChange: (theme: string) => void;
  dark: boolean;
  onDarkChange: (dark: boolean) => void;
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window === 'undefined' || window.innerWidth >= 768
  );
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
              react-uikit
            </Text>
          </Link>
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
        <Textbox
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
        <nav aria-label="Components">
          {visibleGroups.length === 0 ? (
            <Text className="dx-text-muted">
              No components match “{query.trim()}”.
            </Text>
          ) : (
            <Stack orientation="vertical" gap={16}>
              {visibleGroups.map((group) => (
                <div key={group.title}>
                  <Text textStyle="Overline" tagName="P">
                    {group.title}
                  </Text>
                  {/* List semantics have no uikit equivalent; reset stays. */}
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {group.routes.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`#/${r.slug}`}
                          aria-current={route === r.slug ? 'page' : undefined}
                          style={
                            route === r.slug ? { fontWeight: 700 } : undefined
                          }
                        >
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Stack>
          )}
        </nav>
      </Sidebar>
      <Body>{children}</Body>
    </Layout>
  );
}

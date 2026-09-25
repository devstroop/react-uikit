import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../lib/styles/tokens.css';
import '../lib/utilities.css';
import { Body, Header, Layout, Sidebar, Text } from '../lib/main';
import { DEMO_GROUPS, routeTitle } from './nav';
import { IndexPage } from './pages/index';
import { LayoutDemos } from './pages/layout';
import { TypographyDemos } from './pages/typography';
import { ButtonDemos } from './pages/buttons';
import { FormDemos } from './pages/forms';
import { FeedbackDemos } from './pages/feedback';
import { NavigationDemos } from './pages/navigation';
import { DataDemos } from './pages/data';
import { DisplayDemos } from './pages/display';
import { ThemeDemos } from './pages/theme';
import { RecipeDemos } from './pages/recipes';

export const THEMES = [
  'default',
  'fluent',
  'github',
  'material',
  'material-3',
  'shadcn',
] as const;

function routeFromHash(): string {
  const slug = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  return slug || '';
}

function DemoForRoute({ slug }: { slug: string }) {
  switch (slug) {
    case '':
      return <IndexPage />;
    case 'layout':
    case 'header':
    case 'body':
    case 'footer':
    case 'sidebar':
    case 'sidebartoggle':
    case 'row':
    case 'column':
    case 'stack':
      return <LayoutDemos slug={slug} />;
    case 'text':
    case 'icon':
      return <TypographyDemos slug={slug} />;
    case 'button':
    case 'togglebutton':
    case 'splitbutton':
    case 'fabmenu':
      return <ButtonDemos slug={slug} />;
    case 'form':
    case 'field':
    case 'input':
    case 'textbox':
    case 'textarea':
    case 'password':
    case 'mask':
    case 'numeric':
    case 'select':
    case 'dropdown':
    case 'autocomplete':
    case 'listbox':
    case 'checkbox':
    case 'checkboxlist':
    case 'radiobuttonlist':
    case 'switch':
    case 'slider':
    case 'rating':
    case 'colorpicker':
    case 'datepicker':
    case 'timespanpicker':
    case 'securitycode':
    case 'upload':
    case 'selectbar':
    case 'label':
      return <FormDemos slug={slug} />;
    case 'alert':
    case 'progress':
    case 'skeleton':
    case 'emptystate':
    case 'toast':
    case 'dialog':
    case 'tooltip':
      return <FeedbackDemos slug={slug} />;
    case 'breadcrumb':
    case 'menu':
    case 'panelmenu':
    case 'profilemenu':
    case 'tabs':
    case 'steps':
    case 'toc':
    case 'pager':
      return <NavigationDemos slug={slug} />;
    case 'table':
    case 'datagrid':
    case 'datalist':
    case 'tree':
    case 'picklist':
    case 'pivot':
    case 'chart':
    case 'gantt':
    case 'scheduler':
    case 'timeline':
    case 'datafilter':
    case 'qrcode':
    case 'barcode':
      return <DataDemos slug={slug} />;
    case 'card':
    case 'badge':
    case 'avatar':
    case 'stat':
    case 'accordion':
    case 'carousel':
    case 'splitter':
      return <DisplayDemos slug={slug} />;
    case 'themeswitcher':
      return <ThemeDemos slug={slug} />;
    case 'recipe-login':
    case 'recipe-404':
      return <RecipeDemos slug={slug} />;
    default:
      return <Text textStyle="Body1">Unknown demo: {routeTitle(slug)}</Text>;
  }
}

function App() {
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

  return (
    <Layout>
      <Header>
        <a
          href="#/"
          style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}
        >
          react-uikit
        </a>
        <div
          className="chrome-controls"
          style={{ display: 'flex', gap: 12, marginLeft: 'auto' }}
        >
          <label htmlFor="preview-theme">Theme</label>
          <select
            id="preview-theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            data-preview-theme={theme}
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <label htmlFor="preview-dark">
            <input
              id="preview-dark"
              type="checkbox"
              checked={dark}
              onChange={(e) => setDark(e.target.checked)}
            />
            Dark mode
          </label>
        </div>
      </Header>
      <Sidebar>
        <nav aria-label="Components">
          {DEMO_GROUPS.map((group) => (
            <div key={group.title}>
              <Text textStyle="Overline" tagName="P">
                {group.title}
              </Text>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {group.routes.map((r) => (
                  <li key={r.slug}>
                    <a
                      href={`#/${r.slug}`}
                      aria-current={route === r.slug ? 'page' : undefined}
                    >
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Sidebar>
      <Body>
        <DemoForRoute slug={route} />
      </Body>
    </Layout>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}

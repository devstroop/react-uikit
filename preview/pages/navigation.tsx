import {
  Breadcrumb,
  Link,
  Menu,
  Pager,
  PanelMenu,
  ProfileMenu,
  Steps,
  Tabs,
  Text,
  Toc,
} from '../../lib/main';
import { DemoPage } from './demo-page';

export function NavigationDemos({ slug }: { slug: string }) {
  if (slug === 'link') {
    return (
      <DemoPage
        title="Link"
        sections={[
          {
            id: 'link-variants',
            content: (
              <>
                <Text>
                  Read the <Link href="#/link">documentation</Link> first.
                </Text>
                <Text>
                  <Link
                    href="https://example.com"
                    target="_blank"
                    icon="external-link"
                  >
                    External with icon
                  </Link>
                </Text>
                <Text>
                  <Link
                    onClick={() => undefined}
                    aria-expanded={false}
                    aria-label="Disclosure action without navigation"
                  >
                    Action styled as link
                  </Link>
                </Text>
              </>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'menu') {
    return (
      <DemoPage
        title="Menu"
        sections={[
          {
            id: 'menu-basic',
            content: (
              <Menu
                items={[
                  { text: 'Home', path: '/' },
                  {
                    text: 'Products',
                    children: [{ text: 'A' }, { text: 'B' }],
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'panelmenu') {
    return (
      <DemoPage
        title="PanelMenu"
        sections={[
          {
            id: 'panelmenu-basic',
            content: (
              <PanelMenu
                items={[
                  { text: 'Dashboard', icon: 'home' },
                  {
                    text: 'Settings',
                    children: [{ text: 'Users' }, { text: 'Roles' }],
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'profilemenu') {
    return (
      <DemoPage
        title="ProfileMenu"
        sections={[
          {
            id: 'profilemenu-basic',
            content: (
              <ProfileMenu
                trigger={<span>Profile</span>}
                items={[{ text: 'Settings', path: '/settings' }]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'tabs') {
    return (
      <DemoPage
        title="Tabs"
        sections={[
          {
            id: 'tabs-basic',
            content: (
              <Tabs
                items={[
                  { key: 'a', label: 'First', content: <Text>First tab</Text> },
                  {
                    key: 'b',
                    label: 'Second',
                    content: <Text>Second tab</Text>,
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'steps') {
    return (
      <DemoPage
        title="Steps"
        sections={[
          {
            id: 'steps-basic',
            content: (
              <Steps
                items={[{ text: 'One' }, { text: 'Two' }, { text: 'Three' }]}
                defaultIndex={1}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'toc') {
    return (
      <DemoPage
        title="Toc"
        description="Auto table of contents with scroll-spy and smooth scroll."
        sections={[
          {
            id: 'toc-basic',
            content: <Toc items={[{ text: 'Top', selector: '#top' }]} />,
          },
        ]}
      />
    );
  }
  if (slug === 'pager') {
    return (
      <DemoPage
        title="Pager"
        sections={[
          {
            id: 'pager-basic',
            content: <Pager count={100} pageSize={10} defaultPage={2} />,
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Breadcrumb"
      sections={[
        {
          id: 'breadcrumb-basic',
          content: (
            <Breadcrumb
              items={[
                { text: 'Home', path: '/' },
                { text: 'Library', path: '/lib' },
                { text: 'Current' },
              ]}
            />
          ),
        },
      ]}
    />
  );
}

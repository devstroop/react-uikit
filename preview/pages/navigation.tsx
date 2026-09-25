import {
  Breadcrumb,
  Menu,
  Pager,
  PanelMenu,
  ProfileMenu,
  Steps,
  Tabs,
  Text,
  Toc,
} from '../../lib/main';
import { DemoSection } from './section';

export function NavigationDemos({ slug }: { slug: string }) {
  if (slug === 'menu') {
    return (
      <DemoSection title="Menu">
        <Menu
          items={[
            { text: 'Home', path: '/' },
            {
              text: 'Products',
              children: [{ text: 'A' }, { text: 'B' }],
            },
          ]}
        />
      </DemoSection>
    );
  }
  if (slug === 'panelmenu') {
    return (
      <DemoSection title="PanelMenu">
        <PanelMenu
          items={[
            { text: 'Dashboard', icon: 'home' },
            {
              text: 'Settings',
              children: [{ text: 'Users' }, { text: 'Roles' }],
            },
          ]}
        />
      </DemoSection>
    );
  }
  if (slug === 'profilemenu') {
    return (
      <DemoSection title="ProfileMenu">
        <ProfileMenu
          trigger={<span>Profile</span>}
          items={[{ text: 'Settings', path: '/settings' }]}
        />
      </DemoSection>
    );
  }
  if (slug === 'tabs') {
    return (
      <DemoSection title="Tabs">
        <Tabs
          items={[
            { key: 'a', label: 'First', content: <Text>First tab</Text> },
            { key: 'b', label: 'Second', content: <Text>Second tab</Text> },
          ]}
        />
      </DemoSection>
    );
  }
  if (slug === 'steps') {
    return (
      <DemoSection title="Steps">
        <Steps
          items={[{ text: 'One' }, { text: 'Two' }, { text: 'Three' }]}
          defaultIndex={1}
        />
      </DemoSection>
    );
  }
  if (slug === 'toc') {
    return (
      <DemoSection title="Toc">
        <Toc items={[{ text: 'Top', selector: '#top' }]} />
      </DemoSection>
    );
  }
  if (slug === 'pager') {
    return (
      <DemoSection title="Pager">
        <Pager count={100} pageSize={10} defaultPage={2} />
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Breadcrumb">
      <Breadcrumb
        items={[
          { text: 'Home', path: '/' },
          { text: 'Library', path: '/lib' },
          { text: 'Current' },
        ]}
      />
    </DemoSection>
  );
}

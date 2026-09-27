import { ThemeSwitcher } from '../../lib/main';
import { DemoPage } from './demo-page';

export function ThemeDemos({ slug }: { slug: string }) {
  if (slug === 'themeswitcher') {
    return (
      <DemoPage
        title="ThemeSwitcher"
        description="Uncontrolled, persistence off for the showcase."
        sections={[
          {
            id: 'themeswitcher-basic',
            content: <ThemeSwitcher storageKey={null} />,
          },
        ]}
      />
    );
  }
  return null;
}

import { Text, ThemeSwitcher } from '../../lib/main';
import { DemoSection } from './section';

export function ThemeDemos({ slug }: { slug: string }) {
  if (slug === 'themeswitcher') {
    return (
      <DemoSection title="ThemeSwitcher">
        <ThemeSwitcher storageKey={null} />
        <Text textStyle="Body1" className="dx-text-muted">
          Uncontrolled, persistence off for the showcase.
        </Text>
      </DemoSection>
    );
  }
  return null;
}

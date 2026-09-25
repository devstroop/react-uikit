import { Icon, Row, Text } from '../../lib/main';
import { DemoSection } from './section';

const STYLES = [
  'DisplayH1',
  'H1',
  'H2',
  'H3',
  'Subtitle1',
  'Subtitle2',
  'Body1',
  'Body2',
  'Caption',
  'Overline',
] as const;

export function TypographyDemos({ slug }: { slug: string }) {
  if (slug === 'icon') {
    return (
      <DemoSection title="Icon">
        <Row align="center" gap="md">
          <Icon name="check" />
          <Icon name="close" />
          <Icon name="search" />
          <Icon name="menu" size="lg" />
          <Icon name="settings" size={20} />
        </Row>
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Text">
      {STYLES.map((s) => (
        <Text key={s} textStyle={s}>
          {s} — The quick brown fox
        </Text>
      ))}
      <Text tagName="Strong">Strong semantics preserved</Text>
    </DemoSection>
  );
}

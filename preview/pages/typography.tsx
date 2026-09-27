import { Icon, Row, Stack, Text } from '../../lib/main';
import { DemoPage } from './demo-page';

export function TypographyDemos({ slug }: { slug: string }) {
  if (slug === 'icon') {
    return (
      <DemoPage
        title="Icon"
        description="Icons render at text size by default; size takes a tier or pixels."
        sections={[
          {
            id: 'icon-sizes',
            content: (
              <Row align="center" gap="md" wrap>
                <Icon name="check" />
                <Icon name="close" />
                <Icon name="search" />
                <Icon name="menu" size="lg" />
                <Icon name="settings" size={20} />
              </Row>
            ),
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Text"
      description="Type ramp with Radzen TextStyle parity; semantic tags stay intact."
      sections={[
        {
          id: 'display-styles',
          title: 'Display Styles',
          description: 'Large display ramp for hero copy.',
          content: (
            <Stack orientation="vertical" gap="sm">
              {(['DisplayH1', 'DisplayH5'] as const).map((s) => (
                <Text key={s} textStyle={s}>
                  {s} — The quick brown fox
                </Text>
              ))}
            </Stack>
          ),
        },
        {
          id: 'headings',
          title: 'Headings',
          description: 'Standard H1–H3 headings.',
          content: (
            <Stack orientation="vertical" gap="sm">
              {(['H1', 'H2', 'H3'] as const).map((s) => (
                <Text key={s} textStyle={s}>
                  {s} — The quick brown fox
                </Text>
              ))}
            </Stack>
          ),
        },
        {
          id: 'body-text',
          title: 'Body Text',
          description: 'Subtitles, body copy, captions and overlines.',
          content: (
            <Stack orientation="vertical" gap="sm">
              {(
                [
                  'Subtitle1',
                  'Subtitle2',
                  'Body1',
                  'Body2',
                  'Caption',
                  'Overline',
                ] as const
              ).map((s) => (
                <Text key={s} textStyle={s}>
                  {s} — The quick brown fox
                </Text>
              ))}
              <Text tagName="Strong">Strong semantics preserved</Text>
            </Stack>
          ),
        },
      ]}
    />
  );
}

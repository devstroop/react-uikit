import {
  Icon,
  iconNames,
  iconSetNames,
  iconSets,
  Row,
  Stack,
  Text,
  type IconSetPrefix,
} from '../../lib/main';
import { DemoPage } from './demo-page';

function IconGlyphGrid({ prefix }: { prefix: IconSetPrefix }) {
  const set = iconSets[prefix];
  return (
    <Stack orientation="vertical" gap={8}>
      <Text textStyle="H5" tagName="H3">
        {prefix}
      </Text>
      <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
        {set.style} · {Object.keys(set.icons).length} glyphs ·{' '}
        <code>{prefix}:</code>glyph
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(104px, 1fr))',
          gap: 8,
        }}
      >
        {Object.keys(set.icons).map((glyph) => (
          <div key={glyph} style={{ textAlign: 'center', padding: '8px 0' }}>
            <Icon name={`${prefix}:${glyph}`} size="lg" />
            <Text textStyle="Caption" className="dx-text-muted">
              {glyph}
            </Text>
          </div>
        ))}
      </div>
    </Stack>
  );
}

export function TypographyDemos({ slug }: { slug: string }) {
  if (slug === 'icon') {
    return (
      <DemoPage
        title="Icon"
        description="Icons render at text size by default; size takes a tier or pixels. Bare names use the built-in set; prefix a name (mdi:home, ph:user) to pick any bundled Iconify collection."
        sections={[
          {
            id: 'icon-sizes',
            title: 'Sizes',
            content: (
              <Row align="center" gap={12} wrap>
                <Icon name="check" />
                <Icon name="close" />
                <Icon name="search" />
                <Icon name="menu" size="lg" />
                <Icon name="settings" size={20} />
              </Row>
            ),
          },
          {
            id: 'icon-sets',
            title: 'Icon sets',
            description:
              'Every glyph in every bundled set, same concept vocabulary across sets.',
            content: (
              <Stack orientation="vertical" gap={16}>
                <Stack orientation="vertical" gap={8}>
                  <Text textStyle="H5" tagName="H3">
                    default
                  </Text>
                  <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
                    Built-in feather-style glyphs, referenced without a prefix.
                  </Text>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fill, minmax(104px, 1fr))',
                      gap: 8,
                    }}
                  >
                    {iconNames.map((glyph) => (
                      <div
                        key={glyph}
                        style={{ textAlign: 'center', padding: '8px 0' }}
                      >
                        <Icon name={glyph} size="lg" />
                        <Text textStyle="Caption" className="dx-text-muted">
                          {glyph}
                        </Text>
                      </div>
                    ))}
                  </div>
                </Stack>
                {iconSetNames.map((prefix) => (
                  <IconGlyphGrid key={prefix} prefix={prefix} />
                ))}
              </Stack>
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
            <Stack orientation="vertical" gap={8}>
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
            <Stack orientation="vertical" gap={8}>
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
            <Stack orientation="vertical" gap={8}>
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

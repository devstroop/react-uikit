import type { ReactNode } from 'react';
import { Icon, iconNames, Row, Stack, Text } from '../../lib/main';
import { DemoPage } from './demo-page';

/** One centered cell: glyph (or placeholder) stacked above its caption. */
function GlyphCell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Stack
      orientation="vertical"
      gap={4}
      align="center"
      style={{ padding: '8px 0' }}
    >
      {children}
      <Text textStyle="Caption" className="dx-text-muted">
        {label}
      </Text>
    </Stack>
  );
}

/**
 * One glyph grid over the curated ligature list — any Material Symbols
 * name renders the same way, curated or not.
 */
function GlyphGrid({ glyphs }: { glyphs: readonly string[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(104px, 1fr))',
        gap: 8,
      }}
    >
      {glyphs.map((glyph) => (
        <GlyphCell key={glyph} label={glyph}>
          <Icon icon={glyph} size="lg" />
        </GlyphCell>
      ))}
    </div>
  );
}

export function TypographyDemos({ slug }: { slug: string }) {
  if (slug === 'icon') {
    return (
      <DemoPage
        title="Icon"
        description="Single source: the bundled Material Symbols font renders 2500+ ligatures. Size takes a tier or pixels (default --dx-icon-size); ink inherits, color overrides it; weight rides the variable axis via style."
        sections={[
          {
            id: 'icon-sizes',
            title: 'Sizes',
            content: (
              <Row align="center" gap={12} wrap>
                <Icon icon="check" />
                <Icon icon="close" />
                <Icon icon="search" />
                <Icon icon="menu" size="lg" />
                <Icon icon="settings" size={20} />
              </Row>
            ),
          },
          {
            id: 'icon-weights',
            title: 'Weights',
            description:
              'The variable wght axis shades glyphs 100–700 through style.',
            content: (
              <Row align="center" gap={12} wrap>
                {[100, 300, 400, 500, 700].map((weight) => (
                  <GlyphCell key={weight} label={`${weight}`}>
                    <Icon
                      icon="settings"
                      size="lg"
                      style={{ fontWeight: weight }}
                    />
                  </GlyphCell>
                ))}
              </Row>
            ),
          },
          {
            id: 'icon-glyphs',
            title: 'Glyphs',
            description: `Curated ligatures (${iconNames.length} shown) — any Material Symbols name works, curated or not.`,
            content: <GlyphGrid glyphs={iconNames} />,
          },
          {
            id: 'icon-font-override',
            title: 'Font override',
            description:
              'Projects swap the family per scope (or on :root) via --dx-icon-font-family; codepoints pass as literals. Unset here — same markup, stock voice.',
            content: (
              <Row align="center" gap={12} wrap>
                <Icon icon="home" size="lg" />
                <Icon icon="search" size="lg" />
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

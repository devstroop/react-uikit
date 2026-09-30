import type { ReactNode } from 'react';
import {
  Icon,
  iconNames,
  iconSetNames,
  iconSets,
  Row,
  Stack,
  Text,
  type IconName,
  type IconSetPrefix,
} from '../../lib/main';
import { DemoPage } from './demo-page';

/**
 * Collections with a brand vocabulary (brand names, not shared concepts).
 * `IconSetPrefix` isn't exhaustive against `iconSets` — update this list
 * when the ingest script adds a set with its own vocabulary.
 */
const BRAND_SETS = new Set<IconSetPrefix>(['fa6-brands', 'simple-icons']);

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

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
 * One glyph grid — `default` (bare names), a shape set (aligned to the
 * canonical `iconNames` order, placeholders where the set lacks a glyph),
 * or a brand set (own vocabulary via an explicit `glyphs` list).
 */
function IconSetGrid({
  prefix,
  glyphs,
  level = 3,
}: {
  prefix?: IconSetPrefix;
  glyphs?: readonly string[];
  /** Heading level — 4 when nested under a group heading. */
  level?: 3 | 4;
}) {
  const set = prefix !== undefined ? iconSets[prefix] : undefined;
  const list = glyphs ?? iconNames;
  const missing =
    set === undefined ? [] : list.filter((glyph) => set.icons[glyph] == null);
  return (
    <Stack orientation="vertical" gap={8}>
      <Text textStyle="H5" tagName={level === 4 ? 'H4' : 'H3'}>
        {prefix ?? 'default'}
      </Text>
      <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
        {set === undefined
          ? 'Built-in feather-style glyphs, referenced without a prefix.'
          : `${capitalize(set.style)} · ${list.length - missing.length} glyphs${
              missing.length > 0
                ? ` · not in this set: ${missing.join(', ')}`
                : ''
            }`}
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(104px, 1fr))',
          gap: 8,
        }}
      >
        {list.map((glyph) =>
          set === undefined || set.icons[glyph] != null ? (
            <GlyphCell key={glyph} label={glyph}>
              <Icon
                name={
                  prefix !== undefined
                    ? `${prefix}:${glyph}`
                    : (glyph as IconName)
                }
                size="lg"
              />
            </GlyphCell>
          ) : (
            /* Placeholder keeps the concept in its canonical cell so a
               glyph lines up across every set's grid. */
            <GlyphCell key={glyph} label={glyph}>
              <span
                role="img"
                aria-label="not in this set"
                className="dx-text-muted"
                style={{
                  display: 'inline-block',
                  width: 'var(--dx-font-size-lg)',
                  height: 'var(--dx-font-size-lg)',
                  lineHeight: 'var(--dx-font-size-lg)',
                }}
              >
                –
              </span>
            </GlyphCell>
          )
        )}
      </div>
    </Stack>
  );
}

const SHAPE_SETS = iconSetNames
  .filter((prefix) => !BRAND_SETS.has(prefix))
  .sort((a, b) => a.localeCompare(b));
const BRAND_SET_ORDER = iconSetNames
  .filter((prefix) => BRAND_SETS.has(prefix))
  .sort((a, b) => a.localeCompare(b));

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
            description: `Shape sets each render all ${iconNames.length} concepts in the same cell order — a glyph lines up across collections; a placeholder marks a concept the set does not ship (named in its caption line). Brand sets carry their own vocabulary. Prefix a glyph (mdi:home); bare names use the built-in set.`,
            content: (
              <Stack orientation="vertical" gap={16}>
                <IconSetGrid />
                <Stack orientation="vertical" gap={8}>
                  <Text textStyle="H5" tagName="H3">
                    Shape sets
                  </Text>
                  {SHAPE_SETS.map((prefix) => (
                    <IconSetGrid key={prefix} prefix={prefix} level={4} />
                  ))}
                </Stack>
                <Stack orientation="vertical" gap={8}>
                  <Text textStyle="H5" tagName="H3">
                    Brand sets
                  </Text>
                  <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
                    Own vocabulary — brand names, not the {iconNames.length}{' '}
                    shared concepts.
                  </Text>
                  {BRAND_SET_ORDER.map((prefix) => (
                    <IconSetGrid
                      key={prefix}
                      prefix={prefix}
                      level={4}
                      glyphs={Object.keys(iconSets[prefix].icons)}
                    />
                  ))}
                </Stack>
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

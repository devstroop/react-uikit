import { useState, type CSSProperties } from 'react';
import {
  AutoGrid,
  Body,
  Column,
  Footer,
  Header,
  Layout,
  Row,
  Select,
  Sidebar,
  SidebarToggle,
  Stack,
  Text,
  type RowAlign,
  type RowJustify,
} from '../../lib/main';
import { DemoPage } from './demo-page';

/** Colored demo cell, tagged for layout measurement (e2e / observation). */
function Cell({
  i = 0,
  h,
  w,
  children,
  style,
}: {
  i?: number;
  h?: number;
  w?: number;
  children?: React.ReactNode;
  style?: CSSProperties;
}) {
  const p = i % 6;
  return (
    <div
      data-cell
      style={{
        boxSizing: 'border-box',
        background: `color-mix(in srgb, var(--dx-palette-${p}-color) 16%, var(--dx-surface-color))`,
        border: `1px solid color-mix(in srgb, var(--dx-palette-${p}-color) 50%, transparent)`,
        borderRadius: 4,
        padding: 'var(--dx-space-2)',
        textAlign: 'center',
        minHeight: h,
        width: w,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const demoRow: CSSProperties = {
  border: '1px dashed var(--dx-border-color)',
  borderRadius: 4,
};

const ALIGN_OPTIONS: readonly RowAlign[] = [
  'start',
  'center',
  'end',
  'stretch',
  'baseline',
  'normal',
];
const JUSTIFY_OPTIONS: readonly RowJustify[] = [
  'start',
  'center',
  'end',
  'between',
  'around',
  'evenly',
];
const GAP_OPTIONS = ['md', 'xs', 'sm', 'lg', 'xl', '8px', '32px'];

function RowPlayground() {
  const [align, setAlign] = useState<RowAlign>('start');
  const [justify, setJustify] = useState<RowJustify>('start');
  const [gap, setGap] = useState('md');
  return (
    <Stack orientation="vertical" gap="sm">
      <Stack orientation="horizontal" gap="md" wrap>
        <Stack orientation="vertical" gap={2}>
          <Text textStyle="Caption">Align</Text>
          <Select
            aria-label="align"
            value={align}
            onChange={(e) => setAlign(e.target.value as RowAlign)}
            options={ALIGN_OPTIONS.map((v) => ({ value: v, label: v }))}
          />
        </Stack>
        <Stack orientation="vertical" gap={2}>
          <Text textStyle="Caption">Justify</Text>
          <Select
            aria-label="justify"
            value={justify}
            onChange={(e) => setJustify(e.target.value as RowJustify)}
            options={JUSTIFY_OPTIONS.map((v) => ({ value: v, label: v }))}
          />
        </Stack>
        <Stack orientation="vertical" gap={2}>
          <Text textStyle="Caption">Gap</Text>
          <Select
            aria-label="gap"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
            options={GAP_OPTIONS.map((v) => ({ value: v, label: v }))}
          />
        </Stack>
      </Stack>
      <Row align={align} justify={justify} gap={gap} style={demoRow}>
        <Cell i={0} h={60} w={80}>
          60px
        </Cell>
        <Cell i={1} h={120} w={80}>
          120px
        </Cell>
        <Cell i={2} h={180} w={80}>
          180px
        </Cell>
        <Cell i={3} h={90} w={80}>
          90px
        </Cell>
      </Row>
    </Stack>
  );
}

export function LayoutDemos({ slug }: { slug: string }) {
  if (slug === 'row') {
    return (
      <DemoPage
        title="Row"
        description="Flex rows with alignment, justification, gaps and wrapping columns."
        sections={[
          {
            id: 'row-playground',
            title: 'Playground',
            description:
              'Interactive align / justify / gap like the Radzen demo.',
            content: <RowPlayground />,
          },
          {
            id: 'row-alignment',
            title: 'Alignment',
            description:
              'align: start, center, end, stretch, baseline, normal.',
            content: (
              <Stack orientation="vertical" gap="md">
                {ALIGN_OPTIONS.map((a) => (
                  <div key={a}>
                    <Text textStyle="Caption">align="{a}"</Text>
                    <Row align={a} gap="sm" style={demoRow}>
                      <Cell
                        i={0}
                        h={a === 'baseline' ? undefined : 36}
                        style={{
                          fontSize: a === 'baseline' ? 12 : undefined,
                          minHeight: a === 'baseline' ? undefined : 36,
                        }}
                      >
                        small text
                      </Cell>
                      <Cell
                        i={1}
                        h={a === 'baseline' ? undefined : 64}
                        style={{
                          fontSize: a === 'baseline' ? 24 : undefined,
                          minHeight: a === 'baseline' ? undefined : 64,
                        }}
                      >
                        big text
                      </Cell>
                      <Cell
                        i={2}
                        h={a === 'baseline' ? undefined : 48}
                        style={{
                          fontSize: a === 'baseline' ? 16 : undefined,
                          minHeight: a === 'baseline' ? undefined : 48,
                        }}
                      >
                        mid text
                      </Cell>
                    </Row>
                  </div>
                ))}
              </Stack>
            ),
          },
          {
            id: 'row-justify',
            title: 'Justification',
            description:
              'justify: start, center, end, between, around, evenly.',
            content: (
              <Stack orientation="vertical" gap="md">
                {JUSTIFY_OPTIONS.map((j) => (
                  <div key={j}>
                    <Text textStyle="Caption">justify="{j}"</Text>
                    <Row justify={j} gap="sm" style={demoRow}>
                      <Cell i={0} h={40} w={100}>
                        1
                      </Cell>
                      <Cell i={1} h={40} w={100}>
                        2
                      </Cell>
                      <Cell i={2} h={40} w={100}>
                        3
                      </Cell>
                    </Row>
                  </div>
                ))}
              </Stack>
            ),
          },
          {
            id: 'row-gaps',
            title: 'Gaps',
            description:
              'Gap tiers, arbitrary gaps and rowGap on wrapped column sets.',
            content: (
              <Stack orientation="vertical" gap="md">
                {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((g) => (
                  <div key={g}>
                    <Text textStyle="Caption">gap="{g}"</Text>
                    <Row gap={g} style={demoRow}>
                      {[0, 1, 2, 3].map((i) => (
                        <Column key={i} size={6}>
                          <Cell i={i} h={40}>
                            6
                          </Cell>
                        </Column>
                      ))}
                    </Row>
                  </div>
                ))}
                <div>
                  <Text textStyle="Caption">
                    gap="0.5rem" rowGap="xl" (column gap vs row gap)
                  </Text>
                  <Row gap="0.5rem" rowGap="xl" style={demoRow}>
                    {[0, 1, 2, 3].map((i) => (
                      <Column key={i} size={6}>
                        <Cell i={i} h={40}>
                          6
                        </Cell>
                      </Column>
                    ))}
                  </Row>
                </div>
                <div>
                  <Text textStyle="Caption">
                    gap={'{10}'} rowGap={'{24}'} (numeric)
                  </Text>
                  <Row gap={10} rowGap={24} style={demoRow}>
                    {[0, 1, 2, 3].map((i) => (
                      <Column key={i} size={6}>
                        <Cell i={i} h={40}>
                          6
                        </Cell>
                      </Column>
                    ))}
                  </Row>
                </div>
              </Stack>
            ),
          },
          {
            id: 'row-wrap',
            title: 'Wrapping',
            description: 'wrap: true, false (nowrap), wrap-reverse.',
            content: (
              <Stack orientation="vertical" gap="md">
                <div>
                  <Text textStyle="Caption">wrap (default)</Text>
                  <Row gap="sm" style={demoRow}>
                    {[0, 1, 2, 3].map((i) => (
                      <Column key={i} size={4}>
                        <Cell i={i} h={40}>
                          {i + 1}
                        </Cell>
                      </Column>
                    ))}
                  </Row>
                </div>
                <div>
                  <Text textStyle="Caption">wrap=false (nowrap)</Text>
                  <Row
                    gap="sm"
                    wrap={false}
                    style={{ ...demoRow, overflow: 'hidden' }}
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <Column key={i} size={4}>
                        <Cell i={i} h={40}>
                          {i + 1}
                        </Cell>
                      </Column>
                    ))}
                  </Row>
                </div>
                <div>
                  <Text textStyle="Caption">wrap="wrap-reverse"</Text>
                  <Row gap="sm" wrap="wrap-reverse" style={demoRow}>
                    {[0, 1, 2, 3].map((i) => (
                      <Column key={i} size={4}>
                        <Cell i={i} h={40}>
                          {i + 1}
                        </Cell>
                      </Column>
                    ))}
                  </Row>
                </div>
              </Stack>
            ),
          },
          {
            id: 'row-columns',
            title: 'With Columns',
            content: (
              <Stack orientation="vertical" gap="md">
                <Row justify="space-between" align="center" gap="md">
                  <Column size={6}>size 6</Column>
                  <Column size={6}>size 6</Column>
                </Row>
                <Row justify="space-between" align="center" gap="md">
                  <Column size={12} sizeMd={4}>
                    12 → md 4
                  </Column>
                  <Column size={12} sizeMd={4} offsetMd={2}>
                    offset md 2
                  </Column>
                </Row>
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'column') {
    return (
      <DemoPage
        title="Column"
        description="Twelve-wide grid columns with sizes, offsets, ordering and nesting."
        sections={[
          {
            id: 'column-auto',
            title: 'Auto-layout columns',
            description: 'Without a size the free space is shared equally.',
            content: (
              <Row gap="md" style={demoRow}>
                {['1 of 4', '2 of 4', '3 of 4', '4 of 4'].map((t, i) => (
                  <Column key={i}>
                    <Cell i={i} h={48}>
                      {t}
                    </Cell>
                  </Column>
                ))}
              </Row>
            ),
          },
          {
            id: 'column-sizes',
            title: 'Column sizes',
            description:
              'Mixed sized + auto columns; sums up to 12 share one line, sums above 12 wrap.',
            content: (
              <Stack orientation="vertical" gap="md">
                <div>
                  <Text textStyle="Caption">Size 4 + auto + auto</Text>
                  <Row gap="md" style={demoRow}>
                    <Column size={4}>
                      <Cell i={0} h={48}>
                        size 4
                      </Cell>
                    </Column>
                    <Column>
                      <Cell i={1} h={48}>
                        auto
                      </Cell>
                    </Column>
                    <Column>
                      <Cell i={2} h={48}>
                        auto
                      </Cell>
                    </Column>
                  </Row>
                </div>
                <div>
                  <Text textStyle="Caption">Size 4 + 5 + 3</Text>
                  <Row gap="md" style={demoRow}>
                    <Column size={4}>
                      <Cell i={0} h={48}>
                        4
                      </Cell>
                    </Column>
                    <Column size={5}>
                      <Cell i={1} h={48}>
                        5
                      </Cell>
                    </Column>
                    <Column size={3}>
                      <Cell i={2} h={48}>
                        3
                      </Cell>
                    </Column>
                  </Row>
                </div>
                <div>
                  <Text textStyle="Caption">
                    Size 8 + 8 (sum overflows → wraps)
                  </Text>
                  <Row gap="md" style={demoRow}>
                    <Column size={8}>
                      <Cell i={3} h={48}>
                        8
                      </Cell>
                    </Column>
                    <Column size={8}>
                      <Cell i={4} h={48}>
                        8
                      </Cell>
                    </Column>
                  </Row>
                </div>
              </Stack>
            ),
          },
          {
            id: 'column-responsive-sizes',
            title: 'Responsive sizes',
            description:
              'One column stepping 12 → 11 → 10 → 9 → 8 → 7 → 6 across breakpoints, plus a practical stacked grid.',
            content: (
              <Stack orientation="vertical" gap="md">
                <Row gap="md" style={demoRow}>
                  <Column
                    size={12}
                    sizeXs={11}
                    sizeSm={10}
                    sizeMd={9}
                    sizeLg={8}
                    sizeXl={7}
                    sizeXx={6}
                  >
                    <Cell i={0} h={48}>
                      12 / xs 11 / sm 10 / md 9 / lg 8 / xl 7 / xx 6
                    </Cell>
                  </Column>
                </Row>
                <Row gap="md" style={demoRow}>
                  <Column size={12} sizeSm={6} sizeMd={4}>
                    <Cell i={1} h={48}>
                      12 → sm 6 → md 4
                    </Cell>
                  </Column>
                  <Column size={12} sizeSm={6} sizeMd={4}>
                    <Cell i={2} h={48}>
                      12 → sm 6 → md 4
                    </Cell>
                  </Column>
                  <Column size={12} sizeSm={6} sizeMd={4}>
                    <Cell i={3} h={48}>
                      12 → sm 6 → md 4
                    </Cell>
                  </Column>
                </Row>
              </Stack>
            ),
          },
          {
            id: 'column-wrapping',
            title: 'Column wrapping',
            description:
              'Four Size-6 columns on two lines; gap spaces them horizontally, rowGap vertically.',
            content: (
              <Stack orientation="vertical" gap="md">
                <Row gap="0.5rem" rowGap="0.5rem" style={demoRow}>
                  {[0, 1, 2, 3].map((i) => (
                    <Column key={i} size={6}>
                      <Cell i={i} h={48}>
                        6
                      </Cell>
                    </Column>
                  ))}
                </Row>
                <div>
                  <Text textStyle="Caption">
                    gap="0.5rem" rowGap="xl" — distinct vertical spacing
                  </Text>
                  <Row gap="0.5rem" rowGap="xl" style={demoRow}>
                    {[0, 1, 2, 3].map((i) => (
                      <Column key={i} size={6}>
                        <Cell i={i} h={48}>
                          6
                        </Cell>
                      </Column>
                    ))}
                  </Row>
                </div>
              </Stack>
            ),
          },
          {
            id: 'column-offset',
            title: 'Column offset',
            description:
              'offset shifts a column rightward on the 12-column grid.',
            content: (
              <Stack orientation="vertical" gap="md">
                <Row gap="md" style={demoRow}>
                  <Column size={6} offset={3}>
                    <Cell i={0} h={48}>
                      size 6, offset 3
                    </Cell>
                  </Column>
                </Row>
                <Row gap="md" style={demoRow}>
                  <Column size={3} offset={9}>
                    <Cell i={1} h={48}>
                      size 3, offset 9 (flush right)
                    </Cell>
                  </Column>
                </Row>
              </Stack>
            ),
          },
          {
            id: 'column-responsive-offset',
            title: 'Responsive offset',
            content: (
              <Row gap="md" style={demoRow}>
                <Column
                  offset={0}
                  offsetXs={1}
                  offsetSm={2}
                  offsetMd={3}
                  offsetLg={4}
                  offsetXl={5}
                  offsetXx={6}
                >
                  <Cell i={2} h={48}>
                    offset 0 / xs 1 / sm 2 / md 3 / lg 4 / xl 5 / xx 6
                  </Cell>
                </Column>
              </Row>
            ),
          },
          {
            id: 'column-order',
            title: 'Column order',
            content: (
              <Row gap="md" style={demoRow}>
                <Column size={4} order={3}>
                  <Cell i={0} h={48}>
                    order 3
                  </Cell>
                </Column>
                <Column size={4} orderLg={1}>
                  <Cell i={1} h={48}>
                    lg order 1
                  </Cell>
                </Column>
                <Column size={4} orderLg={2}>
                  <Cell i={2} h={48}>
                    lg order 2
                  </Cell>
                </Column>
              </Row>
            ),
          },
          {
            id: 'column-responsive-order',
            title: 'Responsive order',
            description: 'First column reorders to 4 at md, 6 at lg, 8 at xl.',
            content: (
              <Row gap="md" style={demoRow}>
                <Column order={1} orderMd={4} orderLg={6} orderXl={8}>
                  <Cell i={3} h={48}>
                    order 1 / md 4 / lg 6 / xl 8
                  </Cell>
                </Column>
                <Column order={3}>
                  <Cell i={4} h={48}>
                    order 3
                  </Cell>
                </Column>
                <Column order={5}>
                  <Cell i={5} h={48}>
                    order 5
                  </Cell>
                </Column>
                <Column order={7}>
                  <Cell i={0} h={48}>
                    order 7
                  </Cell>
                </Column>
              </Row>
            ),
          },
          {
            id: 'column-nested',
            title: 'Nested layouts',
            description: 'Rows nest inside columns three levels deep.',
            content: (
              <Stack orientation="vertical" gap="md">
                <Row gap="md" style={demoRow}>
                  <Column>
                    <Cell i={0} h={56}>
                      Level 1
                    </Cell>
                  </Column>
                  <Column>
                    <Row gap="sm">
                      <Column>
                        <Cell i={1} h={44}>
                          Level 2
                        </Cell>
                      </Column>
                      <Column>
                        <Row gap="xs">
                          <Column>
                            <Cell i={2} h={32}>
                              Level 3
                            </Cell>
                          </Column>
                          <Column>
                            <Cell i={3} h={32}>
                              Level 3
                            </Cell>
                          </Column>
                        </Row>
                      </Column>
                      <Column>
                        <Cell i={4} h={44}>
                          Level 2
                        </Cell>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row gap="md" style={demoRow}>
                  <Column size={3}>
                    <Cell i={5} h={56}>
                      size 3
                    </Cell>
                  </Column>
                  <Column>
                    <Cell i={0} h={56}>
                      auto size
                      <Row gap="sm" style={{ marginTop: 8 }}>
                        <Column size={3}>
                          <Cell i={1} h={40}>
                            3
                          </Cell>
                        </Column>
                        <Column size={6}>
                          <Cell i={2} h={40}>
                            6
                          </Cell>
                        </Column>
                        <Column size={3}>
                          <Cell i={3} h={40}>
                            3
                          </Cell>
                        </Column>
                      </Row>
                    </Cell>
                  </Column>
                </Row>
              </Stack>
            ),
          },
          {
            id: 'column-gutters',
            title: 'Gutters',
            description:
              'Tight gutters: twelve auto columns without wrapping, plus a three-column row.',
            content: (
              <Stack orientation="vertical" gap="md">
                <Row wrap={false} gap={10} style={demoRow}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <Column key={i}>
                      <Cell i={i} h={36} style={{ padding: 4 }}>
                        {i + 1}
                      </Cell>
                    </Column>
                  ))}
                </Row>
                <Row gap="1rem" style={demoRow}>
                  {[0, 1, 2].map((i) => (
                    <Column key={i}>
                      <Cell i={i} h={48}>
                        Column {i + 1} of 3
                      </Cell>
                    </Column>
                  ))}
                </Row>
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'stack') {
    return (
      <DemoPage
        title="Stack"
        description="One-dimensional stacks with tiered gaps."
        sections={[
          {
            id: 'stack-horizontal',
            title: 'Horizontal',
            content: (
              <Stack orientation="horizontal" gap="md">
                <span>row a</span>
                <span>row b</span>
              </Stack>
            ),
          },
          {
            id: 'stack-vertical',
            title: 'Vertical',
            content: (
              <Stack orientation="vertical" gap="sm">
                <span>col a</span>
                <span>col b</span>
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'autogrid') {
    return (
      <DemoPage
        title="AutoGrid"
        description="Auto-fitting tracks with a minimum size."
        sections={[
          {
            id: 'autogrid-pixel',
            title: 'Pixel Minimum',
            content: (
              <AutoGrid min={160} gap="md">
                <span>fills</span>
                <span>wraps</span>
                <span>auto-fit</span>
              </AutoGrid>
            ),
          },
          {
            id: 'autogrid-ch',
            title: 'Character Minimum',
            content: (
              <AutoGrid min="20ch" gap="lg">
                <span>ch min</span>
                <span>custom track</span>
              </AutoGrid>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'header') {
    return (
      <DemoPage
        title="Header"
        sections={[
          {
            id: 'header-variants',
            content: (
              <Stack orientation="vertical" gap="md">
                <Header>
                  <Text>Default header</Text>
                </Header>
                <Header sticky>
                  <Text>Sticky header (pins on scroll)</Text>
                </Header>
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'body') {
    return (
      <DemoPage
        title="Body"
        sections={[
          {
            id: 'body-padding',
            content: (
              <Stack orientation="vertical" gap="md">
                <Body>
                  <Text>Padded body (default)</Text>
                </Body>
                <Body padded={false} as="div">
                  <Text>Edge-to-edge body</Text>
                </Body>
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'footer') {
    return (
      <DemoPage
        title="Footer"
        sections={[
          {
            id: 'footer-variants',
            content: (
              <Stack orientation="vertical" gap="md">
                <Footer>
                  <Text>Default footer</Text>
                </Footer>
                <Footer sticky>
                  <Text>Sticky footer</Text>
                </Footer>
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'sidebar') {
    return (
      <DemoPage
        title="Sidebar"
        description="Start/end positions, logical placement and collapse."
        sections={[
          {
            id: 'sidebar-positions',
            title: 'Positions',
            content: (
              <Row gap="md">
                <Sidebar>
                  <Text>Left sidebar</Text>
                </Sidebar>
                <Sidebar position="right">
                  <Text>Right sidebar</Text>
                </Sidebar>
              </Row>
            ),
          },
          {
            id: 'sidebar-states',
            title: 'Logical and Collapsed',
            content: (
              <Row gap="md">
                <Sidebar position="start">
                  <Text>Logical start</Text>
                </Sidebar>
                <Sidebar expanded={false}>
                  <Text>Collapsed</Text>
                </Sidebar>
              </Row>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'sidebartoggle') {
    return (
      <DemoPage
        title="SidebarToggle"
        sections={[
          {
            id: 'sidebartoggle-basic',
            content: (
              <Row align="center" gap="md" wrap>
                <SidebarToggle />
                <SidebarToggle label="Collapse navigation" />
              </Row>
            ),
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Layout"
      description="Regions route by type in any order; bare renders children without a wrapper."
      sections={[
        {
          id: 'layout-regions',
          title: 'Regions',
          content: (
            <Layout>
              <Header>
                <Text>Header</Text>
              </Header>
              <Sidebar>
                <Text>Sidebar</Text>
              </Sidebar>
              <Body>
                <Text>Body</Text>
              </Body>
              <Footer>
                <Text>Footer</Text>
              </Footer>
            </Layout>
          ),
        },
        {
          id: 'layout-bare',
          title: 'Bare',
          description: 'No wrapper — the deliberate no-chrome pattern.',
          content: (
            <Layout bare>
              <Text>Bare content (no wrapper)</Text>
            </Layout>
          ),
        },
      ]}
    />
  );
}

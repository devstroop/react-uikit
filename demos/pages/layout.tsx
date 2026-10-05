import { useState, type CSSProperties } from 'react';
import {
  AutoGrid,
  Body,
  Button,
  Column,
  Footer,
  Header,
  Layout,
  Link,
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
import { EventLog } from './shared/EventLog';
import { KeyboardTable } from './shared/KeyboardTable';

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
        border: `var(--dx-border-width) solid color-mix(in srgb, var(--dx-palette-${p}-color) 50%, transparent)`,
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
  border: 'var(--dx-border-width) dashed var(--dx-border-color)',
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
const GAP_OPTIONS = ['4px', '8px', '12px', '16px', '20px', '32px'];

function RowPlayground() {
  const [align, setAlign] = useState<RowAlign>('start');
  const [justify, setJustify] = useState<RowJustify>('start');
  const [gap, setGap] = useState('12px');
  return (
    <Stack orientation="vertical" gap={8}>
      <Stack orientation="horizontal" gap={12} wrap>
        <Stack orientation="vertical" gap={2}>
          <Text textStyle="caption">Align</Text>
          <Select
            aria-label="align"
            value={align}
            onChange={(e) => setAlign(e.target.value as RowAlign)}
            options={ALIGN_OPTIONS.map((v) => ({ value: v, label: v }))}
          />
        </Stack>
        <Stack orientation="vertical" gap={2}>
          <Text textStyle="caption">Justify</Text>
          <Select
            aria-label="justify"
            value={justify}
            onChange={(e) => setJustify(e.target.value as RowJustify)}
            options={JUSTIFY_OPTIONS.map((v) => ({ value: v, label: v }))}
          />
        </Stack>
        <Stack orientation="vertical" gap={2}>
          <Text textStyle="caption">Gap</Text>
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

const STACK_ORIENTATIONS = ['horizontal', 'vertical'] as const;
const STACK_ALIGNS = [
  'start',
  'center',
  'end',
  'stretch',
  'baseline',
  'normal',
] as const;
const STACK_JUSTIFIES = [
  'start',
  'center',
  'end',
  'between',
  'around',
  'evenly',
] as const;
const STACK_REVERSE = ['no', 'yes'] as const;

function StackPlayground() {
  const [orientation, setOrientation] =
    useState<(typeof STACK_ORIENTATIONS)[number]>('horizontal');
  const [gap, setGap] = useState('12px');
  const [align, setAlign] = useState<(typeof STACK_ALIGNS)[number]>('start');
  const [justify, setJustify] =
    useState<(typeof STACK_JUSTIFIES)[number]>('start');
  const [reverse, setReverse] = useState<(typeof STACK_REVERSE)[number]>('no');
  const control = (
    label: string,
    value: string,
    onChange: (next: string) => void,
    options: readonly string[]
  ) => (
    <Stack orientation="vertical" gap={2}>
      <Text textStyle="caption">{label}</Text>
      <Select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={options.map((v) => ({ value: v, label: v }))}
      />
    </Stack>
  );
  return (
    <Stack orientation="vertical" gap={8}>
      <Stack orientation="horizontal" gap={12}>
        {control(
          'Orientation',
          orientation,
          (v) => setOrientation(v as (typeof STACK_ORIENTATIONS)[number]),
          STACK_ORIENTATIONS
        )}
        {control('Gap', gap, setGap, GAP_OPTIONS)}
        {control(
          'Align',
          align,
          (v) => setAlign(v as (typeof STACK_ALIGNS)[number]),
          STACK_ALIGNS
        )}
        {control(
          'Justify',
          justify,
          (v) => setJustify(v as (typeof STACK_JUSTIFIES)[number]),
          STACK_JUSTIFIES
        )}
        {control(
          'Reverse',
          reverse,
          (v) => setReverse(v as (typeof STACK_REVERSE)[number]),
          STACK_REVERSE
        )}
      </Stack>
      <Text textStyle="caption" className="dx-text-muted">
        {orientation} · gap {gap} · align {align} · justify {justify}
        {reverse === 'yes' ? ' · reversed' : ''}
      </Text>
      <Stack
        orientation={orientation}
        gap={gap}
        align={align}
        justify={justify}
        reverse={reverse === 'yes'}
        style={{ ...demoRow, minHeight: 160 }}
      >
        <Cell i={0} h={48} w={140}>
          48px
        </Cell>
        <Cell i={1} h={96} w={140}>
          96px
        </Cell>
        <Cell i={2} h={64} w={140}>
          64px
        </Cell>
      </Stack>
    </Stack>
  );
}

function AutoGridVisibilityDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <Stack orientation="vertical" gap={8}>
      <Row align="center" gap={8}>
        <Button size="sm" onClick={() => setVisible((v) => !v)}>
          Toggle grid
        </Button>
        <Text textStyle="caption" className="dx-text-muted">
          visible: {String(visible)}
        </Text>
      </Row>
      <AutoGrid min={160} gap={12} visible={visible}>
        <Cell i={0} h={64}>
          one
        </Cell>
        <Cell i={1} h={64}>
          two
        </Cell>
        <Cell i={2} h={64}>
          three
        </Cell>
      </AutoGrid>
    </Stack>
  );
}

function HeaderToolbarDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Header aria-label="Toolbar demo header">
        <Row align="center" justify="between" gap={8}>
          <SidebarToggle
            label="Open navigation"
            data-se-sidebar-toggle
            onClick={() => log('SidebarToggle clicked')}
          />
          <Text textStyle="body2">App title</Text>
          <Button size="sm" onClick={() => log('Header action clicked')}>
            Action
          </Button>
        </Row>
      </Header>
      <EventLog
        events={events}
        emptyText="Use the header controls to log clicks."
      />
    </Stack>
  );
}

function BodyStatesDemo() {
  const [padded, setPadded] = useState(true);
  return (
    <Stack orientation="vertical" gap={8}>
      <Row align="center" gap={8}>
        <Button size="sm" onClick={() => setPadded((v) => !v)}>
          Toggle padding
        </Button>
        <Text textStyle="caption" className="dx-text-muted">
          padded: {String(padded)}
        </Text>
      </Row>
      <Body as="div" padded={padded} aria-label="Demo body">
        <Text>
          {padded
            ? 'Padded body — var(--dx-space-4) on every edge.'
            : 'Bare body — padding: 0 for edge-to-edge content.'}
        </Text>
      </Body>
    </Stack>
  );
}

function FooterLinksDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Footer aria-label="Links demo footer">
        <Row gap={12} wrap>
          <Link
            href="#/footer"
            onClick={(e) => {
              e.preventDefault();
              log('Docs link clicked');
            }}
          >
            Docs
          </Link>
          <Link
            href="#/footer"
            onClick={(e) => {
              e.preventDefault();
              log('Support link clicked');
            }}
          >
            Support
          </Link>
          <Link
            href="#/footer"
            icon="external-link"
            onClick={(e) => {
              e.preventDefault();
              log('Status link clicked (external)');
            }}
          >
            Status
          </Link>
        </Row>
      </Footer>
      <EventLog
        events={events}
        emptyText="Click a footer link to log the click."
      />
    </Stack>
  );
}

function SidebarOverlayDemo() {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <div style={{ position: 'relative', minHeight: 140, ...demoRow }}>
        <Sidebar
          aria-label="Overlay demo sidebar"
          overlay
          expanded={open}
          onClose={() => {
            setOpen(false);
            log('drawer closed (Escape or mask)');
          }}
        >
          <Text>Drawer content</Text>
        </Sidebar>
        <Row
          align="start"
          justify="end"
          style={{ padding: 'var(--dx-space-2)' }}
        >
          <SidebarToggle
            data-se-sidebar-toggle
            aria-expanded={open}
            label={open ? 'Close drawer' : 'Open drawer'}
            onClick={() => {
              const next = !open;
              setOpen(next);
              log(next ? 'drawer opened' : 'drawer closed');
            }}
          />
        </Row>
      </div>
      <EventLog
        events={events}
        emptyText="Open the drawer — Escape and the mask both fire onClose."
      />
    </Stack>
  );
}

function SidebartoggleShellDemo() {
  const [open, setOpen] = useState(true);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Layout
        style={{
          minHeight: 260,
          border: 'var(--dx-border-width) dashed var(--dx-border-color)',
          borderRadius: 4,
        }}
      >
        <Header aria-label="Shell demo header">
          <Row align="center" gap={8}>
            <SidebarToggle
              aria-expanded={open}
              label={open ? 'Collapse sidebar' : 'Expand sidebar'}
              onClick={() => {
                const next = !open;
                setOpen(next);
                log(next ? 'sidebar expanded' : 'sidebar collapsed');
              }}
            />
            <Text textStyle="body2">Shell demo</Text>
          </Row>
        </Header>
        <Sidebar aria-label="Shell demo sidebar" expanded={open}>
          <Stack orientation="vertical" gap={4}>
            <Text>Nav one</Text>
            <Text>Nav two</Text>
          </Stack>
        </Sidebar>
        <Body as="div">
          <Text>Body region — sidebar expands and collapses in place.</Text>
        </Body>
      </Layout>
      <EventLog
        events={events}
        emptyText="Toggle the header control to log state."
      />
    </Stack>
  );
}

function LayoutRegionsDemo() {
  const [open, setOpen] = useState(true);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Layout
        style={{
          minHeight: 260,
          border: 'var(--dx-border-width) dashed var(--dx-border-color)',
          borderRadius: 4,
        }}
      >
        <Footer aria-label="Regions demo footer">
          <Text>Footer authored first — still lands last</Text>
        </Footer>
        <Body as="div">
          <Text>Body region content</Text>
        </Body>
        <Sidebar aria-label="Regions demo sidebar" expanded={open}>
          <Text>Sidebar nav</Text>
        </Sidebar>
        <Header aria-label="Regions demo header">
          <Row align="center" gap={8}>
            <SidebarToggle
              aria-expanded={open}
              label={open ? 'Hide sidebar' : 'Show sidebar'}
              onClick={() => {
                const next = !open;
                setOpen(next);
                log(next ? 'sidebar shown' : 'sidebar hidden');
              }}
            />
            <Text textStyle="body2">
              Authored order: Footer → Body → Sidebar → Header
            </Text>
          </Row>
        </Header>
      </Layout>
      <EventLog
        events={events}
        emptyText="Toggle the sidebar from the header."
      />
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
              <Stack orientation="vertical" gap={12}>
                {ALIGN_OPTIONS.map((a) => (
                  <div key={a}>
                    <Text textStyle="caption">align="{a}"</Text>
                    <Row align={a} gap={8} style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
                {JUSTIFY_OPTIONS.map((j) => (
                  <div key={j}>
                    <Text textStyle="caption">justify="{j}"</Text>
                    <Row justify={j} gap={8} style={demoRow}>
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
              'Px numbers, CSS lengths and rowGap on wrapped column sets.',
            content: (
              <Stack orientation="vertical" gap={12}>
                {[4, 8, 12, 16, 20].map((g) => (
                  <div key={g}>
                    <Text textStyle="caption">{'gap={' + g + '}'}</Text>
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
                  <Text textStyle="caption">
                    gap="0.5rem" rowGap={20} (column gap vs row gap)
                  </Text>
                  <Row gap="0.5rem" rowGap={20} style={demoRow}>
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
                  <Text textStyle="caption">
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
              <Stack orientation="vertical" gap={12}>
                <div>
                  <Text textStyle="caption">wrap (default)</Text>
                  <Row gap={8} style={demoRow}>
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
                  <Text textStyle="caption">wrap=false (nowrap)</Text>
                  <Row
                    gap={8}
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
                  <Text textStyle="caption">wrap="wrap-reverse"</Text>
                  <Row gap={8} wrap="wrap-reverse" style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
                <Row justify="space-between" align="center" gap={12}>
                  <Column size={6}>size 6</Column>
                  <Column size={6}>size 6</Column>
                </Row>
                <Row justify="space-between" align="center" gap={12}>
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
              <Row gap={12} style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
                <div>
                  <Text textStyle="caption">Size 4 + auto + auto</Text>
                  <Row gap={12} style={demoRow}>
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
                  <Text textStyle="caption">Size 4 + 5 + 3</Text>
                  <Row gap={12} style={demoRow}>
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
                  <Text textStyle="caption">
                    Size 8 + 8 (sum overflows → wraps)
                  </Text>
                  <Row gap={12} style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
                <Row gap={12} style={demoRow}>
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
                <Row gap={12} style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
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
                  <Text textStyle="caption">
                    gap="0.5rem" rowGap={20} — distinct vertical spacing
                  </Text>
                  <Row gap="0.5rem" rowGap={20} style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
                <Row gap={12} style={demoRow}>
                  <Column size={6} offset={3}>
                    <Cell i={0} h={48}>
                      size 6, offset 3
                    </Cell>
                  </Column>
                </Row>
                <Row gap={12} style={demoRow}>
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
              <Row gap={12} style={demoRow}>
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
              <Row gap={12} style={demoRow}>
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
              <Row gap={12} style={demoRow}>
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
              <Stack orientation="vertical" gap={12}>
                <Row gap={12} style={demoRow}>
                  <Column>
                    <Cell i={0} h={56}>
                      Level 1
                    </Cell>
                  </Column>
                  <Column>
                    <Row gap={8}>
                      <Column>
                        <Cell i={1} h={44}>
                          Level 2
                        </Cell>
                      </Column>
                      <Column>
                        <Row gap={4}>
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
                <Row gap={12} style={demoRow}>
                  <Column size={3}>
                    <Cell i={5} h={56}>
                      size 3
                    </Cell>
                  </Column>
                  <Column>
                    <Cell i={0} h={56}>
                      auto size
                      <Row gap={8} style={{ marginTop: 8 }}>
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
              <Stack orientation="vertical" gap={12}>
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
        description="One-dimensional flex stacks: orientation, token gaps, direction and alignment — plus a live playground over the same props."
        sections={[
          {
            id: 'stack-orientation',
            title: 'Orientation',
            description:
              'Vertical is the default; horizontal lays children out in a row and reverse flips the flow order (tests: renders a column stack by default, switches orientation and reverse direction).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Stack orientation="vertical" gap={4} style={demoRow}>
                  <Cell i={0}>vertical · first</Cell>
                  <Cell i={1}>vertical · second</Cell>
                </Stack>
                <Stack orientation="horizontal" gap={4} style={demoRow}>
                  <Cell i={2}>horizontal · first</Cell>
                  <Cell i={3}>horizontal · second</Cell>
                </Stack>
                <Stack orientation="horizontal" reverse gap={4} style={demoRow}>
                  <Cell i={4}>reversed · first</Cell>
                  <Cell i={5}>reversed · second</Cell>
                </Stack>
              </Stack>
            ),
          },
          {
            id: 'stack-gaps',
            title: 'Gaps',
            description:
              'Px numbers and CSS lengths render as inline gap on the element (test: applies gap as inline px for numbers and CSS lengths).',
            content: (
              <Stack orientation="vertical" gap={12}>
                {[4, 8, 12, 16, 20].map((gap) => (
                  <Stack
                    key={gap}
                    orientation="horizontal"
                    gap={gap}
                    style={demoRow}
                  >
                    <Cell i={0} w={96}>
                      gap {gap}px
                    </Cell>
                    <Cell i={1} w={48}>
                      ·
                    </Cell>
                    <Cell i={2} w={48}>
                      ·
                    </Cell>
                  </Stack>
                ))}
                <Stack orientation="horizontal" gap="2rem" style={demoRow}>
                  <Cell i={3} w={96}>
                    gap 2rem
                  </Cell>
                  <Cell i={4} w={48}>
                    ·
                  </Cell>
                  <Cell i={5} w={48}>
                    ·
                  </Cell>
                </Stack>
              </Stack>
            ),
          },
          {
            id: 'stack-flow',
            title: 'Nowrap & wrap-reverse',
            description:
              'Stack keeps a single line: wrap=false forces nowrap and wrap-reverse flips a second line upward — use Row when you need real wrapping (test: supports nowrap and wrap-reverse).',
            content: (
              <Stack
                orientation="horizontal"
                gap={4}
                wrap="wrap-reverse"
                style={demoRow}
              >
                <Cell i={0} w={120}>
                  first line
                </Cell>
                <Cell i={1} w={120}>
                  still first
                </Cell>
                <Cell i={2} w={120}>
                  forced wrap-reverse
                </Cell>
              </Stack>
            ),
          },
          {
            id: 'stack-playground',
            title: 'Playground',
            description:
              'Drive orientation, gap, align, justify and reverse from the selects — orientation, align and justify land as classes; gap always renders inline (tests: applies align and justify modifier classes, applies gap as inline px for numbers and CSS lengths).',
            content: <StackPlayground />,
          },
        ]}
      />
    );
  }
  if (slug === 'autogrid') {
    return (
      <DemoPage
        title="AutoGrid"
        description="Responsive auto-fit grid without breakpoints — a minimum track size does all the work (no Radzen counterpart)."
        sections={[
          {
            id: 'autogrid-minimum',
            title: 'Minimum track size',
            description:
              'min accepts a px number or any CSS length; tracks auto-fit to the container width (tests: renders children in an auto-fit grid with default min, applies numeric min as px and numeric gaps as inline px).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <AutoGrid min={160} gap={12}>
                  <Cell i={0} h={64}>
                    160px min
                  </Cell>
                  <Cell i={1} h={64}>
                    auto-fit
                  </Cell>
                  <Cell i={2} h={64}>
                    one column each
                  </Cell>
                </AutoGrid>
                <AutoGrid min="20ch" gap={16}>
                  <Cell i={3} h={64}>
                    20ch min
                  </Cell>
                  <Cell i={4} h={64}>
                    string min stays verbatim
                  </Cell>
                </AutoGrid>
              </Stack>
            ),
          },
          {
            id: 'autogrid-gaps',
            title: 'Gaps',
            description:
              'Gap is a px number rendered inline (tests: applies numeric gaps as inline px and string mins verbatim, defaults the gap to 12px).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <AutoGrid min={140} gap={20}>
                  <Cell i={0} h={48}>
                    gap 20px
                  </Cell>
                  <Cell i={1} h={48}>
                    gap 20px
                  </Cell>
                  <Cell i={2} h={48}>
                    gap 20px
                  </Cell>
                </AutoGrid>
                <AutoGrid min={140} gap={4}>
                  <Cell i={3} h={48}>
                    gap 4px
                  </Cell>
                  <Cell i={4} h={48}>
                    gap 4px
                  </Cell>
                  <Cell i={5} h={48}>
                    gap 4px
                  </Cell>
                </AutoGrid>
              </Stack>
            ),
          },
          {
            id: 'autogrid-visibility',
            title: 'Visibility',
            description:
              'visible={false} removes the grid entirely — toggle it and watch the container go empty (test: renders nothing when visible is false).',
            content: <AutoGridVisibilityDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'header') {
    return (
      <DemoPage
        title="Header"
        description="Semantic page banner with an optional sticky pin — the slot Layout routes above everything else."
        sections={[
          {
            id: 'header-basic',
            title: 'Basic & sticky',
            description:
              'A <header> element with the header class; sticky adds position: sticky top: 0 so it pins while its scrollport moves (tests: renders a header element with the header class, applies the sticky class when sticky is true). Sticky needs a scrollport that is not clipped — a card with overflow hidden swallows the pin.',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Header>
                  <Text>Default header — scrolls away with the page</Text>
                </Header>
                <Header sticky>
                  <Text>Sticky header — pins at the top of its scrollport</Text>
                </Header>
              </Stack>
            ),
          },
          {
            id: 'header-attributes',
            title: 'Attributes',
            description:
              'ARIA and data attributes spread straight onto the element, so a named banner region is one prop away (test: spreads attributes onto the element). Nested inside this section it stays out of the top-level banner role — only a page-level <header> becomes the banner landmark.',
            content: (
              <Header aria-label="Demo header" data-demo="header-attributes">
                <Text>aria-label="Demo header" lands on the element</Text>
              </Header>
            ),
          },
          {
            id: 'header-toolbar',
            title: 'Toolbar composition',
            description:
              'The canonical app header: toggle, title and an action in one row (Radzen MainLayout pattern). Both controls forward clicks, so every activation lands in the log (SidebarToggle test: forwards clicks and attributes).',
            content: <HeaderToolbarDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'body') {
    return (
      <DemoPage
        title="Body"
        description="The scrolling content region — a semantic <main> by default, or a plain div when the page already owns a main landmark."
        sections={[
          {
            id: 'body-padding',
            title: 'Padded & bare',
            description:
              'padded is on by default (space-4 on every edge); bare drops the padding for edge-to-edge content (test: removes padding when padded is false).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Body as="div">
                  <Text>Padded body (default)</Text>
                </Body>
                <Body as="div" padded={false}>
                  <Text>Edge-to-edge body</Text>
                </Body>
              </Stack>
            ),
          },
          {
            id: 'body-element',
            title: 'Element choice',
            description:
              'as="main" (the default) makes Body the page landmark; as="div" renders a div instead — the demos here always use the div so this docs page keeps a single, top-level main (test: renders a div instead of main when as is div).',
            content: (
              <Body as="div" aria-label="Element choice demo">
                <Text>
                  Rendered as a div — drop as="div" in a real shell to get the
                  main landmark.
                </Text>
              </Body>
            ),
          },
          {
            id: 'body-states',
            title: 'Padding toggle',
            description:
              'Body is presentational, so the interaction is plain React state driving the padded prop — flip it and watch the content move (test: spreads attributes onto the element for the aria-label).',
            content: <BodyStatesDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'footer') {
    return (
      <DemoPage
        title="Footer"
        description="Semantic page footer with an optional sticky pin — the slot Layout routes below everything else."
        sections={[
          {
            id: 'footer-basic',
            title: 'Basic & sticky',
            description:
              'A <footer> element with the footer class; sticky adds position: sticky bottom: 0 so it stays reachable while its scrollport moves (tests: renders a footer element with the footer class, applies the sticky class when sticky is true).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Footer>
                  <Text>Default footer — scrolls away with the page</Text>
                </Footer>
                <Footer sticky>
                  <Text>
                    Sticky footer — pins at the bottom of its scrollport
                  </Text>
                </Footer>
              </Stack>
            ),
          },
          {
            id: 'footer-attributes',
            title: 'Attributes',
            description:
              'ARIA and data attributes pass through to the element (test: spreads attributes onto the element). Nested inside this section it stays out of the top-level contentinfo role — only a page-level <footer> becomes the contentinfo landmark.',
            content: (
              <Footer aria-label="Demo footer" data-demo="footer-attributes">
                <Text>aria-label="Demo footer" lands on the element</Text>
              </Footer>
            ),
          },
          {
            id: 'footer-links',
            title: 'Link row',
            description:
              'Footer links are ordinary focusable anchors; here their clicks are logged instead of navigating (test: renders an anchor when href is set for the Link inside).',
            content: <FooterLinksDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'sidebar') {
    return (
      <DemoPage
        title="Sidebar"
        description="Complementary navigation rail: physical and logical positions, collapse, overlay drawer and full-height placement."
        sections={[
          {
            id: 'sidebar-positions',
            title: 'Positions',
            description:
              'left/right are physical, start/end are logical and flip with direction (tests: renders an aside with the sidebar class, defaulting to left, applies the right class for position right, applies logical start/end classes).',
            content: (
              <Row gap={12} wrap>
                <Sidebar aria-label="Left position demo">
                  <Text>left</Text>
                </Sidebar>
                <Sidebar aria-label="Right position demo" position="right">
                  <Text>right</Text>
                </Sidebar>
                <Sidebar aria-label="Start position demo" position="start">
                  <Text>start</Text>
                </Sidebar>
                <Sidebar aria-label="End position demo" position="end">
                  <Text>end</Text>
                </Sidebar>
              </Row>
            ),
          },
          {
            id: 'sidebar-states',
            title: 'Expanded & collapsed',
            description:
              'expanded={false} zeroes the width and keeps the content mounted — there is no inert on our collapsed sidebar, so hide what you do not want read out by conditionally rendering it too (tests: applies the collapsed class when expanded is false, applies the responsive class when responsive is true). responsive collapses below 768px like Radzen.',
            content: (
              <Row gap={12} wrap>
                <Sidebar aria-label="Expanded demo">
                  <Text>expanded</Text>
                </Sidebar>
                <Sidebar aria-label="Collapsed demo" expanded={false}>
                  <Text>collapsed — mounted but clipped</Text>
                </Sidebar>
                <Sidebar aria-label="Responsive demo" responsive>
                  <Text>responsive — collapses under 768px</Text>
                </Sidebar>
              </Row>
            ),
          },
          {
            id: 'sidebar-overlay',
            title: 'Overlay drawer',
            description:
              'overlay floats the drawer over the content behind an aria-hidden scrim; onClose fires from the scrim click and from Escape anywhere on the page. The toggle carries data-se-sidebar-toggle so its z-index stays above the scrim (tests: renders an aria-hidden mask when overlay and expanded, calls onClose when the mask is clicked, calls onClose on Escape while the drawer is open).',
            content: <SidebarOverlayDemo />,
          },
          {
            id: 'sidebar-fullheight',
            title: 'Full-height in Layout',
            description:
              'fullHeight lets Layout place the sidebar across header, body and footer rows — with exactly one full-height sidebar the layout switches from flex to grid (tests: applies the fullHeight class for grid placement, engages grid placement for a single fullHeight sidebar). sticky is a documented no-op alongside fullHeight.',
            content: (
              <Layout
                style={{
                  minHeight: 260,
                  border:
                    'var(--dx-border-width) dashed var(--dx-border-color)',
                  borderRadius: 4,
                }}
              >
                <Header aria-label="Full-height layout header">
                  <Text>Header</Text>
                </Header>
                <Sidebar aria-label="Full-height layout sidebar" fullHeight>
                  <Text>Spans every row</Text>
                </Sidebar>
                <Body as="div">
                  <Text>Body</Text>
                </Body>
                <Footer aria-label="Full-height layout footer">
                  <Text>Footer</Text>
                </Footer>
              </Layout>
            ),
          },
          {
            id: 'sidebar-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'Escape',
                    action:
                      'Close the open overlay drawer via onClose (test: calls onClose on Escape while the drawer is open)',
                  },
                  {
                    keys: 'Tab',
                    action:
                      'Leave the drawer — it is not modal, focus follows document order',
                  },
                ]}
              />
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
        description="Named icon button that opens or collapses a sidebar — it owns no state, so you wire the expanded flag yourself (Radzen parity)."
        sections={[
          {
            id: 'sidebartoggle-basic',
            title: 'Labels & icons',
            description:
              'Defaults to aria-label="Toggle sidebar" with the menu icon; both are props (tests: renders a button with the default label and menu icon, accepts a custom icon and label).',
            content: (
              <Row align="center" gap={12} wrap>
                <SidebarToggle />
                <SidebarToggle label="Collapse navigation" />
                <SidebarToggle label="Settings" icon="settings" />
              </Row>
            ),
          },
          {
            id: 'sidebartoggle-click',
            title: 'Click forwarding',
            description:
              'The button is a plain type="button" — clicks and attributes forward to the DOM, so aria-expanded from the parent state lands on it (test: forwards clicks and attributes).',
            content: (
              <Row align="center" gap={12} wrap>
                <SidebarToggle
                  aria-expanded={false}
                  label="Log a click"
                  onClick={() => undefined}
                />
                <SidebarToggle aria-expanded label="Expanded state" />
              </Row>
            ),
          },
          {
            id: 'sidebartoggle-shell',
            title: 'Wired shell',
            description:
              'The Radzen MainLayout pattern: toggle in the header, expanded state lifted to the page, sidebar collapses in place (tests: uncontrolled state is yours — Sidebar just renders expanded).',
            content: <SidebartoggleShellDemo />,
          },
          {
            id: 'sidebartoggle-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'Tab',
                    action: 'Focus the toggle (native button focus order)',
                  },
                  {
                    keys: 'Enter / Space',
                    action: 'Activate the toggle (native button semantics)',
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Layout"
      description="Regions route by type, not authored order; bare renders children without a wrapper."
      sections={[
        {
          id: 'layout-regions',
          title: 'Regions',
          description:
            'Header, Sidebar, Body and Footer are direct children in any order — Layout places each by identity (test: arranges sections by region, not authored order). Toggle from the header to drive the sidebar.',
          content: <LayoutRegionsDemo />,
        },
        {
          id: 'layout-positions',
          title: 'Right & logical sidebars',
          description:
            'position="right" lands after the body; the logical "end" position routes the same way in RTL layouts (tests: places right sidebars after the body, routes logical end position after the body).',
          content: (
            <Row gap={12} wrap>
              <Layout
                style={{
                  flex: 1,
                  minWidth: 260,
                  minHeight: 180,
                  border:
                    'var(--dx-border-width) dashed var(--dx-border-color)',
                  borderRadius: 4,
                }}
              >
                <Header aria-label="Right sidebar demo header">
                  <Text>Header</Text>
                </Header>
                <Sidebar aria-label="Right sidebar demo" position="right">
                  <Text>right</Text>
                </Sidebar>
                <Body as="div">
                  <Text>Body</Text>
                </Body>
                <Footer aria-label="Right sidebar demo footer">
                  <Text>Footer</Text>
                </Footer>
              </Layout>
              <Layout
                style={{
                  flex: 1,
                  minWidth: 260,
                  minHeight: 180,
                  border:
                    'var(--dx-border-width) dashed var(--dx-border-color)',
                  borderRadius: 4,
                }}
              >
                <Header aria-label="End sidebar demo header">
                  <Text>Header</Text>
                </Header>
                <Sidebar aria-label="End sidebar demo" position="end">
                  <Text>end</Text>
                </Sidebar>
                <Body as="div">
                  <Text>Body</Text>
                </Body>
                <Footer aria-label="End sidebar demo footer">
                  <Text>Footer</Text>
                </Footer>
              </Layout>
            </Row>
          ),
        },
        {
          id: 'layout-grid',
          title: 'Full-height grid mode',
          description:
            'A single full-height sidebar flips the root from flex to CSS grid so the rail spans header, body and footer (test: engages grid placement for a single fullHeight sidebar); with two sidebars or without fullHeight it stays flex (test: keeps flex layout without fullHeight or with two sidebars).',
          content: (
            <Layout
              style={{
                minHeight: 260,
                border: 'var(--dx-border-width) dashed var(--dx-border-color)',
                borderRadius: 4,
              }}
            >
              <Header aria-label="Grid mode header">
                <Text>Header</Text>
              </Header>
              <Sidebar aria-label="Grid mode sidebar" fullHeight>
                <Text>row 1 / -1</Text>
              </Sidebar>
              <Body as="div">
                <Text>Body</Text>
              </Body>
              <Footer aria-label="Grid mode footer">
                <Text>Footer</Text>
              </Footer>
            </Layout>
          ),
        },
        {
          id: 'layout-bare',
          title: 'Bare',
          description:
            'bare renders children with no wrapper at all — the deliberate no-chrome pattern for 404s and recipes; wrapper props are a compile error there so nothing is silently dropped (test: renders children without a wrapper when bare).',
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

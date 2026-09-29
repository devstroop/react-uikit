import { useState } from 'react';
import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Row,
  Splitter,
  Stack,
  Stat,
  Text,
  type ComponentSize,
} from '../../lib/main';
import { DemoPage } from './demo-page';
import { Code } from './shared/Code';
import { EventLog } from './shared/EventLog';
import { KeyboardTable, type KeyboardBinding } from './shared/KeyboardTable';
import { SEVERITIES, SHADES, VARIANTS, capitalize } from './shared/axes';

const SIZES: ComponentSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

/** Offline photo fixture for Avatar's src demo (no network in CI). */
const PHOTO =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96">' +
      '<rect width="96" height="96" fill="#6366f1"/>' +
      '<circle cx="48" cy="38" r="18" fill="#e0e7ff"/>' +
      '<ellipse cx="48" cy="86" rx="32" ry="24" fill="#e0e7ff"/>' +
      '</svg>'
  );

/** Slide body — text only; headings belong to the section frame. */
function slide(label: string, caption: string) {
  return (
    <div
      style={{
        minHeight: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        background: 'var(--dx-surface-container-color)',
        borderRadius: 'var(--dx-radius-surface)',
      }}
    >
      <Text textStyle="Subtitle1" tagName="P">
        {label}
      </Text>
      <Text textStyle="Caption" className="dx-text-muted">
        {caption}
      </Text>
    </div>
  );
}

const ACCORDION_KEYS: KeyboardBinding[] = [
  { keys: 'Tab', action: 'Move focus between panel headers' },
  { keys: 'Enter', action: 'Expand or collapse the focused panel' },
  { keys: 'Space', action: 'Expand or collapse the focused panel' },
];

const CAROUSEL_KEYS: KeyboardBinding[] = [
  { keys: 'ArrowLeft', action: 'Previous slide' },
  { keys: 'ArrowRight', action: 'Next slide' },
  { keys: 'Home', action: 'First slide' },
  { keys: 'End', action: 'Last slide' },
];

const SPLITTER_KEYS: KeyboardBinding[] = [
  { keys: 'ArrowLeft / ArrowUp', action: 'Shrink the first pane by 5%' },
  { keys: 'ArrowRight / ArrowDown', action: 'Grow the first pane by 5%' },
  { keys: 'Home', action: 'First pane to its minimum size' },
  { keys: 'End', action: 'First pane to its maximum size' },
  { keys: 'Enter / Space', action: 'Collapse or expand a collapsible pane' },
];

function AccordionEventsDemo() {
  const items = [
    {
      key: 'general',
      title: 'General',
      content: <Text>Workspace name, language and timezone.</Text>,
    },
    {
      key: 'members',
      title: 'Members',
      content: <Text>Invite teammates and manage roles.</Text>,
    },
    {
      key: 'danger',
      title: 'Danger zone',
      content: <Text>Delete the workspace and every project in it.</Text>,
    },
  ];
  const [open, setOpen] = useState(['general']);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <>
      <Accordion
        multiple
        value={open}
        onChange={(keys) => {
          setOpen(keys);
          const names = items
            .filter((i) => keys.includes(i.key))
            .map((i) => i.title);
          setEvents((prev) => [
            ...prev,
            `expanded: ${names.join(', ') || 'none'}`,
          ]);
        }}
        items={items}
      />
      <EventLog events={events} emptyText="Toggle a panel to log onChange." />
    </>
  );
}

function CarouselEventsDemo() {
  const slides = [
    slide('Slide one', 'Alpha release'),
    slide('Slide two', 'Beta release'),
    slide('Slide three', 'GA release'),
  ];
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <>
      <Row gap={8} wrap className="dx-mb-2">
        {slides.map((_, i) => (
          <Button
            key={i}
            size="sm"
            variant="outlined"
            onClick={() => setIndex(i)}
          >
            Slide {i + 1}
          </Button>
        ))}
      </Row>
      <Carousel
        ariaLabel="Controlled slides"
        selectedIndex={index}
        onChange={(i) => {
          setIndex(i);
          setEvents((prev) => [...prev, `slide ${i + 1}`]);
        }}
        items={slides}
      />
      <EventLog
        events={events}
        emptyText="Move the carousel to log onChange."
      />
    </>
  );
}

function SplitterEventsDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <>
      <Splitter
        onResize={({ paneIndex, newSize }) => {
          setEvents((prev) => [
            ...prev,
            `resize pane ${paneIndex + 1}: ${newSize.toFixed(1)}%`,
          ]);
        }}
        onCollapse={({ paneIndex, collapse }) => {
          setEvents((prev) => [
            ...prev,
            `${collapse ? 'collapse' : 'expand'} pane ${paneIndex + 1}`,
          ]);
        }}
        panes={[
          {
            label: 'Editor',
            size: '40%',
            min: '20%',
            max: '70%',
            collapsible: true,
            children: <Text>Editor (20–70%, collapsible)</Text>,
          },
          {
            label: 'Preview',
            children: <Text>Preview</Text>,
          },
        ]}
      />
      <EventLog
        events={events}
        emptyText="Drag the separator (or use its keyboard bindings) to log events."
      />
    </>
  );
}

export function DisplayDemos({ slug }: { slug: string }) {
  if (slug === 'badge') {
    return (
      <DemoPage
        title="Badge"
        description="Count and status pills in filled, outlined and text variants."
        sections={[
          {
            id: 'badge-severities',
            title: 'Severities',
            description: (
              <>
                The seven semantic severities on the default{' '}
                <Code>variant="filled"</Code> surface.
              </>
            ),
            content: (
              <Row align="center" gap={12} wrap>
                {SEVERITIES.map((severity) => (
                  <Badge key={severity} severity={severity}>
                    {capitalize(severity)}
                  </Badge>
                ))}
              </Row>
            ),
          },
          {
            id: 'badge-variants',
            title: 'Variants',
            description: (
              <>
                <Code>variant</Code> switches the surface: filled, flat,
                outlined and text.
              </>
            ),
            content: (
              <Row align="center" gap={12} wrap>
                {VARIANTS.map((variant) => (
                  <Badge key={variant} variant={variant}>
                    {capitalize(variant)}
                  </Badge>
                ))}
              </Row>
            ),
          },
          {
            id: 'badge-shades',
            title: 'Shades',
            description: (
              <>
                <Code>shade</Code> walks each severity lighter or darker — same
                axis as Button.
              </>
            ),
            content: (
              <Stack orientation="vertical" gap={8}>
                {SEVERITIES.map((severity) => (
                  <Row key={severity} align="center" gap={8} wrap>
                    {SHADES.map((shade) => (
                      <Badge key={shade} severity={severity} shade={shade}>
                        {capitalize(severity)} {capitalize(shade)}
                      </Badge>
                    ))}
                  </Row>
                ))}
              </Stack>
            ),
          },
          {
            id: 'badge-sizes',
            title: 'Sizes',
            description: (
              <>
                <Code>size</Code> runs the five-step component scale.
              </>
            ),
            content: (
              <Row align="center" gap={12} wrap>
                {SIZES.map((size) => (
                  <Badge key={size} severity="primary" size={size}>
                    {size}
                  </Badge>
                ))}
              </Row>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'avatar') {
    return (
      <DemoPage
        title="Avatar"
        description="Email resolves a Gravatar (retro default); a broken photo falls back to initials."
        sections={[
          {
            id: 'avatar-kinds',
            title: 'Initials, photo and Gravatar',
            description: (
              <>
                <Code>name</Code> falls back to initials, <Code>src</Code>{' '}
                renders an explicit photo, and <Code>email</Code> resolves a
                Gravatar.
              </>
            ),
            content: (
              <Row align="center" gap={12} wrap>
                <Avatar name="Ada Lovelace" />
                <Avatar name="Ada Lovelace" src={PHOTO} alt="Ada Lovelace" />
                <Avatar
                  name="Katherine Johnson"
                  email="katherine.johnson@nasa.gov"
                />
              </Row>
            ),
          },
          {
            id: 'avatar-sizes',
            title: 'Sizes',
            description: (
              <>
                <Code>size</Code> runs the five-step component scale.
              </>
            ),
            content: (
              <Row align="center" gap={12} wrap>
                {SIZES.map((size) => (
                  <Avatar key={size} name="Grace Hopper" size={size} />
                ))}
              </Row>
            ),
          },
          {
            id: 'avatar-status',
            title: 'Status',
            description: (
              <>
                <Code>status</Code> overlays the presence dot.
              </>
            ),
            content: (
              <Row align="center" gap={12} wrap>
                <Avatar name="Online" status="online" />
                <Avatar name="Away" status="away" />
                <Avatar name="Offline" status="offline" />
              </Row>
            ),
          },
          {
            id: 'avatar-composition',
            title: 'Composition',
            description: 'Avatar beside identity text and a role pill.',
            content: (
              <Row align="center" gap={12} wrap>
                <Avatar name="Grace Hopper" src={PHOTO} alt="Grace Hopper" />
                <Stack orientation="vertical" gap="0">
                  <Text textStyle="Subtitle2" tagName="P">
                    Grace Hopper
                  </Text>
                  <Text textStyle="Caption" className="dx-text-muted">
                    Rear Admiral, USN
                  </Text>
                </Stack>
                <Badge severity="info">Admin</Badge>
              </Row>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'stat') {
    return (
      <DemoPage
        title="Stat"
        description="Label plus value with an optional delta tone."
        sections={[
          {
            id: 'stat-basic',
            title: 'Basic',
            description: 'A label over a prominent value.',
            content: (
              <Row align="start" gap={16} wrap>
                <Stat label="Active" value="128" />
                <Stat label="Open incidents" value="7" />
              </Row>
            ),
          },
          {
            id: 'stat-delta',
            title: 'Delta tones',
            description: (
              <>
                <Code>delta</Code> with <Code>deltaTone</Code> marks movement:
                success, danger or neutral.
              </>
            ),
            content: (
              <Row align="start" gap={16} wrap>
                <Stat
                  label="Churn"
                  value="3.2%"
                  delta="-0.4%"
                  deltaTone="success"
                />
                <Stat
                  label="Errors"
                  value="1.8%"
                  delta="+0.6%"
                  deltaTone="danger"
                />
                <Stat
                  label="Signups"
                  value="412"
                  delta="+12"
                  deltaTone="neutral"
                />
              </Row>
            ),
          },
          {
            id: 'stat-hint',
            title: 'Hints',
            description: (
              <>
                <Code>hint</Code> adds a fine-print footnote under the value.
              </>
            ),
            content: (
              <Row align="start" gap={16} wrap>
                <Stat label="Latency" value="142 ms" hint="p95, last hour" />
                <Stat label="Storage" value="68%" hint="of 2 TB quota" />
              </Row>
            ),
          },
          {
            id: 'stat-composition',
            title: 'Composition',
            description: 'A row of stats inside a Card — dashboard KPIs.',
            content: (
              <Card variant="outlined">
                <Row gap={16} wrap>
                  <Stat
                    label="Revenue"
                    value="$48.2k"
                    delta="+8%"
                    deltaTone="success"
                  />
                  <Stat
                    label="Orders"
                    value="1,204"
                    delta="+3%"
                    deltaTone="success"
                  />
                  <Stat
                    label="Refunds"
                    value="$940"
                    delta="+1%"
                    deltaTone="danger"
                  />
                </Row>
              </Card>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'accordion') {
    return (
      <DemoPage
        title="Accordion"
        description="Stacked panels that expand one or several sections at a time."
        sections={[
          {
            id: 'accordion-basic',
            title: 'Single mode',
            description:
              'Opening a panel closes the previous one (the default).',
            content: (
              <Accordion
                items={[
                  {
                    key: 'first',
                    title: 'First',
                    content: <Text>First body.</Text>,
                  },
                  {
                    key: 'second',
                    title: 'Second',
                    content: <Text>Second body.</Text>,
                  },
                  {
                    key: 'third',
                    title: 'Third',
                    content: <Text>Third body.</Text>,
                  },
                ]}
              />
            ),
          },
          {
            id: 'accordion-multiple',
            title: 'Multiple mode',
            description: (
              <>
                <Code>multiple</Code> keeps every expanded panel open.
              </>
            ),
            content: (
              <Accordion
                multiple
                defaultValue={['alpha', 'beta']}
                items={[
                  {
                    key: 'alpha',
                    title: 'Alpha',
                    content: <Text>Alpha body.</Text>,
                  },
                  {
                    key: 'beta',
                    title: 'Beta',
                    content: <Text>Beta body.</Text>,
                  },
                  {
                    key: 'gamma',
                    title: 'Gamma',
                    content: <Text>Gamma body.</Text>,
                  },
                ]}
              />
            ),
          },
          {
            id: 'accordion-states',
            title: 'Disabled items',
            description: 'An item can be locked with disabled.',
            content: (
              <Accordion
                defaultValue={['enabled']}
                items={[
                  {
                    key: 'enabled',
                    title: 'Enabled',
                    content: <Text>This panel opens normally.</Text>,
                  },
                  {
                    key: 'locked',
                    title: 'Locked (disabled)',
                    disabled: true,
                    content: <Text>Never rendered.</Text>,
                  },
                ]}
              />
            ),
          },
          {
            id: 'accordion-controlled',
            title: 'Controlled with events',
            description: (
              <>
                Pass <Code>value</Code> + <Code>onChange</Code> to drive the
                open set from state.
              </>
            ),
            content: <AccordionEventsDemo />,
          },
          {
            id: 'accordion-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={ACCORDION_KEYS} />,
          },
        ]}
      />
    );
  }
  if (slug === 'carousel') {
    return (
      <DemoPage
        title="Carousel"
        description="Slides with arrows, indicators and optional autoplay."
        sections={[
          {
            id: 'carousel-basic',
            title: 'Basic',
            description:
              'Cycling slides with indicators and prev/next controls.',
            content: (
              <Carousel
                ariaLabel="Featured slides"
                items={[
                  slide('Slide one', 'Default controls'),
                  slide('Slide two', 'Default controls'),
                ]}
              />
            ),
          },
          {
            id: 'carousel-options',
            title: 'Arrows, indicators and autoplay',
            description: (
              <>
                <Code>showArrows</Code>, <Code>showIndicators</Code>,{' '}
                <Code>auto</Code> + <Code>interval</Code> and{' '}
                <Code>pauseOnHover</Code>.
              </>
            ),
            content: (
              <Stack orientation="vertical" gap={16}>
                <Stack orientation="vertical" gap={8}>
                  <Text textStyle="Caption" className="dx-text-muted">
                    Default controls
                  </Text>
                  <Carousel
                    ariaLabel="Controls demo"
                    items={[
                      slide('Slide one', 'Arrows + indicators'),
                      slide('Slide two', 'Arrows + indicators'),
                    ]}
                  />
                </Stack>
                <Stack orientation="vertical" gap={8}>
                  <Text textStyle="Caption" className="dx-text-muted">
                    No arrows, no indicators
                  </Text>
                  <Carousel
                    ariaLabel="Minimal carousel"
                    showArrows={false}
                    showIndicators={false}
                    items={[
                      slide('Slide one', 'Keyboard still works'),
                      slide('Slide two', 'Keyboard still works'),
                    ]}
                  />
                </Stack>
                <Stack orientation="vertical" gap={8}>
                  <Text textStyle="Caption" className="dx-text-muted">
                    Autoplay every 2s, paused while hovered
                  </Text>
                  <Carousel
                    ariaLabel="Autoplaying carousel"
                    auto
                    interval={2000}
                    pauseOnHover
                    items={[
                      slide('Slide one', 'auto, pauseOnHover'),
                      slide('Slide two', 'auto, pauseOnHover'),
                      slide('Slide three', 'auto, pauseOnHover'),
                    ]}
                  />
                </Stack>
              </Stack>
            ),
          },
          {
            id: 'carousel-controlled',
            title: 'Controlled with events',
            description: (
              <>
                <Code>selectedIndex</Code> + <Code>onChange</Code> drive the
                active slide from state.
              </>
            ),
            content: <CarouselEventsDemo />,
          },
          {
            id: 'carousel-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={CAROUSEL_KEYS} />,
          },
        ]}
      />
    );
  }
  if (slug === 'splitter') {
    return (
      <DemoPage
        title="Splitter"
        description="Resizable panes with orientation, size constraints and collapse."
        sections={[
          {
            id: 'splitter-basic',
            title: 'Basic',
            description: 'Drag the separator to resize the panes.',
            content: (
              <Splitter
                panes={[
                  { size: '30%', children: <Text>Left pane</Text> },
                  { children: <Text>Right pane</Text> },
                ]}
              />
            ),
          },
          {
            id: 'splitter-orientation',
            title: 'Orientation',
            description: (
              <>
                <Code>orientation</Code> splits horizontally (default) or
                vertically.
              </>
            ),
            content: (
              <Stack orientation="vertical" gap={16}>
                <Splitter
                  panes={[
                    { size: '30%', children: <Text>Left</Text> },
                    { children: <Text>Right</Text> },
                  ]}
                />
                <div style={{ height: 240 }}>
                  <Splitter
                    orientation="vertical"
                    panes={[
                      { size: '35%', children: <Text>Top</Text> },
                      { children: <Text>Bottom</Text> },
                    ]}
                  />
                </div>
              </Stack>
            ),
          },
          {
            id: 'splitter-constraints',
            title: 'Min, max and collapsible',
            description: (
              <>
                Pane <Code>min</Code>/<Code>max</Code> clamp the drag;{' '}
                <Code>collapsible</Code> lets a pane fold away.
              </>
            ),
            content: (
              <Splitter
                panes={[
                  {
                    label: 'Sidebar',
                    size: '25%',
                    min: '15%',
                    max: '45%',
                    collapsible: true,
                    children: <Text>Sidebar (15–45%, collapsible)</Text>,
                  },
                  { label: 'Content', children: <Text>Content</Text> },
                ]}
              />
            ),
          },
          {
            id: 'splitter-events',
            title: 'Resize and collapse events',
            description: (
              <>
                <Code>onResize</Code> and <Code>onCollapse</Code> report every
                gesture.
              </>
            ),
            content: <SplitterEventsDemo />,
          },
          {
            id: 'splitter-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={SPLITTER_KEYS} />,
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Card"
      description="Elevated, outlined and filled surfaces with header and footer slots."
      sections={[
        {
          id: 'card-variants',
          title: 'Variants',
          description: (
            <>
              <Code>variant</Code> switches the surface treatment.
            </>
          ),
          content: (
            <Row align="start" gap={12} wrap>
              <Card variant="elevated" header={<Text>Elevated</Text>}>
                <Text textStyle="Body1">Card body.</Text>
              </Card>
              <Card variant="outlined" header={<Text>Outlined</Text>}>
                <Text textStyle="Body1">Card body.</Text>
              </Card>
              <Card variant="filled" header={<Text>Filled</Text>}>
                <Text textStyle="Body1">Card body.</Text>
              </Card>
            </Row>
          ),
        },
        {
          id: 'card-slots',
          title: 'Header and footer',
          description: (
            <>
              <Code>header</Code> and <Code>footer</Code> slots wrap the body.
            </>
          ),
          content: (
            <Row align="start" gap={12} wrap>
              <Card
                header={
                  <Text textStyle="Subtitle2" tagName="P">
                    Header only
                  </Text>
                }
              >
                <Text textStyle="Body1">Body under a header slot.</Text>
              </Card>
              <Card
                footer={
                  <Row align="center" justify="between">
                    <Text textStyle="Caption" className="dx-text-muted">
                      Saved 2 minutes ago
                    </Text>
                    <Button size="sm" variant="text">
                      Dismiss
                    </Button>
                  </Row>
                }
              >
                <Text textStyle="Body1">Body over a footer slot.</Text>
              </Card>
            </Row>
          ),
        },
        {
          id: 'card-composition',
          title: 'Composition',
          description: 'Header slot with Avatar, identity text and a pill.',
          content: (
            <Card
              variant="outlined"
              header={
                <Row align="center" gap={12}>
                  <Avatar name="Ada Lovelace" src={PHOTO} alt="Ada Lovelace" />
                  <Stack orientation="vertical" gap="0">
                    <Text textStyle="Subtitle2" tagName="P">
                      Ada Lovelace
                    </Text>
                    <Text textStyle="Caption" className="dx-text-muted">
                      Analytical Engine notes
                    </Text>
                  </Stack>
                  <Badge severity="success" size="sm" className="dx-ml-auto">
                    Active
                  </Badge>
                </Row>
              }
              footer={
                <Text textStyle="Caption" className="dx-text-muted">
                  Last edited by Charles Babbage
                </Text>
              }
            >
              <Text textStyle="Body1">
                Cards compose with the rest of the kit: put Avatars, Badges and
                Stats in the slots.
              </Text>
            </Card>
          ),
        },
      ]}
    />
  );
}

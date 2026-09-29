import {
  Accordion,
  Avatar,
  Badge,
  Card,
  Carousel,
  Row,
  Splitter,
  Stat,
  Text,
} from '../../lib/main';
import { DemoPage } from './demo-page';

export function DisplayDemos({ slug }: { slug: string }) {
  if (slug === 'badge') {
    return (
      <DemoPage
        title="Badge"
        description="Count and status pills in filled, outlined and text variants."
        sections={[
          {
            id: 'badge-variants',
            content: (
              <Row align="center" gap="md" wrap>
                <Badge>Default</Badge>
                <Badge severity="primary">Primary</Badge>
                <Badge severity="success" variant="outlined">
                  Outlined
                </Badge>
                <Badge severity="danger" variant="text">
                  Text
                </Badge>
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
            id: 'avatar-basic',
            content: (
              <Row align="center" gap="md" wrap>
                <Avatar name="Ada Lovelace" />
                <Avatar name="Grace Hopper" status="online" />
                <Avatar
                  name="Katherine Johnson"
                  email="katherine.johnson@nasa.gov"
                  status="away"
                />
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
            content: (
              <Row align="center" gap="md" wrap>
                <Stat label="Active" value="128" />
                <Stat
                  label="Churn"
                  value="3.2%"
                  delta="-0.4%"
                  deltaTone="success"
                />
              </Row>
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
        sections={[
          {
            id: 'accordion-basic',
            title: 'Basic',
            description: 'Panels expand one section at a time.',
            content: (
              <Accordion
                items={[
                  {
                    key: 'a',
                    title: 'First',
                    content: <Text>First body</Text>,
                  },
                  {
                    key: 'b',
                    title: 'Second',
                    content: <Text>Second body</Text>,
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'carousel') {
    return (
      <DemoPage
        title="Carousel"
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
                  <Text key="a">Slide one</Text>,
                  <Text key="b">Slide two</Text>,
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'splitter') {
    return (
      <DemoPage
        title="Splitter"
        sections={[
          {
            id: 'splitter-basic',
            content: (
              <Splitter
                panes={[
                  { size: '30%', children: <Text>Left pane</Text> },
                  { children: <Text>Right pane</Text> },
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
      title="Card"
      description="Elevated, outlined and filled surfaces with header and footer slots."
      sections={[
        {
          id: 'card-variants',
          content: (
            <Row align="center" gap="md" wrap>
              <Card variant="elevated" header={<Text>Elevated</Text>}>
                <Text textStyle="Body1">Card body.</Text>
              </Card>
              <Card variant="outlined" header={<Text>Outlined</Text>}>
                <Text textStyle="Body1">Card body.</Text>
              </Card>
              <Card
                variant="filled"
                footer={
                  <Text textStyle="Caption" className="dx-text-muted">
                    Footer
                  </Text>
                }
              >
                <Text textStyle="Body1">With footer.</Text>
              </Card>
            </Row>
          ),
        },
      ]}
    />
  );
}

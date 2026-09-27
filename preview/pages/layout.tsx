import {
  AutoGrid,
  Body,
  Column,
  Footer,
  Header,
  Layout,
  Row,
  Sidebar,
  SidebarToggle,
  Stack,
  Text,
} from '../../lib/main';
import { DemoPage } from './demo-page';

export function LayoutDemos({ slug }: { slug: string }) {
  if (slug === 'row') {
    return (
      <DemoPage
        title="Row"
        description="Flex rows with alignment, justification and wrapping columns."
        sections={[
          {
            id: 'row-basic',
            title: 'Alignment',
            content: (
              <Row align="center" gap="md" wrap>
                <span>start</span>
                <span>middle</span>
                <span>end</span>
              </Row>
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
        description="Twelve-wide grid columns with offsets and ordering."
        sections={[
          {
            id: 'column-sizes',
            title: 'Sizes',
            content: (
              <Row align="center" gap="md">
                <Column size={4}>4</Column>
                <Column size={4}>4</Column>
                <Column size={4}>4</Column>
              </Row>
            ),
          },
          {
            id: 'column-offset',
            title: 'Offset',
            content: (
              <Row align="center" gap="md">
                <Column size={6} offset={3}>
                  size 6, offset 3
                </Column>
              </Row>
            ),
          },
          {
            id: 'column-order',
            title: 'Order',
            content: (
              <Row align="center" gap="md">
                <Column order={2}>second</Column>
                <Column order={1}>first</Column>
              </Row>
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

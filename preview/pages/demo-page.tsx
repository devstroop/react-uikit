import type { CSSProperties, ReactNode } from 'react';
import { Card, Column, Row, Stack, Text, Toc } from '../../lib/main';
import { DemoSection } from './section';

export interface DemoPageSection {
  /** Anchor id for the card (Toc target). */
  id: string;
  /** Card heading (H5). Omit the heading when it would repeat the page title. */
  title?: string;
  description?: string;
  content: ReactNode;
  /** Escape hatch for overlay demos (Menu, Dialog): cards clip with
   * overflow hidden by design, which cuts absolutely-positioned popups. */
  cardStyle?: CSSProperties;
}

export interface DemoPageProps {
  title: string;
  description?: string;
  sections: DemoPageSection[];
}

/**
 * Shared demo page frame (Radzen demo-page parity): H1 title +
 * Subtitle1 description, then every set of components in its own Card
 * with consistent spacing. Pages with more than one section get the
 * sticky "On this page" Toc at the right (hidden below 1024px, like
 * Radzen's demo Toc); single-section pages render one bare Card.
 */
export function DemoPage({ title, description, sections }: DemoPageProps) {
  if (sections.length === 0) return null;
  if (sections.length === 1) {
    const [only] = sections;
    return (
      <DemoSection title={title}>
        {description != null && (
          // P, not Subtitle1's default <h6>: an h6 right after the page
          // <h1> breaks axe heading-order on every described page.
          <Text
            textStyle="Subtitle1"
            tagName="P"
            className="dx-text-muted dx-pb-4"
          >
            {description}
          </Text>
        )}
        <Card id={only?.id} style={only?.cardStyle}>
          {only?.title != null && (
            <Text textStyle="H5" tagName="H2">
              {only.title}
            </Text>
          )}
          {only?.description != null && (
            <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
              {only.description}
            </Text>
          )}
          {only?.content}
        </Card>
      </DemoSection>
    );
  }
  return (
    <DemoSection title={title}>
      {description != null && (
        <Text
          textStyle="Subtitle1"
          tagName="P"
          className="dx-text-muted dx-pb-4"
        >
          {description}
        </Text>
      )}
      <Row gap="lg" align="start">
        <Column size={12} sizeMd={9}>
          <Stack orientation="vertical" gap="lg">
            {sections.map((s) => (
              <Card key={s.id} id={s.id} style={s.cardStyle}>
                <Text textStyle="H5" tagName="H2">
                  {s.title ?? title}
                </Text>
                {s.description != null && (
                  <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
                    {s.description}
                  </Text>
                )}
                {s.content}
              </Card>
            ))}
          </Stack>
        </Column>
        <Column
          size={12}
          sizeMd={3}
          className="dx-display-none dx-display-md-block"
        >
          <div style={{ position: 'sticky', top: 0 }}>
            <Text textStyle="H6" tagName="P" className="dx-mb-4">
              On this page
            </Text>
            <Toc
              items={sections.map((s) => ({
                text: s.title ?? title,
                selector: `#${s.id}`,
              }))}
            />
          </div>
        </Column>
      </Row>
    </DemoSection>
  );
}

import type { CSSProperties, ReactNode } from 'react';
import { Card, Column, Row, Stack, Text, Toc } from '../../lib/main';
import { DemoSection } from './section';

export interface DemoPageSection {
  /** Anchor id for the card (Toc target). */
  id: string;
  /** Card heading (H5). Omit the heading when it would repeat the page title. */
  title?: string;
  /** Card blurb; ReactNode so props can render as inline <Code>. */
  description?: ReactNode;
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
            textStyle="subtitle1"
            tagName="p"
            className="dx-text-muted dx-pb-4"
          >
            {description}
          </Text>
        )}
        <Card id={only?.id} style={only?.cardStyle}>
          {only?.title != null && (
            <Text textStyle="h5" tagName="h2">
              {only.title}
            </Text>
          )}
          {only?.description != null && (
            <Text textStyle="body1" className="dx-text-muted dx-mb-4">
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
          textStyle="subtitle1"
          tagName="p"
          className="dx-text-muted dx-pb-4"
        >
          {description}
        </Text>
      )}
      {/* default align=stretch: the TOC column must fill the row height or
          its sticky child can't travel within a content-height parent */}
      <Row gap={16}>
        <Column size={12} sizeMd={9}>
          <Stack orientation="vertical" gap={16}>
            {sections.map((s) => (
              <Card key={s.id} id={s.id} style={s.cardStyle}>
                <Text textStyle="h5" tagName="h2">
                  {s.title ?? title}
                </Text>
                {s.description != null && (
                  <Text textStyle="body1" className="dx-text-muted dx-mb-4">
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
          <div
            style={{
              position: 'sticky',
              top: 'calc(var(--app-header-h, 0px) + 16px)',
            }}
          >
            <Text textStyle="h6" tagName="p" className="dx-mb-4">
              On this page
            </Text>
            <Toc
              items={sections.map((s) => ({
                text: s.title ?? title,
                selector: `#${s.id}`,
              }))}
              onClick={({ selector }) => {
                // mirror the selection in the URL so sections are deep-linkable
                // (#/slug/sectionId — the shell parses it and scrolls); Toc's
                // own handler still does the smooth scroll + focus
                const path =
                  window.location.hash.replace(/^#\/?/, '').split('?')[0] ?? '';
                const base = path.split('/')[0] ?? '';
                window.location.hash = `#/${base}/${selector.replace(/^[#.]/, '')}`;
              }}
            />
          </div>
        </Column>
      </Row>
    </DemoSection>
  );
}

import type { ReactNode } from 'react';
import { Text } from '../../lib/main';

export function DemoSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-label={title} style={{ marginBottom: 32 }}>
      <Text textStyle="H2" tagName="H1">
        {title}
      </Text>
      {children}
    </section>
  );
}

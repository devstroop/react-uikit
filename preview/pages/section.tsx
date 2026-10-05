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
    <section aria-label={title} className="dx-mb-8">
      <Text textStyle="h2" tagName="h1">
        {title}
      </Text>
      {children}
    </section>
  );
}

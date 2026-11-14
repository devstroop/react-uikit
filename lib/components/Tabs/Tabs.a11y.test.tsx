import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, it, expect } from 'vitest';
import { Tabs } from './Tabs';

describe('Tabs a11y', () => {
  it('has no axe violations', async () => {
    const { container } = render(
      <Tabs
        ariaLabel="Tabs"
        items={[
          { key: 'one', label: 'One', content: 'One content' },
          { key: 'two', label: 'Two', content: 'Two content' },
        ]}
      />
    );
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});

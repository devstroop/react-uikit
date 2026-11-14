import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, it, expect } from 'vitest';
import { Select } from './Select';

describe('Select a11y', () => {
  it('has no axe violations', async () => {
    const { container } = render(
      <Select aria-label="Choice" options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />
    );
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});

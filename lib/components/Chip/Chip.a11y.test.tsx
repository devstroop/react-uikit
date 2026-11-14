import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, it, expect } from 'vitest';
import { Chip } from './Chip';

describe('Chip a11y', () => {
  it('has no axe violations (removable)', async () => {
    const { container } = render(<Chip label="India" onRemove={() => {}} />);
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});

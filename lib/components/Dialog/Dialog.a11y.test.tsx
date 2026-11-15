import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, it, expect } from 'vitest';
import { Dialog } from './Dialog';

describe('Dialog a11y', () => {
  it('has no axe violations when open', async () => {
    const { container } = render(
      <Dialog
        open
        onClose={() => {}}
        title="Confirm"
        description="Are you sure?"
      >
        <p>Body</p>
      </Dialog>
    );
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});

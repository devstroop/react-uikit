import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';
import { TextBox } from '../TextBox/TextBox';

describe('FormField a11y', () => {
  it('has no axe violations', async () => {
    const { container } = render(
      <FormField text="Name" helper="Your full name">
        <TextBox placeholder=" " />
      </FormField>
    );
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});

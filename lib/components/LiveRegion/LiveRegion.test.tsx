import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LiveRegion } from './LiveRegion';

describe('LiveRegion', () => {
  it('renders a polite status region with children', () => {
    render(<LiveRegion>Saved</LiveRegion>);
    const el = screen.getByRole('status');
    expect(el).toHaveAttribute('aria-live', 'polite');
    expect(el).toHaveTextContent('Saved');
  });
});

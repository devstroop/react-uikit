import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';
import { Textbox } from '../Textbox/Textbox';

describe('Input (deprecated alias of Textbox)', () => {
  it('renders identically to Textbox', () => {
    const { container: a } = render(<Input aria-label="A" />);
    const { container: b } = render(<Textbox aria-label="A" />);
    expect(a.innerHTML).toBe(b.innerHTML);
  });

  it('supports the visible prop through the alias', () => {
    render(<Input aria-label="Search" visible={false} />);
    expect(
      screen.queryByRole('textbox', { name: 'Search' })
    ).not.toBeInTheDocument();
  });
});

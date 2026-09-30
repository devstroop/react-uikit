import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';
import { TextBox } from '../TextBox/TextBox';

describe('Input (deprecated alias of TextBox)', () => {
  it('renders identically to TextBox', () => {
    const { container: a } = render(<Input aria-label="A" />);
    const { container: b } = render(<TextBox aria-label="A" />);
    expect(a.innerHTML).toBe(b.innerHTML);
  });

  it('supports the visible prop through the alias', () => {
    render(<Input aria-label="Search" visible={false} />);
    expect(
      screen.queryByRole('textbox', { name: 'Search' })
    ).not.toBeInTheDocument();
  });
});

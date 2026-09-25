import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SidebarToggle } from './SidebarToggle';

describe('SidebarToggle', () => {
  it('renders a button with the default label and menu icon', () => {
    render(<SidebarToggle />);
    const button = screen.getByRole('button', { name: 'Toggle sidebar' });
    expect(button.tagName).toBe('BUTTON');
    expect(button.querySelector('svg')).not.toBeNull();
  });

  it('accepts a custom icon and label', () => {
    render(<SidebarToggle icon="close" label="Collapse navigation" />);
    expect(
      screen.getByRole('button', { name: 'Collapse navigation' })
    ).not.toBeNull();
  });

  it('forwards clicks and attributes', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<SidebarToggle onClick={onClick} data-test="t" />);
    const button = screen.getByRole('button', { name: 'Toggle sidebar' });
    expect(button.getAttribute('data-test')).toBe('t');
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

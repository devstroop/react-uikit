import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Link } from './Link';

describe('Link', () => {
  it('renders an anchor when href is set', () => {
    render(
      <Link href="/support" target="_blank">
        Help
      </Link>
    );
    const link = screen.getByRole('link', { name: 'Help' });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/support');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders a button with link styling without href', () => {
    const onClick = vi.fn();
    render(<Link onClick={onClick}>Forgot password?</Link>);
    const button = screen.getByRole('button', { name: 'Forgot password?' });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('forwards icon and aria attributes', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Link aria-expanded={false} onClick={onClick}>
        Toggle
      </Link>
    );
    const button = screen.getByRole('button', { name: 'Toggle' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders nothing when visible is false', () => {
    const { container } = render(
      <Link href="/x" visible={false}>
        Hidden
      </Link>
    );
    expect(container).toBeEmptyDOMElement();
  });
});

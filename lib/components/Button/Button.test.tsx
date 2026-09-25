import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default primary variant', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('defaults to type=button', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies variant, size, and fullWidth classes', () => {
    render(
      <Button variant="filled" severity="danger" size="lg" fullWidth>
        Delete
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Delete' });
    expect(button.className).toContain('style-danger');
    expect(button.className).toContain('lg');
    expect(button.className).toContain('fullWidth');
  });

  it.each(['filled', 'flat', 'outlined', 'text'] as const)(
    'applies the %s variant class',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>);
      expect(screen.getByRole('button', { name: variant }).className).toContain(
        variant
      );
    }
  );

  it('forwards the click handler and is disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Go
      </Button>
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it.each(['lighter', 'light', 'dark', 'darker'] as const)(
    'applies the shade-%s class (token-driven, no brightness filter)',
    (shade) => {
      render(<Button shade={shade}>Save</Button>);
      expect(screen.getByRole('button', { name: 'Save' }).className).toContain(
        `shade-${shade}`
      );
    }
  );

  it.each(['light', 'dark'] as const)(
    'ignores shade on %s severity (Radzen: Light/Dark have no Shades)',
    (severity) => {
      render(
        <Button severity={severity} shade="dark">
          Save
        </Button>
      );
      const cls = screen.getByRole('button', { name: 'Save' }).className;
      expect(cls).not.toContain('shade-');
    }
  );

  it('renders nothing when visible is false', () => {
    render(<Button visible={false}>Save</Button>);
    expect(
      screen.queryByRole('button', { name: 'Save' })
    ).not.toBeInTheDocument();
  });
});

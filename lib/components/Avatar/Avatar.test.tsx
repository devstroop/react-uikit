import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials for a two-part name', () => {
    render(<Avatar name="Jane Doe" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Jane Doe');
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders a single initial for a one-part name', () => {
    render(<Avatar name="alice" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders the image when src is provided', () => {
    const { container } = render(
      <Avatar name="Jane Doe" src="https://example.com/jane.png" alt="Jane" />
    );
    const img = container.querySelector('img');
    expect(img).toBeTruthy();
    expect(img).toHaveAttribute('src', 'https://example.com/jane.png');
    expect(img).toHaveAttribute('alt', 'Jane');
  });

  it('renders a status dot when status is set', () => {
    render(<Avatar name="Jane Doe" status="online" />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'Jane Doe, online'
    );
    expect(screen.getByRole('img').className).toContain('online');
  });

  it('announces once with a photo: neutral wrapper, labelled image', () => {
    const { container } = render(
      <Avatar
        name="Jane Doe"
        src="https://example.com/jane.png"
        status="online"
      />
    );
    expect(container.querySelector('span[role="img"]')).not.toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute(
      'alt',
      'Jane Doe, online'
    );
  });

  it('preserves explicit decorative alt even with a status', () => {
    const { container } = render(
      <Avatar
        name="Jane Doe"
        src="https://example.com/jane.png"
        alt=""
        status="online"
      />
    );
    expect(container.querySelector('img')).toHaveAttribute('alt', '');
  });

  it('labels an unnamed photo like the initials variant', () => {
    const { container } = render(<Avatar src="https://example.com/jane.png" />);
    expect(container.querySelector('img')).toHaveAttribute('alt', 'avatar');
  });

  it('resolves a Gravatar URL from email with exact size pixels', () => {
    const { container } = render(
      <Avatar name="Jane Doe" email="  User@Example.COM " size="lg" />
    );
    // Normalized (trim + lowercase) before hashing: md5(user@example.com)
    // is the known b58996c5… vector; unnormalized input would differ.
    const img = container.querySelector('img');
    expect(img?.getAttribute('src')).toBe(
      'https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?d=retro&s=44&r=g'
    );
    expect(img).toHaveAttribute('alt', 'Jane Doe');
  });

  it('prefers explicit src over email', () => {
    const { container } = render(
      <Avatar email="user@example.com" src="https://example.com/jane.png" />
    );
    expect(container.querySelector('img')?.getAttribute('src')).toBe(
      'https://example.com/jane.png'
    );
  });

  it('honors gravatar default and rating overrides', () => {
    const { container } = render(
      <Avatar
        email="user@example.com"
        gravatarDefault="identicon"
        gravatarRating="pg"
      />
    );
    expect(container.querySelector('img')?.getAttribute('src')).toContain(
      '?d=identicon&s=36&r=pg'
    );
  });

  it('falls back to initials when the image fails to load', () => {
    const { container } = render(
      <Avatar name="Jane Doe" src="https://example.com/broken.png" />
    );
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    fireEvent.error(img!);
    expect(container.querySelector('img')).toBeNull();
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});

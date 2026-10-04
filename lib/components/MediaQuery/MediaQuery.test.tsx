import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MediaQuery } from './MediaQuery';

function stubMatchMedia(matches: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }))
  );
}

describe('MediaQuery', () => {
  it('renders children when the query matches', () => {
    stubMatchMedia(true);
    render(<MediaQuery query="(min-width: 768px)">wide</MediaQuery>);
    expect(screen.getByText('wide')).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it('renders nothing when the query does not match', () => {
    stubMatchMedia(false);
    const { container } = render(
      <MediaQuery query="(min-width: 768px)">wide</MediaQuery>
    );
    expect(container).toBeEmptyDOMElement();
    vi.unstubAllGlobals();
  });

  it('renders nothing when matchMedia is unavailable (SSR)', () => {
    vi.stubGlobal(
      'matchMedia',
      undefined as unknown as typeof window.matchMedia
    );
    const { container } = render(
      <MediaQuery query="(min-width: 768px)">wide</MediaQuery>
    );
    expect(container).toBeEmptyDOMElement();
    vi.unstubAllGlobals();
  });
});

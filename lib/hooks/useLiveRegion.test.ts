import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useLiveRegion } from './useLiveRegion';

describe('useLiveRegion', () => {
  it('mounts a polite status region on body and announces into it', () => {
    const { result } = renderHook(() => useLiveRegion());

    const region = document.querySelector<HTMLDivElement>('[role="status"]');
    expect(region).not.toBeNull();
    expect(region).toHaveAttribute('aria-live', 'polite');

    act(() => result.current('Name saved'));
    expect(region?.textContent).toBe('Name saved');

    act(() => result.current('Saved again'));
    expect(region?.textContent).toBe('Saved again');
  });

  it('removes the region on unmount', () => {
    const { unmount } = renderHook(() => useLiveRegion());
    expect(document.querySelector('[role="status"]')).not.toBeNull();
    unmount();
    expect(document.querySelector('[role="status"]')).toBeNull();
  });
});

import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useMediaQuery } from "./useMediaQuery";

interface StubList {
  matches: boolean;
  addEventListener: (type: string, fn: (event: { matches: boolean }) => void) => void;
  removeEventListener: (type: string, fn: (event: { matches: boolean }) => void) => void;
  dispatch: (next: boolean) => void;
}

function stubMatchMedia(matches: boolean): StubList {
  const listeners = new Set<(event: { matches: boolean }) => void>();
  const list: StubList = {
    matches,
    addEventListener: vi.fn((_type: string, fn: (event: { matches: boolean }) => void) => {
      listeners.add(fn);
    }),
    removeEventListener: vi.fn((_type: string, fn: (event: { matches: boolean }) => void) => {
      for (const saved of [...listeners]) {
        if (saved === fn) listeners.delete(saved);
      }
    }),
    dispatch(next: boolean) {
      list.matches = next;
      listeners.forEach((fn) => fn({ matches: next }));
    },
  };
  vi.stubGlobal("matchMedia", vi.fn(() => list));
  return list;
}

describe("useMediaQuery", () => {
  it("returns false when matchMedia is unavailable", () => {
    vi.stubGlobal("matchMedia", undefined as unknown as typeof window.matchMedia);
    const { result } = renderHook(() => useMediaQuery("(min-width: 1px)"));
    expect(result.current).toBe(false);
    vi.unstubAllGlobals();
  });

  it("seeds eagerly without waiting for an effect", () => {
    stubMatchMedia(true);
    const { result } = renderHook(() => useMediaQuery("(min-width: 100px)"));
    expect(result.current).toBe(true);
    vi.unstubAllGlobals();
  });

  it("tracks the query and updates on change", () => {
    const list = stubMatchMedia(false);
    const { result } = renderHook(() => useMediaQuery("(min-width: 100px)"));
    expect(result.current).toBe(false);
    act(() => {
      list.dispatch(true);
    });
    expect(result.current).toBe(true);
    vi.unstubAllGlobals();
  });

  it("removes the listener on unmount", () => {
    const list = stubMatchMedia(false);
    const { unmount } = renderHook(() => useMediaQuery("(min-width: 100px)"));
    unmount();
    act(() => {
      list.dispatch(true);
    });
    expect(list.removeEventListener).toHaveBeenCalledTimes(1);
    vi.unstubAllGlobals();
  });

  it("falls back to addListener on older engines", () => {
    const listeners = new Set<(event: { matches: boolean }) => void>();
    const legacy = {
      matches: false,
      addListener: vi.fn((fn: (event: { matches: boolean }) => void) => {
        listeners.add(fn);
      }),
      removeListener: vi.fn((fn: (event: { matches: boolean }) => void) => {
        listeners.delete(fn);
      }),
    };
    vi.stubGlobal("matchMedia", vi.fn(() => legacy));
    const { result, unmount } = renderHook(() => useMediaQuery("(min-width: 100px)"));
    expect(result.current).toBe(false);
    expect(legacy.addListener).toHaveBeenCalledTimes(1);
    unmount();
    expect(legacy.removeListener).toHaveBeenCalledTimes(1);
    vi.unstubAllGlobals();
  });
});

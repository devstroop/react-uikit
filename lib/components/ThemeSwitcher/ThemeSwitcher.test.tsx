import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeSwitcher } from "./ThemeSwitcher";

function stubMatchMedia(matches: boolean) {
  const list = {
    matches,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
  vi.stubGlobal("matchMedia", vi.fn(() => list));
  return list;
}

afterEach(() => {
  delete document.documentElement.dataset.theme;
  localStorage.clear();
  vi.unstubAllGlobals();
});

describe("ThemeSwitcher", () => {
  it("follows the OS by default and writes nothing", () => {
    stubMatchMedia(false);
    render(<ThemeSwitcher />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("reflects a dark OS without writing an override", () => {
    stubMatchMedia(true);
    render(<ThemeSwitcher />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("persists an explicit toggle and writes the theme", async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    await user.click(screen.getByRole("switch"));
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("dx-theme")).toBe("dark");
    await user.click(screen.getByRole("switch"));
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("dx-theme")).toBe("light");
  });

  it("initializes from a persisted choice", () => {
    stubMatchMedia(false);
    localStorage.setItem("dx-theme", "dark");
    render(<ThemeSwitcher />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("supports a controlled value", () => {
    stubMatchMedia(false);
    const { rerender } = render(<ThemeSwitcher value="dark" />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(screen.getByRole("switch")).toBeChecked();
    rerender(<ThemeSwitcher value="light" />);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("calls onChange with the new explicit theme", async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeSwitcher onChange={onChange} />);
    await user.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith("dark");
  });
});

import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { QRCode } from "./QRCode";

describe("QRCode", () => {
  it("renders svg with role img and default label", () => {
    const { container } = render(<QRCode value="hello" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-label", "QR code for hello");
    expect(svg).toHaveAttribute("width", "128");
  });

  it("supports custom label and size", () => {
    const { container } = render(<QRCode value="x" size={64} ariaLabel="Custom" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-label", "Custom");
    expect(svg).toHaveAttribute("width", "64");
  });

  it("renders a labelled canvas when render is canvas", () => {
    const { container } = render(<QRCode value="x" render="canvas" />);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
    const canvas = container.querySelector("canvas");
    expect(canvas).toHaveAttribute("role", "img");
    expect(canvas).toHaveAttribute("aria-label", "QR code for x");
  });

  it("is deterministic per value", () => {
    const a = render(<QRCode value="abc" />).container.querySelector("svg");
    const b = render(<QRCode value="abc" />).container.querySelector("svg");
    const c = render(<QRCode value="abd" />).container.querySelector("svg");
    expect(a?.innerHTML).toBe(b?.innerHTML);
    expect(a?.innerHTML).not.toBe(c?.innerHTML);
  });

  it("leaves the quiet zone empty (spec margin)", () => {
    const { container } = render(<QRCode value="hello" size={100} />);
    const rects = [...container.querySelectorAll("svg rect")];
    // Background rect + zero modules touching the outer edge: with a
    // 4-module margin on a 100px symbol, no dark rect starts at x/y 0
    // or extends to the far edge.
    const modules = rects.slice(1);
    expect(modules.length).toBeGreaterThan(50);
    for (const r of modules) {
      const x = Number(r.getAttribute("x"));
      const y = Number(r.getAttribute("y"));
      const w = Number(r.getAttribute("width"));
      expect(x).toBeGreaterThan(0);
      expect(y).toBeGreaterThan(0);
      expect(x + w).toBeLessThanOrEqual(100);
      expect(y + w).toBeLessThanOrEqual(100);
    }
  });

  it("draws the top-left finder outer corner", () => {
    const { container } = render(<QRCode value="hello" size={290} margin={4} />);
    // Version-1 symbol: 21 modules + 8 margin = 29 units of 10px.
    // Finder outer corner sits exactly at the margin offset.
    const corner = container.querySelector('svg rect[x="40"][y="40"]');
    expect(corner).not.toBeNull();
  });

  it("grows the symbol for longer payloads", () => {
    const short = render(<QRCode value="hi" />).container.querySelectorAll("svg rect").length;
    const long = render(<QRCode value={"0123456789".repeat(30)} />).container.querySelectorAll(
      "svg rect",
    ).length;
    expect(long).toBeGreaterThan(short);
  });

  it("renders an accessible placeholder and reports once when the payload exceeds capacity", () => {
    const onError = vi.fn();
    const { container } = render(<QRCode value={"x".repeat(4000)} onError={onError} />);
    const placeholder = container.firstElementChild;
    expect(placeholder?.tagName).toBe("DIV");
    expect(placeholder).toHaveAttribute("role", "img");
    expect(placeholder).toHaveAttribute("aria-label", expect.stringContaining("QR code"));
    expect(placeholder).toHaveAttribute("data-qr-error", "true");
    expect(container.querySelector("svg")).not.toBeInTheDocument();
    // Effect reporting (not render logging): exactly one host callback.
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0]?.[0]).toMatch("too long to encode");
  });

  it("re-reports the same value after a recovery in between", () => {
    const onError = vi.fn();
    const bad = "x".repeat(4000);
    const { rerender } = render(<QRCode value={bad} onError={onError} />);
    expect(onError).toHaveBeenCalledTimes(1);
    rerender(<QRCode value="hello" onError={onError} />);
    expect(onError).toHaveBeenCalledTimes(1);
    rerender(<QRCode value={bad} onError={onError} />);
    expect(onError).toHaveBeenCalledTimes(2);
  });

  it("re-reports when the onError identity changes for the same value", () => {
    const bad = "x".repeat(4000);
    const first = vi.fn();
    const { rerender } = render(<QRCode value={bad} onError={first} />);
    expect(first).toHaveBeenCalledTimes(1);
    const second = vi.fn();
    rerender(<QRCode value={bad} onError={second} />);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it("clamps negative margins to zero", () => {
    const { container } = render(<QRCode value="hello" size={100} margin={-3} />);
    const rects = [...container.querySelectorAll("svg rect")].slice(1);
    expect(rects.length).toBeGreaterThan(0);
    for (const r of rects) {
      expect(Number(r.getAttribute("x"))).toBeGreaterThanOrEqual(0);
      expect(Number(r.getAttribute("y"))).toBeGreaterThanOrEqual(0);
    }
  });
});

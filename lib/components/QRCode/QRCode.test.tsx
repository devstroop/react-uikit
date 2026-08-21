import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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

  it("is deterministic per value", () => {
    const a = render(<QRCode value="abc" />).container.querySelector("svg");
    const b = render(<QRCode value="abc" />).container.querySelector("svg");
    const c = render(<QRCode value="abd" />).container.querySelector("svg");
    expect(a?.innerHTML).toBe(b?.innerHTML);
    expect(a?.innerHTML).not.toBe(c?.innerHTML);
  });
});

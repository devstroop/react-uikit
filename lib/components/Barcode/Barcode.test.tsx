import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Barcode } from "./Barcode";

describe("Barcode", () => {
  it("renders svg with role img and default label", () => {
    const { container } = render(<Barcode value="DEV-123" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-label", "Barcode DEV-123");
  });

  it("shows value when showValue", () => {
    render(<Barcode value="DEV-123" showValue />);
    expect(screen.getByText("DEV-123")).toBeInTheDocument();
  });

  it("is deterministic per value", () => {
    const a = render(<Barcode value="A1" />).container.querySelector("svg");
    const b = render(<Barcode value="A1" />).container.querySelector("svg");
    const c = render(<Barcode value="A2" />).container.querySelector("svg");
    expect(a?.innerHTML).toBe(b?.innerHTML);
    expect(a?.innerHTML).not.toBe(c?.innerHTML);
  });
});

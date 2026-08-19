import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders a column stack by default", () => {
    const { container } = render(<Stack>A</Stack>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("DIV");
    expect(element?.className).toContain("dir-column");
  });

  it("switches orientation and reverse direction", () => {
    const { container, rerender } = render(<Stack orientation="horizontal" />);
    expect(container.firstElementChild?.className).toContain("dir-row");
    rerender(<Stack orientation="horizontal" reverse />);
    expect(container.firstElementChild?.className).toContain("dir-row-reverse");
    rerender(<Stack reverse />);
    expect(container.firstElementChild?.className).toContain("dir-column-reverse");
  });

  it("supports nowrap and wrap-reverse", () => {
    const { container, rerender } = render(<Stack wrap={false} />);
    expect(container.firstElementChild?.className).toContain("wrap-nowrap");
    rerender(<Stack wrap="wrap-reverse" />);
    expect(container.firstElementChild?.className).toContain("wrap-wrap-reverse");
    rerender(<Stack />);
    expect(container.firstElementChild?.className).not.toMatch(/wrap-/);
  });

  it("maps gap tiers to token classes and inline styles otherwise", () => {
    const { container, rerender } = render(<Stack gap="lg" />);
    expect(container.firstElementChild?.className).toContain("gapLg");
    rerender(<Stack gap={16} />);
    expect(container.firstElementChild?.getAttribute("style")).toContain("gap: 16px");
  });

  it("applies align and justify modifier classes", () => {
    const { container } = render(<Stack align="center" justify="between" />);
    expect(container.firstElementChild?.className).toContain("align-center");
    expect(container.firstElementChild?.className).toContain("justify-between");
  });
});
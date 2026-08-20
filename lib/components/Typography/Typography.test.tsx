import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("renders a paragraph with body-1 by default", () => {
    const { container } = render(<Typography>content</Typography>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("P");
    expect(element?.className).toContain("body-1");
  });

  it("maps display variants to h1-h6 headings", () => {
    const variants = [
      "display-1",
      "display-2",
      "display-3",
      "display-4",
      "display-5",
      "display-6",
    ] as const;
    variants.forEach((variant, index) => {
      const { container } = render(<Typography variant={variant}>heading</Typography>);
      const element = container.firstElementChild;
      expect(element?.tagName).toBe(`H${index + 1}`);
      expect(element?.className).toContain(variant);
    });
  });

  it("renders body-2 as a paragraph", () => {
    const { container } = render(<Typography variant="body-2">body</Typography>);
    expect(container.firstElementChild?.tagName).toBe("P");
    expect(container.firstElementChild?.className).toContain("body-2");
  });

  it("maps caption and overline to spans", () => {
    const { container } = render(<Typography variant="caption">caption</Typography>);
    expect(container.firstElementChild?.tagName).toBe("SPAN");
    expect(container.firstElementChild?.className).toContain("caption");

    const { container: overline } = render(<Typography variant="overline">overline</Typography>);
    expect(overline.firstElementChild?.tagName).toBe("SPAN");
    expect(overline.firstElementChild?.className).toContain("overline");
  });

  it("overrides the element via as", () => {
    const { container } = render(<Typography as="div">custom</Typography>);
    expect(container.firstElementChild?.tagName).toBe("DIV");
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(
      <Typography id="t1" aria-label="Content" className="custom">
        content
      </Typography>,
    );
    const element = container.firstElementChild;
    expect(element?.getAttribute("id")).toBe("t1");
    expect(element?.getAttribute("aria-label")).toBe("Content");
    expect(element?.className).toContain("custom");
  });
});
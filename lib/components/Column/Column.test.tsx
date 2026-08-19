import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Column } from "./Column";

describe("Column", () => {
  it("renders a div with the column class and no width by default", () => {
    const { container } = render(<Column>content</Column>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("DIV");
    expect(element?.className).toContain("column");
    expect(element?.className).not.toMatch(/Size\d/);
  });

  it("applies the size class for size 6", () => {
    const { container } = render(<Column size={6} />);
    expect(container.firstElementChild?.className).toContain("Size6");
  });

  it("applies the offset class for offset 2", () => {
    const { container } = render(<Column offset={2} />);
    expect(container.firstElementChild?.className).toContain("Offset2");
  });

  it("skips the offset class for offset 0", () => {
    const { container } = render(<Column offset={0} />);
    expect(container.firstElementChild?.className).not.toMatch(/Offset/);
  });

  it("applies responsive tier classes", () => {
    const { container } = render(<Column sizeMd={6} sizeLg={3} offsetSm={2} />);
    const cls = container.firstElementChild?.className ?? "";
    expect(cls).toContain("mdSize6");
    expect(cls).toContain("lgSize3");
    expect(cls).toContain("smOffset2");
  });

  it("spreads attributes onto the div", () => {
    const { container } = render(<Column id="c1" data-test="x" />);
    expect(container.firstElementChild?.getAttribute("id")).toBe("c1");
    expect(container.firstElementChild?.getAttribute("data-test")).toBe("x");
  });
});
describe("Column flex parity (#108)", () => {
  it("applies order first/last and numeric order", () => {
    const { container, rerender } = render(<Column order="first" />);
    expect(container.firstElementChild?.className).toContain("orderFirst");
    rerender(<Column order="last" />);
    expect(container.firstElementChild?.className).toContain("orderLast");
    rerender(<Column order={5} />);
    expect(container.firstElementChild?.getAttribute("style")).toContain("order: 5");
  });

  it("applies responsive order classes", () => {
    const { container } = render(<Column orderSm="last" orderXxl="first" />);
    const classes = container.firstElementChild?.className ?? "";
    expect(classes).toContain("smorderLast");
    expect(classes).toContain("xxlorderFirst");
  });

  it("applies XXL size and offset classes", () => {
    const { container } = render(<Column sizeXxl={6} offsetXxl={3} />);
    const classes = container.firstElementChild?.className ?? "";
    expect(classes).toContain("xxlSize6");
    expect(classes).toContain("xxlOffset3");
  });
});

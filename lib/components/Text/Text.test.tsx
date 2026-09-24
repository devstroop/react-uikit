import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders a paragraph with Body1 by default", () => {
    const { container } = render(<Text>content</Text>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("P");
    expect(element?.className).toContain("body-1");
  });

  it("maps Display variants to h1-h6 headings", () => {
    const variants = [
      "DisplayH1",
      "DisplayH2",
      "DisplayH3",
      "DisplayH4",
      "DisplayH5",
      "DisplayH6",
    ] as const;
    variants.forEach((variant, index) => {
      const { container } = render(<Text TextStyle={variant}>heading</Text>);
      const element = container.firstElementChild;
      expect(element?.tagName).toBe(`H${index + 1}`);
    });
  });

  it("maps H1-H6 styles to their own headings", () => {
    (["H1", "H2", "H3", "H4", "H5", "H6"] as const).forEach((style) => {
      const { container } = render(<Text TextStyle={style}>heading</Text>);
      expect(container.firstElementChild?.tagName).toBe(style);
    });
  });

  it("maps subtitles to h6 (Radzen parity)", () => {
    for (const style of ["Subtitle1", "Subtitle2"] as const) {
      const { container } = render(<Text TextStyle={style}>sub</Text>);
      expect(container.firstElementChild?.tagName).toBe("H6");
    }
  });

  it("maps Body2 to a paragraph and Button/Caption/Overline to spans", () => {
    const { container: body } = render(<Text TextStyle="Body2">body</Text>);
    expect(body.firstElementChild?.tagName).toBe("P");
    for (const style of ["Button", "Caption", "Overline"] as const) {
      const { container } = render(<Text TextStyle={style}>x</Text>);
      expect(container.firstElementChild?.tagName).toBe("SPAN");
    }
  });

  it("overrides the element via TagName (Radzen TagName parity)", () => {
    const { container } = render(
      <Text TextStyle="H3" TagName="P">
        styled as H3
      </Text>,
    );
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("P");
    expect(element?.className).toContain("h3");
  });

  it("applies alignment as a composable class", () => {
    const { container } = render(<Text TextAlign="Center">content</Text>);
    expect(container.firstElementChild?.className).toContain("align-center");
  });

  it("renders no alignment class by default", () => {
    const { container } = render(<Text>content</Text>);
    expect(container.firstElementChild?.className).not.toContain("align-");
  });

  it("prefers the Text prop over children (Radzen parity)", () => {
    render(<Text Text="plain">rich</Text>);
    expect(screen.getByText("plain")).toBeInTheDocument();
    expect(screen.queryByText("rich")).not.toBeInTheDocument();
  });

  it("renders nothing when visible is false", () => {
    const { container } = render(<Text visible={false}>hidden</Text>);
    expect(container.firstElementChild).not.toBeInTheDocument();
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(
      <Text id="t1" aria-label="Content" className="custom">
        content
      </Text>,
    );
    const element = container.firstElementChild;
    expect(element?.getAttribute("id")).toBe("t1");
    expect(element?.getAttribute("aria-label")).toBe("Content");
    expect(element?.className).toContain("custom");
  });
});

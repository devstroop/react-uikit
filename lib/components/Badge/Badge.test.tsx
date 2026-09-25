import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders a span with the children", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge.tagName).toBe("SPAN");
    expect(badge).toBeInTheDocument();
  });

  it("defaults to primary severity and filled variant (Radzen parity)", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge.className).toContain("primary");
    expect(badge.className).toContain("filled");
  });

  it("applies the requested tone class", () => {
    render(<Badge severity="success">Ok</Badge>);
    expect(screen.getByText("Ok").className).toContain("success");
  });

  it.each(["secondary", "light", "base", "dark", "info"] as const)(
    "applies the %s severity class",
    (severity) => {
      render(<Badge severity={severity}>Ok</Badge>);
      expect(screen.getByText("Ok").className).toContain(severity);
    },
  );

  it.each(["filled", "outlined", "text"] as const)("applies the requested %s variant class", (variant) => {
    render(<Badge variant={variant}>Ok</Badge>);
    expect(screen.getByText("Ok").className).toContain(variant);
  });

  it("forwards extra props and className to the span", () => {
    render(
      <Badge aria-label="status" className="custom" data-testid="badge">
        New
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveAttribute("aria-label", "status");
    expect(badge.className).toContain("custom");
  });

  it("forwards a ref to the span", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>New</Badge>);
    expect(ref.current).toBe(screen.getByText("New"));
  });

  it.each(["lighter", "light", "dark", "darker"] as const)(
    "applies the shade-%s class (token-driven, no brightness filter)",
    (shade) => {
      render(<Badge shade={shade}>New</Badge>);
      expect(screen.getByText("New").className).toContain(`shade-${shade}`);
    },
  );

  it("renders nothing when visible is false", () => {
    render(<Badge visible={false}>New</Badge>);
    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Textbox } from "./Textbox";

describe("Textbox", () => {
  it("renders a native text input with an accessible name", () => {
    render(<Textbox aria-label="Full name" />);
    expect(screen.getByRole("textbox", { name: "Full name" })).toBeInTheDocument();
  });

  it("defaults to type=text and size=md; applies size classes", () => {
    const { rerender } = render(<Textbox />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
    expect(input.className).toContain("md");
    rerender(<Textbox size="lg" />);
    expect(screen.getByRole("textbox").className).toContain("lg");
  });

  it("sets aria-invalid only when invalid", () => {
    const { rerender } = render(<Textbox />);
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
    rerender(<Textbox invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("applies the invalid class when invalid", () => {
    render(<Textbox invalid />);
    expect(screen.getByRole("textbox").className).toContain("invalid");
  });

  it("forwards input attributes", () => {
    render(<Textbox placeholder="Search" type="email" disabled />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("type", "email");
  });

  it("merges a custom className", () => {
    render(<Textbox className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("forwards typing to onChange and blocks input when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(<Textbox aria-label="Search" onChange={onChange} />);
    await user.type(screen.getByRole("textbox", { name: "Search" }), "abc");
    expect(onChange).toHaveBeenCalledTimes(3);
    rerender(<Textbox aria-label="Search" onChange={onChange} disabled />);
    await user.type(screen.getByRole("textbox", { name: "Search" }), "def");
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});

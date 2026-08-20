import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Password } from "./Password";

describe("Password", () => {
  it("renders a native input type=password with an accessible name", () => {
    render(<Password aria-label="Password" />);
    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders a toggle button labelled 'Show password' with aria-pressed=false", () => {
    render(<Password aria-label="Password" />);
    const toggle = screen.getByRole("button", { name: "Show password" });
    expect(toggle).toHaveAttribute("aria-pressed", "false");
  });

  it("toggles type and aria-pressed/label on click", async () => {
    const user = userEvent.setup();
    render(<Password aria-label="Password" />);
    const input = screen.getByLabelText("Password");
    let toggle = screen.getByRole("button", { name: "Show password" });

    await user.click(toggle);
    expect(input).toHaveAttribute("type", "text");
    toggle = screen.getByRole("button", { name: "Hide password" });
    expect(toggle).toHaveAttribute("aria-pressed", "true");

    await user.click(toggle);
    expect(input).toHaveAttribute("type", "password");
    expect(screen.getByRole("button", { name: "Show password" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("applies size classes and merges a custom className on the input", () => {
    render(<Password size="lg" className="custom-class" aria-label="Password" />);
    const input = screen.getByLabelText("Password");
    expect(input.className).toContain("lg");
    expect(input).toHaveClass("custom-class");
  });

  it("sets aria-invalid + invalid class only when invalid", () => {
    const { rerender } = render(<Password aria-label="Password" />);
    const input = screen.getByLabelText("Password");
    expect(input).not.toHaveAttribute("aria-invalid");
    rerender(<Password aria-label="Password" invalid />);
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input.className).toContain("invalid");
  });

  it("forwards input attributes and blocks the toggle when disabled", () => {
    render(<Password aria-label="Password" placeholder="Secret" disabled />);
    const input = screen.getByPlaceholderText("Secret");
    expect(input).toBeDisabled();
    expect(screen.getByRole("button", { name: "Show password" })).toBeDisabled();
  });
});
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Togglebutton } from "./Togglebutton";

describe("Togglebutton", () => {
  it("renders a button with the accessible name", () => {
    render(<Togglebutton>Bold</Togglebutton>);
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
  });

  it("defaults to aria-pressed=false", () => {
    render(<Togglebutton>Bold</Togglebutton>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
  });

  it("toggles on click and notifies onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Togglebutton onChange={onChange}>Bold</Togglebutton>);
    const button = screen.getByRole("button", { name: "Bold" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(button.className).toContain("pressed");
    expect(onChange).toHaveBeenCalledWith(true);
    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("respects the controlled pressed prop over clicks", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Togglebutton pressed onChange={onChange}>Bold</Togglebutton>);
    const button = screen.getByRole("button", { name: "Bold" });
    expect(button).toHaveAttribute("aria-pressed", "true");
    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Togglebutton disabled onChange={onChange}>
        Bold
      </Togglebutton>,
    );
    const button = screen.getByRole("button", { name: "Bold" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies size and fullWidth classes", () => {
    render(<Togglebutton size="sm" fullWidth>Bold</Togglebutton>);
    const button = screen.getByRole("button", { name: "Bold" });
    expect(button.className).toContain("sm");
    expect(button.className).toContain("fullWidth");
  });
});
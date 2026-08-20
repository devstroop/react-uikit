import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("renders a radiogroup with stars", () => {
    render(<Rating value={3} />);
    const group = screen.getByRole("radiogroup", { name: "Rating" });
    expect(group).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(5);
  });

  it("marks stars up to value as checked", () => {
    render(<Rating value={3} />);
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("aria-checked", "true");
    expect(radios[2]).toHaveAttribute("aria-checked", "true");
    expect(radios[3]).toHaveAttribute("aria-checked", "false");
  });

  it("exposes posinset and setsize on each star", () => {
    render(<Rating value={2} stars={10} />);
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("aria-posinset", "1");
    expect(radios[9]).toHaveAttribute("aria-posinset", "10");
    expect(radios[0]).toHaveAttribute("aria-setsize", "10");
  });

  it("clicking a star commits its value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating value={2} onChange={onChange} />);
    await user.click(screen.getAllByRole("radio")[4]!);
    expect(onChange).toHaveBeenCalledWith(5);
  });

  it("arrow keys move and set the rating", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating value={2} onChange={onChange} />);
    await user.click(screen.getAllByRole("radio")[1]!);
    await user.keyboard("{ArrowRight}");
    expect(onChange).toHaveBeenLastCalledWith(3);
    await user.keyboard("{ArrowLeft}");
    expect(onChange).toHaveBeenLastCalledWith(2);
  });

  it("clear button resets to 0", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating value={4} onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Clear" }));
    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("readOnly hides the clear button and sets aria-readonly", () => {
    render(<Rating value={4} readOnly />);
    expect(screen.queryByRole("button", { name: "Clear" })).not.toBeInTheDocument();
    expect(screen.getByRole("radiogroup", { name: "Rating" })).toHaveAttribute(
      "aria-readonly",
      "true",
    );
  });

  it("disabled stars are not focusable and report aria-disabled", () => {
    render(<Rating value={2} disabled />);
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("tabindex", "-1");
    expect(radios[0]).toHaveAttribute("aria-disabled", "true");
  });

  it("uses a custom aria label for the group", () => {
    render(<Rating value={1} ariaLabel="Cleanliness" />);
    expect(screen.getByRole("radiogroup", { name: "Cleanliness" })).toBeInTheDocument();
  });
});
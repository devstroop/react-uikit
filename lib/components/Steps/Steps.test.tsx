import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Steps } from "./Steps";

const items = [
  { text: "Step 1", icon: "1" },
  { text: "Step 2", icon: "2" },
  { text: "Step 3" },
  { text: "Step 4", disabled: true },
];

describe("Steps", () => {
  it("renders nav landmark with aria-label and list roles", () => {
    render(<Steps items={items} ariaLabel="Wizard steps" />);
    expect(screen.getByRole("navigation", { name: "Wizard steps" })).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("defaults ariaLabel to Steps", () => {
    render(<Steps items={items} />);
    expect(screen.getByRole("navigation", { name: "Steps" })).toBeInTheDocument();
  });

  it("marks active step with aria-current=step and shows check for completed", () => {
    render(<Steps items={items} defaultIndex={1} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons[1]).toHaveAttribute("aria-current", "step");
    expect(buttons[0]?.textContent).toContain("✓");
    expect(buttons[1]).not.toHaveTextContent("✓");
  });

  it("disables items with disabled prop", () => {
    render(<Steps items={items} />);
    const disabledBtn = screen.getByRole("button", { name: /Step 4/ });
    expect(disabledBtn).toBeDisabled();
    expect(disabledBtn).toHaveAttribute("aria-disabled", "true");
  });

  it("linear prevents skipping ahead beyond next step", () => {
    render(<Steps items={items} defaultIndex={0} linear />);
    const buttons = screen.getAllByRole("button");
    // index 0 active, index 1 next enabled, 2 and beyond disabled due to linear
    expect(buttons[1]).not.toBeDisabled();
    expect(buttons[2]).toBeDisabled();
    expect(buttons[2]).toHaveAttribute("aria-disabled", "true");
  });

  it("fires onChange when clicking enabled step", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Steps items={items} onChange={onChange} defaultIndex={0} />);
    await user.click(screen.getByRole("button", { name: /Step 2/ }));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("does not fire onChange when clicking disabled linear step", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Steps items={items} onChange={onChange} defaultIndex={0} linear />);
    const step3 = screen.getByRole("button", { name: /Step 3/ });
    expect(step3).toBeDisabled();
    await user.click(step3);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not fire onChange for disabled prop step", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Steps items={items} onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: /Step 4/ }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("supports controlled selectedIndex", () => {
    const { rerender } = render(<Steps items={items} selectedIndex={2} />);
    expect(screen.getAllByRole("button")[2]).toHaveAttribute("aria-current", "step");
    rerender(<Steps items={items} selectedIndex={0} />);
    expect(screen.getAllByRole("button")[0]).toHaveAttribute("aria-current", "step");
  });

  it("supports SelectedIndex alias and Change alias", async () => {
    const user = userEvent.setup();
    const Change = vi.fn();
    render(<Steps items={items} SelectedIndex={0} Change={Change} />);
    expect(screen.getAllByRole("button")[0]).toHaveAttribute("aria-current", "step");
    await user.click(screen.getByRole("button", { name: /Step 2/ }));
    expect(Change).toHaveBeenCalledWith(1);
  });

  it("supports onSelectedIndexChange alias", async () => {
    const user = userEvent.setup();
    const onSelectedIndexChange = vi.fn();
    render(<Steps items={items} onSelectedIndexChange={onSelectedIndexChange} />);
    await user.click(screen.getByRole("button", { name: /Step 2/ }));
    expect(onSelectedIndexChange).toHaveBeenCalledWith(1);
  });

  it("supports Linear alias", () => {
    render(<Steps items={items} Linear defaultIndex={0} />);
    expect(screen.getByRole("button", { name: /Step 3/ })).toBeDisabled();
  });

  it("uncontrolled defaultIndex changes internal state on click", async () => {
    const user = userEvent.setup();
    render(<Steps items={items} defaultIndex={0} />);
    expect(screen.getAllByRole("button")[0]).toHaveAttribute("aria-current", "step");
    await user.click(screen.getByRole("button", { name: /Step 3/ }));
    expect(screen.getAllByRole("button")[2]).toHaveAttribute("aria-current", "step");
  });

  it("handles keyboard ArrowRight/Left navigation", async () => {
    const user = userEvent.setup();
    render(<Steps items={items} />);
    const btn1 = screen.getByRole("button", { name: /Step 1/ });
    const btn2 = screen.getByRole("button", { name: /Step 2/ });
    btn1.focus();
    expect(btn1).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(btn2).toHaveFocus();
    await user.keyboard("{ArrowLeft}");
    expect(btn1).toHaveFocus();
  });

  it("renders icon when provided and number fallback", () => {
    render(<Steps items={items} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    // step3 has no icon, should show number 3
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Steps items={items} className="custom" />);
    expect((container.firstChild as Element).className).toMatch(/custom/);
  });

  it("Enter/Space activation via click handler", () => {
    const onChange = vi.fn();
    render(<Steps items={items} onChange={onChange} />);
    const btn = screen.getByRole("button", { name: /Step 2/ });
    fireEvent.keyDown(btn, { key: "Enter" });
    // Enter on button triggers click in real browser; ensure click still works
    fireEvent.click(btn);
    expect(onChange).toHaveBeenCalledWith(1);
  });
});

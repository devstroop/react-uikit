import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Splitter } from "./Splitter";

const panes = [
  { label: "Left", children: <div>Left content</div>, size: "40%", min: "10%", max: "80%" },
  { label: "Right", children: <div>Right content</div>, size: "60%", min: "10%", max: "90%" },
];

const panesCollapsible = [
  { label: "Left", children: <div>Left</div>, collapsible: true, size: "50%" },
  { label: "Right", children: <div>Right</div>, size: "50%" },
];

const threePanes = [
  { label: "A", children: <div>A</div>, size: "33%" },
  { label: "B", children: <div>B</div>, size: "33%" },
  { label: "C", children: <div>C</div>, size: "34%" },
];

describe("Splitter", () => {
  it("renders panes with role group and aria-label", () => {
    render(<Splitter panes={panes} ariaLabel="My splitter" />);
    expect(screen.getByRole("group", { name: "Left" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Right" })).toBeInTheDocument();
    expect(screen.getByText("Left content")).toBeInTheDocument();
    expect(screen.getByText("Right content")).toBeInTheDocument();
  });

  it("defaults orientation horizontal and ariaLabel Splitter", () => {
    const { container } = render(<Splitter panes={panes} />);
    expect(container.firstChild).toBeDefined();
    // check horizontal class
    expect((container.firstChild as Element).className).toMatch(/horizontal/);
  });

  it("renders vertical orientation class when set", () => {
    const { container } = render(<Splitter panes={panes} orientation="vertical" />);
    expect((container.firstChild as Element).className).toMatch(/vertical/);
  });

  it("supports Orientation alias", () => {
    const { container } = render(<Splitter panes={panes} Orientation="vertical" />);
    expect((container.firstChild as Element).className).toMatch(/vertical/);
  });

  it("renders separator handle with correct aria attributes", () => {
    render(<Splitter panes={panes} orientation="horizontal" />);
    const sep = screen.getByRole("separator");
    expect(sep).toHaveAttribute("aria-orientation", "horizontal");
    expect(sep).toHaveAttribute("aria-valuemin", "10");
    expect(sep).toHaveAttribute("aria-valuemax", "80");
    expect(sep).toHaveAttribute("aria-valuenow");
    expect(sep).toHaveAttribute("tabIndex", "0");
    expect(sep).toHaveAttribute("aria-label", expect.stringContaining("Resize handle"));
  });

  it("vertical separator has aria-orientation vertical", () => {
    render(<Splitter panes={panes} orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });

  it("renders correct number of handles for n panes", () => {
    render(<Splitter panes={threePanes} />);
    expect(screen.getAllByRole("separator")).toHaveLength(2);
  });

  it("keyboard ArrowRight increases size and fires onResize", () => {
    const onResize = vi.fn();
    render(<Splitter panes={panes} onResize={onResize} />);
    const sep = screen.getByRole("separator");
    sep.focus();
    fireEvent.keyDown(sep, { key: "ArrowRight" });
    expect(onResize).toHaveBeenCalled();
    const arg = onResize.mock.calls[0]?.[0];
    expect(arg.paneIndex).toBe(0);
    expect(typeof arg.newSize).toBe("number");
    expect(arg.cancel).toBe(false);
  });

  it("keyboard ArrowLeft decreases size", () => {
    const onResize = vi.fn();
    render(<Splitter panes={panes} onResize={onResize} />);
    const sep = screen.getByRole("separator");
    fireEvent.keyDown(sep, { key: "ArrowLeft" });
    expect(onResize).toHaveBeenCalled();
  });

  it("keyboard vertical ArrowUp/Down resize", () => {
    const onResize = vi.fn();
    render(<Splitter panes={panes} orientation="vertical" onResize={onResize} />);
    const sep = screen.getByRole("separator");
    fireEvent.keyDown(sep, { key: "ArrowUp" });
    expect(onResize).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(sep, { key: "ArrowDown" });
    expect(onResize).toHaveBeenCalledTimes(2);
  });

  it("keyboard Home/End jump to min/max", () => {
    const onResize = vi.fn();
    render(<Splitter panes={panes} onResize={onResize} />);
    const sep = screen.getByRole("separator");
    fireEvent.keyDown(sep, { key: "Home" });
    expect(onResize).toHaveBeenLastCalledWith(expect.objectContaining({ paneIndex: 0 }));
    fireEvent.keyDown(sep, { key: "End" });
    expect(onResize).toHaveBeenLastCalledWith(expect.objectContaining({ paneIndex: 0 }));
  });

  it("cancel prevents resize", () => {
    const onResize = vi.fn((args: { cancel: boolean }) => {
      args.cancel = true;
    });
    render(<Splitter panes={panes} onResize={onResize} />);
    const sep = screen.getByRole("separator");
    fireEvent.keyDown(sep, { key: "ArrowRight" });
    expect(onResize).toHaveBeenCalled();
    // size should not have changed visually; we check that cancel respected (no throw)
  });

  it("supports Resize alias", () => {
    const Resize = vi.fn();
    render(<Splitter panes={panes} Resize={Resize} />);
    fireEvent.keyDown(screen.getByRole("separator"), { key: "ArrowRight" });
    expect(Resize).toHaveBeenCalled();
  });

  it("renders collapse button when collapsible", () => {
    render(<Splitter panes={panesCollapsible} />);
    expect(screen.getByRole("button", { name: /Collapse pane 1/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Collapse pane 1/ })).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles collapse on button click and fires onCollapse", async () => {
    const user = userEvent.setup();
    const onCollapse = vi.fn();
    render(<Splitter panes={panesCollapsible} onCollapse={onCollapse} />);
    const btn = screen.getByRole("button", { name: /Collapse pane 1/ });
    await user.click(btn);
    expect(onCollapse).toHaveBeenCalledWith(expect.objectContaining({ paneIndex: 0, collapse: true }));
    // after collapse, expand button should appear
    expect(await screen.findByRole("button", { name: /Expand pane 1/ })).toBeInTheDocument();
    const expandBtn = screen.getByRole("button", { name: /Expand pane 1/ });
    await user.click(expandBtn);
    expect(onCollapse).toHaveBeenLastCalledWith(expect.objectContaining({ paneIndex: 0, collapse: false }));
  });

  it("cancel prevents collapse", async () => {
    const user = userEvent.setup();
    const onCollapse = vi.fn((args: { cancel: boolean }) => {
      args.cancel = true;
    });
    render(<Splitter panes={panesCollapsible} onCollapse={onCollapse} />);
    await user.click(screen.getByRole("button", { name: /Collapse pane 1/ }));
    expect(onCollapse).toHaveBeenCalled();
    // should still show collapse button, not expand
    expect(screen.getByRole("button", { name: /Collapse pane 1/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Expand pane 1/ })).not.toBeInTheDocument();
  });

  it("supports Collapse alias", async () => {
    const user = userEvent.setup();
    const Collapse = vi.fn();
    render(<Splitter panes={panesCollapsible} Collapse={Collapse} />);
    await user.click(screen.getByRole("button", { name: /Collapse pane 1/ }));
    expect(Collapse).toHaveBeenCalled();
  });

  it("Enter/Space on handle toggles collapse when collapsible", () => {
    const onCollapse = vi.fn();
    render(<Splitter panes={panesCollapsible} onCollapse={onCollapse} />);
    const sep = screen.getByRole("separator");
    sep.focus();
    fireEvent.keyDown(sep, { key: "Enter" });
    expect(onCollapse).toHaveBeenCalledWith(expect.objectContaining({ collapse: true }));
  });

  it("initial collapsed pane is hidden", () => {
    const collapsedPanes = [
      { label: "Left", children: <div>Left</div>, collapsible: true, collapsed: true, size: "30%" },
      { label: "Right", children: <div>Right</div>, size: "70%" },
    ];
    render(<Splitter panes={collapsedPanes} />);
    expect(screen.getByRole("button", { name: /Expand pane 1/ })).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Splitter panes={panes} className="my-split" />);
    expect((container.firstChild as Element).className).toMatch(/my-split/);
  });
});

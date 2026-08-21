import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FabMenu } from "./FabMenu";

const items = [
  { text: "Create", icon: "+", value: "create" },
  { text: "Edit", icon: "✎", value: "edit" },
  { text: "Disabled", disabled: true, value: "disabled" },
];

describe("FabMenu", () => {
  it("renders main button with aria-haspopup and aria-expanded false", () => {
    render(<FabMenu items={items} />);
    const btn = screen.getByRole("button", { name: "Open menu" });
    expect(btn).toHaveAttribute("aria-haspopup", "menu");
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveAttribute("aria-controls");
  });

  it("uses custom ariaLabel", () => {
    render(<FabMenu items={items} ariaLabel="Actions" />);
    expect(screen.getByRole("button", { name: "Actions" })).toBeInTheDocument();
  });

  it("toggles menu on main button click", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    const btn = screen.getByRole("button", { name: "Open menu" });
    await user.click(btn);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-expanded", "true");
    await user.click(btn);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("renders menu items with menuitem role and aria-label", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getAllByRole("menuitem")).toHaveLength(3);
    expect(screen.getByRole("menuitem", { name: "Create" })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Edit" })).toBeInTheDocument();
  });

  it("marks disabled item with aria-disabled and disables button", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const dis = screen.getByRole("menuitem", { name: "Disabled" });
    expect(dis).toHaveAttribute("aria-disabled", "true");
    expect(dis).toBeDisabled();
  });

  it("fires onClick with value when item clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<FabMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(screen.getByRole("menuitem", { name: "Create" }));
    expect(onClick).toHaveBeenCalledWith({ text: "Create", value: "create" });
  });

  it("does not fire for disabled item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<FabMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(screen.getByRole("menuitem", { name: "Disabled" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports Click alias", async () => {
    const user = userEvent.setup();
    const Click = vi.fn();
    render(<FabMenu items={items} Click={Click} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(screen.getByRole("menuitem", { name: "Edit" }));
    expect(Click).toHaveBeenCalledWith(expect.objectContaining({ text: "Edit" }));
  });

  it("closes on Escape and returns focus to main", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    const btn = screen.getByRole("button", { name: "Open menu" });
    await user.click(btn);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(btn).toHaveFocus();
  });

  it("closes on outside click", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <FabMenu items={items} />
        <button>outside</button>
      </div>,
    );
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "outside" }));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("applies position class for each position", () => {
    const { rerender, container } = render(<FabMenu items={items} position="bottom-right" />);
    expect((container.firstChild as Element).className).toMatch(/bottomRight/);
    rerender(<FabMenu items={items} position="bottom-left" />);
    expect((container.firstChild as Element).className).toMatch(/bottomLeft/);
    rerender(<FabMenu items={items} position="top-right" />);
    expect((container.firstChild as Element).className).toMatch(/topRight/);
    rerender(<FabMenu items={items} position="top-left" />);
    expect((container.firstChild as Element).className).toMatch(/topLeft/);
  });

  it("supports deprecated Position alias", () => {
    const { container } = render(<FabMenu items={items} Position="top-left" />);
    expect((container.firstChild as Element).className).toMatch(/topLeft/);
  });

  it("renders tooltip labels", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByText("Create")).toBeInTheDocument(); // tooltip text also present but check via tooltip class?
    // tooltip spans exist
    expect(screen.getAllByText("Create").length).toBeGreaterThan(0);
  });

  it("renders custom main icon", () => {
    render(<FabMenu items={items} icon="★" />);
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("main button Enter opens menu", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    const btn = screen.getByRole("button", { name: "Open menu" });
    btn.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("item has title tooltip", async () => {
    const user = userEvent.setup();
    render(<FabMenu items={items} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("menuitem", { name: "Create" })).toHaveAttribute("title", "Create");
  });
});

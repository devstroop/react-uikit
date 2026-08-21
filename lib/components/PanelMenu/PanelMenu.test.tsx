import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { PanelMenu } from "./PanelMenu";

const items = [
  { text: "Dashboard", icon: "◆", value: "dash" },
  {
    text: "Settings",
    icon: "⚙",
    children: [
      { text: "Profile", value: "profile" },
      { text: "Security", value: "security", disabled: true },
      { text: "More", children: [{ text: "Deep" }] },
    ],
  },
  { text: "DisabledRoot", disabled: true, children: [{ text: "Child" }] },
];

describe("PanelMenu", () => {
  it("renders nav landmark with ariaLabel", () => {
    render(<PanelMenu items={items} />);
    expect(screen.getByRole("navigation", { name: "Panel menu" })).toBeInTheDocument();
  });

  it("renders top-level triggers with aria-expanded false initially", () => {
    render(<PanelMenu items={items} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    expect(settings).toHaveAttribute("aria-expanded", "false");
    expect(settings).toHaveAttribute("aria-controls");
  });

  it("expands submenu on click and shows children", async () => {
    const user = userEvent.setup();
    render(<PanelMenu items={items} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    await user.click(settings);
    expect(settings).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("collapses on second click", async () => {
    const user = userEvent.setup();
    render(<PanelMenu items={items} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    await user.click(settings);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.click(settings);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("only one expanded when multiple false (default)", async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu
        items={[
          { text: "A", children: [{ text: "a1" }] },
          { text: "B", children: [{ text: "b1" }] },
        ]}
      />,
    );
    const a = screen.getByRole("button", { name: "A" });
    const b = screen.getByRole("button", { name: "B" });
    await user.click(a);
    expect(a).toHaveAttribute("aria-expanded", "true");
    await user.click(b);
    expect(a).toHaveAttribute("aria-expanded", "false");
    expect(b).toHaveAttribute("aria-expanded", "true");
  });

  it("allows multiple expanded when multiple true", async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu
        multiple
        items={[
          { text: "A", children: [{ text: "a1" }] },
          { text: "B", children: [{ text: "b1" }] },
        ]}
      />,
    );
    const a = screen.getByRole("button", { name: "A" });
    const b = screen.getByRole("button", { name: "B" });
    await user.click(a);
    await user.click(b);
    expect(a).toHaveAttribute("aria-expanded", "true");
    expect(b).toHaveAttribute("aria-expanded", "true");
  });

  it("supports deprecated Multiple alias", async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu
        Multiple
        items={[
          { text: "A", children: [{ text: "a1" }] },
          { text: "B", children: [{ text: "b1" }] },
        ]}
      />,
    );
    const a = screen.getByRole("button", { name: "A" });
    const b = screen.getByRole("button", { name: "B" });
    await user.click(a);
    await user.click(b);
    expect(a).toHaveAttribute("aria-expanded", "true");
  });

  it("fires onClick for leaf items", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<PanelMenu items={items} onClick={onClick} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    await user.click(settings);
    await user.click(screen.getByText("Profile"));
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: "Profile", value: "profile" }));
  });

  it("does not fire for disabled leaf", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<PanelMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: /Settings/ }));
    const sec = screen.getByText("Security");
    expect(sec.closest('[role="menuitem"]')).toHaveAttribute("aria-disabled", "true");
    await user.click(sec);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("disabled root is aria-disabled and not expandable", async () => {
    const user = userEvent.setup();
    render(<PanelMenu items={items} />);
    const disabled = screen.getByRole("button", { name: /DisabledRoot/ });
    expect(disabled).toHaveAttribute("aria-disabled", "true");
    expect(disabled).toBeDisabled();
    await user.click(disabled);
    expect(disabled).toHaveAttribute("aria-expanded", "false");
  });

  it("showArrow false hides caret", () => {
    render(<PanelMenu items={items} showArrow={false} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    // caret is inside but hidden; check not rendered
    expect(settings.querySelector("span:last-child")?.textContent).not.toBe("▾");
  });

  it("showArrow true shows caret", () => {
    render(<PanelMenu items={items} showArrow />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    expect(settings.textContent).toContain("▾");
  });

  it("displayStyle icon hides text but shows icon", () => {
    const { container } = render(<PanelMenu items={items} displayStyle="icon" />);
    expect((container.firstChild as Element).className).toMatch(/iconOnly/);
  });

  it("supports Click alias", async () => {
    const user = userEvent.setup();
    const Click = vi.fn();
    render(<PanelMenu items={[{ text: "A" }]} Click={Click} />);
    await user.click(screen.getByRole("button", { name: "A" }));
    expect(Click).toHaveBeenCalledWith(expect.objectContaining({ text: "A" }));
  });

  it("keyboard Enter toggles expand", async () => {
    const user = userEvent.setup();
    render(<PanelMenu items={items} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    settings.focus();
    await user.keyboard("{Enter}");
    expect(settings).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Enter}");
    expect(settings).toHaveAttribute("aria-expanded", "false");
  });

  it("keyboard Space activates leaf", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<PanelMenu items={[{ text: "Leaf" }]} onClick={onClick} />);
    const leaf = screen.getByRole("button", { name: "Leaf" });
    leaf.focus();
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: "Leaf" }));
  });

  it("keyboard ArrowDown/Up moves focus", async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu
        items={[{ text: "A" }, { text: "B" }, { text: "C", children: [{ text: "c1" }] }]}
      />,
    );
    const a = screen.getByRole("button", { name: "A" });
    const b = screen.getByRole("button", { name: "B" });
    a.focus();
    await user.keyboard("{ArrowDown}");
    expect(b).toHaveFocus();
    await user.keyboard("{ArrowUp}");
    expect(a).toHaveFocus();
  });

  it("Escape collapses expanded panel", async () => {
    const user = userEvent.setup();
    render(<PanelMenu items={items} />);
    const settings = screen.getByRole("button", { name: /Settings/ });
    await user.click(settings);
    expect(settings).toHaveAttribute("aria-expanded", "true");
    settings.focus();
    await user.keyboard("{Escape}");
    expect(settings).toHaveAttribute("aria-expanded", "false");
  });

  it("renders icon when provided and text in iconAndText mode", () => {
    render(<PanelMenu items={items} displayStyle="iconAndText" />);
    expect(screen.getByText("◆")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders nested children toggle", async () => {
    const user = userEvent.setup();
    render(<PanelMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Settings/ }));
    const more = screen.getByText("More");
    // More is a nested trigger button
    expect(more).toBeInTheDocument();
    await user.click(more.closest("button")!);
    expect(screen.getByText("Deep")).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Menu } from "./Menu";

const items = [
  { text: "Home", value: "home", path: "/" },
  { text: "Products", value: "products", children: [{ text: "A" }, { text: "B", disabled: true }] },
  { text: "About", value: "about", disabled: true },
];

describe("Menu", () => {
  it("renders nav landmark with ariaLabel and menubar role", () => {
    render(<Menu items={items} ariaLabel="Main menu" />);
    expect(screen.getByRole("navigation", { name: "Main menu" })).toBeInTheDocument();
    expect(screen.getByRole("menubar")).toBeInTheDocument();
  });

  it("defaults ariaLabel to Menu", () => {
    render(<Menu items={items} />);
    expect(screen.getByRole("navigation", { name: "Menu" })).toBeInTheDocument();
  });

  it("renders all top-level items with menuitem role", () => {
    render(<Menu items={items} />);
    const menuitems = screen.getAllByRole("menuitem");
    expect(menuitems.map((el) => el.textContent)).toEqual(expect.arrayContaining([expect.stringContaining("Home"), expect.stringContaining("Products"), expect.stringContaining("About")]));
  });

  it("marks disabled items with aria-disabled and disables button", () => {
    render(<Menu items={items} />);
    const about = screen.getByRole("menuitem", { name: /About/ });
    expect(about).toHaveAttribute("aria-disabled", "true");
    expect(about).toBeDisabled();
  });

  it("fires onClick with MenuItemEventArgs for leaf click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Menu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("menuitem", { name: /Home/ }));
    expect(onClick).toHaveBeenCalledWith({ text: "Home", value: "home", path: "/" });
  });

  it("does not fire onClick for disabled item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Menu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("menuitem", { name: /About/ }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports deprecated Click alias", async () => {
    const user = userEvent.setup();
    const Click = vi.fn();
    render(<Menu items={items} Click={Click} />);
    await user.click(screen.getByRole("menuitem", { name: /Home/ }));
    expect(Click).toHaveBeenCalledWith(expect.objectContaining({ text: "Home" }));
  });

  it("toggles submenu on click and sets aria-expanded", async () => {
    const user = userEvent.setup();
    render(<Menu items={items} />);
    const products = screen.getByRole("menuitem", { name: /Products/ });
    expect(products).toHaveAttribute("aria-haspopup", "menu");
    expect(products).toHaveAttribute("aria-expanded", "false");
    await user.click(products);
    expect(products).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menu", { name: "Products" })).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
    await user.click(products);
    expect(products).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menu", { name: "Products" })).not.toBeInTheDocument();
  });

  it("opens submenu on hover for horizontal orientation", async () => {
    render(<Menu items={items} orientation="horizontal" />);
    const products = screen.getByRole("menuitem", { name: /Products/ });
    const wrapper = products.closest("div");
    // hover via mouseEnter on wrapper
    if (wrapper) fireEvent.mouseEnter(wrapper);
    expect(products).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menu", { name: "Products" })).toBeInTheDocument();
  });

  it("fires onClick for submenu leaf and handles disabled child", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Menu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("menuitem", { name: /Products/ }));
    const a = await screen.findByRole("menuitem", { name: "A" });
    const b = screen.getByRole("menuitem", { name: "B" });
    expect(b).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(a);
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: "A" }));
    // reopen to test disabled click does not fire
    await user.click(screen.getByRole("menuitem", { name: /Products/ }));
    const b2 = await screen.findByRole("menuitem", { name: "B" });
    fireEvent.click(b2);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies orientation class and renders vertical", () => {
    const { container } = render(<Menu items={items} orientation="vertical" />);
    expect((container.firstChild as Element).className).toMatch(/vertical/);
  });

  it("handles ArrowRight/Left keyboard navigation between top items", async () => {
    const user = userEvent.setup();
    render(<Menu items={items} />);
    const home = screen.getByRole("menuitem", { name: /Home/ });
    const products = screen.getByRole("menuitem", { name: /Products/ });
    home.focus();
    expect(home).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(products).toHaveFocus();
    await user.keyboard("{ArrowLeft}");
    expect(home).toHaveFocus();
  });

  it("opens submenu with ArrowDown and focuses first child", async () => {
    const user = userEvent.setup();
    render(<Menu items={items} />);
    const products = screen.getByRole("menuitem", { name: /Products/ });
    products.focus();
    await user.keyboard("{ArrowDown}");
    expect(products).toHaveAttribute("aria-expanded", "true");
    // first submenu item should be focused
    expect(screen.getByRole("menuitem", { name: "A" })).toHaveFocus();
  });

  it("closes submenu with Escape and returns focus to trigger", async () => {
    const user = userEvent.setup();
    render(<Menu items={items} />);
    const products = screen.getByRole("menuitem", { name: /Products/ });
    await user.click(products);
    expect(screen.getByRole("menu", { name: "Products" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu", { name: "Products" })).not.toBeInTheDocument();
    expect(products).toHaveFocus();
  });

  it("navigates submenu with ArrowDown/Up", async () => {
    const user = userEvent.setup();
    render(
      <Menu
        items={[
          { text: "Parent", children: [{ text: "One" }, { text: "Two" }, { text: "Three" }] },
        ]}
      />,
    );
    const parent = screen.getByRole("menuitem", { name: /Parent/ });
    await user.click(parent);
    const one = screen.getByRole("menuitem", { name: "One" });
    const two = screen.getByRole("menuitem", { name: "Two" });
    one.focus();
    await user.keyboard("{ArrowDown}");
    expect(two).toHaveFocus();
    await user.keyboard("{ArrowUp}");
    expect(one).toHaveFocus();
  });

  it("closes submenu on outside click", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Menu items={items} />
        <button>outside</button>
      </div>,
    );
    await user.click(screen.getByRole("menuitem", { name: /Products/ }));
    expect(screen.getByRole("menu", { name: "Products" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "outside" }));
    expect(screen.queryByRole("menu", { name: "Products" })).not.toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(<Menu items={[{ text: "Home", icon: "★" }]} />);
    expect(screen.getByText("★")).toBeInTheDocument();
  });
});

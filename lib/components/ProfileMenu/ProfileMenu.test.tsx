import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ProfileMenu } from "./ProfileMenu";

const items = [
  { text: "Profile", icon: "👤" },
  { text: "Settings", icon: "⚙" },
  { text: "Sign out", disabled: true },
];

describe("ProfileMenu", () => {
  it("renders trigger with aria-haspopup and aria-expanded false initially", () => {
    render(<ProfileMenu items={items} />);
    const trigger = screen.getByRole("button", { name: /Profile menu/ });
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveAttribute("aria-controls");
  });

  it("renders custom trigger when provided", () => {
    render(<ProfileMenu items={items} trigger={<span>Custom</span>} />);
    expect(screen.getByText("Custom")).toBeInTheDocument();
  });

  it("supports Template deprecated alias", () => {
    render(<ProfileMenu items={items} Template={<span>Tpl</span>} />);
    expect(screen.getByText("Tpl")).toBeInTheDocument();
  });

  it("toggles menu on trigger click", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    const trigger = screen.getByRole("button", { name: /Profile menu/ });
    await user.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await user.click(trigger);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("renders menu items with role menuitem", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    expect(screen.getAllByRole("menuitem")).toHaveLength(3);
    expect(screen.getByRole("menuitem", { name: /Profile/ })).toBeInTheDocument();
  });

  it("marks disabled item with aria-disabled", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    const disabled = screen.getByRole("menuitem", { name: /Sign out/ });
    expect(disabled).toHaveAttribute("aria-disabled", "true");
  });

  it("fires onClick when item activated via click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ProfileMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.click(screen.getByRole("menuitem", { name: /Profile/ }));
    expect(onClick).toHaveBeenCalledWith({ text: "Profile", path: undefined });
  });

  it("does not fire for disabled item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ProfileMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.click(screen.getByRole("menuitem", { name: /Sign out/ }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports Click alias", async () => {
    const user = userEvent.setup();
    const Click = vi.fn();
    render(<ProfileMenu items={items} Click={Click} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.click(screen.getByRole("menuitem", { name: /Profile/ }));
    expect(Click).toHaveBeenCalled();
  });

  it("closes on Escape and returns focus to trigger", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    const trigger = screen.getByRole("button", { name: /Profile menu/ });
    await user.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes on outside click", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <ProfileMenu items={items} />
        <button>outside</button>
      </div>,
    );
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "outside" }));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens with ArrowDown on trigger", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    const trigger = screen.getByRole("button", { name: /Profile menu/ });
    trigger.focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("ArrowDown/Up moves active index", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    const first = screen.getByRole("menuitem", { name: /Profile/ });
    expect(first.className).toMatch(/active/);
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("menuitem", { name: /Settings/ }).className).toMatch(/active/);
    await user.keyboard("{ArrowUp}");
    expect(first.className).toMatch(/active/);
  });

  it("Home/End moves to first/last", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.keyboard("{End}");
    expect(screen.getByRole("menuitem", { name: /Settings/ }).className).toMatch(/active/);
    await user.keyboard("{Home}");
    expect(screen.getByRole("menuitem", { name: /Profile/ }).className).toMatch(/active/);
  });

  it("Enter activates focused item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ProfileMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: "Profile" }));
  });

  it("Space activates focused item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ProfileMenu items={items} onClick={onClick} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalled();
  });

  it("Tab closes menu", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    await user.keyboard("{Tab}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("renders icon when provided", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    expect(screen.getByText("👤")).toBeInTheDocument();
  });

  it("has nav landmark with ariaLabel", () => {
    render(<ProfileMenu items={items} ariaLabel="User menu" />);
    expect(screen.getByRole("navigation", { name: "User menu" })).toBeInTheDocument();
  });

  it("skips disabled in keyboard navigation", async () => {
    const user = userEvent.setup();
    render(<ProfileMenu items={items} />);
    await user.click(screen.getByRole("button", { name: /Profile menu/ }));
    // initially active is Profile, ArrowDown should go to Settings skipping Sign out disabled? Actually disabled is last, so next after Settings should wrap to Profile not Sign out
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("menuitem", { name: /Profile/ }).className).toMatch(/active/);
  });
});

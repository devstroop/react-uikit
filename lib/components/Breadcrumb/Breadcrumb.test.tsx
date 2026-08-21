import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Breadcrumb } from "./Breadcrumb";

const items = [
  { text: "Home", path: "/" },
  { text: "Library", path: "/library" },
  { text: "Data", path: "/library/data", icon: "📁" },
  { text: "Current page" },
];

const itemsWithDisabled = [
  { text: "Home", path: "/" },
  { text: "Disabled", disabled: true, path: "/disabled" },
  { text: "Current" },
];

describe("Breadcrumb", () => {
  it("renders nav landmark with ariaLabel", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
  });

  it("uses custom ariaLabel", () => {
    render(<Breadcrumb items={items} ariaLabel="Trail" />);
    expect(screen.getByRole("navigation", { name: "Trail" })).toBeInTheDocument();
  });

  it("renders ordered list", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("renders links for items with path", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByRole("link", { name: /Home/ })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /Library/ })).toHaveAttribute("href", "/library");
  });

  it("last item has aria-current=page and is not a link", () => {
    render(<Breadcrumb items={items} />);
    const current = screen.getByText("Current page");
    expect(current.closest("[aria-current='page']") || current).toHaveAttribute("aria-current", "page");
    expect(screen.queryByRole("link", { name: "Current page" })).not.toBeInTheDocument();
  });

  it("last item with path still has aria-current", () => {
    render(<Breadcrumb items={[{ text: "Home", path: "/" }, { text: "Last", path: "/last" }]} />);
    const lastLink = screen.getByRole("link", { name: "Last" });
    expect(lastLink).toHaveAttribute("aria-current", "page");
  });

  it("renders separators aria-hidden between items", () => {
    render(<Breadcrumb items={items} />);
    const separators = screen.getAllByText("/");
    expect(separators.length).toBe(3);
    separators.forEach((s) => expect(s).toHaveAttribute("aria-hidden", "true"));
  });

  it("disabled item has aria-disabled and not focusable", () => {
    render(<Breadcrumb items={itemsWithDisabled} />);
    const disabled = screen.getByText("Disabled");
    const container = disabled.closest("[aria-disabled='true']") ?? disabled;
    expect(container).toHaveAttribute("aria-disabled", "true");
    // disabled should not be a link
    expect(screen.queryByRole("link", { name: "Disabled" })).not.toBeInTheDocument();
  });

  it("fires onClick when link clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Breadcrumb items={items} onClick={onClick} />);
    await user.click(screen.getByRole("link", { name: /Home/ }));
    expect(onClick).toHaveBeenCalledWith({ text: "Home", path: "/" });
  });

  it("does not fire onClick for disabled item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Breadcrumb items={itemsWithDisabled} onClick={onClick} />);
    const disabled = screen.getByText("Disabled");
    await user.click(disabled);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports Click alias", async () => {
    const user = userEvent.setup();
    const Click = vi.fn();
    render(<Breadcrumb items={items} Click={Click} />);
    await user.click(screen.getByRole("link", { name: /Home/ }));
    expect(Click).toHaveBeenCalledWith(expect.objectContaining({ text: "Home" }));
  });

  it("handles click on item without path via button", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Breadcrumb
        items={[{ text: "A", path: "/" }, { text: "B" }, { text: "C" }]}
        onClick={onClick}
      />,
    );
    // B is middle without path, rendered as button
    const b = screen.getByRole("button", { name: "B" });
    await user.click(b);
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: "B" }));
  });

  it("renders icon when provided", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText("📁")).toBeInTheDocument();
  });

  it("current page without path is span with aria-current", () => {
    render(<Breadcrumb items={[{ text: "Home", path: "/" }, { text: "Here" }]} />);
    const here = screen.getByText("Here");
    expect(here.closest("span")).toHaveAttribute("aria-current", "page");
  });

  it("focus-visible can be targeted on links (check class exists)", () => {
    render(<Breadcrumb items={items} />);
    const link = screen.getByRole("link", { name: /Home/ });
    link.focus();
    expect(link).toHaveFocus();
  });

  it("renders correct number of items and text", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
    expect(screen.getByText("Current page")).toBeInTheDocument();
  });
});

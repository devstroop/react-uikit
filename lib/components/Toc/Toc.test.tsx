import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { Toc } from "./Toc";

const items = [
  { text: "Introduction", selector: "#intro" },
  { text: "Usage", selector: "#usage" },
  { text: "Api", selector: "#api" },
];

function setupDom() {
  document.body.innerHTML = `
    <div id="intro">intro</div>
    <div id="usage">usage</div>
    <div id="api">api</div>
  `;
  // mock getBoundingClientRect to return incremental tops for scroll spy
  const intro = document.querySelector("#intro") as HTMLElement;
  const usage = document.querySelector("#usage") as HTMLElement;
  const api = document.querySelector("#api") as HTMLElement;
  if (intro) intro.getBoundingClientRect = () => ({ top: -10, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: -10, toJSON: () => ({}) }) as DOMRect;
  if (usage) usage.getBoundingClientRect = () => ({ top: 100, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 100, toJSON: () => ({}) }) as DOMRect;
  if (api) api.getBoundingClientRect = () => ({ top: 200, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 200, toJSON: () => ({}) }) as DOMRect;
  // mock scrollIntoView
  Element.prototype.scrollIntoView = vi.fn() as unknown as typeof Element.prototype.scrollIntoView;
}

describe("Toc", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    setupDom();
  });

  it("renders nav landmark with aria-label and ol", () => {
    render(<Toc items={items} ariaLabel="My TOC" />);
    expect(screen.getByRole("navigation", { name: "My TOC" })).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("defaults ariaLabel to Table of contents", () => {
    render(<Toc items={items} />);
    expect(screen.getByRole("navigation", { name: "Table of contents" })).toBeInTheDocument();
  });

  it("renders links with href and text", () => {
    render(<Toc items={items} />);
    expect(screen.getByRole("link", { name: "Introduction" })).toHaveAttribute("href", "#intro");
    expect(screen.getByRole("link", { name: "Usage" })).toHaveAttribute("href", "#usage");
  });

  it("marks first item as active initially with aria-current location", () => {
    render(<Toc items={items} />);
    expect(screen.getByRole("link", { name: "Introduction" })).toHaveAttribute("aria-current", "location");
    expect(screen.getByRole("link", { name: "Usage" })).not.toHaveAttribute("aria-current");
  });

  it("clicking item updates active and calls onClick, scrolls and focuses target", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Toc items={items} onClick={onClick} />);
    const usageLink = screen.getByRole("link", { name: "Usage" });
    await user.click(usageLink);
    expect(onClick).toHaveBeenCalledWith({ text: "Usage", selector: "#usage" });
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    expect(screen.getByRole("link", { name: "Usage" })).toHaveAttribute("aria-current", "location");
    expect(screen.getByRole("link", { name: "Introduction" })).not.toHaveAttribute("aria-current");
  });

  it("supports Click alias", async () => {
    const user = userEvent.setup();
    const Click = vi.fn();
    render(<Toc items={items} Click={Click} />);
    await user.click(screen.getByRole("link", { name: "Api" }));
    expect(Click).toHaveBeenCalledWith(expect.objectContaining({ text: "Api" }));
  });

  it("applies orientation classes", () => {
    const { container: v } = render(<Toc items={items} orientation="vertical" />);
    expect((v.firstChild as Element).className).toMatch(/vertical/);
    const { container: h } = render(<Toc items={items} orientation="horizontal" />);
    expect((h.firstChild as Element).className).toMatch(/horizontal/);
  });

  it("supports Orientation alias", () => {
    const { container } = render(<Toc items={items} Orientation="horizontal" />);
    expect((container.firstChild as Element).className).toMatch(/horizontal/);
  });

  it("updates active on scroll via scroll handler", () => {
    render(<Toc items={items} />);
    // simulate scroll: change bounding rects to make #usage at top
    const intro = document.querySelector("#intro") as HTMLElement;
    const usage = document.querySelector("#usage") as HTMLElement;
    if (intro) intro.getBoundingClientRect = () => ({ top: -200, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: -200, toJSON: () => ({}) }) as DOMRect;
    if (usage) usage.getBoundingClientRect = () => ({ top: 10, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 10, toJSON: () => ({}) }) as DOMRect;
    fireEvent.scroll(window);
    // after scroll, active should be usage
    // We need to wait a tick; but scroll handler is synchronous
    expect(screen.getByRole("link", { name: "Usage" })).toHaveAttribute("aria-current", "location");
  });

  it("supports scope selector for scroll container", () => {
    document.body.innerHTML += `<div id="content" style="height:100px; overflow:auto"><div id="intro">a</div></div>`;
    const scope = document.querySelector("#content") as HTMLElement;
    // ensure Toc uses scope container without error
    render(<Toc items={items} selector="#content" />);
    // dispatch scroll on scope container
    fireEvent.scroll(scope);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("supports Selector alias", () => {
    render(<Toc items={items} Selector="#content" />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Toc items={items} className="custom-toc" />);
    expect((container.firstChild as Element).className).toMatch(/custom-toc/);
  });

  it("handles missing target gracefully on click", async () => {
    const user = userEvent.setup();
    const itemsWithMissing = [{ text: "Missing", selector: "#missing" }];
    render(<Toc items={itemsWithMissing} />);
    await user.click(screen.getByRole("link", { name: "Missing" }));
    expect(screen.getByRole("link", { name: "Missing" })).toHaveAttribute("aria-current", "location");
  });
});

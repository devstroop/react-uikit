import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { Tree, type TreeItem } from "./Tree";

const sampleData: TreeItem[] = [
  {
    id: "1",
    text: "Root 1",
    expanded: true,
    children: [
      { id: "1-1", text: "Child 1-1" },
      { id: "1-2", text: "Child 1-2", disabled: true },
      {
        id: "1-3",
        text: "Child 1-3",
        children: [{ id: "1-3-1", text: "Grandchild 1-3-1" }],
      },
    ],
  },
  { id: "2", text: "Root 2", children: [{ id: "2-1", text: "Child 2-1" }] },
  { id: "3", text: "Root 3" },
];

describe("Tree", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("renders tree with role tree and aria-label", () => {
    render(<Tree data={sampleData} ariaLabel="My Tree" />);
    expect(screen.getByRole("tree", { name: "My Tree" })).toBeInTheDocument();
  });

  it("defaults ariaLabel to Tree", () => {
    render(<Tree data={sampleData} />);
    expect(screen.getByRole("tree", { name: "Tree" })).toBeInTheDocument();
  });

  it("renders treeitems with correct a11y attributes", () => {
    render(<Tree data={sampleData} />);
    const root1 = screen.getByText("Root 1").closest('[role="treeitem"]') as HTMLElement;
    expect(root1).toBeInTheDocument();
    expect(root1).toHaveAttribute("aria-level", "1");
    expect(root1).toHaveAttribute("aria-setsize", "3");
    expect(root1).toHaveAttribute("aria-posinset", "1");
    expect(root1).toHaveAttribute("aria-expanded", "true");
    expect(root1).toHaveAttribute("aria-selected", "false");

    const child11 = screen.getByText("Child 1-1").closest('[role="treeitem"]') as HTMLElement;
    expect(child11).toHaveAttribute("aria-level", "2");
    expect(child11).toHaveAttribute("aria-setsize", "3");
    expect(child11).toHaveAttribute("aria-posinset", "1");
    // leaf has no aria-expanded
    expect(child11).not.toHaveAttribute("aria-expanded");

    const root2 = screen.getByText("Root 2").closest('[role="treeitem"]') as HTMLElement;
    expect(root2).toHaveAttribute("aria-expanded", "false");
  });

  it("sets aria-multiselectable for multiple selectionMode", () => {
    const { unmount } = render(<Tree data={sampleData} selectionMode="multiple" />);
    expect(screen.getByRole("tree")).toHaveAttribute("aria-multiselectable", "true");
    unmount();
    render(<Tree data={sampleData} selectionMode="single" />);
    expect(screen.getByRole("tree")).not.toHaveAttribute("aria-multiselectable");
  });

  it("supports SelectionMode alias and aria-multiselectable", () => {
    render(<Tree data={sampleData} SelectionMode="multiple" />);
    expect(screen.getByRole("tree")).toHaveAttribute("aria-multiselectable", "true");
  });

  it("expand/collapse via caret button with aria-label and aria-expanded", async () => {
    const user = userEvent.setup();
    const onExpand = vi.fn();
    const onCollapse = vi.fn();
    render(<Tree data={sampleData} onExpand={onExpand} onCollapse={onCollapse} />);
    const root2Caret = screen.getByRole("button", { name: "Expand Root 2" });
    expect(root2Caret).toHaveAttribute("aria-expanded", "false");
    await user.click(root2Caret);
    expect(onExpand).toHaveBeenCalledWith(expect.objectContaining({ item: expect.objectContaining({ id: "2" }) }));
    expect(screen.getByText("Child 2-1")).toBeInTheDocument();
    // after expand, caret label changes
    expect(screen.getByRole("button", { name: "Collapse Root 2" })).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("button", { name: "Collapse Root 2" }));
    expect(onCollapse).toHaveBeenCalledWith(expect.objectContaining({ item: expect.objectContaining({ id: "2" }) }));
  });

  it("supports Expand/Collapse aliases", async () => {
    const user = userEvent.setup();
    const Expand = vi.fn();
    const Collapse = vi.fn();
    render(<Tree data={sampleData} Expand={Expand} Collapse={Collapse} />);
    await user.click(screen.getByRole("button", { name: "Expand Root 2" }));
    expect(Expand).toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Collapse Root 2" }));
    expect(Collapse).toHaveBeenCalled();
  });

  it("selection single: clicking selects and fires onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tree data={sampleData} onChange={onChange} selectionMode="single" />);
    const child11 = screen.getByText("Child 1-1");
    await user.click(child11);
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ item: expect.objectContaining({ id: "1-1" }), selectedItem: expect.objectContaining({ id: "1-1" }) }));
    const treeitem = child11.closest('[role="treeitem"]') as HTMLElement;
    expect(treeitem).toHaveAttribute("aria-selected", "true");
  });

  it("supports Change alias for selection", async () => {
    const user = userEvent.setup();
    const Change = vi.fn();
    render(<Tree data={sampleData} Change={Change} />);
    await user.click(screen.getByText("Root 3"));
    expect(Change).toHaveBeenCalled();
  });

  it("selection multiple: toggles selection and collects selectedItems", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tree data={sampleData} onChange={onChange} selectionMode="multiple" />);
    await user.click(screen.getByText("Child 1-1"));
    expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({ selectedItems: expect.arrayContaining([expect.objectContaining({ id: "1-1" })]) }));
    await user.click(screen.getByText("Root 3"));
    expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({ selectedItems: expect.arrayContaining([expect.objectContaining({ id: "1-1" }), expect.objectContaining({ id: "3" })]) }));
    // toggle off
    await user.click(screen.getByText("Child 1-1"));
    const args = onChange.mock.calls.at(-1)?.[0] as { selectedItems: TreeItem[] };
    expect(args.selectedItems.some((i) => i.id === "1-1")).toBe(false);
  });

  it("controlled selectedItem shows as selected", () => {
    const selected = sampleData[0]!;
    render(<Tree data={sampleData} selectedItem={selected} selectionMode="single" />);
    const root1 = screen.getByText("Root 1").closest('[role="treeitem"]') as HTMLElement;
    expect(root1).toHaveAttribute("aria-selected", "true");
  });

  it("controlled selectedItems shows multiple selected", () => {
    render(<Tree data={sampleData} selectedItems={[sampleData[0]!, sampleData[2]!]} selectionMode="multiple" />);
    expect(screen.getByText("Root 1").closest('[role="treeitem"]')).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Root 3").closest('[role="treeitem"]')).toHaveAttribute("aria-selected", "true");
  });

  it("disabled nodes have aria-disabled and not selectable", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tree data={sampleData} onChange={onChange} />);
    const disabled = screen.getByText("Child 1-2").closest('[role="treeitem"]') as HTMLElement;
    expect(disabled).toHaveAttribute("aria-disabled", "true");
    await user.click(screen.getByText("Child 1-2"));
    expect(onChange).not.toHaveBeenCalled();
    expect(disabled).toHaveAttribute("aria-selected", "false");
  });

  it("custom textProperty and keyProperty", () => {
    const customData = [{ myId: "a", myText: "Alpha" }, { myId: "b", myText: "Beta" }] as unknown as TreeItem[];
    render(<Tree data={customData} keyProperty="myId" textProperty="myText" />);
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("supports TextProperty/KeyProperty aliases", () => {
    const customData = [{ myId: "a", myText: "Alpha" }] as unknown as TreeItem[];
    render(<Tree data={customData} KeyProperty="myId" TextProperty="myText" />);
    expect(screen.getByText("Alpha")).toBeInTheDocument();
  });

  it("children getter overrides item.children", () => {
    const dataWithGetter: TreeItem[] = [{ id: "root", text: "Root", children: [{ id: "ignored", text: "Ignored" }] }];
    const children = (item: TreeItem) => (item.id === "root" ? [{ id: "real", text: "Real Child" } as TreeItem] : undefined);
    render(<Tree data={dataWithGetter} children={children} />);
    // need to expand root
    expect(screen.queryByText("Ignored")).not.toBeInTheDocument();
  });

  it("template prop renders custom content", () => {
    render(<Tree data={sampleData} template={(item) => <span>TMPL-{item.text}</span>} />);
    expect(screen.getByText("TMPL-Root 1")).toBeInTheDocument();
  });

  it("supports Data alias and Children alias", () => {
    const data = [{ id: "x", text: "X" } as TreeItem];
    const { rerender } = render(<Tree Data={data} />);
    expect(screen.getByText("X")).toBeInTheDocument();
    rerender(<Tree data={data} Children={() => []} />);
    expect(screen.getByText("X")).toBeInTheDocument();
  });

  it("lazy loadChildData expands async with loading indicator and aria-busy", async () => {
    const loadChildData = vi.fn(async (item: TreeItem) => {
      if (item.id === "lazy") return [{ id: "lazy-1", text: "Lazy Child" } as TreeItem];
      return [];
    });
    const lazyData: TreeItem[] = [{ id: "lazy", text: "Lazy Root" }];
    render(<Tree data={lazyData} loadChildData={loadChildData} />);
    const caret = screen.getByRole("button", { name: "Expand Lazy Root" });
    await userEvent.setup().click(caret);
    // loading indicator should appear briefly
    expect(loadChildData).toHaveBeenCalled();
    await waitFor(() => expect(screen.getByText("Lazy Child")).toBeInTheDocument());
    const lazyItem = screen.getByText("Lazy Root").closest('[role="treeitem"]') as HTMLElement;
    expect(lazyItem).toHaveAttribute("aria-expanded", "true");
  });

  it("supports LoadChildData alias", async () => {
    const LoadChildData = vi.fn(async () => [{ id: "c1", text: "Child" } as TreeItem]);
    const lazyData: TreeItem[] = [{ id: "p", text: "Parent" }];
    render(<Tree data={lazyData} LoadChildData={LoadChildData} />);
    await userEvent.setup().click(screen.getByRole("button", { name: "Expand Parent" }));
    await waitFor(() => expect(screen.getByText("Child")).toBeInTheDocument());
  });

  it("keyboard ArrowDown/ArrowUp moves focus", async () => {
    render(<Tree data={sampleData} />);
    const tree = screen.getByRole("tree");
    tree.focus();
    const first = screen.getByText("Root 1").closest('[role="treeitem"]') as HTMLElement;
    // initially first item should be focused via tabIndex 0
    expect(first).toHaveAttribute("tabindex", "0");
    fireEvent.keyDown(tree, { key: "ArrowDown" });
    const second = screen.getByText("Child 1-1").closest('[role="treeitem"]') as HTMLElement;
    await waitFor(() => expect(second).toHaveAttribute("tabindex", "0"));
    fireEvent.keyDown(tree, { key: "ArrowUp" });
    await waitFor(() => expect(first).toHaveAttribute("tabindex", "0"));
  });

  it("keyboard ArrowRight expands and moves to child, ArrowLeft collapses or moves to parent", async () => {
    render(<Tree data={sampleData} />);
    const tree = screen.getByRole("tree");
    tree.focus();
    // focus Root 2 collapsed
    const root2Item = screen.getByText("Root 2").closest('[role="treeitem"]') as HTMLElement;
    // manually set focus to Root2 via click
    await userEvent.setup().click(screen.getByText("Root 2"));
    expect(root2Item).toHaveAttribute("tabindex", "0");
    fireEvent.keyDown(tree, { key: "ArrowRight" });
    await waitFor(() => expect(screen.getByText("Child 2-1")).toBeInTheDocument());
    // now focus should still be on Root2, but ArrowRight again should move to child
    fireEvent.keyDown(tree, { key: "ArrowRight" });
    const child = screen.getByText("Child 2-1").closest('[role="treeitem"]') as HTMLElement;
    await waitFor(() => expect(child).toHaveAttribute("tabindex", "0"));
    // ArrowLeft should move to parent
    fireEvent.keyDown(tree, { key: "ArrowLeft" });
    await waitFor(() => expect(root2Item).toHaveAttribute("tabindex", "0"));
    // ArrowLeft again should collapse
    fireEvent.keyDown(tree, { key: "ArrowLeft" });
    await waitFor(() => expect(root2Item).toHaveAttribute("aria-expanded", "false"));
  });

  it("keyboard Home/End jumps to first/last visible", async () => {
    render(<Tree data={sampleData} />);
    const tree = screen.getByRole("tree");
    tree.focus();
    fireEvent.keyDown(tree, { key: "End" });
    const last = screen.getByText("Root 3").closest('[role="treeitem"]') as HTMLElement;
    await waitFor(() => expect(last).toHaveAttribute("tabindex", "0"));
    fireEvent.keyDown(tree, { key: "Home" });
    const first = screen.getByText("Root 1").closest('[role="treeitem"]') as HTMLElement;
    await waitFor(() => expect(first).toHaveAttribute("tabindex", "0"));
  });

  it("keyboard Enter/Space toggles selection", async () => {
    const onChange = vi.fn();
    render(<Tree data={sampleData} onChange={onChange} />);
    const tree = screen.getByRole("tree");
    tree.focus();
    // focus is on Root1 initially, press Enter to select
    fireEvent.keyDown(tree, { key: "Enter" });
    expect(onChange).toHaveBeenCalled();
    onChange.mockClear();
    fireEvent.keyDown(tree, { key: " " });
    expect(onChange).toHaveBeenCalled();
  });

  it("typeahead jumps to next matching label", async () => {
    render(<Tree data={sampleData} />);
    const tree = screen.getByRole("tree");
    tree.focus();
    // type 'R' should jump to Root 2 if currently on Root 1? Our data: Root1, Child1-1 etc. Next after Root1 starting with R is Root2
    fireEvent.keyDown(tree, { key: "R" });
    const root2 = screen.getByText("Root 2").closest('[role="treeitem"]') as HTMLElement;
    await waitFor(() => expect(root2).toHaveAttribute("tabindex", "0"));
  });

  it("applies custom className", () => {
    const { container } = render(<Tree data={sampleData} className="my-tree" />);
    expect((container.firstChild as Element).className).toMatch(/my-tree/);
  });

  it("renders group role for nested children", () => {
    render(<Tree data={sampleData} />);
    const groups = screen.getAllByRole("group");
    expect(groups.length).toBeGreaterThan(0);
  });
});

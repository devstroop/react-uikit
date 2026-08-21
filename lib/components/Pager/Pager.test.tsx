import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pager } from "./Pager";

describe("Pager", () => {
  it("renders summary and page buttons with aria-current", () => {
    render(<Pager page={1} pageSize={10} count={35} />);
    expect(screen.getByText("Page 1 of 4 (35 items)")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 1" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "Page 4" })).toBeInTheDocument();
  });

  it("collapses many pages with ellipsis", () => {
    render(<Pager page={5} pageSize={10} count={1000} pageNumbersCount={5} />);
    const buttons = screen.getAllByRole("button").map((b) => b.textContent);
    expect(buttons).toContain("1");
    expect(buttons).toContain("100");
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
  });

  it("disables first/prev on first page and next/last on last", () => {
    const { rerender } = render(<Pager page={1} pageSize={10} count={35} />);
    expect(screen.getByRole("button", { name: "First page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).not.toBeDisabled();
    expect(screen.getByRole("button", { name: "Last page" })).not.toBeDisabled();
    rerender(<Pager page={4} pageSize={10} count={35} />);
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Last page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "First page" })).not.toBeDisabled();
  });

  it("fires onPageChange with PageEventArgs", () => {
    const onPageChange = vi.fn();
    render(<Pager page={2} pageSize={10} count={35} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Page 3" }));
    expect(onPageChange).toHaveBeenCalledWith({ page: 3, skip: 20, top: 10, pageCount: 4, pageSize: 10 });
    fireEvent.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).toHaveBeenCalledWith({ page: 1, skip: 0, top: 10, pageCount: 4, pageSize: 10 });
    fireEvent.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).toHaveBeenCalledWith({ page: 3, skip: 20, top: 10, pageCount: 4, pageSize: 10 });
  });

  it("fires first/last", () => {
    const onPageChange = vi.fn();
    render(<Pager page={2} pageSize={10} count={35} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole("button", { name: "First page" }));
    expect(onPageChange).toHaveBeenCalledWith(expect.objectContaining({ page: 1 }));
    fireEvent.click(screen.getByRole("button", { name: "Last page" }));
    expect(onPageChange).toHaveBeenCalledWith(expect.objectContaining({ page: 4 }));
  });

  it("fires onPageSizeChange", () => {
    const onPageSizeChange = vi.fn();
    render(<Pager page={1} pageSize={10} count={35} pageSizeOptions={[10, 20, 50]} onPageSizeChange={onPageSizeChange} />);
    fireEvent.change(screen.getByLabelText("Items per page"), { target: { value: "20" } });
    expect(onPageSizeChange).toHaveBeenCalledWith(20);
  });

  it("renders custom summary template", () => {
    render(<Pager page={2} pageSize={10} count={35} pagingSummaryTemplate={({ count }) => `${count} total`} />);
    expect(screen.getByText("35 total")).toBeInTheDocument();
  });

  it("formats pagingSummaryFormat", () => {
    render(<Pager page={1} pageSize={10} count={35} pagingSummaryFormat="Showing {0}/{1} of {2}" />);
    expect(screen.getByText("Showing 1/4 of 35")).toBeInTheDocument();
  });

  it("hides when single page unless alwaysVisible", () => {
    const { container, rerender } = render(<Pager page={1} pageSize={10} count={5} />);
    expect(container.firstChild).toBeNull();
    rerender(<Pager page={1} pageSize={10} count={5} alwaysVisible />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("supports backward compat pageNumber prop", () => {
    render(<Pager pageNumber={2} pageSize={10} count={35} />);
    expect(screen.getByRole("button", { name: "Page 2" })).toHaveAttribute("aria-current", "page");
  });

  it("supports i18n titles", () => {
    render(<Pager page={1} pageSize={10} count={35} firstPageTitle="Début" pageTitleFormat="Seite {0}" pageAriaLabelFormat="Seite {0}" />);
    expect(screen.getByRole("button", { name: "Début" })).toBeInTheDocument();
    expect(screen.getByTitle("Seite 1")).toBeInTheDocument();
  });

  it("applies horizontalAlign class", () => {
    const { container } = render(<Pager page={1} pageSize={10} count={35} horizontalAlign="center" />);
    // CSS modules hashes the class name, so check for substring
    expect((container.firstChild as Element).className).toMatch(/alignCenter/);
  });
});

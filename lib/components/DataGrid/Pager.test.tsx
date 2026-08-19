import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pager } from "./Pager";

describe("Pager", () => {
  it("renders summary and page buttons with aria-current", () => {
    render(<Pager pageNumber={1} pageSize={10} count={35} />);
    expect(screen.getByText("Page 1 of 4")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
  });

  it("collapses many pages with ellipsis", () => {
    render(<Pager pageNumber={5} pageSize={10} count={1000} pageNumbersCount={5} />);
    const buttons = screen.getAllByRole("button").map((b) => b.textContent);
    expect(buttons).toContain("1");
    expect(buttons).toContain("100");
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
  });

  it("disables prev on first page", () => {
    render(<Pager pageNumber={1} pageSize={10} count={35} />);
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).not.toBeDisabled();
  });

  it("disables next on last page", () => {
    render(<Pager pageNumber={4} pageSize={10} count={35} />);
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Previous page" })).not.toBeDisabled();
  });

  it("fires onPageChange", () => {
    const onPageChange = vi.fn();
    render(<Pager pageNumber={2} pageSize={10} count={35} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    expect(onPageChange).toHaveBeenCalledWith(3);
    fireEvent.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it("fires onPageSizeChange", () => {
    const onPageSizeChange = vi.fn();
    render(
      <Pager pageNumber={1} pageSize={10} count={35} pageSizeOptions={[10, 20, 50]} onPageSizeChange={onPageSizeChange} />,
    );
    fireEvent.change(screen.getByLabelText("Items per page"), { target: { value: "20" } });
    expect(onPageSizeChange).toHaveBeenCalledWith(20);
  });

  it("renders a custom summary template", () => {
    render(
      <Pager
        pageNumber={2}
        pageSize={10}
        count={35}
        summaryTemplate={({ count }) => `${count} total`}
      />,
    );
    expect(screen.getByText("35 total")).toBeInTheDocument();
  });
});
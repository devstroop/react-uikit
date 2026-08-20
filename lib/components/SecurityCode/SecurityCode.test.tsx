import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SecurityCode } from "./SecurityCode";

describe("SecurityCode", () => {
  it("renders length cells with per-cell labels", () => {
    render(<SecurityCode length={4} />);
    const cells = screen.getAllByRole("textbox");
    expect(cells).toHaveLength(4);
    cells.forEach((cell, i) => {
      expect(cell).toHaveAttribute("inputmode", "numeric");
      expect(cell).toHaveAttribute("maxlength", "1");
      expect(cell).toHaveAttribute("aria-label", `Digit ${i + 1} of 4`);
    });
  });

  it("auto-advances focus after typing a digit", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SecurityCode length={4} onChange={onChange} />);
    const cells = screen.getAllByRole("textbox");
    await user.type(cells[0]!, "1");
    expect(cells[0]).toHaveValue("1");
    expect(cells[1]).toHaveFocus();
    expect(onChange).toHaveBeenLastCalledWith("1");
  });

  it("backspaces to the previous cell and clears it", async () => {
    const user = userEvent.setup();
    render(<SecurityCode defaultValue="12" length={4} />);
    const cells = screen.getAllByRole("textbox");
    cells[1]!.focus();
    await user.keyboard("{Backspace}");
    expect(cells[1]).toHaveValue("");
    await user.keyboard("{Backspace}");
    expect(cells[0]).toHaveValue("");
    expect(cells[0]).toHaveFocus();
  });

  it("splits a pasted code across the cells", () => {
    const onChange = vi.fn();
    render(<SecurityCode length={6} onChange={onChange} />);
    const cells = screen.getAllByRole("textbox");
    fireEvent.paste(cells[0]!, {
      clipboardData: { getData: () => "123456" },
    });
    expect(cells.map((c) => (c as HTMLInputElement).value).join("")).toBe("123456");
    expect(onChange).toHaveBeenLastCalledWith("123456");
    expect(screen.getByRole("status")).toHaveTextContent("Code complete");
  });

  it("marks filled cells invalid", () => {
    render(<SecurityCode defaultValue="12" length={4} invalid />);
    const cells = screen.getAllByRole("textbox");
    expect(cells[0]).toHaveAttribute("aria-invalid", "true");
    expect(cells[2]).not.toHaveAttribute("aria-invalid");
  });

  it("disables all cells", () => {
    render(<SecurityCode length={4} disabled />);
    screen.getAllByRole("textbox").forEach((cell) => {
      expect(cell).toBeDisabled();
    });
  });

  it("ignores non-digit input", async () => {
    const user = userEvent.setup();
    render(<SecurityCode length={4} />);
    const cells = screen.getAllByRole("textbox");
    await user.type(cells[0]!, "a");
    expect(cells[0]).toHaveValue("");
  });

  it("supports controlled mode", () => {
    const onChange = vi.fn();
    const { rerender } = render(<SecurityCode length={4} value="12" onChange={onChange} />);
    const cells = screen.getAllByRole("textbox");
    expect(cells[0]).toHaveValue("1");
    expect(cells[1]).toHaveValue("2");
    fireEvent.change(cells[2]!, { target: { value: "3" } });
    expect(onChange).toHaveBeenCalledWith("123");
    rerender(<SecurityCode length={4} value="123" onChange={onChange} />);
    expect(cells[2]).toHaveValue("3");
  });
});
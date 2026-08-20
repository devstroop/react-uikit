import { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Datepicker } from "./Datepicker";

describe("Datepicker", () => {
  it("renders an input, a trigger and no popup by default", () => {
    render(<Datepicker aria-label="Start date" />);
    expect(screen.getByRole("textbox", { name: "Start date" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open calendar" })).toHaveAttribute(
      "aria-haspopup",
      "dialog",
    );
    expect(screen.getByRole("button", { name: "Open calendar" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens the calendar and selects a day by click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    function Controlled() {
      const [start, setStart] = useState("2024-03-10");
      return (
        <Datepicker
          aria-label="Start date"
          value={start}
          onChange={(next) => {
            setStart(next);
            onChange(next);
          }}
        />
      );
    }
    render(<Controlled />);
    const input = screen.getByRole("textbox", { name: "Start date" });
    expect(input).toHaveValue("2024-03-10");
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open calendar" })).toHaveAttribute(
      "aria-controls",
      dialog.id,
    );
    await user.click(screen.getByRole("gridcell", { name: /March 15, 2024/ }));
    expect(onChange).toHaveBeenCalledWith("2024-03-15");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(input).toHaveValue("2024-03-15");
  });

  it("navigates days with arrow keys and moves roving focus", async () => {
    render(<Datepicker aria-label="Start date" value="2024-03-10" />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    const day10 = screen.getByRole("gridcell", { name: /March 10, 2024/ });
    expect(day10).toHaveAttribute("tabindex", "0");
    day10.focus();
    fireEvent.keyDown(day10, { key: "ArrowRight" });
    await waitFor(() =>
      expect(screen.getByRole("gridcell", { name: /March 11, 2024/ })).toHaveFocus(),
    );
    fireEvent.keyDown(document.activeElement as HTMLElement, { key: "ArrowDown" });
    await waitFor(() =>
      expect(screen.getByRole("gridcell", { name: /March 18, 2024/ })).toHaveFocus(),
    );
  });

  it("selects the focused day with Enter and closes", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Datepicker aria-label="Start date" value="2024-03-10" onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    const day10 = screen.getByRole("gridcell", { name: /March 10, 2024/ });
    day10.focus();
    fireEvent.keyDown(day10, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("2024-03-10");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("respects min/max and marks disabled dates", async () => {
    const user = userEvent.setup();
    render(
      <Datepicker
        aria-label="Start date"
        value="2024-03-10"
        min="2024-03-05"
        max="2024-03-20"
        disabledDates={["2024-03-12"]}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    expect(screen.getByRole("gridcell", { name: /March 2, 2024/ })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.getByRole("gridcell", { name: /March 25, 2024/ })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.getByRole("gridcell", { name: /March 12, 2024/ })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.getByRole("gridcell", { name: /March 10, 2024/ })).not.toHaveAttribute(
      "aria-disabled",
    );
  });

  it("clamps typed values to min/max on blur", () => {
    const onChange = vi.fn();
    render(
      <Datepicker
        aria-label="Start date"
        defaultValue="2024-03-10"
        min="2024-03-05"
        max="2024-03-20"
        onChange={onChange}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Start date" });
    fireEvent.change(input, { target: { value: "2024-03-25" } });
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalledWith("2024-03-20");
    expect(input).toHaveValue("2024-03-20");
  });

  it("shows a clear button when allowClear and clears the value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Datepicker
        aria-label="Start date"
        defaultValue="2024-03-10"
        allowClear
        onChange={onChange}
      />,
    );
    const clear = screen.getByRole("button", { name: "Clear" });
    await user.click(clear);
    expect(onChange).toHaveBeenCalledWith("");
    expect(screen.getByRole("textbox", { name: "Start date" })).toHaveValue("");
    expect(screen.queryByRole("button", { name: "Clear" })).not.toBeInTheDocument();
  });

  it("commits date and time with showTime via the OK button", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Datepicker
        aria-label="Start date"
        value="2024-03-10 09:30:00"
        showTime
        onChange={onChange}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    expect(screen.getByLabelText("Hour")).toHaveValue("09");
    expect(screen.getByLabelText("Minute")).toHaveValue("30");
    await user.click(screen.getByRole("button", { name: "Increase hour" }));
    await user.click(screen.getByRole("button", { name: "OK" }));
    expect(onChange).toHaveBeenCalledWith("2024-03-10 10:30:00");
  });

  it("closes on Escape and on outside click", async () => {
    const user = userEvent.setup();
    render(<Datepicker aria-label="Start date" value="2024-03-10" />);
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.keyDown(document.activeElement as HTMLElement, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Open calendar" }));
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(<Datepicker aria-label="Start date" disabled />);
    expect(screen.getByRole("textbox", { name: "Start date" })).toBeDisabled();
    const trigger = screen.getByRole("button", { name: "Open calendar" });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders only the calendar in inline mode", () => {
    render(<Datepicker value="2024-03-10" inline aria-label="Start date" />);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Open calendar" })).not.toBeInTheDocument();
    expect(screen.getByRole("gridcell", { name: /March 10, 2024/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("applies size and invalid classes and forwards attributes", () => {
    render(
      <Datepicker
        aria-label="Start date"
        size="lg"
        invalid
        placeholder="Pick a date"
        tabIndex={3}
      />,
    );
    const input = screen.getByPlaceholderText("Pick a date");
    expect(input.className).toContain("dtDatepickerInputLg");
    expect(input.className).toContain("dtDatepickerInputInvalid");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("tabindex", "3");
  });
});
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { formatTimeSpan, Timespanpicker } from "./Timespanpicker";

describe("formatTimeSpan", () => {
  it("normalizes ISO durations to HH:MM:SS", () => {
    expect(formatTimeSpan("PT1H30M")).toBe("01:30:00");
    expect(formatTimeSpan("PT1H30M15S")).toBe("01:30:15");
    expect(formatTimeSpan("PT0S")).toBe("00:00:00");
    expect(formatTimeSpan("1:00:00")).toBe("01:00:00");
  });

  it("prefixes whole days when days are present", () => {
    expect(formatTimeSpan("P1DT2H3M4S")).toBe("1.02:03:04");
    expect(formatTimeSpan("2.03:00:00")).toBe("2.03:00:00");
  });

  it("handles negative values with a minus prefix", () => {
    expect(formatTimeSpan("-PT1H")).toBe("-01:00:00");
    expect(formatTimeSpan("-1.02:00:00")).toBe("-1.02:00:00");
  });

  it("trims units according to precision", () => {
    expect(formatTimeSpan("PT1H30M45S", "minute")).toBe("01:31");
    expect(formatTimeSpan("PT1H30M", "hour")).toBe("02");
    expect(formatTimeSpan("P2DT1H", "day")).toBe("2 days");
  });

  it("returns an empty string for invalid input", () => {
    expect(formatTimeSpan("not-a-duration")).toBe("");
    expect(formatTimeSpan("90")).toBe("");
    expect(formatTimeSpan("")).toBe("");
  });
});

describe("Timespanpicker", () => {
  it("renders an input, a trigger and no popup by default", () => {
    render(<Timespanpicker aria-label="Duration" />);
    expect(screen.getByRole("textbox", { name: "Duration" })).toBeInTheDocument();
    const trigger = screen.getByRole("button", { name: "Open timespan picker" });
    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows the value formatted on the input", () => {
    render(<Timespanpicker aria-label="Duration" defaultValue="PT1H30M" />);
    expect(screen.getByRole("textbox", { name: "Duration" })).toHaveValue("01:30:00");
  });

  it("opens the panel with unit steppers", async () => {
    const user = userEvent.setup();
    render(<Timespanpicker aria-label="Duration" defaultValue="01:02:03" />);
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByLabelText("Days")).toHaveValue("0");
    expect(screen.getByLabelText("Hours")).toHaveValue("1");
    expect(screen.getByLabelText("Minutes")).toHaveValue("2");
    expect(screen.getByLabelText("Seconds")).toHaveValue("3");
  });

  it("steps units with arrow keys and carries over maxima", async () => {
    const user = userEvent.setup();
    render(<Timespanpicker aria-label="Duration" defaultValue="00:59:59" />);
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    const hours = screen.getByLabelText("Hours");
    const minutes = screen.getByLabelText("Minutes");
    const seconds = screen.getByLabelText("Seconds");
    fireEvent.keyDown(seconds, { key: "ArrowUp" });
    expect(seconds).toHaveValue("0");
    expect(minutes).toHaveValue("0");
    expect(hours).toHaveValue("1");
    fireEvent.keyDown(minutes, { key: "ArrowUp" });
    expect(minutes).toHaveValue("1");
  });

  it("carries hours into days at the per-unit maximum", async () => {
    const user = userEvent.setup();
    render(<Timespanpicker aria-label="Duration" defaultValue="23:00:00" />);
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    fireEvent.keyDown(screen.getByLabelText("Hours"), { key: "ArrowUp" });
    expect(screen.getByLabelText("Hours")).toHaveValue("0");
    expect(screen.getByLabelText("Days")).toHaveValue("1");
  });

  it("commits staged edits with Enter and reports the canonical value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Timespanpicker aria-label="Duration" defaultValue="01:00:00" onChange={onChange} />,
    );
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    fireEvent.keyDown(screen.getByLabelText("Hours"), { key: "ArrowUp" });
    fireEvent.keyDown(screen.getByLabelText("Hours"), { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("02:00:00");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Duration" })).toHaveValue("02:00:00");
  });

  it("reverts staged edits when closed without confirm", async () => {
    const user = userEvent.setup();
    render(<Timespanpicker aria-label="Duration" defaultValue="01:00:00" />);
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    fireEvent.keyDown(screen.getByLabelText("Hours"), { key: "ArrowUp" });
    expect(screen.getByLabelText("Hours")).toHaveValue("2");
    fireEvent.keyDown(document.activeElement as HTMLElement, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Duration" })).toHaveValue("01:00:00");
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    expect(screen.getByLabelText("Hours")).toHaveValue("1");
  });

  it("clamps with Home/End to min/max", async () => {
    const user = userEvent.setup();
    render(
      <Timespanpicker aria-label="Duration" defaultValue="01:00:00" min="00:00:00" max="01:30:00" />,
    );
    await user.click(screen.getByRole("button", { name: "Open timespan picker" }));
    const hours = screen.getByLabelText("Hours");
    fireEvent.keyDown(hours, { key: "End" });
    expect(screen.getByLabelText("Minutes")).toHaveValue("30");
    fireEvent.keyDown(hours, { key: "Home" });
    expect(screen.getByLabelText("Hours")).toHaveValue("0");
    expect(screen.getByLabelText("Minutes")).toHaveValue("0");
  });

  it("commits typed input on Enter and clamps to the range", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Timespanpicker
        aria-label="Duration"
        defaultValue="01:00:00"
        min="00:00:00"
        max="02:00:00"
        onChange={onChange}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Duration" });
    await user.clear(input);
    await user.type(input, "5:00:00");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("02:00:00");
    expect(input).toHaveValue("02:00:00");
  });

  it("clears the value with the clear button when allowClear", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Timespanpicker aria-label="Duration" defaultValue="01:00:00" allowClear onChange={onChange} />,
    );
    await user.click(screen.getByRole("button", { name: "Clear" }));
    expect(onChange).toHaveBeenCalledWith("");
    expect(screen.getByRole("textbox", { name: "Duration" })).toHaveValue("");
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(<Timespanpicker aria-label="Duration" disabled />);
    expect(screen.getByRole("textbox", { name: "Duration" })).toBeDisabled();
    const trigger = screen.getByRole("button", { name: "Open timespan picker" });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders inline panel without input or trigger", () => {
    render(<Timespanpicker value="PT1H" inline />);
    expect(screen.queryByRole("button", { name: "Open timespan picker" })).not.toBeInTheDocument();
    expect(screen.getByLabelText("Hours")).toHaveValue("1");
  });

  it("hides units finer than precision", () => {
    render(<Timespanpicker value="PT1H2M" precision="minute" inline />);
    expect(screen.getByLabelText("Hours")).toBeInTheDocument();
    expect(screen.getByLabelText("Minutes")).toBeInTheDocument();
    expect(screen.queryByLabelText("Seconds")).not.toBeInTheDocument();
  });

  it("applies size and invalid classes", () => {
    render(<Timespanpicker aria-label="Duration" size="sm" invalid />);
    const input = screen.getByRole("textbox", { name: "Duration" });
    expect(input.className).toContain("dtTimespanpickerInputSm");
    expect(input.className).toContain("dtTimespanpickerInputInvalid");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
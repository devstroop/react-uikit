import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Gantt } from "./Gantt";

const tasks = [
  { id: "1", name: "Task 1", start: new Date("2024-01-01"), end: new Date("2024-01-05"), progress: 50 },
  { id: "2", name: "Task 2", start: new Date("2024-01-06"), end: new Date("2024-01-10"), dependencies: ["1"] },
];

describe("Gantt", () => {
  it("renders grid and tasks", () => {
    render(<Gantt tasks={tasks} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });
  it("calls onTaskClick", () => {
    const fn = vi.fn();
    render(<Gantt tasks={tasks} onTaskClick={fn} />);
    fireEvent.click(screen.getByLabelText(/Task 1/));
    expect(fn).toHaveBeenCalled();
  });
  it("handles keyboard", () => {
    const fn = vi.fn();
    render(<Gantt tasks={tasks} onTaskClick={fn} />);
    const btn = screen.getByLabelText(/Task 1/);
    fireEvent.keyDown(btn, { key: "Enter" });
    expect(fn).toHaveBeenCalled();
  });
});

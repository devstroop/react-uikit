import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DropZone } from "./DropZone";

function dropEvent(files: File[]) {
  const dt = new DataTransfer();
  files.forEach((f) => dt.items.add(f));
  return dt;
}

describe("DropZone", () => {
  it("renders a region with caption and browse button", () => {
    render(<DropZone label="Drop files here" />);
    expect(screen.getByRole("region", { name: "Drop files here" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Browse" })).toBeInTheDocument();
    expect(screen.getByTestId("dropzone-input")).toBeInTheDocument();
  });

  it("flips the dragging visual on dragenter and back on dragleave", () => {
    const { container } = render(<DropZone />);
    const zone = container.firstElementChild as HTMLElement;
    fireEvent.dragEnter(zone);
    expect(zone.className).toContain("dragging");
    fireEvent.dragLeave(zone);
    expect(zone.className).not.toContain("dragging");
  });

  it("fires onDrop with the FileList on drop", () => {
    const onDrop = vi.fn();
    const { container } = render(<DropZone onDrop={onDrop} />);
    const zone = container.firstElementChild as HTMLElement;
    const dt = dropEvent([new File(["x"], "a.txt", { type: "text/plain" })]);
    fireEvent.drop(zone, { dataTransfer: dt });
    expect(onDrop).toHaveBeenCalled();
    const files = onDrop.mock.calls[0]![0] as FileList;
    expect(files.length).toBe(1);
    expect(files[0]!.name).toBe("a.txt");
  });

  it("filters files by accept", () => {
    const onDrop = vi.fn();
    const { container } = render(<DropZone accept="image/*" onDrop={onDrop} />);
    const zone = container.firstElementChild as HTMLElement;
    const dt = dropEvent([
      new File(["x"], "photo.png", { type: "image/png" }),
      new File(["x"], "doc.pdf", { type: "application/pdf" }),
    ]);
    fireEvent.drop(zone, { dataTransfer: dt });
    const files = onDrop.mock.calls[0]![0] as FileList;
    expect(files.length).toBe(1);
    expect(files[0]!.name).toBe("photo.png");
  });

  it("opens the picker via the browse button and fires onDrop on selection", async () => {
    const user = userEvent.setup();
    const onDrop = vi.fn();
    render(<DropZone onDrop={onDrop} />);
    const input = screen.getByTestId("dropzone-input") as HTMLInputElement;
    input.click = vi.fn();
    await user.click(screen.getByRole("button", { name: "Browse" }));
    expect(input.click).toHaveBeenCalled();
    Object.defineProperty(input, "files", {
      value: [new File(["x"], "b.txt", { type: "text/plain" })],
      configurable: true,
    });
    fireEvent.change(input);
    expect(onDrop).toHaveBeenCalled();
  });

  it("ignores drops when disabled and hides the browse button", () => {
    const onDrop = vi.fn();
    const { container } = render(<DropZone disabled onDrop={onDrop} />);
    expect(screen.queryByRole("button", { name: "Browse" })).not.toBeInTheDocument();
    const zone = container.firstElementChild as HTMLElement;
    const dt = dropEvent([new File(["x"], "a.txt")]);
    fireEvent.drop(zone, { dataTransfer: dt });
    expect(onDrop).not.toHaveBeenCalled();
  });

  it("resets the input after selection so re-picking fires again", () => {
    const onDrop = vi.fn();
    render(<DropZone onDrop={onDrop} />);
    const input = screen.getByTestId("dropzone-input") as HTMLInputElement;
    const setter = vi.fn();
    Object.defineProperty(input, "value", { set: setter, configurable: true });
    Object.defineProperty(input, "files", {
      value: [new File(["x"], "c.txt", { type: "text/plain" })],
      configurable: true,
    });
    fireEvent.change(input);
    expect(setter).toHaveBeenCalledWith("");
  });
});
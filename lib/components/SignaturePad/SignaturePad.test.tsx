import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SignaturePad } from "./SignaturePad";

function mockCanvas() {
  const ctx = {
    setTransform: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    lineWidth: 0,
    strokeStyle: "",
    lineCap: "",
    lineJoin: "",
  };
  Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
    configurable: true,
    value: vi.fn(() => ctx),
  });
  Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
    configurable: true,
    value: vi.fn(() => "data:image/png;base64,abc"),
  });
  return ctx;
}

describe("SignaturePad", () => {
  it("renders a labeled canvas and a clear button", () => {
    mockCanvas();
    render(<SignaturePad />);
    expect(screen.getByRole("img", { name: "Signature" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();
  });

  it("fires onChange with a data URL after a stroke", () => {
    const ctx = mockCanvas();
    const onChange = vi.fn();
    const { container } = render(<SignaturePad onChange={onChange} />);
    const canvas = container.querySelector("canvas")!;
    fireEvent.pointerDown(canvas, { pointerId: 1, clientX: 10, clientY: 10 });
    fireEvent.pointerMove(canvas, { pointerId: 1, clientX: 50, clientY: 40 });
    expect(ctx.moveTo).toHaveBeenCalled();
    fireEvent.pointerUp(canvas, { pointerId: 1, clientX: 50, clientY: 40 });
    expect(onChange).toHaveBeenCalledWith("data:image/png;base64,abc");
  });

  it("does not fire onChange on an empty tap", () => {
    mockCanvas();
    const onChange = vi.fn();
    const { container } = render(<SignaturePad onChange={onChange} />);
    const canvas = container.querySelector("canvas")!;
    fireEvent.pointerDown(canvas, { pointerId: 1, clientX: 10, clientY: 10 });
    fireEvent.pointerUp(canvas, { pointerId: 1, clientX: 10, clientY: 10 });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("clears the canvas and fires onChange('')", () => {
    mockCanvas();
    const onChange = vi.fn();
    render(<SignaturePad onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("uses penColor and penWidth on the context", () => {
    const ctx = mockCanvas();
    render(<SignaturePad penColor="#ff0000" penWidth={4} />);
    expect(ctx.strokeStyle).toBe("#ff0000");
    expect(ctx.lineWidth).toBe(4);
  });

  it("is disabled and blocks drawing", () => {
    mockCanvas();
    const onChange = vi.fn();
    const { container } = render(<SignaturePad disabled onChange={onChange} />);
    expect(screen.getByRole("button", { name: "Clear" })).toBeDisabled();
    const canvas = container.querySelector("canvas")!;
    fireEvent.pointerDown(canvas, { pointerId: 1, clientX: 10, clientY: 10 });
    fireEvent.pointerMove(canvas, { pointerId: 1, clientX: 50, clientY: 40 });
    fireEvent.pointerUp(canvas, { pointerId: 1, clientX: 50, clientY: 40 });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("exposes clear() and toDataURL() through the ref", () => {
    mockCanvas();
    const ref = { current: null as unknown as { clear: () => void; toDataURL: () => string } };
    const { container } = render(<SignaturePad ref={ref} />);
    expect(container.querySelector("canvas")).not.toBeNull();
    expect(ref.current.toDataURL()).toBe("data:image/png;base64,abc");
    ref.current.clear();
    expect(screen.getByRole("img", { name: "Signature" })).toBeInTheDocument();
  });
});
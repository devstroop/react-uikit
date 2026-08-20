import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Upload } from "./Upload";

function mockXhr() {
  const xhr = {
    upload: { addEventListener: vi.fn() },
    addEventListener: vi.fn(),
    setRequestHeader: vi.fn(),
    open: vi.fn(),
    send: vi.fn(),
    abort: vi.fn(),
    status: 200,
  };
  vi.stubGlobal("XMLHttpRequest", vi.fn(function () {
    return xhr;
  }));
  return xhr;
}

function selectFile(input: HTMLInputElement, name: string, size = 1024) {
  const file = new File([new Uint8Array(size)], name, { type: "text/plain" });
  Object.defineProperty(input, "files", { value: [file], configurable: true });
  fireEvent.change(input);
  return file;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Upload", () => {
  it("renders a trigger button and hidden file input", () => {
    render(<Upload url="/api/files" />);
    expect(screen.getByRole("button", { name: "Upload" })).toBeInTheDocument();
    expect(screen.getByTestId("upload-input")).toBeInTheDocument();
  });

  it("opens the picker when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<Upload url="/api/files" />);
    const input = screen.getByTestId("upload-input") as HTMLInputElement;
    input.click = vi.fn();
    await user.click(screen.getByRole("button", { name: "Upload" }));
    expect(input.click).toHaveBeenCalled();
  });

  it("adds a row per selected file and auto-uploads", () => {
    mockXhr();
    render(<Upload url="/api/files" auto multiple />);
    const input = screen.getByTestId("upload-input") as HTMLInputElement;
    selectFile(input, "report.pdf", 2048);
    const rows = screen.getAllByTestId("upload-row");
    expect(rows).toHaveLength(1);
    expect(rows[0]).toHaveTextContent("report.pdf");
    expect(rows[0]).toHaveTextContent("2 KB");
  });

  it("fires progress and complete events", () => {
    const xhr = mockXhr();
    const onProgress = vi.fn();
    const onComplete = vi.fn();
    render(<Upload url="/api/files" onProgress={onProgress} onComplete={onComplete} />);
    const input = screen.getByTestId("upload-input") as HTMLInputElement;
    selectFile(input, "a.txt");
    const progressCb = xhr.upload.addEventListener.mock.calls.find((c) => c[0] === "progress")![1];
    const loadCb = xhr.addEventListener.mock.calls.find((c) => c[0] === "load")![1];
    progressCb({ lengthComputable: true, loaded: 512, total: 1024 });
    expect(onProgress).toHaveBeenCalledWith("a.txt", 50);
    loadCb();
    expect(onComplete).toHaveBeenCalledWith("a.txt");
  });

  it("fires the error event on a failed request", async () => {
    const xhr = mockXhr();
    const onError = vi.fn();
    render(<Upload url="/api/files" onError={onError} />);
    const input = screen.getByTestId("upload-input") as HTMLInputElement;
    selectFile(input, "b.txt");
    const loadCb = xhr.addEventListener.mock.calls.find((c) => c[0] === "load")![1];
    xhr.status = 500;
    loadCb();
    expect(onError).toHaveBeenCalledWith("b.txt", "HTTP 500");
    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("HTTP 500");
    });
  });

  it("sends the files field with the parameter name", () => {
    const xhr = mockXhr();
    render(<Upload url="/api/files" parameterName="attachment" />);
    const input = screen.getByTestId("upload-input") as HTMLInputElement;
    selectFile(input, "d.txt");
    const fd = xhr.send.mock.calls[0]![0];
    expect(fd.get("attachment")).toBeInstanceOf(File);
  });

  it("removes a row and aborts the in-flight upload", () => {
    const xhr = mockXhr();
    render(<Upload url="/api/files" />);
    const input = screen.getByTestId("upload-input") as HTMLInputElement;
    selectFile(input, "c.txt");
    fireEvent.click(screen.getByRole("button", { name: "Remove c.txt" }));
    expect(xhr.abort).toHaveBeenCalled();
    expect(screen.queryAllByTestId("upload-row")).toHaveLength(0);
  });

  it("supports a custom template via children", () => {
    mockXhr();
    render(
      <Upload url="/api/files">
        <button type="button">Custom</button>
      </Upload>,
    );
    expect(screen.getByRole("button", { name: "Custom" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Upload" })).not.toBeInTheDocument();
  });
});
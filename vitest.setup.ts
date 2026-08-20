import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll } from "vitest";

import "@testing-library/jest-dom/vitest";

class SimpleDataTransfer {
  items: { add: (file: File) => void; length: number };
  private _files: File[] = [];
  private _data: Record<string, string> = {};

  constructor() {
    this.items = {
      add: (file: File) => {
        this._files.push(file);
        this.items.length = this._files.length;
      },
      length: 0,
    };
  }
  get files(): File[] {
    return this._files;
  }
  getData(type: string): string {
    return this._data[type] ?? "";
  }
  setData(type: string, value: string): void {
    this._data[type] = value;
  }
}

beforeAll(() => {
  if (typeof window !== "undefined" && !window.HTMLDialogElement.prototype.showModal) {
    window.HTMLDialogElement.prototype.showModal = function showModal() {
      this.setAttribute("open", "");
    };
    window.HTMLDialogElement.prototype.close = function close() {
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    };
    Object.defineProperty(window.HTMLDialogElement.prototype, "open", {
      configurable: true,
      get() {
        return this.hasAttribute("open");
      },
    });
  }
  if (typeof window !== "undefined" && typeof window.DataTransfer === "undefined") {
    window.DataTransfer = SimpleDataTransfer as unknown as typeof DataTransfer;
  }
  if (typeof window !== "undefined" && typeof window.DragEvent === "undefined") {
    window.DragEvent = class extends MouseEvent {
      dataTransfer: DataTransfer | null;
      constructor(type: string, init: DragEventInit = {}) {
        super(type, init);
        this.dataTransfer = (init.dataTransfer as DataTransfer) ?? null;
      }
    } as unknown as typeof DragEvent;
  }
});

afterEach(() => {
  cleanup();
});
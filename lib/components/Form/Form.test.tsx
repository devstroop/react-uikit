import { useEffect, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Form, useFormContext } from "./Form";

function TestField({ name, errors }: { name: string; errors: string[] }) {
  const { registerField, unregisterField } = useFormContext();
  useEffect(() => {
    registerField({ name, validate: () => errors });
    return () => unregisterField(name);
  }, [name, errors, registerField, unregisterField]);
  return <input name={name} aria-label={name} />;
}

function ToggleField({ name }: { name: string }) {
  const { registerField, unregisterField } = useFormContext();
  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    registerField({ name, validate: () => errors });
    return () => unregisterField(name);
  }, [name, errors, registerField, unregisterField]);
  return (
    <>
      <input name={name} aria-label={name} />
      <button type="button" onClick={() => setErrors(["Required"])}>
        Break
      </button>
    </>
  );
}

function submitForm(container: HTMLElement) {
  const form = container.querySelector("form");
  expect(form).not.toBeNull();
  fireEvent.submit(form as HTMLFormElement);
}

describe("Form", () => {
  it("renders a form element with children and applies className", () => {
    const { container } = render(
      <Form model={{}} className="extra">
        <button type="submit">Go</button>
      </Form>,
    );
    expect(container.querySelector("form")).toHaveClass("extra");
    expect(container.querySelector("button[type=submit]")).toBeInTheDocument();
  });

  it("calls onSubmit with the model when every registered field validates", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const model = { email: "a@b.c" };
    const { container } = render(
      <Form model={model} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <TestField name="email" errors={[]} />
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm(container);
    expect(onSubmit).toHaveBeenCalledWith(model);
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });

  it("calls onInvalidSubmit with the errors map when a field fails", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const { container } = render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <TestField name="email" errors={["Email is required"]} />
        <TestField name="name" errors={[]} />
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm(container);
    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).toHaveBeenCalledWith({ email: ["Email is required"] });
  });

  it("reflects the latest validate results between submits", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const { container } = render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <ToggleField name="name" />
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm(container);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole("button", { name: "Break" }));
    submitForm(container);
    expect(onInvalidSubmit).toHaveBeenCalledWith({ name: ["Required"] });
  });

  it("ignores a field after it unmounts", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const { container, rerender } = render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <TestField name="email" errors={["Bad"]} />
        <button type="submit">Go</button>
      </Form>,
    );
    rerender(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm(container);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });

  it("renders native action/method and skips SPA events", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const { container } = render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit} action="/login" method="post">
        <TestField name="email" errors={["Bad"]} />
        <button type="submit">Go</button>
      </Form>,
    );
    const form = container.querySelector("form");
    expect(form).toHaveAttribute("action", "/login");
    expect(form).toHaveAttribute("method", "post");
    fireEvent.submit(form as HTMLFormElement);
    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });

  it("useFormContext throws outside a Form", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<TestField name="x" errors={[]} />)).toThrow(
      "useFormContext must be used within a <Form>",
    );
    spy.mockRestore();
  });
});
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Form } from "./Form";
import { useFormField } from "./useFormField";
import { email, required } from "../Validators";

function FieldHarness({ name, validate }: { name: string; validate?: Parameters<typeof useFormField>[1] }) {
  const { value, setValue, errors } = useFormField(name, validate);
  return (
    <>
      <input
        name={name}
        aria-label={name}
        value={String(value ?? "")}
        onChange={(e) => setValue(e.target.value as never)}
        aria-invalid={errors.length > 0 || undefined}
      />
      {errors.length > 0 && <span aria-live="polite">{errors.join(", ")}</span>}
    </>
  );
}

function submitForm() {
  fireEvent.submit(screen.getByText("Go").closest("form") as HTMLFormElement);
}

describe("useFormField", () => {
  it("registers the field and validates on submit", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <FieldHarness name="email" validate={{ validate: [required(), email()] }} />
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm();
    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).toHaveBeenCalledWith({ email: ["Required"] });
  });

  it("shows errors only after an invalid submit", () => {
    render(
      <Form model={{}}>
        <FieldHarness name="email" validate={{ validate: [required()] }} />
        <button type="submit">Go</button>
      </Form>,
    );
    expect(screen.queryByText("Required")).not.toBeInTheDocument();
    submitForm();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("clears the error after the value changes", () => {
    render(
      <Form model={{}}>
        <FieldHarness name="email" validate={{ validate: [required()] }} />
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm();
    expect(screen.getByText("Required")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox", { name: "email" }), { target: { value: "a@b.c" } });
    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });

  it("re-validates on the next submit after a change", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <FieldHarness name="email" validate={{ validate: [email()], initialValue: "nope" }} />
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm();
    expect(onInvalidSubmit).toHaveBeenCalledWith({ email: ["Invalid email"] });
    const input = screen.getByRole("textbox", { name: "email" });
    fireEvent.change(input, { target: { value: "still-not-an-email" } });
    submitForm();
    expect(onInvalidSubmit).toHaveBeenCalledTimes(2);
    fireEvent.change(input, { target: { value: "ok@example.com" } });
    submitForm();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("unregisters the field on unmount", () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const { rerender } = render(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <FieldHarness name="email" validate={{ validate: [required()] }} />
        <button type="submit">Go</button>
      </Form>,
    );
    rerender(
      <Form model={{}} onSubmit={onSubmit} onInvalidSubmit={onInvalidSubmit}>
        <button type="submit">Go</button>
      </Form>,
    );
    submitForm();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });
});
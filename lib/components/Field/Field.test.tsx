import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Field } from "./Field";

describe("Field", () => {
  it("renders a label with htmlFor when label is provided", () => {
    render(
      <Field label="Email" htmlFor="email">
        <input id="email" />
      </Field>,
    );
    const label = screen.getByText("Email");
    expect(label.tagName).toBe("LABEL");
    expect(label).toHaveAttribute("for", "email");
  });

  it("clicking the label focuses the associated control", async () => {
    const user = userEvent.setup();
    render(
      <Field label="Name" htmlFor="name">
        <input id="name" />
      </Field>,
    );
    await user.click(screen.getByText("Name"));
    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("renders the required marker as aria-hidden", () => {
    render(
      <Field label="Email" required>
        <input aria-label="Email" />
      </Field>,
    );
    const marker = screen.getByText("*");
    expect(marker).toHaveAttribute("aria-hidden", "true");
  });

  it("renders error inside an aria-live polite region", () => {
    render(
      <Field label="Email" error="Email is required">
        <input aria-label="Email" />
      </Field>,
    );
    const error = screen.getByText("Email is required");
    expect(error).toHaveAttribute("aria-live", "polite");
    expect(error.closest("div")).not.toHaveAttribute("role");
  });

  it("renders hint when no error is present", () => {
    render(
      <Field label="Email" hint="We will never share it.">
        <input aria-label="Email" />
      </Field>,
    );
    expect(screen.getByText("We will never share it.")).toBeInTheDocument();
    expect(screen.queryByText("Some error")).not.toBeInTheDocument();
  });

  it("prefers error over hint when both are set", () => {
    render(
      <Field label="Email" hint="Some hint" error="Some error">
        <input aria-label="Email" />
      </Field>,
    );
    expect(screen.getByText("Some error")).toBeInTheDocument();
    expect(screen.queryByText("Some hint")).not.toBeInTheDocument();
  });

  it("wires aria-describedby and aria-invalid to the child when error is set", () => {
    render(
      <Field label="Email" htmlFor="email" error="Invalid email">
        <input id="email" />
      </Field>,
    );
    const input = screen.getByRole("textbox");
    const alert = screen.getByText("Invalid email");
    expect(input).toHaveAttribute("aria-describedby", alert.id);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("wires aria-describedby to the hint when no error is present", () => {
    render(
      <Field label="Email" htmlFor="email" hint="We never share it.">
        <input id="email" />
      </Field>,
    );
    const input = screen.getByRole("textbox");
    const hint = screen.getByText("We never share it.");
    expect(input).toHaveAttribute("aria-describedby", hint.id);
    expect(input).not.toHaveAttribute("aria-invalid");
  });

  it("preserves consumer-supplied aria-describedby when merging", () => {
    render(
      <Field label="Email" htmlFor="email" error="Invalid email">
        <input id="email" aria-describedby="other" />
      </Field>,
    );
    const input = screen.getByRole("textbox");
    const alert = screen.getByText("Invalid email");
    expect(input).toHaveAttribute("aria-describedby", `other ${alert.id}`);
  });

  it("associates the label with an explicit child id, not the generated one", async () => {
    const user = userEvent.setup();
    render(
      <Field label="Name">
        <input id="custom" />
      </Field>,
    );
    const label = screen.getByText("Name");
    expect(label).toHaveAttribute("for", "custom");
    await user.click(label);
    expect(document.getElementById("custom")).toHaveFocus();
  });

  it("backfills an id onto bare DOM controls so the label always lands", () => {
    render(
      <Field label="Name">
        <input aria-label="Name" />
      </Field>,
    );
    const box = screen.getByRole("textbox", { name: "Name" });
    expect(box).toHaveAttribute("id");
    expect(screen.getByText("Name")).toHaveAttribute(
      "for",
      box.getAttribute("id"),
    );
  });

  it("renders children without a label", () => {
    const { container } = render(
      <Field>
        <input aria-label="Solo" />
      </Field>,
    );
    expect(screen.getByRole("textbox", { name: "Solo" })).toBeInTheDocument();
    expect(container.querySelector("label")).not.toBeInTheDocument();
  });

  it("omits htmlFor when the control cannot carry the generated id", () => {
    // Custom component that forwards nothing: cloning it an id would be
    // dishonest, so the label must not point at a nonexistent node.
    function Custom() {
      return <span data-testid="custom-control" />;
    }
    render(
      <Field label="Name">
        <Custom />
      </Field>,
    );
    expect(screen.getByText("Name")).not.toHaveAttribute("for");
    expect(screen.getByTestId("custom-control")).not.toHaveAttribute("id");
  });
});
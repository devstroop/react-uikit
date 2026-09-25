import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with role=alert and content", () => {
    render(<Alert title="Heads up">Something changed.</Alert>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Heads up");
    expect(alert).toHaveTextContent("Something changed.");
  });

  it("applies the tone class", () => {
    render(<Alert severity="danger" title="Error" />);
    expect(screen.getByRole("alert").className).toContain("danger");
  });

  it.each(
    ["primary", "secondary", "light", "base", "dark", "info", "success", "warning", "danger"] as const,
  )("applies the %s severity class", (severity) => {
    render(<Alert severity={severity} title="Heads up" />);
    expect(screen.getByRole("alert").className).toContain(severity);
  });

  it("shows the contextual icon by default and hides it with showIcon={false}", () => {
    const { rerender } = render(<Alert severity="success" title="Done" />);
    const alert = () => screen.getByRole("alert");
    // Scoped to the icon slot: the dismiss control renders its own svg.
    expect(alert().querySelector('[class*="icon"] svg')).toBeInTheDocument();
    rerender(<Alert severity="success" title="Done" showIcon={false} />);
    expect(alert().querySelector('[class*="icon"]')).not.toBeInTheDocument();
  });

  it("disappears after dismissing", async () => {
    const user = userEvent.setup();
    render(<Alert title="Heads up" dismissible />);
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("fires onDismiss when dismissed", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Alert title="Heads up" dismissible onDismiss={onDismiss} />);
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("stays mounted when controlled visible and notifies instead", async () => {
    const user = userEvent.setup();
    const onVisibleChange = vi.fn();
    render(
      <Alert title="Heads up" dismissible visible onVisibleChange={onVisibleChange} />,
    );
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(onVisibleChange).toHaveBeenCalledWith(false);
  });

  it("hides when visible is false", () => {
    const { container } = render(<Alert title="Heads up" visible={false} />);
    expect(container.firstElementChild).not.toBeInTheDocument();
  });

  it("re-shows when controlled visible returns to true after a dismiss", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Alert title="Heads up" dismissible />);
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    rerender(<Alert title="Heads up" dismissible visible />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it.each(["filled", "flat", "outlined", "text"] as const)("applies the %s variant class", (variant) => {
    render(<Alert title="Heads up" variant={variant} />);
    expect(screen.getByRole("alert").className).toContain(variant);
  });

  it.each(["xs", "sm", "md", "lg", "xl"] as const)("applies the %s size class", (size) => {
    render(<Alert title="Heads up" size={size} />);
    expect(screen.getByRole("alert").className).toContain(size);
  });

  it("renders the icon aria-hidden before the content", () => {
    render(<Alert title="Heads up" icon={<span>icon</span>} />);
    const icon = screen.getByText("icon");
    const wrapper = icon.parentElement;
    expect(wrapper).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("alert").firstElementChild).toBe(wrapper);
  });

  it.each(["lighter", "light", "dark", "darker"] as const)(
    "applies the shade-%s class (token-driven, no brightness filter)",
    (shade) => {
      render(<Alert severity="danger" title="Error" shade={shade} />);
      expect(screen.getByRole("alert").className).toContain(`shade-${shade}`);
    },
  );
});
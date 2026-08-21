import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Timeline } from "./Timeline";

const items = [
  { label: "Created", content: "Jan 2024" },
  { label: "Shipped", content: "Feb 2024" },
];

describe("Timeline", () => {
  it("renders list with labels", () => {
    render(<Timeline items={items} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Created")).toBeInTheDocument();
    expect(screen.getByText("Shipped")).toBeInTheDocument();
    expect(screen.getByText("Feb 2024")).toBeInTheDocument();
  });

  it("renders markers as decorative", () => {
    const { container } = render(<Timeline items={items} />);
    expect(container.querySelectorAll("span[aria-hidden='true']").length).toBe(items.length);
  });

  it("reverse flips order in DOM", () => {
    render(<Timeline items={items} reverse />);
    const all = screen.getAllByText(/Created|Shipped/);
    expect(all[0]?.textContent).toBe("Shipped");
    expect(all[1]?.textContent).toBe("Created");
  });
});

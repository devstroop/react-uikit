import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { Carousel } from "./Carousel";

const items = [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>];

function getSlides(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('[aria-roledescription="slide"]')) as HTMLElement[];
}

describe("Carousel", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders region with aria-roledescription carousel and slides", () => {
    const { container } = render(<Carousel items={items} ariaLabel="My carousel" />);
    const region = screen.getByRole("region", { name: "My carousel" });
    expect(region).toHaveAttribute("aria-roledescription", "carousel");
    expect(getSlides(container)).toHaveLength(3);
  });

  it("defaults ariaLabel to Carousel", () => {
    render(<Carousel items={items} />);
    expect(screen.getByRole("region", { name: "Carousel" })).toBeInTheDocument();
  });

  it("active slide has aria-label Slide X of Y and is visible", () => {
    const { container } = render(<Carousel items={items} defaultIndex={1} />);
    const slides = getSlides(container);
    expect(slides[1]).toHaveAttribute("aria-label", "Slide 2 of 3");
    expect(slides[1]).not.toHaveAttribute("hidden");
    expect(slides[0]).toHaveAttribute("hidden");
  });

  it("renders prev/next buttons with aria-labels and aria-controls", () => {
    render(<Carousel items={items} />);
    const prev = screen.getByRole("button", { name: "Previous slide" });
    const next = screen.getByRole("button", { name: "Next slide" });
    expect(prev).toHaveAttribute("aria-controls");
    expect(next).toHaveAttribute("aria-controls");
    expect(prev.getAttribute("aria-controls")).toBe(next.getAttribute("aria-controls"));
  });

  it("clicking next/prev updates active slide and fires onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(<Carousel items={items} onChange={onChange} defaultIndex={0} />);
    await user.click(screen.getByRole("button", { name: "Next slide" }));
    expect(onChange).toHaveBeenCalledWith(1);
    expect(getSlides(container)[1]).not.toHaveAttribute("hidden");
    await user.click(screen.getByRole("button", { name: "Previous slide" }));
    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("wraps around prev from first to last and next from last to first", async () => {
    const user = userEvent.setup();
    const { container } = render(<Carousel items={items} defaultIndex={0} />);
    await user.click(screen.getByRole("button", { name: "Previous slide" }));
    expect(getSlides(container)[2]).not.toHaveAttribute("hidden");
    await user.click(screen.getByRole("button", { name: "Next slide" }));
    expect(getSlides(container)[0]).not.toHaveAttribute("hidden");
  });

  it("renders indicators with aria-current on active", () => {
    render(<Carousel items={items} defaultIndex={1} />);
    const indicators = screen.getAllByRole("button", { name: /Go to slide/ });
    expect(indicators).toHaveLength(3);
    expect(indicators[1]).toHaveAttribute("aria-current", "true");
    expect(indicators[0]).not.toHaveAttribute("aria-current");
  });

  it("clicking indicator goes to slide", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(<Carousel items={items} onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Go to slide 3" }));
    expect(onChange).toHaveBeenCalledWith(2);
    expect(getSlides(container)[2]).not.toHaveAttribute("hidden");
  });

  it("supports controlled selectedIndex", () => {
    const { container, rerender } = render(<Carousel items={items} selectedIndex={2} />);
    expect(getSlides(container)[2]).not.toHaveAttribute("hidden");
    rerender(<Carousel items={items} selectedIndex={0} />);
    expect(getSlides(container)[0]).not.toHaveAttribute("hidden");
  });

  it("supports SelectedIndex and Change aliases", async () => {
    const user = userEvent.setup();
    const Change = vi.fn();
    render(<Carousel items={items} SelectedIndex={0} Change={Change} />);
    await user.click(screen.getByRole("button", { name: "Next slide" }));
    expect(Change).toHaveBeenCalledWith(1);
  });

  it("supports Interval, Auto, pauseOnHover aliases", () => {
    render(<Carousel items={items} Auto Interval={1000} PauseOnHover={false} />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("hides arrows when showArrows false and indicators when false", () => {
    render(<Carousel items={items} showArrows={false} showIndicators={false} />);
    expect(screen.queryByRole("button", { name: "Previous slide" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Go to slide 1" })).not.toBeInTheDocument();
  });

  it("supports ShowArrows/ShowIndicators aliases", () => {
    render(<Carousel items={items} ShowArrows={false} ShowIndicators={false} />);
    expect(screen.queryByRole("button", { name: "Previous slide" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Go to slide/ })).not.toBeInTheDocument();
  });

  it("auto play advances slides on interval", async () => {
    vi.useFakeTimers();
    const { container } = render(<Carousel items={items} auto interval={1000} defaultIndex={0} />);
    expect(getSlides(container)[0]).not.toHaveAttribute("hidden");
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(getSlides(container)[1]).not.toHaveAttribute("hidden");
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(getSlides(container)[2]).not.toHaveAttribute("hidden");
  });

  it("pause button toggles paused state and aria-pressed", async () => {
    const user = userEvent.setup();
    render(<Carousel items={items} auto interval={1000} />);
    const pauseBtn = screen.getByRole("button", { name: "Pause" });
    expect(pauseBtn).toHaveAttribute("aria-pressed", "false");
    await user.click(pauseBtn);
    expect(screen.getByRole("button", { name: "Resume" })).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "Resume" }));
    expect(screen.getByRole("button", { name: "Pause" })).toHaveAttribute("aria-pressed", "false");
  });

  it("pauseOnHover pauses on mouse enter and resumes on leave", async () => {
    vi.useFakeTimers();
    const { container } = render(<Carousel items={items} auto interval={1000} pauseOnHover />);
    const region = screen.getByRole("region");
    fireEvent.mouseEnter(region);
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(getSlides(container)[0]).not.toHaveAttribute("hidden");
    fireEvent.mouseLeave(region);
    await act(async () => {
      // allow React state for hoverPaused to flush
      await Promise.resolve();
    });
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(getSlides(container)[1]).not.toHaveAttribute("hidden");
  });

  it("keyboard ArrowLeft/Right moves slides, Home/End jumps", () => {
    const { container } = render(<Carousel items={items} defaultIndex={1} />);
    const region = screen.getByRole("region");
    region.focus();
    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(getSlides(container)[2]).not.toHaveAttribute("hidden");
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(getSlides(container)[1]).not.toHaveAttribute("hidden");
    fireEvent.keyDown(region, { key: "Home" });
    expect(getSlides(container)[0]).not.toHaveAttribute("hidden");
    fireEvent.keyDown(region, { key: "End" });
    expect(getSlides(container)[2]).not.toHaveAttribute("hidden");
  });

  it("applies custom className", () => {
    const { container } = render(<Carousel items={items} className="my-car" />);
    expect((container.firstChild as Element).className).toMatch(/my-car/);
  });

  it("renders nothing for empty items", () => {
    const { container } = render(<Carousel items={[]} />);
    expect(container.firstChild).toBeNull();
  });
});

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Toc.module.css";

export interface TocItem {
  text: string;
  selector: string;
}

export interface TocItemEventArgs {
  text: string;
  selector: string;
}

export interface TocProps {
  items: TocItem[];
  selector?: string;
  Selector?: string;
  orientation?: "vertical" | "horizontal";
  Orientation?: "vertical" | "horizontal";
  onClick?: (args: TocItemEventArgs) => void;
  Click?: (args: TocItemEventArgs) => void;
  ariaLabel?: string;
  className?: string;
}

export function Toc({
  items,
  selector,
  Selector,
  orientation,
  Orientation,
  onClick,
  Click,
  ariaLabel = "Table of contents",
  className,
}: TocProps) {
  const scopeSelector = selector ?? Selector;
  const orient = orientation ?? Orientation ?? "vertical";
  const [activeSelector, setActiveSelector] = useState<string | null>(() => items[0]?.selector ?? null);
  const activeSelectorRef = useRef(activeSelector);
  activeSelectorRef.current = activeSelector;

  const handleSelect = useCallback(
    (item: TocItem, el: Element | null) => {
      setActiveSelector(item.selector);
      const handler = onClick ?? Click;
      handler?.({ text: item.text, selector: item.selector });
      if (el) {
        // smooth scroll and focus
        try {
          (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          // fallback
          el.scrollIntoView();
        }
        const htmlEl = el as HTMLElement;
        // make focusable if not already
        const tab = htmlEl.getAttribute("tabindex");
        const needsTab = tab == null && htmlEl.tabIndex === -1;
        if (needsTab || htmlEl.tabIndex < 0) {
          const prevTab = htmlEl.getAttribute("tabindex");
          htmlEl.setAttribute("tabindex", "-1");
          htmlEl.focus({ preventScroll: true });
          if (prevTab == null) {
            // we could keep -1; screen reader focus needs it
          }
        } else {
          htmlEl.focus({ preventScroll: true });
        }
      }
    },
    [onClick, Click],
  );

  // scroll-spy via scroll listener + IntersectionObserver fallback
  useEffect(() => {
    if (items.length === 0) return;

    const getScrollContainer = (): Element | Window => {
      if (scopeSelector) {
        const scopeEl = document.querySelector(scopeSelector);
        if (scopeEl) return scopeEl;
      }
      return window;
    };

    const container = getScrollContainer();

    // Try IntersectionObserver if available and not in test env where layout is fake
    // We'll still set up observer; if it never fires, scroll handler will handle.
    let observer: IntersectionObserver | null = null;
    const observedElements = new Map<string, Element>();

    const updateActiveByScroll = () => {
      // Find element closest to top of container viewport
      let best: { sel: string; top: number } | null = null;
      let closestAbove: { sel: string; el: Element } | null = null;
      for (const item of items) {
        const el = document.querySelector(item.selector);
        if (!el) continue;
        observedElements.set(item.selector, el);
        const rect = el.getBoundingClientRect();
        // For window container, compare rect.top ; for scoped container, compare relative
        let top = rect.top;
        if (container !== window) {
          const containerRect = (container as Element).getBoundingClientRect();
          top = rect.top - containerRect.top;
        }
        // Prefer element whose top is <= 100 and largest top (closest to top but not below too far)
        // Simple heuristic: choose smallest positive top, or last negative
        if (top <= 80) {
          if (!closestAbove || top > (closestAbove.el.getBoundingClientRect().top - (container !== window ? (container as Element).getBoundingClientRect().top : 0))) {
            // Actually we need to compare top values; keep most recent
            closestAbove = { sel: item.selector, el };
          }
        } else if (!best || top < best.top) {
          best = { sel: item.selector, top };
        }
      }
      const next = closestAbove?.sel ?? best?.sel ?? items[0]?.selector ?? null;
      if (next && next !== activeSelectorRef.current) {
        setActiveSelector(next);
      }
    };

    const scrollHandler = () => {
      updateActiveByScroll();
    };

    // setup observer if supported
    if (typeof IntersectionObserver !== "undefined") {
      const options: IntersectionObserverInit =
        container === window
          ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 }
          : { root: container as Element, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      observer = new IntersectionObserver((entries) => {
        // Find intersecting entry with highest intersection
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const target = visible[0].target as HTMLElement;
          // find matching selector by id or by matching element identity
          for (const item of items) {
            const el = document.querySelector(item.selector);
            if (el === target) {
              setActiveSelector(item.selector);
              break;
            }
            // fallback: if selector matches id selector
            if (item.selector.startsWith("#") && target.id === item.selector.slice(1)) {
              setActiveSelector(item.selector);
              break;
            }
          }
        } else {
          // fallback to scroll calculation if no intersecting
          updateActiveByScroll();
        }
      }, options);
      for (const item of items) {
        const el = document.querySelector(item.selector);
        if (el) {
          observer.observe(el);
          observedElements.set(item.selector, el);
        }
      }
    }

    // scroll listening
    if (container === window) {
      window.addEventListener("scroll", scrollHandler, { passive: true });
      // initial
      updateActiveByScroll();
      return () => {
        window.removeEventListener("scroll", scrollHandler);
        observer?.disconnect();
      };
    } else {
      (container as Element).addEventListener("scroll", scrollHandler, { passive: true });
      updateActiveByScroll();
      return () => {
        (container as Element).removeEventListener("scroll", scrollHandler);
        observer?.disconnect();
      };
    }
  }, [items, scopeSelector]);

  return (
    <nav aria-label={ariaLabel} className={[styles.root, styles[orient], className].filter(Boolean).join(" ")}>
      <ol className={styles.list}>
        {items.map((item) => {
          const isActive = item.selector === activeSelector;
          return (
            <li key={`${item.text}-${item.selector}`} className={styles.item}>
              <a
                href={item.selector.startsWith("#") || item.selector.startsWith(".") ? item.selector : `#${item.selector}`}
                className={[styles.link, isActive ? styles.active : null].filter(Boolean).join(" ")}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(item.selector);
                  handleSelect(item, el);
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

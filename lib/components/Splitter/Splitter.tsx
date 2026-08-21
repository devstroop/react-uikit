import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import styles from "./Splitter.module.css";

export interface SplitterPane {
  size?: string;
  min?: string;
  max?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  label?: string;
  children: React.ReactNode;
}

export interface SplitterResizeArgs {
  paneIndex: number;
  newSize: number;
  cancel: boolean;
}

export interface SplitterCollapseArgs {
  paneIndex: number;
  collapse: boolean;
  cancel: boolean;
}

export interface SplitterProps {
  orientation?: "horizontal" | "vertical";
  Orientation?: "horizontal" | "vertical";
  panes: SplitterPane[];
  onResize?: (args: SplitterResizeArgs) => void;
  Resize?: (args: SplitterResizeArgs) => void;
  onCollapse?: (args: SplitterCollapseArgs) => void;
  Collapse?: (args: SplitterCollapseArgs) => void;
  ariaLabel?: string;
  className?: string;
}

function parsePercent(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (trimmed.endsWith("%")) {
    const n = parseFloat(trimmed.slice(0, -1));
    return Number.isNaN(n) ? fallback : n;
  }
  if (trimmed.endsWith("px")) {
    // for simplicity treat px as percent fallback; not precise but keeps logic working
    const n = parseFloat(trimmed.slice(0, -2));
    return Number.isNaN(n) ? fallback : n;
  }
  const n = parseFloat(trimmed);
  return Number.isNaN(n) ? fallback : n;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function Splitter({
  orientation,
  Orientation,
  panes,
  onResize,
  Resize,
  onCollapse,
  Collapse,
  ariaLabel = "Splitter",
  className,
}: SplitterProps) {
  const orient = orientation ?? Orientation ?? "horizontal";
  const isHorizontal = orient === "horizontal";
  const containerRef = useRef<HTMLDivElement>(null);

  // sizes in percent per pane, sum ~100
  const computeInitialSizes = useCallback((): number[] => {
    const count = panes.length;
    if (count === 0) return [];
    const arr: number[] = panes.map((p) => {
      if (p.size) return parsePercent(p.size, 100 / count);
      return 100 / count;
    });
    const sum = arr.reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 100) > 0.01 && sum > 0) {
      return arr.map((s) => (s / sum) * 100);
    }
    return arr;
  }, [panes]);

  const [sizes, setSizes] = useState<number[]>(() => computeInitialSizes());
  const [collapsed, setCollapsed] = useState<boolean[]>(() => panes.map((p) => !!p.collapsed));
  // remember previous sizes for expand
  const prevSizesRef = useRef<number[]>(sizes);

  useEffect(() => {
    // sync if collapsed prop changes externally
    setCollapsed(panes.map((p) => !!p.collapsed));
  }, [panes]);

  const getMins = useCallback(() => panes.map((p) => parsePercent(p.min, 0)), [panes]);
  const getMaxs = useCallback(() => panes.map((p) => parsePercent(p.max, 100)), [panes]);

  const emitResize = useCallback(
    (paneIndex: number, newSize: number): boolean => {
      const args: SplitterResizeArgs = { paneIndex, newSize, cancel: false };
      const handler = onResize ?? Resize;
      handler?.(args);
      return !args.cancel;
    },
    [onResize, Resize],
  );

  const emitCollapse = useCallback(
    (paneIndex: number, collapse: boolean): boolean => {
      const args: SplitterCollapseArgs = { paneIndex, collapse, cancel: false };
      const handler = onCollapse ?? Collapse;
      handler?.(args);
      return !args.cancel;
    },
    [onCollapse, Collapse],
  );

  const toggleCollapse = useCallback(
    (paneIndex: number) => {
      const willCollapse = !collapsed[paneIndex];
      if (!emitCollapse(paneIndex, willCollapse)) return;
      if (willCollapse) {
        prevSizesRef.current = [...sizes];
        setCollapsed((prev) => {
          const next = [...prev];
          const target = next[paneIndex];
          if (target !== undefined) next[paneIndex] = true;
          return next;
        });
        // transfer space to sibling
        setSizes((prev) => {
          const next = [...prev];
          const size = next[paneIndex] ?? 0;
          const siblingIndex = paneIndex < next.length - 1 ? paneIndex + 1 : paneIndex - 1;
          if (siblingIndex >= 0 && siblingIndex < next.length) {
            const sibSize = next[siblingIndex] ?? 0;
            next[siblingIndex] = sibSize + size;
            next[paneIndex] = 0;
          } else {
            next[paneIndex] = 0;
          }
          return next;
        });
      } else {
        // expand restore
        setCollapsed((prev) => {
          const next = [...prev];
          const target = next[paneIndex];
          if (target !== undefined) next[paneIndex] = false;
          return next;
        });
        setSizes(() => {
          const restored = [...prevSizesRef.current];
          // if restored has changed length due to panes count mismatch, fallback
          if (restored.length !== panes.length) {
            return panes.map(() => 100 / panes.length);
          }
          return restored;
        });
      }
    },
    [collapsed, sizes, panes.length, emitCollapse],
  );

  // dragging state
  const draggingRef = useRef<{ handleIndex: number; pointerId: number } | null>(null);

  const valueFromPointer = useCallback(
    (handleIndex: number, clientX: number, clientY: number): number | null => {
      const container = containerRef.current;
      if (!container) return null;
      const rect = container.getBoundingClientRect();
      // compute percent for left pane size based on pointer position relative to container
      // handleIndex is between pane handleIndex and handleIndex+1
      // we compute accumulator: sizes[0..handleIndex-1] sum + offset within handle region?
      // Simpler: compute total percent = (pointer - rect.start) / rect.size * 100
      // then find where handle sits; left pane's new size = absolute pointer percent - sumBefore
      let absolutePercent: number;
      if (isHorizontal) {
        if (rect.width === 0) return null;
        absolutePercent = ((clientX - rect.left) / rect.width) * 100;
      } else {
        if (rect.height === 0) return null;
        absolutePercent = ((clientY - rect.top) / rect.height) * 100;
      }
      // sum of sizes before handle
      let sumBefore = 0;
      for (let i = 0; i < handleIndex; i++) {
        const s = sizes[i];
        if (s !== undefined) sumBefore += s;
        // collapsed panes contribute 0 anyway
        // but we need to account for collapsed? they are 0
      }
      // left pane new size is absolute - sumBefore, clamped by handle's available space?
      // but need to consider only two panes adjacent; absolute percent includes all previous panes.
      // So leftSize = absolute - sumBefore
      // For collapsed previous panes, sumBefore may be small, but okay.
      const leftSize = absolutePercent - sumBefore;
      return leftSize;
    },
    [isHorizontal, sizes],
  );

  const handlePointerDown = (handleIndex: number, e: ReactPointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    target.focus();
    if (typeof target.setPointerCapture === "function") {
      target.setPointerCapture(e.pointerId);
    }
    draggingRef.current = { handleIndex, pointerId: e.pointerId };
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || draggingRef.current.pointerId !== e.pointerId) return;
    e.preventDefault();
    const handleIndex = draggingRef.current.handleIndex;
    const leftSizeRaw = valueFromPointer(handleIndex, e.clientX, e.clientY);
    if (leftSizeRaw == null) return;
    const mins = getMins();
    const maxs = getMaxs();
    const leftMin = mins[handleIndex] ?? 0;
    const leftMax = maxs[handleIndex] ?? 100;
    const rightIndex = handleIndex + 1;
    const rightMin = mins[rightIndex] ?? 0;
    const rightMax = maxs[rightIndex] ?? 100;

    const oldLeft = sizes[handleIndex] ?? 0;
    const oldRight = sizes[rightIndex] ?? 0;
    const total = oldLeft + oldRight;
    if (total <= 0) return;
    let newLeft = clamp(leftSizeRaw, leftMin, leftMax);
    // ensure right also within its min/max: newRight = total - newLeft
    let newRight = total - newLeft;
    if (newRight < rightMin) {
      newRight = rightMin;
      newLeft = total - newRight;
      if (newLeft < leftMin || newLeft > leftMax) return;
    } else if (newRight > rightMax) {
      newRight = rightMax;
      newLeft = total - newRight;
      if (newLeft < leftMin || newLeft > leftMax) return;
    }
    newLeft = clamp(newLeft, leftMin, leftMax);
    newRight = total - newLeft;

    // emit and respect cancel
    if (!emitResize(handleIndex, newLeft)) return;
    setSizes((prev) => {
      const next = [...prev];
      next[handleIndex] = newLeft;
      next[rightIndex] = newRight;
      return next;
    });
  };

  const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || draggingRef.current.pointerId !== e.pointerId) return;
    draggingRef.current = null;
    // final commit already done via move; we could emit again but not needed
  };

  const handleSeparatorKeyDown = (handleIndex: number, e: React.KeyboardEvent<HTMLDivElement>) => {
    const mins = getMins();
    const maxs = getMaxs();
    const leftIdx = handleIndex;
    const rightIdx = handleIndex + 1;
    const oldLeft = sizes[leftIdx] ?? 0;
    const oldRight = sizes[rightIdx] ?? 0;
    const total = oldLeft + oldRight;
    let delta = 0;
    const isCollapsibleLeft = !!panes[leftIdx]?.collapsible;
    const isCollapsibleRight = !!panes[rightIdx]?.collapsible;

    if (isHorizontal) {
      if (e.key === "ArrowLeft") delta = -5;
      else if (e.key === "ArrowRight") delta = 5;
    } else {
      if (e.key === "ArrowUp") delta = -5;
      else if (e.key === "ArrowDown") delta = 5;
    }
    if (e.key === "Home") {
      e.preventDefault();
      let targetLeft = mins[leftIdx] ?? 0;
      let targetRight = total - targetLeft;
      // ensure right within max/min
      targetRight = clamp(targetRight, mins[rightIdx] ?? 0, maxs[rightIdx] ?? 100);
      targetLeft = total - targetRight;
      targetLeft = clamp(targetLeft, mins[leftIdx] ?? 0, maxs[leftIdx] ?? 100);
      if (!emitResize(leftIdx, targetLeft)) return;
      setSizes((prev) => {
        const next = [...prev];
        next[leftIdx] = targetLeft;
        next[rightIdx] = targetRight;
        return next;
      });
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      let targetLeft = maxs[leftIdx] ?? 100;
      targetLeft = Math.min(targetLeft, total - (mins[rightIdx] ?? 0));
      let targetRight = total - targetLeft;
      targetRight = clamp(targetRight, mins[rightIdx] ?? 0, maxs[rightIdx] ?? 100);
      targetLeft = total - targetRight;
      targetLeft = clamp(targetLeft, mins[leftIdx] ?? 0, maxs[leftIdx] ?? 100);
      if (!emitResize(leftIdx, targetLeft)) return;
      setSizes((prev) => {
        const next = [...prev];
        next[leftIdx] = targetLeft;
        next[rightIdx] = targetRight;
        return next;
      });
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && (isCollapsibleLeft || isCollapsibleRight)) {
      e.preventDefault();
      // prefer left collapsible, else right
      const targetIdx = isCollapsibleLeft ? leftIdx : rightIdx;
      toggleCollapse(targetIdx);
      return;
    }
    if (delta !== 0) {
      e.preventDefault();
      let newLeft = oldLeft + delta;
      let newRight = total - newLeft;
      const leftMin = mins[leftIdx] ?? 0;
      const leftMax = maxs[leftIdx] ?? 100;
      const rightMin = mins[rightIdx] ?? 0;
      const rightMax = maxs[rightIdx] ?? 100;
      newLeft = clamp(newLeft, leftMin, leftMax);
      newRight = total - newLeft;
      if (newRight < rightMin || newRight > rightMax) {
        // adjust to respect right constraints
        newRight = clamp(newRight, rightMin, rightMax);
        newLeft = total - newRight;
        newLeft = clamp(newLeft, leftMin, leftMax);
        newRight = total - newLeft;
      }
      if (!emitResize(leftIdx, newLeft)) return;
      setSizes((prev) => {
        const next = [...prev];
        next[leftIdx] = newLeft;
        next[rightIdx] = newRight;
        return next;
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={[styles.root, isHorizontal ? styles.horizontal : styles.vertical, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
    >
      {panes.map((pane, index) => {
        const isCollapsed = !!collapsed[index];
        const size = isCollapsed ? 0 : (sizes[index] ?? 100 / panes.length);
        const paneStyle: React.CSSProperties = isCollapsed
          ? { display: "none" }
          : isHorizontal
            ? { flexBasis: `${size}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }
            : { flexBasis: `${size}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" };
        const min = parsePercent(pane.min, 0);
        const max = parsePercent(pane.max, 100);
        const hasHandleAfter = index < panes.length - 1;
        const nextPaneCollapsible = !!panes[index + 1]?.collapsible;
        return (
          <div key={index} style={{ display: "contents" }}>
            <div
              role="group"
              aria-label={pane.label ?? `Pane ${index + 1}`}
              className={styles.pane}
              style={paneStyle}
              data-collapsed={isCollapsed ? "true" : undefined}
            >
              {!isCollapsed ? pane.children : null}
              {pane.collapsible && !isCollapsed ? (
                <button
                  type="button"
                  className={styles.collapseBtn}
                  aria-label={`Collapse pane ${index + 1}`}
                  aria-expanded={!isCollapsed}
                  onClick={() => toggleCollapse(index)}
                >
                  {isHorizontal ? "◀" : "▲"}
                </button>
              ) : null}
              {pane.collapsible && isCollapsed ? (
                <button
                  type="button"
                  className={styles.collapseBtn}
                  aria-label={`Expand pane ${index + 1}`}
                  aria-expanded={!isCollapsed}
                  onClick={() => toggleCollapse(index)}
                >
                  {isHorizontal ? "▶" : "▼"}
                </button>
              ) : null}
            </div>
            {isCollapsed && pane.collapsible ? (
              // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
              // Actually we hide pane with display none, need visible expand button
              // So render alternative expand button adjacent
              <button
                type="button"
                className={styles.collapseBtnCollapsed}
                aria-label={`Expand pane ${index + 1}`}
                aria-expanded="false"
                onClick={() => toggleCollapse(index)}
              >
                {isHorizontal ? "▶" : "▼"}
              </button>
            ) : null}
            {hasHandleAfter ? (
              <div
                role="separator"
                aria-orientation={orient}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={Math.round(size)}
                aria-label={`Resize handle ${index + 1}`}
                tabIndex={isCollapsed || collapsed[index + 1] ? -1 : 0}
                className={[styles.handle, isHorizontal ? styles.handleHorizontal : styles.handleVertical].filter(Boolean).join(" ")}
                onPointerDown={(e) => handlePointerDown(index, e)}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onKeyDown={(e) => handleSeparatorKeyDown(index, e)}
              >
                <span className={styles.handleGrip} aria-hidden="true" />
                {(pane.collapsible || nextPaneCollapsible) && (
                  <span className={styles.handleCollapseHint} aria-hidden="true" />
                )}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

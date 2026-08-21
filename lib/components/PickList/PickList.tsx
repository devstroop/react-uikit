import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./PickList.module.css";

export interface PickListItem {
  id: string;
  text: string;
  disabled?: boolean;
  [key: string]: unknown;
}

export interface PickListMoveArgs {
  source: PickListItem[];
  target: PickListItem[];
  moved: PickListItem[];
  direction: "toTarget" | "toSource" | "up" | "down" | "allToTarget" | "allToSource";
}

export interface PickListProps {
  source?: PickListItem[];
  Source?: PickListItem[];
  target?: PickListItem[];
  Target?: PickListItem[];
  value?: PickListItem[];
  Value?: PickListItem[];
  targetValue?: PickListItem[];
  TargetValue?: PickListItem[];
  data?: PickListItem[];
  Data?: PickListItem[];
  onSourceChange?: (items: PickListItem[]) => void;
  SourceChange?: (items: PickListItem[]) => void;
  onTargetChange?: (items: PickListItem[]) => void;
  TargetChange?: (items: PickListItem[]) => void;
  keyProperty?: string;
  KeyProperty?: string;
  onMove?: (args: PickListMoveArgs) => void;
  Move?: (args: PickListMoveArgs) => void;
  ariaLabel?: string;
  AriaLabel?: string;
  className?: string;
  disabled?: boolean;
  Disabled?: boolean;
}

function getKey(item: PickListItem, keyProp: string): string {
  const v = item[keyProp];
  if (v != null) return String(v);
  return String(item.id ?? "");
}

function getText(item: PickListItem): string {
  const t = item["text"];
  if (t != null) return String(t);
  return String(item.id ?? "");
}

export function PickList({
  source,
  Source,
  target,
  Target,
  value,
  Value,
  targetValue,
  TargetValue,
  data,
  Data,
  onSourceChange,
  SourceChange,
  onTargetChange,
  TargetChange,
  keyProperty,
  KeyProperty,
  onMove,
  Move,
  ariaLabel,
  AriaLabel,
  className,
}: PickListProps) {
  const effectiveKeyProp = keyProperty ?? KeyProperty ?? "id";
  const effectiveAriaLabel = ariaLabel ?? AriaLabel ?? "PickList";

  const initialSource = source ?? Source ?? value ?? Value ?? data ?? Data ?? [];
  const initialTarget = target ?? Target ?? targetValue ?? TargetValue ?? [];

  const [sourceItems, setSourceItems] = useState<PickListItem[]>(() => [...initialSource]);
  const [targetItems, setTargetItems] = useState<PickListItem[]>(() => [...initialTarget]);

  // sync when props change (controlled)
  useEffect(() => {
    const nextSource = source ?? Source ?? value ?? Value ?? data ?? Data;
    if (nextSource !== undefined) setSourceItems([...nextSource]);
  }, [source, Source, value, Value, data, Data]);

  useEffect(() => {
    const nextTarget = target ?? Target ?? targetValue ?? TargetValue;
    if (nextTarget !== undefined) setTargetItems([...nextTarget]);
  }, [target, Target, targetValue, TargetValue]);

  const [sourceSelected, setSourceSelected] = useState<Set<string>>(() => new Set());
  const [targetSelected, setTargetSelected] = useState<Set<string>>(() => new Set());

  // active focus indexes for keyboard navigation
  const [sourceActive, setSourceActive] = useState<number>(() => {
    const idx = initialSource.findIndex((it) => !it.disabled);
    return idx >= 0 ? idx : 0;
  });
  const [targetActive, setTargetActive] = useState<number>(() => {
    const idx = initialTarget.findIndex((it) => !it.disabled);
    return idx >= 0 ? idx : 0;
  });

  const sourceEnabledIdxs = useMemo(() => sourceItems.map((it, i) => (!it.disabled ? i : -1)).filter((i) => i >= 0), [sourceItems]);
  const targetEnabledIdxs = useMemo(() => targetItems.map((it, i) => (!it.disabled ? i : -1)).filter((i) => i >= 0), [targetItems]);

  // Keep active indexes within bounds
  useEffect(() => {
    if (sourceActive >= sourceItems.length) {
      const lastEnabled = sourceEnabledIdxs[sourceEnabledIdxs.length - 1];
      setSourceActive(lastEnabled ?? 0);
    } else if (sourceItems.length > 0 && sourceEnabledIdxs.length > 0 && !sourceEnabledIdxs.includes(sourceActive)) {
      const first = sourceEnabledIdxs[0];
      if (first !== undefined) setSourceActive(first);
    }
  }, [sourceActive, sourceItems.length, sourceEnabledIdxs]);

  useEffect(() => {
    if (targetActive >= targetItems.length) {
      const lastEnabled = targetEnabledIdxs[targetEnabledIdxs.length - 1];
      setTargetActive(lastEnabled ?? 0);
    } else if (targetItems.length > 0 && targetEnabledIdxs.length > 0 && !targetEnabledIdxs.includes(targetActive)) {
      const first = targetEnabledIdxs[0];
      if (first !== undefined) setTargetActive(first);
    }
  }, [targetActive, targetItems.length, targetEnabledIdxs]);

  // clean selected keys when items change (remove keys no longer present or disabled?)
  useEffect(() => {
    setSourceSelected((prev) => {
      const next = new Set<string>();
      for (const k of prev) {
        const exists = sourceItems.some((it) => getKey(it, effectiveKeyProp) === k && !it.disabled);
        if (exists) next.add(k);
      }
      return next;
    });
  }, [sourceItems, effectiveKeyProp]);

  useEffect(() => {
    setTargetSelected((prev) => {
      const next = new Set<string>();
      for (const k of prev) {
        const exists = targetItems.some((it) => getKey(it, effectiveKeyProp) === k && !it.disabled);
        if (exists) next.add(k);
      }
      return next;
    });
  }, [targetItems, effectiveKeyProp]);

  const emitSourceChange = useCallback(
    (next: PickListItem[]) => {
      const handler = onSourceChange ?? SourceChange;
      handler?.(next);
    },
    [onSourceChange, SourceChange],
  );

  const emitTargetChange = useCallback(
    (next: PickListItem[]) => {
      const handler = onTargetChange ?? TargetChange;
      handler?.(next);
    },
    [onTargetChange, TargetChange],
  );

  const emitMove = useCallback(
    (args: PickListMoveArgs) => {
      const handler = onMove ?? Move;
      handler?.(args);
    },
    [onMove, Move],
  );

  const toggleSourceSelect = useCallback(
    (index: number) => {
      const item = sourceItems[index];
      if (!item || item.disabled) return;
      const key = getKey(item, effectiveKeyProp);
      setSourceSelected((prev) => {
        const next = new Set(prev);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      });
      setSourceActive(index);
    },
    [sourceItems, effectiveKeyProp],
  );

  const toggleTargetSelect = useCallback(
    (index: number) => {
      const item = targetItems[index];
      if (!item || item.disabled) return;
      const key = getKey(item, effectiveKeyProp);
      setTargetSelected((prev) => {
        const next = new Set(prev);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      });
      setTargetActive(index);
    },
    [targetItems, effectiveKeyProp],
  );

  const moveSelectedToTarget = useCallback(() => {
    const moved: PickListItem[] = [];
    const remainingSource: PickListItem[] = [];
    for (const it of sourceItems) {
      const k = getKey(it, effectiveKeyProp);
      if (sourceSelected.has(k) && !it.disabled) moved.push(it);
      else remainingSource.push(it);
    }
    if (moved.length === 0) return;
    const nextSource = remainingSource;
    const nextTarget = [...targetItems, ...moved];
    setSourceItems(nextSource);
    setTargetItems(nextTarget);
    setSourceSelected(new Set());
    // keep target selected? Usually clear then select moved? We'll select moved in target
    const movedKeys = new Set(moved.map((it) => getKey(it, effectiveKeyProp)));
    setTargetSelected(movedKeys);
    emitSourceChange(nextSource);
    emitTargetChange(nextTarget);
    emitMove({ source: nextSource, target: nextTarget, moved, direction: "toTarget" });
  }, [sourceItems, targetItems, sourceSelected, effectiveKeyProp, emitSourceChange, emitTargetChange, emitMove]);

  const moveSelectedToSource = useCallback(() => {
    const moved: PickListItem[] = [];
    const remainingTarget: PickListItem[] = [];
    for (const it of targetItems) {
      const k = getKey(it, effectiveKeyProp);
      if (targetSelected.has(k) && !it.disabled) moved.push(it);
      else remainingTarget.push(it);
    }
    if (moved.length === 0) return;
    const nextTarget = remainingTarget;
    const nextSource = [...sourceItems, ...moved];
    setTargetItems(nextTarget);
    setSourceItems(nextSource);
    setTargetSelected(new Set());
    const movedKeys = new Set(moved.map((it) => getKey(it, effectiveKeyProp)));
    setSourceSelected(movedKeys);
    emitSourceChange(nextSource);
    emitTargetChange(nextTarget);
    emitMove({ source: nextSource, target: nextTarget, moved, direction: "toSource" });
  }, [sourceItems, targetItems, targetSelected, effectiveKeyProp, emitSourceChange, emitTargetChange, emitMove]);

  const moveAllToTarget = useCallback(() => {
    const moved = sourceItems.filter((it) => !it.disabled);
    if (moved.length === 0) return;
    const nextSource = sourceItems.filter((it) => !!it.disabled);
    const nextTarget = [...targetItems, ...moved];
    setSourceItems(nextSource);
    setTargetItems(nextTarget);
    setSourceSelected(new Set());
    emitSourceChange(nextSource);
    emitTargetChange(nextTarget);
    emitMove({ source: nextSource, target: nextTarget, moved, direction: "allToTarget" });
  }, [sourceItems, targetItems, effectiveKeyProp, emitSourceChange, emitTargetChange, emitMove]);

  const moveAllToSource = useCallback(() => {
    const moved = targetItems.filter((it) => !it.disabled);
    if (moved.length === 0) return;
    const nextTarget = targetItems.filter((it) => !!it.disabled);
    const nextSource = [...sourceItems, ...moved];
    setTargetItems(nextTarget);
    setSourceItems(nextSource);
    setTargetSelected(new Set());
    emitSourceChange(nextSource);
    emitTargetChange(nextTarget);
    emitMove({ source: nextSource, target: nextTarget, moved, direction: "allToSource" });
  }, [sourceItems, targetItems, emitSourceChange, emitTargetChange, emitMove]);

  const moveUp = useCallback(() => {
    if (targetSelected.size === 0) return;
    // create copy
    const next = [...targetItems];
    const keys = targetSelected;
    let moved: PickListItem[] = [];
    // For up: iterate from top to bottom, if item selected and previous not selected and not disabled, swap
    for (let i = 1; i < next.length; i++) {
      const curr = next[i];
      const prev = next[i - 1];
      if (!curr || !prev) continue;
      const currKey = getKey(curr, effectiveKeyProp);
      const prevKey = getKey(prev, effectiveKeyProp);
      if (keys.has(currKey) && !keys.has(prevKey) && !curr.disabled && !prev.disabled) {
        // swap
        next[i - 1] = curr;
        next[i] = prev;
        moved.push(curr);
      }
    }
    if (moved.length === 0) return;
    setTargetItems(next);
    // adjust active index to follow movement? keep same keys selected
    emitTargetChange(next);
    // emit source as unchanged for move event's source
    emitMove({ source: sourceItems, target: next, moved, direction: "up" });
    // update active to first selected's new position
    const firstSelectedKey = Array.from(keys)[0];
    if (firstSelectedKey) {
      const newIdx = next.findIndex((it) => getKey(it, effectiveKeyProp) === firstSelectedKey);
      if (newIdx >= 0) setTargetActive(newIdx);
    }
  }, [targetItems, targetSelected, effectiveKeyProp, sourceItems, emitTargetChange, emitMove]);

  const moveDown = useCallback(() => {
    if (targetSelected.size === 0) return;
    const next = [...targetItems];
    const keys = targetSelected;
    let moved: PickListItem[] = [];
    for (let i = next.length - 2; i >= 0; i--) {
      const curr = next[i];
      const nxt = next[i + 1];
      if (!curr || !nxt) continue;
      const currKey = getKey(curr, effectiveKeyProp);
      const nxtKey = getKey(nxt, effectiveKeyProp);
      if (keys.has(currKey) && !keys.has(nxtKey) && !curr.disabled && !nxt.disabled) {
        next[i] = nxt;
        next[i + 1] = curr;
        moved.push(curr);
      }
    }
    if (moved.length === 0) return;
    setTargetItems(next);
    emitTargetChange(next);
    emitMove({ source: sourceItems, target: next, moved, direction: "down" });
    const firstSelectedKey = Array.from(keys)[0];
    if (firstSelectedKey) {
      const newIdx = next.findIndex((it) => getKey(it, effectiveKeyProp) === firstSelectedKey);
      if (newIdx >= 0) setTargetActive(newIdx);
    }
  }, [targetItems, targetSelected, effectiveKeyProp, sourceItems, emitTargetChange, emitMove]);

  const sourceHasSelection = sourceSelected.size > 0;
  const targetHasSelection = targetSelected.size > 0;

  const typeaheadSource = useRef<string>("");
  const typeaheadSourceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeaheadTarget = useRef<string>("");
  const typeaheadTargetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSourceKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (sourceItems.length === 0) return;
      const enabled = sourceEnabledIdxs;
      if (enabled.length === 0) return;
      let current = enabled.includes(sourceActive) ? sourceActive : (enabled[0] ?? 0);
      let next = -1;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const idx = enabled.indexOf(current);
        next = enabled[(idx + 1) % enabled.length] ?? enabled[0] ?? 0;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const idx = enabled.indexOf(current);
        next = enabled[(idx - 1 + enabled.length) % enabled.length] ?? enabled[0] ?? 0;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = enabled[0] ?? 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = enabled[enabled.length - 1] ?? 0;
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleSourceSelect(current);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
        e.preventDefault();
        const query = (typeaheadSource.current + e.key).toLowerCase();
        typeaheadSource.current = query;
        if (typeaheadSourceTimer.current) clearTimeout(typeaheadSourceTimer.current);
        typeaheadSourceTimer.current = setTimeout(() => {
          typeaheadSource.current = "";
        }, 500);
        const doubled = [...enabled, ...enabled];
        const start = enabled.indexOf(current) + 1;
        const hit = doubled.slice(start).find((idx) => getText(sourceItems[idx] as PickListItem).toLowerCase().startsWith(query));
        if (hit != null) setSourceActive(hit);
        return;
      }
      if (next >= 0) {
        setSourceActive(next);
      }
    },
    [sourceItems, sourceEnabledIdxs, sourceActive, toggleSourceSelect],
  );

  const handleTargetKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (targetItems.length === 0) return;
      const enabled = targetEnabledIdxs;
      if (enabled.length === 0) return;
      let current = enabled.includes(targetActive) ? targetActive : (enabled[0] ?? 0);
      let next = -1;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const idx = enabled.indexOf(current);
        next = enabled[(idx + 1) % enabled.length] ?? enabled[0] ?? 0;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const idx = enabled.indexOf(current);
        next = enabled[(idx - 1 + enabled.length) % enabled.length] ?? enabled[0] ?? 0;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = enabled[0] ?? 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = enabled[enabled.length - 1] ?? 0;
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTargetSelect(current);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
        e.preventDefault();
        const query = (typeaheadTarget.current + e.key).toLowerCase();
        typeaheadTarget.current = query;
        if (typeaheadTargetTimer.current) clearTimeout(typeaheadTargetTimer.current);
        typeaheadTargetTimer.current = setTimeout(() => {
          typeaheadTarget.current = "";
        }, 500);
        const doubled = [...enabled, ...enabled];
        const start = enabled.indexOf(current) + 1;
        const hit = doubled.slice(start).find((idx) => getText(targetItems[idx] as PickListItem).toLowerCase().startsWith(query));
        if (hit != null) setTargetActive(hit);
        return;
      }
      if (next >= 0) {
        setTargetActive(next);
      }
    },
    [targetItems, targetEnabledIdxs, targetActive, toggleTargetSelect],
  );

  const listSourceRef = useRef<HTMLDivElement>(null);
  const listTargetRef = useRef<HTMLDivElement>(null);

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} aria-label={effectiveAriaLabel}>
      <div className={styles.panel}>
        <div className={styles.header}>Source</div>
        <div
          ref={listSourceRef}
          role="listbox"
          aria-label="Source"
          aria-multiselectable="true"
          tabIndex={0}
          className={styles.listbox}
          onKeyDown={handleSourceKeyDown}
        >
          {sourceItems.length === 0 ? (
            <div className={styles.empty}>No items</div>
          ) : (
            sourceItems.map((item, idx) => {
              const key = getKey(item, effectiveKeyProp);
              const selected = sourceSelected.has(key);
              const active = idx === sourceActive;
              const disabled = !!item.disabled;
              return (
                <div
                  key={key}
                  role="option"
                  aria-selected={selected}
                  aria-disabled={disabled || undefined}
                  tabIndex={-1}
                  data-active={active || undefined}
                  className={[
                    styles.option,
                    selected ? styles.selected : null,
                    active ? styles.active : null,
                    disabled ? styles.disabled : null,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => toggleSourceSelect(idx)}
                >
                  {getText(item)}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.btn}
          aria-label="Move selected to target"
          aria-disabled={!sourceHasSelection || undefined}
          disabled={!sourceHasSelection}
          onClick={moveSelectedToTarget}
        >
          ›
        </button>
        <button
          type="button"
          className={styles.btn}
          aria-label="Move all to target"
          aria-disabled={sourceItems.filter((it) => !it.disabled).length === 0 || undefined}
          disabled={sourceItems.filter((it) => !it.disabled).length === 0}
          onClick={moveAllToTarget}
        >
          »
        </button>
        <button
          type="button"
          className={styles.btn}
          aria-label="Move all"
          aria-disabled={sourceItems.filter((it) => !it.disabled).length === 0 || undefined}
          disabled={sourceItems.filter((it) => !it.disabled).length === 0}
          onClick={moveAllToTarget}
        >
          »
        </button>
        <button
          type="button"
          className={styles.btn}
          aria-label="Move selected to source"
          aria-disabled={!targetHasSelection || undefined}
          disabled={!targetHasSelection}
          onClick={moveSelectedToSource}
        >
          ‹
        </button>
        <button
          type="button"
          className={styles.btn}
          aria-label="Move all to source"
          aria-disabled={targetItems.filter((it) => !it.disabled).length === 0 || undefined}
          disabled={targetItems.filter((it) => !it.disabled).length === 0}
          onClick={moveAllToSource}
        >
          «
        </button>
      </div>

      <div className={styles.panel}>
        <div className={styles.header}>Target</div>
        <div
          ref={listTargetRef}
          role="listbox"
          aria-label="Target"
          aria-multiselectable="true"
          tabIndex={0}
          className={styles.listbox}
          onKeyDown={handleTargetKeyDown}
        >
          {targetItems.length === 0 ? (
            <div className={styles.empty}>No items</div>
          ) : (
            targetItems.map((item, idx) => {
              const key = getKey(item, effectiveKeyProp);
              const selected = targetSelected.has(key);
              const active = idx === targetActive;
              const disabled = !!item.disabled;
              return (
                <div
                  key={key}
                  role="option"
                  aria-selected={selected}
                  aria-disabled={disabled || undefined}
                  tabIndex={-1}
                  data-active={active || undefined}
                  className={[
                    styles.option,
                    selected ? styles.selected : null,
                    active ? styles.active : null,
                    disabled ? styles.disabled : null,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => toggleTargetSelect(idx)}
                >
                  {getText(item)}
                </div>
              );
            })
          )}
        </div>
        <div className={styles.reorder}>
          <button
            type="button"
            className={styles.btn}
            aria-label="Move up"
            aria-disabled={!targetHasSelection || undefined}
            disabled={!targetHasSelection}
            onClick={moveUp}
          >
            ↑
          </button>
          <button
            type="button"
            className={styles.btn}
            aria-label="Move down"
            aria-disabled={!targetHasSelection || undefined}
            disabled={!targetHasSelection}
            onClick={moveDown}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
}

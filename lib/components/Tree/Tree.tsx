import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Tree.module.css";

export interface TreeItem {
  id: string;
  text: string;
  children?: TreeItem[];
  disabled?: boolean;
  expanded?: boolean;
  selected?: boolean;
  [key: string]: unknown;
}

export interface TreeChangeArgs {
  item: TreeItem;
  selectedItem?: TreeItem | null;
  selectedItems?: TreeItem[];
}

export interface TreeExpandArgs {
  item: TreeItem;
}

export interface TreeCollapseArgs {
  item: TreeItem;
}

export interface TreeProps {
  data?: TreeItem[];
  Data?: TreeItem[];
  children?: (item: TreeItem) => TreeItem[] | undefined;
  Children?: (item: TreeItem) => TreeItem[] | undefined;
  textProperty?: string;
  TextProperty?: string;
  keyProperty?: string;
  KeyProperty?: string;
  selectionMode?: "single" | "multiple";
  SelectionMode?: "single" | "multiple";
  selectedItem?: TreeItem | null;
  SelectedItem?: TreeItem | null;
  selectedItems?: TreeItem[];
  SelectedItems?: TreeItem[];
  defaultSelectedItem?: TreeItem | null;
  defaultSelectedItems?: TreeItem[];
  onChange?: (args: TreeChangeArgs) => void;
  Change?: (args: TreeChangeArgs) => void;
  onExpand?: (args: TreeExpandArgs) => void;
  Expand?: (args: TreeExpandArgs) => void;
  onCollapse?: (args: TreeCollapseArgs) => void;
  Collapse?: (args: TreeCollapseArgs) => void;
  loadChildData?: (item: TreeItem) => Promise<TreeItem[]>;
  LoadChildData?: (item: TreeItem) => Promise<TreeItem[]>;
  template?: (item: TreeItem) => React.ReactNode;
  Template?: (item: TreeItem) => React.ReactNode;
  itemTemplate?: (item: TreeItem) => React.ReactNode;
  ItemTemplate?: (item: TreeItem) => React.ReactNode;
  ariaLabel?: string;
  AriaLabel?: string;
  /** Render checkboxes with full cascade (Radzen AllowCheckBoxes parity). */
  allowCheckBoxes?: boolean;
  /** Controlled checked keys. Omit for uncontrolled. */
  checkedKeys?: string[];
  defaultCheckedKeys?: string[];
  onCheckedChange?: (keys: string[]) => void;
  /** Checking a parent checks descendants (default true). */
  allowCheckChildren?: boolean;
  className?: string;
}

interface FlatNode {
  item: TreeItem;
  key: string;
  text: string;
  level: number;
  posInSet: number;
  setSize: number;
  hasChildren: boolean;
  expanded: boolean;
  parentKey: string | null;
  disabled: boolean;
}

/**
 * Checkbox with a controlled `indeterminate` visual state. The property
 * is DOM-only (no React prop), so it syncs in an effect rather than an
 * inline ref callback, whose attach/detach timing differs across versions.
 */
function IndeterminateCheckbox({
  indeterminate,
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  indeterminate?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate ?? false;
  }, [indeterminate]);
  return <input ref={ref} type="checkbox" {...props} />;
}

export function Tree({
  data,
  Data,
  children,
  Children,
  textProperty,
  TextProperty,
  keyProperty,
  KeyProperty,
  selectionMode,
  SelectionMode,
  selectedItem,
  SelectedItem,
  selectedItems,
  SelectedItems,
  defaultSelectedItem,
  defaultSelectedItems,
  onChange,
  Change,
  onExpand,
  Expand,
  onCollapse,
  Collapse,
  loadChildData,
  LoadChildData,
  template,
  Template,
  itemTemplate,
  ItemTemplate,
  ariaLabel,
  AriaLabel,
  allowCheckBoxes = false,
  checkedKeys,
  defaultCheckedKeys,
  onCheckedChange,
  allowCheckChildren = true,
  className,
}: TreeProps) {
  const effectiveData = data ?? Data ?? [];
  const childrenGetter = children ?? Children;
  const effectiveTextProp = textProperty ?? TextProperty ?? "text";
  const effectiveKeyProp = keyProperty ?? KeyProperty ?? "id";
  const effectiveSelectionMode = selectionMode ?? SelectionMode ?? "single";
  const effectiveAriaLabel = ariaLabel ?? AriaLabel ?? "Tree";
  const effectiveLoadChildData = loadChildData ?? LoadChildData;
  const effectiveTemplate = template ?? Template ?? itemTemplate ?? ItemTemplate;

  const getKey = useCallback(
    (item: TreeItem): string => {
      const v = item[effectiveKeyProp];
      if (v != null) return String(v);
      return String(item.id ?? "");
    },
    [effectiveKeyProp],
  );

  const getText = useCallback(
    (item: TreeItem): string => {
      const v = item[effectiveTextProp];
      if (v != null) return String(v);
      // fallback to text property
      const fb = item["text"];
      if (fb != null) return String(fb);
      return "";
    },
    [effectiveTextProp],
  );

  const getChildren = useCallback(
    (item: TreeItem): TreeItem[] | undefined => {
      if (childrenGetter) {
        const result = childrenGetter(item);
        if (result !== undefined) return result;
      }
      const ch = item.children;
      if (Array.isArray(ch)) return ch;
      return undefined;
    },
    [childrenGetter],
  );

  // expanded state
  const collectExpanded = useCallback(
    (items: TreeItem[]): Set<string> => {
      const set = new Set<string>();
      const walk = (list: TreeItem[]) => {
        for (const it of list) {
          const k = getKey(it);
          if (it.expanded) set.add(k);
          const ch = getChildren(it);
          if (ch && ch.length > 0) walk(ch);
        }
      };
      walk(items);
      return set;
    },
    [getKey, getChildren],
  );

  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(() => collectExpanded(effectiveData));
  const [loadedChildren, setLoadedChildren] = useState<Map<string, TreeItem[]>>(() => new Map());
  const [loadingKeys, setLoadingKeys] = useState<Set<string>>(() => new Set());

  // sync expanded if data changes and has expanded flags? Keep initial only

  // selection state
  const controlledSingle = selectedItem ?? SelectedItem;
  const controlledMultiple = selectedItems ?? SelectedItems;
  const isControlledSingle = controlledSingle !== undefined;
  const isControlledMultiple = controlledMultiple !== undefined;
  const isControlled = effectiveSelectionMode === "multiple" ? isControlledMultiple : isControlledSingle;

  const buildInitialSelected = useCallback((): Set<string> => {
    if (effectiveSelectionMode === "multiple") {
      if (defaultSelectedItems && defaultSelectedItems.length > 0) {
        return new Set(defaultSelectedItems.map((it) => getKey(it)));
      }
      // collect from data where selected true
      const set = new Set<string>();
      const walk = (list: TreeItem[]) => {
        for (const it of list) {
          if (it.selected) set.add(getKey(it));
          const ch = getChildren(it);
          if (ch) walk(ch);
        }
      };
      walk(effectiveData);
      // also check if selectedItems prop provided externally? but uncontrolled case we ignore controlled prop
      return set;
    } else {
      if (defaultSelectedItem) return new Set([getKey(defaultSelectedItem)]);
      let found: string | null = null;
      const walk = (list: TreeItem[]): boolean => {
        for (const it of list) {
          if (it.selected) {
            found = getKey(it);
            return true;
          }
          const ch = getChildren(it);
          if (ch && walk(ch)) return true;
        }
        return false;
      };
      walk(effectiveData);
      if (found) return new Set([found]);
      return new Set();
    }
  }, [effectiveSelectionMode, defaultSelectedItem, defaultSelectedItems, getKey, getChildren, effectiveData]);

  const [internalSelectedKeys, setInternalSelectedKeys] = useState<Set<string>>(() => buildInitialSelected());

  const selectedKeys: Set<string> = useMemo(() => {
    if (effectiveSelectionMode === "multiple") {
      if (controlledMultiple !== undefined) {
        const arr = controlledMultiple as TreeItem[] | undefined;
        if (arr) return new Set(arr.map((it) => getKey(it)));
        return new Set();
      }
      return internalSelectedKeys;
    } else {
      if (controlledSingle !== undefined) {
        const single = controlledSingle as TreeItem | null | undefined;
        if (single) return new Set([getKey(single)]);
        return new Set();
      }
      return internalSelectedKeys;
    }
  }, [effectiveSelectionMode, controlledMultiple, controlledSingle, internalSelectedKeys, getKey]);

  // helper to find item by key in current data + loaded
  const findItemByKey = useCallback(
    (key: string): TreeItem | undefined => {
      let result: TreeItem | undefined;
      const walk = (list: TreeItem[]): boolean => {
        for (const it of list) {
          if (getKey(it) === key) {
            result = it;
            return true;
          }
          // check loaded children for this item
          const loaded = loadedChildren.get(getKey(it));
          const ch = loaded ?? getChildren(it);
          if (ch && walk(ch)) return true;
        }
        return false;
      };
      walk(effectiveData);
      // also search directly in loadedChildren values maybe orphan?
      if (!result) {
        for (const arr of loadedChildren.values()) {
          if (walk(arr)) break;
        }
      }
      return result;
    },
    [effectiveData, loadedChildren, getKey, getChildren],
  );

  const getAllItemsForSelection = useCallback((): Map<string, TreeItem> => {
    const map = new Map<string, TreeItem>();
    const walk = (list: TreeItem[]) => {
      for (const it of list) {
        const k = getKey(it);
        map.set(k, it);
        const loaded = loadedChildren.get(k);
        const ch = loaded ?? getChildren(it);
        if (ch) walk(ch);
      }
    };
    walk(effectiveData);
    return map;
  }, [effectiveData, loadedChildren, getKey, getChildren]);

  const handleSelect = useCallback(
    (item: TreeItem) => {
      const key = getKey(item);
      const disabled = !!item.disabled;
      if (disabled) return;
      if (effectiveSelectionMode === "multiple") {
        // uncontrolled update if not controlled
        const next = new Set(selectedKeys);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        if (!isControlled) setInternalSelectedKeys(next);
        const handler = onChange ?? Change;
        if (handler) {
          const map = getAllItemsForSelection();
          const selectedItemsArr: TreeItem[] = [];
          for (const k of next) {
            const found = map.get(k) ?? findItemByKey(k);
            if (found) selectedItemsArr.push(found);
          }
          handler({ item, selectedItems: selectedItemsArr });
        }
      } else {
        const already = selectedKeys.has(key);
        // For single, keep selected if already selected? But toggle to deselect if same? Spec doesn't define; we keep selected
        // We'll set to new key even if already selected (no change)
        if (!already || selectedKeys.size !== 1 || !selectedKeys.has(key)) {
          if (!isControlled) setInternalSelectedKeys(new Set([key]));
          const handler = onChange ?? Change;
          if (handler) {
            handler({ item, selectedItem: item });
          }
        } else {
          // clicking already selected also emits?
          // Optionally emit again
          // We'll emit anyway for consistency
          const handler = onChange ?? Change;
          if (handler) handler({ item, selectedItem: item });
        }
      }
    },
    [getKey, effectiveSelectionMode, selectedKeys, isControlled, onChange, Change, getAllItemsForSelection, findItemByKey],
  );

  const handleToggleExpand = useCallback(
    async (item: TreeItem) => {
      const key = getKey(item);
      const disabled = !!item.disabled;
      if (disabled) return;
      const isExpanded = expandedKeys.has(key);
      const handlerExpand = onExpand ?? Expand;
      const handlerCollapse = onCollapse ?? Collapse;
      const ch = getChildren(item);
      const loaded = loadedChildren.get(key);
      const effectiveChildren = loaded ?? ch;
      const hasChildData = effectiveChildren !== undefined && effectiveChildren.length > 0;
      const isLazyCandidate = !hasChildData && effectiveLoadChildData != null;

      if (isExpanded) {
        setExpandedKeys((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
        handlerCollapse?.({ item });
        return;
      }

      // expanding
      if (isLazyCandidate) {
        // check if already loading
        if (loadingKeys.has(key)) return;
        setLoadingKeys((prev) => {
          const next = new Set(prev);
          next.add(key);
          return next;
        });
        try {
          const loader = effectiveLoadChildData as (item: TreeItem) => Promise<TreeItem[]>;
          const result = await loader(item);
          setLoadedChildren((prev) => {
            const next = new Map(prev);
            next.set(key, result);
            return next;
          });
          setExpandedKeys((prev) => {
            const next = new Set(prev);
            next.add(key);
            return next;
          });
          handlerExpand?.({ item });
        } catch {
          // ignore error, keep collapsed?
        } finally {
          setLoadingKeys((prev) => {
            const next = new Set(prev);
            next.delete(key);
            return next;
          });
        }
        return;
      }

      // normal expand
      setExpandedKeys((prev) => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      handlerExpand?.({ item });
    },
    [getKey, expandedKeys, getChildren, loadedChildren, effectiveLoadChildData, loadingKeys, onExpand, Expand, onCollapse, Collapse],
  );

  // ---- Checkbox cascade (allowCheckBoxes) ----
  // Structural maps over current data (incl. lazily loaded children).
  const hierarchy = useMemo(() => {
    const childrenOf = new Map<string, string[]>();
    const parentOf = new Map<string, string | null>();
    // Disabled keys are collected in the same walk so cascade checks can
    // exclude them with set lookups instead of per-node item searches.
    const disabledKeys = new Set<string>();
    const walk = (list: TreeItem[], parent: string | null) => {
      for (const it of list) {
        const k = getKey(it);
        if (!childrenOf.has(k)) childrenOf.set(k, []);
        parentOf.set(k, parent);
        if (it.disabled) disabledKeys.add(k);
        const loaded = loadedChildren.get(k);
        const ch = loaded ?? getChildren(it);
        if (ch && ch.length > 0) {
          childrenOf.set(k, ch.map((c) => getKey(c)));
          walk(ch, k);
        }
      }
    };
    walk(effectiveData, null);
    return { childrenOf, parentOf, disabledKeys };
  }, [effectiveData, loadedChildren, getKey, getChildren]);

  const descendantsOf = useCallback(
    (key: string): string[] => {
      const out: string[] = [];
      const stack = [...(hierarchy.childrenOf.get(key) ?? [])];
      while (stack.length > 0) {
        const k = stack.pop() as string;
        out.push(k);
        stack.push(...(hierarchy.childrenOf.get(k) ?? []));
      }
      return out;
    },
    [hierarchy],
  );

  const [internalCheckedKeys, setInternalCheckedKeys] = useState<Set<string>>(
    () => new Set(defaultCheckedKeys ?? []),
  );
  const checkedSet: Set<string> = checkedKeys !== undefined ? new Set(checkedKeys) : internalCheckedKeys;

  // Cascade contract: toggleCheck never adds/removes disabled descendants,
  // so derivation ignores them too — a parent with an unchecked disabled
  // child still reads checked once every *enabled* descendant is checked.
  // (An explicitly checked parent key always reads checked regardless.)
  const enabledDescendantsOf = useCallback(
    (key: string): string[] => {
      const disabled = hierarchy.disabledKeys;
      return descendantsOf(key).filter((k) => !disabled.has(k));
    },
    [descendantsOf, hierarchy],
  );

  const isChecked = useCallback(
    (key: string): boolean => {
      if (checkedSet.has(key)) return true;
      if (!allowCheckBoxes || !allowCheckChildren) return false;
      const desc = enabledDescendantsOf(key);
      return desc.length > 0 && desc.every((k) => checkedSet.has(k));
    },
    [checkedSet, allowCheckBoxes, allowCheckChildren, enabledDescendantsOf],
  );

  const isIndeterminate = useCallback(
    (key: string): boolean => {
      if (!allowCheckBoxes || !allowCheckChildren || checkedSet.has(key)) return false;
      const desc = enabledDescendantsOf(key);
      if (desc.length === 0) return false;
      const count = desc.filter((k) => checkedSet.has(k)).length;
      return count > 0 && count < desc.length;
    },
    [checkedSet, allowCheckBoxes, allowCheckChildren, enabledDescendantsOf],
  );

  const toggleCheck = useCallback(
    (item: TreeItem) => {
      if (!allowCheckBoxes || !!item.disabled) return;
      const key = getKey(item);
      const next = new Set(checkedSet);
      if (next.has(key) || isChecked(key)) {
        // Uncheck: mirror the check path — single key only unless
        // cascading, and never drop disabled descendants.
        next.delete(key);
        if (allowCheckChildren) {
          for (const k of enabledDescendantsOf(key)) next.delete(k);
        }
      } else {
        next.add(key);
        if (allowCheckChildren) {
          for (const k of enabledDescendantsOf(key)) next.add(k);
        }
      }
      if (checkedKeys === undefined) setInternalCheckedKeys(next);
      onCheckedChange?.([...next]);
    },
    [
      allowCheckBoxes,
      allowCheckChildren,
      checkedKeys,
      checkedSet,
      enabledDescendantsOf,
      getKey,
      isChecked,
      onCheckedChange,
    ],
  );

  // Build flat visible nodes list
  const visibleNodes: FlatNode[] = useMemo(() => {
    const result: FlatNode[] = [];
    const walk = (list: TreeItem[], level: number, parentKey: string | null) => {
      list.forEach((item, idx) => {
        const key = getKey(item);
        const text = getText(item);
        const ch = loadedChildren.get(key) ?? getChildren(item);
        let actualHasChildren: boolean;
        if (loadedChildren.has(key)) {
          const loaded = loadedChildren.get(key) as TreeItem[];
          actualHasChildren = loaded.length > 0;
        } else if (ch !== undefined) {
          actualHasChildren = ch.length > 0;
        } else if (effectiveLoadChildData) {
          // no children defined yet, assume lazy expandable
          actualHasChildren = true;
        } else {
          actualHasChildren = false;
        }
        const isExpanded = expandedKeys.has(key);
        const disabled = !!item.disabled;
        const setSize = list.length;
        const posInSet = idx + 1;
        result.push({
          item,
          key,
          text,
          level,
          posInSet,
          setSize,
          hasChildren: actualHasChildren,
          expanded: isExpanded,
          parentKey,
          disabled,
        });
        if (actualHasChildren && isExpanded) {
          const childrenToWalk = loadedChildren.get(key) ?? ch;
          if (childrenToWalk && childrenToWalk.length > 0) {
            walk(childrenToWalk, level + 1, key);
          }
        }
      });
    };
    walk(effectiveData, 1, null);
    return result;
  }, [effectiveData, getKey, getText, getChildren, loadedChildren, expandedKeys, effectiveLoadChildData, loadingKeys]);

  // Focus management
  const [focusedKey, setFocusedKey] = useState<string | null>(() => visibleNodes[0]?.key ?? null);
  const typeaheadRef = useRef<string>("");
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusedKey && visibleNodes.length > 0) {
      const first = visibleNodes[0];
      if (first) setFocusedKey(first.key);
    } else if (focusedKey && !visibleNodes.some((n) => n.key === focusedKey)) {
      const first = visibleNodes[0];
      if (first) setFocusedKey(first.key);
      else setFocusedKey(null);
    }
  }, [visibleNodes, focusedKey]);

  useEffect(() => {
    if (focusedKey) {
      const el = treeRef.current?.querySelector<HTMLElement>(`[data-key="${CSS.escape(focusedKey)}"]`);
      // fallback without escape if not supported
      let fallbackEl: HTMLElement | null = null;
      if (!el) {
        fallbackEl = treeRef.current?.querySelector<HTMLElement>(`[data-key="${focusedKey}"]`) ?? null;
      }
      const target = (el ?? fallbackEl) as HTMLElement | null;
      if (target && document.activeElement !== target) {
        // Only focus if tree container or its descendant already focused? But for programmatic keyboard nav we want to move focus
        // We'll focus if tree has focus
        if (treeRef.current?.contains(document.activeElement)) {
          target.focus();
        }
      }
    }
  }, [focusedKey]);

  const focusNode = useCallback(
    (key: string) => {
      setFocusedKey(key);
      // focus DOM element if exists
      requestAnimationFrame(() => {
        const esc = typeof CSS !== "undefined" && typeof CSS.escape === "function" ? CSS.escape(key) : key;
        let el = treeRef.current?.querySelector<HTMLElement>(`[data-key="${esc}"]`);
        if (!el) el = treeRef.current?.querySelector<HTMLElement>(`[data-key="${key}"]`) ?? null;
        el?.focus();
      });
    },
    [],
  );

  const getParentKey = useCallback(
    (key: string): string | null => {
      const node = visibleNodes.find((n) => n.key === key);
      return node?.parentKey ?? null;
    },
    [visibleNodes],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (visibleNodes.length === 0) return;
      const currentIdx = focusedKey ? visibleNodes.findIndex((n) => n.key === focusedKey) : -1;
      const currentNode = currentIdx >= 0 ? visibleNodes[currentIdx] : undefined;
      let nextKey: string | null = null;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (currentIdx === -1) {
          nextKey = visibleNodes[0]?.key ?? null;
        } else {
          const nextIdx = (currentIdx + 1) % visibleNodes.length;
          const nxt = visibleNodes[nextIdx];
          if (nxt) nextKey = nxt.key;
        }
        if (nextKey) focusNode(nextKey);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (currentIdx === -1) {
          const last = visibleNodes[visibleNodes.length - 1];
          if (last) nextKey = last.key;
        } else {
          const prevIdx = (currentIdx - 1 + visibleNodes.length) % visibleNodes.length;
          const prv = visibleNodes[prevIdx];
          if (prv) nextKey = prv.key;
        }
        if (nextKey) focusNode(nextKey);
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (!currentNode) return;
        if (currentNode.hasChildren && !currentNode.expanded) {
          void handleToggleExpand(currentNode.item);
        } else if (currentNode.hasChildren && currentNode.expanded) {
          // move to first child
          const nextIdx = currentIdx + 1;
          const candidate = visibleNodes[nextIdx];
          if (candidate && candidate.parentKey === currentNode.key) {
            focusNode(candidate.key);
          }
        }
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (!currentNode) return;
        if (currentNode.hasChildren && currentNode.expanded) {
          void handleToggleExpand(currentNode.item);
        } else {
          const parent = getParentKey(currentNode.key);
          if (parent) focusNode(parent);
        }
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        const first = visibleNodes[0];
        if (first) focusNode(first.key);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        const last = visibleNodes[visibleNodes.length - 1];
        if (last) focusNode(last.key);
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        // A focused checkbox handles Space natively via its own onChange —
        // return BEFORE preventDefault, which would cancel the native
        // toggle, and without toggling here (that would double-toggle).
        if (e.key === " " && (e.target as HTMLElement)?.tagName === "INPUT") return;
        e.preventDefault();
        if (!currentNode) return;
        // With checkboxes, Space toggles the check (Radzen behavior) while
        // Enter keeps selecting; without them both keys select.
        if (e.key === " " && allowCheckBoxes) {
          const target = findItemByKey(currentNode.key);
          if (target) toggleCheck(target);
          return;
        }
        handleSelect(currentNode.item);
        return;
      }
      if (e.key.length === 1 && /^[a-zA-Z0-9]$/.test(e.key)) {
        e.preventDefault();
        const query = (typeaheadRef.current + e.key).toLowerCase();
        typeaheadRef.current = query;
        if (typeaheadTimer.current) clearTimeout(typeaheadTimer.current);
        typeaheadTimer.current = setTimeout(() => {
          typeaheadRef.current = "";
        }, 500);
        const startIdx = currentIdx >= 0 ? currentIdx + 1 : 0;
        const doubled = [...visibleNodes, ...visibleNodes];
        const slice = doubled.slice(startIdx, startIdx + visibleNodes.length);
        const hit = slice.find((n) => n.text.toLowerCase().startsWith(query));
        if (hit) focusNode(hit.key);
        return;
      }
    },
    [visibleNodes, focusedKey, focusNode, handleToggleExpand, handleSelect, getParentKey, allowCheckBoxes, toggleCheck],
  );

  const handleTreeFocus = useCallback(() => {
    if (!focusedKey && visibleNodes.length > 0) {
      const first = visibleNodes[0];
      if (first) setFocusedKey(first.key);
    }
  }, [focusedKey, visibleNodes]);

  const renderNodes = (nodes: TreeItem[], level: number, _parentKey: string | null): React.ReactNode => {
    return (
      <ul role="group" className={styles.group}>
        {nodes.map((item, idx) => {
          const key = getKey(item);
          const text = getText(item);
          const ch = loadedChildren.get(key) ?? getChildren(item);
          let hasChildren: boolean;
          if (loadedChildren.has(key)) {
            const loaded = loadedChildren.get(key) as TreeItem[];
            hasChildren = loaded.length > 0;
          } else if (ch !== undefined) {
            hasChildren = ch.length > 0;
          } else if (effectiveLoadChildData) {
            hasChildren = true;
          } else {
            hasChildren = false;
          }
          const isExpanded = expandedKeys.has(key);
          const isSelected = selectedKeys.has(key);
          const isDisabled = !!item.disabled;
          const isLoading = loadingKeys.has(key);
          const isFocused = focusedKey === key;
          const setSize = nodes.length;
          const posInSet = idx + 1;
          const content = effectiveTemplate ? effectiveTemplate(item) : text;
          const checkState = allowCheckBoxes
            ? {
                checked: isChecked(key),
                indeterminate: isIndeterminate(key),
              }
            : null;

          return (
            <li key={key} role="none" className={styles.itemWrapper}>
              <div
                role="treeitem"
                data-key={key}
                tabIndex={isFocused ? 0 : -1}
                aria-expanded={hasChildren ? isExpanded : undefined}
                aria-selected={isSelected}
                aria-level={level}
                aria-setsize={setSize}
                aria-posinset={posInSet}
                aria-disabled={isDisabled || undefined}
                aria-busy={isLoading || undefined}
                className={[
                  styles.treeitem,
                  isSelected ? styles.selected : null,
                  isDisabled ? styles.disabled : null,
                  isFocused ? styles.focused : null,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  focusNode(key);
                  if (!isDisabled) handleSelect(item);
                }}
                onFocus={() => setFocusedKey(key)}
              >
                {allowCheckBoxes ? (
                  <IndeterminateCheckbox
                    className={styles.checkbox}
                    checked={checkState?.checked ?? false}
                    indeterminate={checkState?.indeterminate ?? false}
                    disabled={isDisabled}
                    aria-label={`Select ${text}`}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => toggleCheck(item)}
                  />
                ) : null}
                {hasChildren ? (
                  <button
                    type="button"
                    className={styles.caret}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${text}`}
                    aria-expanded={isExpanded}
                    tabIndex={-1}
                    disabled={isDisabled}
                    onClick={(e) => {
                      e.stopPropagation();
                      focusNode(key);
                      void handleToggleExpand(item);
                    }}
                  >
                    <span aria-hidden="true" className={[styles.caretIcon, isExpanded ? styles.caretOpen : null].filter(Boolean).join(" ")}>
                      <Icon name="chevron-right" size={10} />
                    </span>
                  </button>
                ) : (
                  <span className={styles.caretPlaceholder} aria-hidden="true" />
                )}
                <span className={styles.label}>{content}</span>
                {isLoading ? (
                  <span className={styles.loading} aria-hidden="true">
                    …
                  </span>
                ) : null}
              </div>
              {hasChildren && isExpanded ? (
                isLoading ? (
                  <div className={styles.loadingRow} aria-busy="true">
                    Loading…
                  </div>
                ) : ch && ch.length > 0 ? (
                  renderNodes(ch, level + 1, key)
                ) : loadedChildren.has(key) && (loadedChildren.get(key) as TreeItem[]).length > 0 ? (
                  renderNodes(loadedChildren.get(key) as TreeItem[], level + 1, key)
                ) : ch && ch.length === 0 ? null : null
              ) : null}
            </li>
          );
        })}
      </ul>
    );
  };

  // Prepare root nodes for rendering: effectiveData
  // But need to handle loaded children for root? already above
  return (
    <div
      ref={treeRef}
      role="tree"
      aria-label={effectiveAriaLabel}
      aria-multiselectable={effectiveSelectionMode === "multiple" || undefined}
      tabIndex={0}
      className={[styles.root, className].filter(Boolean).join(" ")}
      onKeyDown={handleKeyDown}
      onFocus={handleTreeFocus}
    >
      {effectiveData.length === 0 ? (
        <div className={styles.empty}>No items</div>
      ) : (
        renderNodes(effectiveData, 1, null)
      )}
    </div>
  );
}

export type { TreeProps as TreePropsAlias };

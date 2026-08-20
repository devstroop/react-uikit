import {
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Autocomplete.module.css";

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps {
  options?: readonly AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (value: string, option: AutocompleteOption) => void;
  placeholder?: string;
  size?: ComponentSize;
  invalid?: boolean;
  disabled?: boolean;
  filter?: (option: AutocompleteOption, query: string) => boolean;
  className?: string;
  name?: string;
  id?: string;
  "aria-label"?: string;
}

const defaultFilter = (option: AutocompleteOption, query: string) =>
  option.label.toLowerCase().includes(query.toLowerCase());

export function Autocomplete({
  options = [],
  value,
  defaultValue = "",
  onChange,
  onSelect,
  placeholder = "",
  size = "md",
  invalid = false,
  disabled = false,
  filter = defaultFilter,
  className,
  ...restProps
}: AutocompleteProps) {
  const baseId = useId();
  const listboxId = `${baseId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const inputValue = value ?? internalValue;

  const filtered = useMemo(
    () =>
      inputValue.trim() === ""
        ? [...options]
        : options.filter((option) => filter(option, inputValue)),
    [options, inputValue, filter],
  );

  const enabledFilteredIndexes = filtered
    .map((option, index) => (option.disabled ? -1 : index))
    .filter((index) => index >= 0);

  const [activeIndex, setActiveIndex] = useState(-1);

  const setQuery = (next: string) => {
    setInternalValue(next);
    onChange?.(next);
  };

  const select = (option: AutocompleteOption) => {
    setQuery(option.label);
    onSelect?.(option.value, option);
    setOpen(false);
  };

  const move = (direction: 1 | -1) => {
    if (enabledFilteredIndexes.length === 0) return;
    const current = enabledFilteredIndexes.includes(activeIndex)
      ? enabledFilteredIndexes.indexOf(activeIndex)
      : direction === 1
        ? -1
        : 0;
    const next =
      enabledFilteredIndexes[
        (current + direction + enabledFilteredIndexes.length) %
          enabledFilteredIndexes.length
      ];
    if (next != null) setActiveIndex(next);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setQuery(event.target.value);
    setOpen(true);
    setActiveIndex(-1);
  };

  const handleFocus = () => {
    if (disabled) return;
    if (inputValue !== "") setOpen(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (rootRef.current && !rootRef.current.contains(event.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          setActiveIndex(enabledFilteredIndexes[0] ?? -1);
        } else {
          move(1);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (open) move(-1);
        break;
      case "Enter":
        event.preventDefault();
        if (open && activeIndex >= 0 && filtered[activeIndex]) {
          select(filtered[activeIndex] as AutocompleteOption);
        }
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        if (open && activeIndex >= 0 && filtered[activeIndex]) {
          select(filtered[activeIndex] as AutocompleteOption);
        }
        setOpen(false);
        break;
    }
  };

  const clear = () => {
    setQuery("");
    setActiveIndex(-1);
    setOpen(true);
    inputRef.current?.focus();
  };

  return (
    <div ref={rootRef} className={[styles.root, className].filter(Boolean).join(" ")}>
      <div className={[styles.wrap, styles[size], invalid ? styles.invalid : null].filter(Boolean).join(" ")}>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            open && activeIndex >= 0 ? `${baseId}-option-${activeIndex}` : undefined
          }
          aria-invalid={invalid || undefined}
          disabled={disabled}
          value={inputValue}
          placeholder={placeholder}
          className={styles.input}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          {...restProps}
        />
        {inputValue !== "" && !disabled && (
          <button
            type="button"
            className={styles.clear}
            aria-label="Clear"
            onClick={clear}
          >
            ×
          </button>
        )}
      </div>
      {open && (
        <div id={listboxId} role="listbox" className={styles.menu}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>No matches</div>
          ) : (
            filtered.map((option, index) => (
              <div
                key={option.value}
                id={`${baseId}-option-${index}`}
                role="option"
                aria-selected={false}
                aria-disabled={option.disabled || undefined}
                className={[
                  styles.option,
                  index === activeIndex ? styles.active : null,
                  option.disabled ? styles.disabled : null,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (!option.disabled) select(option);
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                  if (!option.disabled) select(option);
                }}
                onMouseEnter={() => {
                  if (!option.disabled) setActiveIndex(index);
                }}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
import {
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react';
import styles from './ListBox.module.css';

export interface ListBoxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ListBoxProps {
  options?: readonly ListBoxOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
  className?: string;
  style?: CSSProperties;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export function ListBox({
  options = [],
  value,
  defaultValue,
  multiple = false,
  onChange,
  className,
  style,
  ...ariaProps
}: ListBoxProps) {
  const baseId = useId();
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    const initial = defaultValue;
    return initial == null
      ? []
      : Array.isArray(initial)
        ? [...initial]
        : [initial];
  });
  const selectedValues =
    value == null ? internalValue : Array.isArray(value) ? value : [value];
  const firstEnabled = options.findIndex((o) => !o.disabled);
  const [activeIndex, setActiveIndex] = useState(() =>
    firstEnabled >= 0 ? firstEnabled : 0
  );
  const typeaheadRef = useRef('');
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const commit = (values: string[]) => {
    setInternalValue(values);
    onChange?.(multiple ? values : (values[0] ?? ''));
  };

  const enabledIndexes = options
    .map((option, index) => (option.disabled ? -1 : index))
    .filter((index) => index >= 0);

  const toggle = (optionIndex: number) => {
    const option = options[optionIndex];
    if (!option || option.disabled) return;
    setActiveIndex(optionIndex);
    if (multiple) {
      const next = selectedValues.includes(option.value)
        ? selectedValues.filter((v) => v !== option.value)
        : [...selectedValues, option.value];
      commit(next);
    } else {
      commit([option.value]);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (enabledIndexes.length === 0) return;
    const current = enabledIndexes.includes(activeIndex)
      ? activeIndex
      : enabledIndexes[0]!;
    let next = -1;
    if (event.key === 'ArrowDown') {
      next =
        enabledIndexes[
          (enabledIndexes.indexOf(current) + 1) % enabledIndexes.length
        ]!;
    } else if (event.key === 'ArrowUp') {
      next =
        enabledIndexes[
          (enabledIndexes.indexOf(current) - 1 + enabledIndexes.length) %
            enabledIndexes.length
        ]!;
    } else if (event.key === 'Home') {
      next = enabledIndexes[0]!;
    } else if (event.key === 'End') {
      next = enabledIndexes[enabledIndexes.length - 1]!;
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle(current);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(event.key)) {
      event.preventDefault();
      const query = (typeaheadRef.current + event.key).toLowerCase();
      typeaheadRef.current = query;
      if (typeaheadTimer.current) clearTimeout(typeaheadTimer.current);
      typeaheadTimer.current = setTimeout(() => {
        typeaheadRef.current = '';
      }, 500);
      const doubled = [...enabledIndexes, ...enabledIndexes];
      const start = enabledIndexes.indexOf(current) + 1;
      const hit = doubled
        .slice(start)
        .find((index) => options[index]?.label.toLowerCase().startsWith(query));
      if (hit != null) setActiveIndex(hit);
      return;
    }
    if (next >= 0) {
      event.preventDefault();
      setActiveIndex(next);
      if (!multiple) commit([options[next]?.value ?? '']);
    }
  };

  return (
    <div
      role="listbox"
      tabIndex={0}
      aria-multiselectable={multiple || undefined}
      aria-activedescendant={
        options[activeIndex] ? `${baseId}-option-${activeIndex}` : undefined
      }
      style={style}
      className={[styles.box, className].filter(Boolean).join(' ')}
      onKeyDown={handleKeyDown}
      {...ariaProps}
    >
      {options.map((option, index) => {
        const selected = selectedValues.includes(option.value);
        const active = index === activeIndex;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          <div
            key={option.value}
            id={`${baseId}-option-${index}`}
            role="option"
            tabIndex={-1}
            aria-selected={selected}
            aria-disabled={option.disabled || undefined}
            className={[
              styles.option,
              selected ? styles.selected : null,
              active ? styles.active : null,
              option.disabled ? styles.disabled : null,
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => toggle(index)}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
}

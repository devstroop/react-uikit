import { useCallback, useState, type KeyboardEvent } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Rating.module.css';

export interface RatingProps {
  value?: number;
  stars?: number;
  readOnly?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  clearLabel?: string;
  rateLabel?: string;
  tabIndex?: number;
  className?: string;
  onChange?: (value: number) => void;
  onValueChange?: (value: number) => void;
}

export const Rating = ({
  value = 0,
  stars = 5,
  readOnly = false,
  disabled = false,
  ariaLabel = 'Rating',
  clearLabel = 'Clear',
  rateLabel = 'Rate',
  tabIndex = 0,
  className,
  onChange,
  onValueChange,
}: RatingProps) => {
  const [focused, setFocused] = useState<number>(value);

  const clamp = useCallback(
    (v: number): number => Math.min(stars, Math.max(1, v)),
    [stars]
  );

  const commit = useCallback(
    (v: number) => {
      onChange?.(v);
      onValueChange?.(v);
    },
    [onChange, onValueChange]
  );

  const select = useCallback(
    (v: number) => {
      if (readOnly || disabled) return;
      commit(v);
      setFocused(v);
    },
    [readOnly, disabled, commit]
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (readOnly || disabled) return;
    const base = focused > 0 ? focused : 1;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        select(clamp(base + 1));
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        select(clamp(base - 1));
        break;
      case 'Home':
        event.preventDefault();
        select(1);
        break;
      case 'End':
        event.preventDefault();
        select(stars);
        break;
    }
  };

  const items = Array.from({ length: stars }, (_, index) => index + 1);

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      aria-readonly={readOnly || undefined}
      className={[
        styles['dx-rating'],
        readOnly ? styles['dx-rating-readonly'] : null,
        disabled ? styles['dx-rating-disabled'] : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onKeyDown={handleKeyDown}
    >
      {!readOnly && !disabled && (
        <button
          type="button"
          className={styles['dx-rating-clear']}
          aria-label={clearLabel}
          tabIndex={value === 0 ? tabIndex : -1}
          disabled={disabled}
          onClick={() => select(0)}
        >
          <Icon name="ban" size={16} />
        </button>
      )}
      {items.map((index) => {
        const filled = index <= value;
        const focusedStar = index === (value > 0 ? value : focused);
        return (
          <button
            key={index}
            type="button"
            role="radio"
            aria-checked={filled}
            aria-posinset={index}
            aria-setsize={stars}
            aria-label={`${rateLabel} ${index}`}
            tabIndex={focusedStar ? tabIndex : -1}
            aria-disabled={disabled || readOnly || undefined}
            disabled={disabled || readOnly}
            className={[
              styles['dx-rating-item'],
              filled ? styles['dx-rating-item-filled'] : null,
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => select(index)}
            onFocus={() => setFocused(index)}
          >
            <span
              className={styles['dx-rating-icon-filled']}
              aria-hidden="true"
            >
              <Icon name="star" size={20} />
            </span>
            <span className={styles['dx-rating-icon-empty']} aria-hidden="true">
              <Icon name="star-outline" size={20} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

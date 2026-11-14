import { type ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Chip.module.css';

export interface ChipProps {
  /** Label text. */
  label: ReactNode;
  /** Optional leading icon glyph. */
  icon?: string;
  /** When provided, renders a remove button. */
  onRemove?: () => void;
  /** Disabled state. */
  disabled?: boolean;
  className?: string;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function Chip({
  label,
  icon,
  onRemove,
  disabled = false,
  className,
  visible = true,
}: ChipProps) {
  if (visible === false) return null;
  return (
    <span
      className={[styles.chip, disabled ? styles.disabled : null, className]
        .filter(Boolean)
        .join(' ')}
    >
      {icon ? <Icon icon={icon} size={14} /> : null}
      <span>{label}</span>
      {onRemove ? (
        <button
          type="button"
          className={styles.remove}
          aria-label="Remove"
          disabled={disabled}
          onClick={onRemove}
        >
          <Icon icon="close" size={12} />
        </button>
      ) : null}
    </span>
  );
}

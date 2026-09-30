import { type ReactNode } from 'react';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  visible = true,
}: EmptyStateProps) {
  if (visible === false) return null;
  return (
    <div className={[styles.emptyState, className].filter(Boolean).join(' ')}>
      {icon != null && <div className={styles.icon}>{icon}</div>}
      <div className={styles.title}>{title}</div>
      {description != null && (
        <div className={styles.description}>{description}</div>
      )}
      {action != null && <div className={styles.action}>{action}</div>}
    </div>
  );
}

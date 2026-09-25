import { type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import styles from './SidebarToggle.module.css';

export interface SidebarToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon glyph. Defaults to the menu (hamburger) glyph. */
  icon?: IconName;
  /** Accessible label. Defaults to a localized-neutral "Toggle sidebar". */
  label?: string;
}

/**
 * Hamburger toggle for collapsible sidebars (RadzenSidebarToggle
 * parity): a 40px target that flips `expanded` on the Sidebar, usually
 * placed in the Header.
 */
export function SidebarToggle({
  icon = 'menu',
  label = 'Toggle sidebar',
  className,
  type = 'button',
  children,
  ...props
}: SidebarToggleProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={[styles.toggle, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? <Icon name={icon} size={20} />}
    </button>
  );
}

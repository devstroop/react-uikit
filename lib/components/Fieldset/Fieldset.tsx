import { useId, useState, type ReactNode } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import styles from './Fieldset.module.css';

export interface FieldsetProps {
  /** Legend text. Hidden only when empty, untitled, and not collapsible. */
  text?: ReactNode;
  /** Custom legend content (replaces text + icon). */
  headerTemplate?: ReactNode;
  /** Legend icon glyph. */
  icon?: IconName;
  /** Icon tint. Defaults to currentColor. */
  iconColor?: string;
  /** Show the collapse toggle. Defaults to false. */
  allowCollapse?: boolean;
  /** Controlled collapsed state. */
  collapsed?: boolean;
  /** Initial collapsed state (uncontrolled). Defaults to false. */
  defaultCollapsed?: boolean;
  /** Content shown in place of children while collapsed. */
  summary?: ReactNode;
  /** Toggle button title attribute. Defaults to Expand/Collapse. */
  expandTitle?: string;
  collapseTitle?: string;
  /** Toggle button aria-label. Names the icon-only (untitled) toggle;
   * with visible text the text is the name (WCAG 2.5.3) and these are
   * ignored. Defaults to Expand/Collapse. */
  expandAriaLabel?: string;
  collapseAriaLabel?: string;
  onExpand?: () => void;
  onCollapse?: () => void;
  children?: ReactNode;
  className?: string;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function Fieldset({
  text,
  headerTemplate,
  icon,
  iconColor,
  allowCollapse = false,
  collapsed: controlledCollapsed,
  defaultCollapsed = false,
  summary,
  expandTitle,
  collapseTitle,
  expandAriaLabel,
  collapseAriaLabel,
  onExpand,
  onCollapse,
  children,
  className,
  visible = true,
}: FieldsetProps) {
  const generatedId = useId();
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  if (visible === false) return null;
  const collapsed = controlledCollapsed ?? internalCollapsed;
  const contentId = allowCollapse ? `${generatedId}-content` : undefined;

  const toggle = () => {
    const next = !collapsed;
    if (controlledCollapsed === undefined) setInternalCollapsed(next);
    if (next) {
      onCollapse?.();
    } else {
      onExpand?.();
    }
  };
  const showLegend =
    allowCollapse || text != null || icon != null || headerTemplate != null;
  // Collapse only exists when allowed: without allowCollapse the
  // section is always expanded and the summary never shows, so content
  // can never become unreachable.
  const effectiveCollapsed = allowCollapse ? collapsed : false;
  const showSummary = allowCollapse && collapsed && summary != null;
  const toggleTitle = effectiveCollapsed
    ? (expandTitle ?? 'Expand')
    : (collapseTitle ?? 'Collapse');
  const toggleAria = effectiveCollapsed
    ? (expandAriaLabel ?? 'Expand')
    : (collapseAriaLabel ?? 'Collapse');

  return (
    <fieldset
      className={[styles.fieldset, className].filter(Boolean).join(' ')}
    >
      {showLegend ? (
        <legend className={styles.legend}>
          {allowCollapse ? (
            <>
              <button
                type="button"
                className={styles.toggle}
                title={toggleTitle}
                // With visible text the content is the accessible name
                // (WCAG 2.5.3 Label in Name) and aria-expanded carries
                // the state; the custom labels only name the icon-only
                // toggle, where title alone would be too weak.
                aria-label={text == null ? toggleAria : undefined}
                aria-expanded={!effectiveCollapsed}
                aria-controls={contentId}
                onClick={toggle}
              >
                <Icon
                  name={effectiveCollapsed ? 'plus' : 'minus'}
                  size={16}
                  aria-hidden="true"
                />
                {icon != null && (
                  <Icon
                    name={icon}
                    aria-hidden="true"
                    {...(iconColor != null
                      ? { style: { color: iconColor } }
                      : {})}
                  />
                )}
                {text != null && (
                  <span className={styles.legendText}>{text}</span>
                )}
              </button>
              {headerTemplate}
            </>
          ) : (
            <>
              {icon != null && (
                <Icon
                  name={icon}
                  aria-hidden="true"
                  {...(iconColor != null
                    ? { style: { color: iconColor } }
                    : {})}
                />
              )}
              {text != null && (
                <span className={styles.legendText}>{text}</span>
              )}
              {headerTemplate}
            </>
          )}
        </legend>
      ) : null}
      <div
        className={styles.content}
        id={contentId}
        hidden={effectiveCollapsed}
      >
        {children}
      </div>
      {showSummary ? <div className={styles.summary}>{summary}</div> : null}
    </fieldset>
  );
}

import { ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
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
export declare function Fieldset({ text, headerTemplate, icon, iconColor, allowCollapse, collapsed: controlledCollapsed, defaultCollapsed, summary, expandTitle, collapseTitle, expandAriaLabel, collapseAriaLabel, onExpand, onCollapse, children, className, visible, }: FieldsetProps): import("react").JSX.Element | null;

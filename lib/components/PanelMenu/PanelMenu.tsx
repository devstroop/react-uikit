import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  Children,
  isValidElement,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import styles from './PanelMenu.module.css';

export interface PanelMenuItemEventArgs {
  text: string;
  value?: string;
  path?: string;
}

/** Radzen `NavLinkMatch` parity: exact vs prefix active-path matching. */
export type PanelMenuMatch = 'exact' | 'prefix';

/** Radzen `MenuItemDisplayStyle` parity (stacked = icon-over-text rail). */
export type PanelMenuDisplayStyle = 'icon' | 'iconAndText' | 'stacked';

/** Radzen `PanelMenuRenderMode` parity. Client renders the whole tree up front
 * (collapsed branches hidden); server mounts collapsed branches on expand. */
export type PanelMenuRenderMode = 'client' | 'server';

export interface PanelMenuProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'onClick'
> {
  children: ReactNode;
  /** Allow multiple expanded items (default true). Radzen `Multiple` parity. */
  multiple?: boolean;
  /** Radzen `DisplayStyle` parity. */
  displayStyle?: PanelMenuDisplayStyle;
  /** Show the expand caret. Radzen `ShowArrow` parity. */
  showArrow?: boolean;
  /** Default URL matching for `Selected` sync. Radzen `Match` parity. */
  match?: PanelMenuMatch;
  /** Radzen `RenderMode` parity. */
  renderMode?: PanelMenuRenderMode;
  /** Parent-level click: fires before the item's own `onClick`. Radzen `Click` parity.
   * Return `false` to cancel anchor navigation (client-side routers). */
  onClick?: (args: PanelMenuItemEventArgs) => unknown;
  ariaLabel?: string;
}

export interface PanelMenuItemProps {
  text: string;
  value?: string;
  /** Anchor+emit: renders `<a href>` and still fires click events (Radzen `Path` parity).
   * Hash-router consumers preventDefault() in their handler for client-side routing. */
  path?: string;
  icon?: IconName;
  iconColor?: string;
  image?: string;
  imageAlt?: string;
  target?: string;
  match?: PanelMenuMatch;
  disabled?: boolean;
  /** Custom row content; overrides icon/text/caret rendering. Radzen `Template` parity. */
  template?: ReactNode;
  /** Controlled expanded state. Radzen `@bind-Expanded` parity. */
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Controlled selected state. Radzen `@bind-Selected` parity. When uncontrolled
   * (no `onSelectedChange`), selection syncs from the URL like Radzen. */
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
  /** Item-level click: fires after the parent PanelMenu `onClick`. Radzen item `Click` parity.
   * Return `false` to cancel anchor navigation (client-side routers). */
  onClick?: (args: PanelMenuItemEventArgs) => unknown;
  children?: ReactNode;
}

interface PanelMenuContextValue {
  baseId: string;
  multiple: boolean;
  displayStyle: PanelMenuDisplayStyle;
  showArrow: boolean;
  renderMode: PanelMenuRenderMode;
  match: PanelMenuMatch;
  level: number;
  collapseSignal: number;
  collapseSkipRef: React.MutableRefObject<Set<string>>;
  emit: (args: PanelMenuItemEventArgs) => unknown;
  notifyOpened: (id: string, ancestors: string[]) => void;
  openAncestors: () => void;
}

const PanelMenuContext = createContext<PanelMenuContextValue | null>(null);

function hashPath(): string {
  if (typeof window === 'undefined') return '';
  return window.location.hash.replace(/^#\/?/, '');
}

function pathMatches(path: string, match: PanelMenuMatch): boolean {
  const hash = hashPath();
  const norm = path.replace(/^#?\/?/, '');
  if (match === 'prefix') {
    if (norm === '') return false;
    if (norm === '/') return hash === '' || hash === '/';
    return hash === norm || hash.startsWith(`${norm}/`);
  }
  return hash === norm;
}

function ItemIcon({
  icon,
  iconColor,
  image,
}: Pick<PanelMenuItemProps, 'icon' | 'iconColor' | 'image' | 'imageAlt'>) {
  if (image) {
    return (
      <span className={styles.icon} aria-hidden="true">
        <img src={image} alt="" width={16} height={16} />
      </span>
    );
  }
  if (icon) {
    return (
      <span
        className={styles.icon}
        aria-hidden="true"
        style={iconColor ? { color: iconColor } : undefined}
      >
        <Icon name={icon} size={16} />
      </span>
    );
  }
  return null;
}

function PanelMenuItemNode({
  itemKey,
  ancestors,
  props,
}: {
  itemKey: string;
  ancestors: string[];
  props: PanelMenuItemProps;
}) {
  const ctx = useContext(PanelMenuContext);
  if (!ctx) throw new Error('PanelMenuItem must be used inside <PanelMenu>');
  const { text, value, path, disabled } = props;
  const childItems = useMemo(
    () => Children.toArray(props.children).filter(isValidElement),
    [props.children]
  );
  const hasChildren = childItems.length > 0;
  const isDisabled = !!disabled;
  const match = props.match ?? ctx.match;

  const expandedControlled = props.expanded !== undefined;
  const [internalOpen, setInternalOpen] = useState(
    props.defaultExpanded ?? false
  );
  const open = expandedControlled ? (props.expanded ?? false) : internalOpen;
  const setOpen = useCallback(
    (next: boolean) => {
      if (!expandedControlled) setInternalOpen(next);
      props.onExpandedChange?.(next);
    },
    [expandedControlled, props]
  );

  // Radzen `CollapseAllAsync` parity: opening one item collapses the rest
  // (except the ancestor chain) when the menu is not `multiple`.
  useEffect(() => {
    if (ctx.collapseSignal > 0 && !ctx.collapseSkipRef.current.has(itemKey)) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- signal trigger only
  }, [ctx.collapseSignal]);

  const selectedControlled =
    props.onSelectedChange !== undefined || props.selected !== undefined;
  const [internalSelected, setInternalSelected] = useState(
    props.defaultSelected ?? false
  );
  const urlSelected =
    !selectedControlled && path ? pathMatches(path, match) : false;
  const selected =
    props.selected ??
    (selectedControlled ? internalSelected : urlSelected || internalSelected);

  const [, forceHash] = useState(0);
  useEffect(() => {
    if (!path) return;
    const onHash = () => forceHash((v) => v + 1);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [path]);

  const childCtx = useMemo<PanelMenuContextValue>(
    () => ({
      ...ctx,
      level: ctx.level + 1,
      openAncestors: () => {
        setOpen(true);
        ctx.openAncestors();
      },
    }),
    [ctx, setOpen]
  );

  // Radzen `EnsureVisible` parity: a URL-selected deep item expands its ancestors.
  useEffect(() => {
    if (urlSelected && ancestors.length > 0) childCtx.openAncestors();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount-only sync
  }, []);

  const fire = useCallback(
    (e: React.MouseEvent) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      const args: PanelMenuItemEventArgs = { text, value, path };
      // Anchor+emit: parent first, then item. Either may return false to
      // cancel anchor navigation (client-side routers); otherwise the
      // browser follows href.
      const results = [ctx.emit(args), props.onClick?.(args)];
      if (results.includes(false)) e.preventDefault();
      if (!selectedControlled) setInternalSelected(true);
      props.onSelectedChange?.(true);
    },
    [isDisabled, text, value, path, ctx, props, selectedControlled]
  );

  const toggle = useCallback(() => {
    if (isDisabled) return;
    if (!open) ctx.notifyOpened(itemKey, ancestors);
    setOpen(!open);
  }, [isDisabled, open, ctx, itemKey, ancestors, setOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (hasChildren) toggle();
        else (e.target as HTMLElement).click();
      } else if (e.key === 'Escape' && open) {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === 'ArrowRight' && hasChildren && !open) {
        e.preventDefault();
        ctx.notifyOpened(itemKey, ancestors);
        setOpen(true);
      } else if (e.key === 'ArrowLeft' && open) {
        e.preventDefault();
        setOpen(false);
      }
    },
    [hasChildren, toggle, open, setOpen, ctx, itemKey, ancestors]
  );

  const caret =
    hasChildren && ctx.showArrow ? (
      <span
        className={[styles.caret, open ? styles.open : null]
          .filter(Boolean)
          .join(' ')}
        aria-hidden="true"
      >
        <Icon name="chevron-down" size={10} />
      </span>
    ) : null;

  const content = props.template ?? (
    <>
      <ItemIcon
        icon={props.icon}
        iconColor={props.iconColor}
        image={props.image}
        imageAlt={props.imageAlt}
      />
      {ctx.displayStyle === 'icon' ? (
        <span className={styles.text} aria-label={text}>
          {props.icon || props.image ? null : text.slice(0, 1)}
        </span>
      ) : (
        <span className={styles.text}>{text}</span>
      )}
      {caret}
    </>
  );

  const panelId = `${ctx.baseId}-panel-${itemKey}`;
  const triggerId = `${ctx.baseId}-trigger-${itemKey}`;
  const triggerClass = [
    styles.trigger,
    isDisabled ? styles.disabled : null,
    open ? styles.expanded : null,
    selected ? styles.selected : null,
  ]
    .filter(Boolean)
    .join(' ');

  // Inside a parent's role="menu" panel every trigger must carry
  // role="menuitem" (axe aria-required-children); top-level triggers sit
  // in the nav's presentation list and keep their native button/link roles.
  const itemRole = ctx.level > 0 ? ('menuitem' as const) : undefined;
  const trigger = hasChildren ? (
    <button
      type="button"
      id={triggerId}
      role={itemRole}
      aria-expanded={open}
      aria-controls={panelId}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      className={triggerClass}
      onClick={toggle}
      onKeyDown={handleKeyDown}
    >
      {content}
    </button>
  ) : path && !isDisabled ? (
    <a
      id={triggerId}
      role={itemRole}
      href={path}
      target={props.target}
      aria-disabled={undefined}
      aria-current={selected ? 'page' : undefined}
      tabIndex={0}
      className={triggerClass}
      onClick={fire}
      onKeyDown={handleKeyDown}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      id={triggerId}
      role={itemRole}
      aria-current={selected ? 'page' : undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      className={triggerClass}
      onClick={fire}
      onKeyDown={handleKeyDown}
    >
      {content}
    </button>
  );

  const submenu = hasChildren ? (
    ctx.renderMode === 'server' && !open ? null : (
      <div
        id={panelId}
        role="menu"
        aria-labelledby={triggerId}
        className={styles.submenu}
        hidden={ctx.renderMode === 'client' && !open ? true : undefined}
      >
        <PanelMenuContext.Provider value={childCtx}>
          {childItems.map((child, i) => (
            <PanelMenuItemNode
              key={`${itemKey}-${i}`}
              itemKey={`${itemKey}-${i}`}
              ancestors={[...ancestors, itemKey]}
              props={(child as React.ReactElement<PanelMenuItemProps>).props}
            />
          ))}
        </PanelMenuContext.Provider>
      </div>
    )
  ) : null;

  return (
    <div
      className={styles.item}
      style={{ '--dx-panelmenu-level': ctx.level } as React.CSSProperties}
      data-dx-panelmenu-item=""
      data-level={ctx.level}
    >
      {trigger}
      {submenu}
    </div>
  );
}

export function PanelMenuItem(props: PanelMenuItemProps) {
  // Rendered by the parent <PanelMenu> via <PanelMenuItemNode>; direct render
  // only type-checks standalone usage but always lives under panel-menu context.
  const ctx = useContext(PanelMenuContext);
  if (!ctx) throw new Error('PanelMenuItem must be used inside <PanelMenu>');
  return (
    <PanelMenuItemNode itemKey={props.text} ancestors={[]} props={props} />
  );
}

export function PanelMenu({
  children,
  multiple = true,
  displayStyle = 'iconAndText',
  showArrow = true,
  match = 'prefix',
  renderMode = 'client',
  onClick,
  ariaLabel = 'Panel menu',
  className,
  ...rest
}: PanelMenuProps) {
  const baseId = useId();
  const [collapseSignal, setCollapseSignal] = useState(0);
  const collapseSkipRef = useRef<Set<string>>(new Set());

  const emit = useCallback(
    (args: PanelMenuItemEventArgs) => onClick?.(args),
    [onClick]
  );

  const notifyOpened = useCallback(
    (id: string, ancestors: string[]) => {
      if (multiple) return;
      collapseSkipRef.current = new Set([id, ...ancestors]);
      setCollapseSignal((v) => v + 1);
    },
    [multiple]
  );

  // Focus skips collapsed (hidden) branches and disabled items.
  const visibleFocusable = (root: HTMLElement): HTMLElement[] =>
    Array.from(
      root.querySelectorAll<HTMLElement>('button, a[href], [role="menuitem"]')
    ).filter(
      (el) =>
        !el.hasAttribute('disabled') &&
        el.getAttribute('aria-disabled') !== 'true' &&
        el.closest('[hidden]') == null
    );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') return; // item handles activation
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const target = event.target as HTMLElement;
      const focusable = visibleFocusable(event.currentTarget);
      const idx = focusable.indexOf(target);
      if (idx === -1) return;
      event.preventDefault();
      const dir = event.key === 'ArrowDown' ? 1 : -1;
      focusable[(idx + dir + focusable.length) % focusable.length]?.focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      const focusable = visibleFocusable(event.currentTarget);
      event.preventDefault();
      (event.key === 'Home'
        ? focusable[0]
        : focusable[focusable.length - 1]
      )?.focus();
    }
  };

  const ctx = useMemo<PanelMenuContextValue>(
    () => ({
      baseId,
      multiple,
      displayStyle,
      showArrow,
      renderMode,
      match,
      level: 0,
      collapseSignal,
      collapseSkipRef,
      emit,
      notifyOpened,
      openAncestors: () => undefined,
    }),
    [
      baseId,
      multiple,
      displayStyle,
      showArrow,
      renderMode,
      match,
      collapseSignal,
      emit,
      notifyOpened,
    ]
  );

  const topItems = useMemo(
    () => Children.toArray(children).filter(isValidElement),
    [children]
  );

  return (
    <nav
      aria-label={ariaLabel}
      className={[
        styles.root,
        displayStyle === 'icon' ? styles.iconOnly : null,
        displayStyle === 'stacked' ? styles.stacked : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div className={styles.list} role="presentation">
        <PanelMenuContext.Provider value={ctx}>
          {topItems.map((child, i) => (
            <PanelMenuItemNode
              key={`top-${i}`}
              itemKey={String(i)}
              ancestors={[]}
              props={(child as React.ReactElement<PanelMenuItemProps>).props}
            />
          ))}
        </PanelMenuContext.Provider>
      </div>
    </nav>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions -- item wrappers
   pre-open submenus for pointer users only; keyboard and touch operate
   entirely through the focusable menuitem buttons/links. */
import {
  Fragment,
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
import styles from './Menu.module.css';

export interface MenuItemEventArgs {
  text: string;
  value?: string;
  path?: string;
}

/** Radzen `NavLinkMatch` parity: exact vs prefix active-path matching. */
export type MenuMatch = 'exact' | 'prefix';

export interface MenuProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'onClick'
> {
  children: ReactNode;
  /** Open submenus on click (true, default) or on hover (false). Radzen `ClickToOpen` parity. */
  clickToOpen?: boolean;
  /** Cascade level 2+ submenus sideways instead of inline. Radzen `Flyout` parity. */
  flyout?: boolean;
  /** Collapse to a hamburger toggle on small screens. Radzen `Responsive` parity. */
  responsive?: boolean;
  /** Render as a vertical context-menu popup (`role="menu"`). Radzen `IsContextMenu` parity. */
  isContextMenu?: boolean;
  /** Parent-level click: fires before the item's own `onClick`. Radzen `Click` parity.
   * Return `false` to cancel anchor navigation (client-side routers). */
  onClick?: (args: MenuItemEventArgs) => unknown;
  /** Fired when the menu requests dismissal (Escape at root). Radzen `Close` parity. */
  onClose?: () => void;
  ariaLabel?: string;
  /** Hamburger toggle aria-label. Radzen `ToggleAriaLabel` parity. */
  toggleAriaLabel?: string;
}

export interface MenuItemProps {
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
  match?: MenuMatch;
  disabled?: boolean;
  /** Custom row content; overrides icon/text/caret rendering. Radzen `Template` parity. */
  template?: ReactNode;
  /** Item-level click: fires after the parent Menu `onClick`. Radzen item `Click` parity.
   * Return `false` to cancel anchor navigation (client-side routers). */
  onClick?: (args: MenuItemEventArgs) => unknown;
  /** Controlled open state for items with children. Radzen `Expanded` parity. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

interface MenuContextValue {
  baseId: string;
  flyout: boolean;
  clickToOpen: boolean;
  level: number;
  closeSignal: number;
  emit: (args: MenuItemEventArgs) => unknown;
  closeAll: () => void;
  openKey: string | null;
  setOpenKey: (key: string | null) => void;
  activeKey: string | null;
  setActiveKey: (key: string | null) => void;
  defaultStopKey: string | null;
}

const MenuContext = createContext<MenuContextValue | null>(null);

function activePath(
  path: string | undefined,
  match: MenuMatch | undefined
): boolean {
  if (!path || typeof window === 'undefined') return false;
  const hash = window.location.hash.replace(/^#\/?/, '');
  const norm = path.replace(/^#?\/?/, '');
  if (match === 'prefix') {
    if (norm === '') return false;
    return hash === norm || hash.startsWith(`${norm}/`);
  }
  return hash === norm;
}

function useDisclosure(
  controlled: boolean,
  controlledValue: boolean | undefined,
  defaultValue: boolean,
  onChange: ((open: boolean) => void) | undefined,
  closeSignal: number
): [boolean, (next: boolean) => void] {
  const [internal, setInternal] = useState(defaultValue);
  const open = controlled ? (controlledValue ?? false) : internal;
  const set = useCallback(
    (next: boolean) => {
      if (!controlled) setInternal(next);
      onChange?.(next);
    },
    [controlled, onChange]
  );
  // External close broadcast: internal state adjusts during render (pure);
  // onChange fires post-commit from the effect below.
  const [prevCloseSignal, setPrevCloseSignal] = useState(closeSignal);
  if (closeSignal !== prevCloseSignal) {
    setPrevCloseSignal(closeSignal);
    if (closeSignal > 0 && !controlled) setInternal(false);
  }
  useEffect(() => {
    if (closeSignal > 0) onChange?.(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- closeSignal only trigger
  }, [closeSignal]);
  return [open, set];
}

function ItemIcon({
  icon,
  iconColor,
  image,
  imageAlt,
}: Pick<MenuItemProps, 'icon' | 'iconColor' | 'image' | 'imageAlt'>) {
  if (image) {
    return (
      <span className={styles.icon} aria-hidden="true">
        <img src={image} alt={imageAlt ?? ''} width={16} height={16} />
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
        <Icon icon={icon} size={16} />
      </span>
    );
  }
  return null;
}

/** Non-item children (e.g. `<hr />` separators, Radzen demo parity) render verbatim. */
function isMenuItem(child: unknown): boolean {
  return (
    isValidElement(child) && (child as React.ReactElement).type === MenuItem
  );
}

function MenuItemNode({
  itemKey,
  props,
}: {
  itemKey: string;
  props: MenuItemProps;
}) {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('MenuItem must be used inside <Menu>');
  const { text, value, path, disabled, template } = props;
  const childItems = useMemo(
    () => Children.toArray(props.children).filter(isValidElement),
    [props.children]
  );
  const hasChildren = childItems.length > 0;
  const isDisabled = !!disabled;
  const controlled = props.open !== undefined;
  const [ownOpen, setOwnOpen] = useDisclosure(
    controlled,
    props.open,
    props.defaultOpen ?? false,
    props.onOpenChange,
    ctx.closeSignal
  );
  const isTopLevel = ctx.level === 0;
  // Hover intent is per-trigger: a hover-open immediately followed by a
  // click on the same trigger keeps the submenu open.
  const hoveredAt = useRef(0);
  // Top level shares one open slot (only one dropdown at a time); controlled
  // top-level items render their own state and clear the shared slot on open.
  // Nested levels coordinate per-submenu through the nested context.
  const sharedOpen = isTopLevel && !controlled ? ctx.openKey === itemKey : null;
  const groupOpen = sharedOpen ?? ownOpen;
  const setGroupOpen = useCallback(
    (next: boolean) => {
      if (isTopLevel && !controlled) ctx.setOpenKey(next ? itemKey : null);
      else {
        setOwnOpen(next);
        if (isTopLevel) ctx.setOpenKey(null);
      }
    },
    [isTopLevel, controlled, ctx, itemKey, setOwnOpen]
  );

  const [, forceHash] = useState(0);
  useEffect(() => {
    if (!path) return;
    const onHash = () => forceHash((v) => v + 1);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [path]);
  const isActive = path && !hasChildren ? activePath(path, props.match) : false;
  // Roving tabindex: one tab stop per menu surface — the explicitly focused
  // item, or the first enabled item while nothing has been focused yet.
  const isTabStop =
    !isDisabled &&
    (ctx.activeKey === itemKey ||
      (ctx.activeKey == null && ctx.defaultStopKey === itemKey));
  const onItemFocus = () => ctx.setActiveKey(itemKey);

  const fire = useCallback(
    (e: React.MouseEvent) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      const args: MenuItemEventArgs = { text, value, path };
      // Anchor+emit: parent first, then item. Either may return false to
      // cancel anchor navigation (client-side routers); otherwise the
      // browser follows href.
      const results = [ctx.emit(args), props.onClick?.(args)];
      if (results.includes(false)) e.preventDefault();
      ctx.closeAll();
    },
    [isDisabled, text, value, path, ctx, props]
  );

  const handleTriggerClick = useCallback(() => {
    if (isDisabled) return;
    // Click-vs-hover race: a click immediately after a hover-open keeps the
    // submenu open instead of toggling it shut. In hover mode (clickToOpen
    // false) clicking an open trigger is always a no-op.
    if (
      groupOpen &&
      (Date.now() - hoveredAt.current < 600 || !ctx.clickToOpen)
    ) {
      hoveredAt.current = 0;
      return;
    }
    setGroupOpen(!groupOpen);
  }, [isDisabled, groupOpen, setGroupOpen, ctx.clickToOpen]);

  const handleHoverOpen = useCallback(() => {
    if (!hasChildren || isDisabled) return;
    if (!ctx.clickToOpen) {
      hoveredAt.current = Date.now();
      setGroupOpen(true);
    }
  }, [hasChildren, isDisabled, ctx.clickToOpen, setGroupOpen]);

  const handleHoverClose = useCallback(() => {
    if (!ctx.clickToOpen) setGroupOpen(false);
  }, [ctx.clickToOpen, setGroupOpen]);

  const submenuId = `${ctx.baseId}-submenu-${itemKey}`;
  const [nestedOpenKey, setNestedOpenKey] = useState<string | null>(null);
  const [subActiveKey, setSubActiveKey] = useState<string | null>(null);
  const defaultSubStopKey = useMemo(() => {
    const idx = childItems.findIndex(
      (child) =>
        isMenuItem(child) &&
        !(child as React.ReactElement<MenuItemProps>).props.disabled
    );
    return idx >= 0 ? `${itemKey}-${idx}` : null;
  }, [childItems, itemKey]);
  const [prevNestedClose, setPrevNestedClose] = useState(ctx.closeSignal);
  if (ctx.closeSignal !== prevNestedClose) {
    setPrevNestedClose(ctx.closeSignal);
    if (ctx.closeSignal > 0) setNestedOpenKey(null);
  }
  const nestedCtx = useMemo<MenuContextValue>(
    () => ({
      baseId: ctx.baseId,
      flyout: ctx.flyout,
      clickToOpen: ctx.clickToOpen,
      level: ctx.level + 1,
      closeSignal: ctx.closeSignal,
      emit: ctx.emit,
      closeAll: ctx.closeAll,
      openKey: nestedOpenKey,
      setOpenKey: setNestedOpenKey,
      activeKey: subActiveKey,
      setActiveKey: setSubActiveKey,
      defaultStopKey: defaultSubStopKey,
    }),
    [ctx, nestedOpenKey, subActiveKey, defaultSubStopKey]
  );

  const caret = hasChildren ? (
    <span className={styles.caret} aria-hidden="true">
      <Icon
        icon={
          ctx.flyout && !isTopLevel ? 'chevron_right' : 'keyboard_arrow_down'
        }
        size={10}
      />
    </span>
  ) : null;

  const content = template ?? (
    <>
      <ItemIcon
        icon={props.icon}
        iconColor={props.iconColor}
        image={props.image}
        imageAlt={props.imageAlt}
      />
      <span className={styles.text}>{text}</span>
      {caret}
    </>
  );

  if (hasChildren) {
    return (
      <div
        className={styles.itemWrapper}
        onMouseEnter={ctx.clickToOpen ? undefined : handleHoverOpen}
        onMouseLeave={ctx.clickToOpen ? undefined : handleHoverClose}
        data-dx-menu-item=""
      >
        <button
          type="button"
          role="menuitem"
          data-top={isTopLevel ? 'true' : undefined}
          data-index={itemKey}
          data-dx-menu-item=""
          aria-disabled={isDisabled || undefined}
          aria-haspopup="menu"
          aria-expanded={groupOpen}
          aria-controls={submenuId}
          tabIndex={isTabStop ? 0 : -1}
          disabled={isDisabled}
          className={[
            styles.item,
            isDisabled ? styles.disabled : null,
            styles.hasChildren,
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={handleTriggerClick}
          onFocus={onItemFocus}
        >
          {content}
        </button>
        {groupOpen ? (
          <div
            id={submenuId}
            role="menu"
            tabIndex={-1}
            aria-label={text}
            className={[
              styles.submenu,
              ctx.flyout && !isTopLevel ? styles.flyout : null,
            ]
              .filter(Boolean)
              .join(' ')}
            data-dx-menu-submenu=""
            onKeyDown={handleSubmenuKeyDown}
          >
            <MenuContext.Provider value={nestedCtx}>
              {childItems.map((child, i) =>
                isMenuItem(child) ? (
                  <MenuItemNode
                    key={`${itemKey}-${i}`}
                    itemKey={`${itemKey}-${i}`}
                    props={(child as React.ReactElement<MenuItemProps>).props}
                  />
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  <Fragment key={`${itemKey}-custom-${i}`}>{child}</Fragment>
                )
              )}
            </MenuContext.Provider>
          </div>
        ) : null}
      </div>
    );

    function handleSubmenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
      // Direct children only: each child wrapper's first [role="menuitem"] is its trigger.
      const items = Array.from(event.currentTarget.children)
        .map((child) => child.querySelector<HTMLElement>('[role="menuitem"]'))
        .filter(
          (el): el is HTMLElement =>
            el != null &&
            el.getAttribute('aria-disabled') !== 'true' &&
            !el.hasAttribute('disabled')
        );
      const active = document.activeElement as HTMLElement | null;
      const idx = active ? items.indexOf(active) : -1;
      // Stop propagation: the menubar-level handler must not re-handle these keys.
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        event.stopPropagation();
        (idx === -1 ? items[0] : items[(idx + 1) % items.length])?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        event.stopPropagation();
        (idx === -1
          ? items[items.length - 1]
          : items[(idx - 1 + items.length) % items.length]
        )?.focus();
      } else if (event.key === 'ArrowRight') {
        // Open a nested flyout from the focused trigger.
        if (active?.getAttribute('aria-haspopup') === 'menu') {
          event.preventDefault();
          event.stopPropagation();
          if (active.getAttribute('aria-expanded') !== 'true')
            (active as HTMLButtonElement).click();
          const nested = document.getElementById(
            active.getAttribute('aria-controls') ?? ''
          );
          nested?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
        }
      } else if (event.key === 'ArrowLeft' || event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        setGroupOpen(false);
      }
    }
  }

  const shared = {
    role: 'menuitem' as const,
    'aria-disabled': isDisabled || undefined,
    'aria-current': isActive ? ('page' as const) : undefined,
    tabIndex: isTabStop ? 0 : -1,
    onFocus: onItemFocus,
    'data-dx-menu-item': '',
    className: [styles.submenuItem, isDisabled ? styles.disabled : null]
      .filter(Boolean)
      .join(' '),
    onClick: fire,
  };
  if (path && !isDisabled) {
    return (
      <div className={styles.itemWrapper} data-dx-menu-item="">
        <a href={path} target={props.target} {...shared}>
          {content}
        </a>
      </div>
    );
  }
  return (
    <div className={styles.itemWrapper} data-dx-menu-item="">
      <button type="button" disabled={isDisabled} {...shared}>
        {content}
      </button>
    </div>
  );
}

export function MenuItem(props: MenuItemProps) {
  // Rendered by the parent <Menu> via <MenuItemNode>; direct render keeps TS happy
  // for standalone type-checking but always lives under menu context.
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('MenuItem must be used inside <Menu>');
  return <MenuItemNode itemKey={props.text} props={props} />;
}

export function Menu({
  children,
  clickToOpen = true,
  flyout = false,
  responsive = true,
  isContextMenu = false,
  onClick,
  onClose,
  ariaLabel = 'Menu',
  toggleAriaLabel = 'Toggle menu',
  className,
  ...rest
}: MenuProps) {
  const baseId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const menubarRef = useRef<HTMLDivElement>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [topActiveKey, setTopActiveKey] = useState<string | null>(null);
  const [closeSignal, setCloseSignal] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pendingFocusRef = useRef<string | null>(null);

  const emit = useCallback(
    (args: MenuItemEventArgs) => onClick?.(args),
    [onClick]
  );
  const closeAll = useCallback(() => {
    setOpenKey(null);
    setCloseSignal((v) => v + 1);
  }, []);

  useEffect(() => {
    if (openKey == null) return;
    const onMouseDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [openKey, closeAll]);

  useEffect(() => {
    if (
      pendingFocusRef.current != null &&
      openKey === pendingFocusRef.current
    ) {
      const submenu = document.getElementById(`${baseId}-submenu-${openKey}`);
      submenu
        ?.querySelector<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])'
        )
        ?.focus();
      pendingFocusRef.current = null;
    }
  }, [openKey, baseId]);

  const topItems = useMemo(
    () => Children.toArray(children).filter(isValidElement),
    [children]
  );
  const defaultStopKey = useMemo(() => {
    const idx = topItems.findIndex(
      (child) =>
        isMenuItem(child) &&
        !(child as React.ReactElement<MenuItemProps>).props.disabled
    );
    return idx >= 0 ? String(idx) : null;
  }, [topItems]);

  const ctx = useMemo<MenuContextValue>(
    () => ({
      baseId,
      flyout,
      clickToOpen,
      level: 0,
      closeSignal,
      emit,
      closeAll,
      openKey,
      setOpenKey,
      activeKey: topActiveKey,
      setActiveKey: setTopActiveKey,
      defaultStopKey,
    }),
    [
      baseId,
      flyout,
      clickToOpen,
      closeSignal,
      emit,
      closeAll,
      openKey,
      topActiveKey,
      defaultStopKey,
    ]
  );

  const handleMenubarKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const menubar = menubarRef.current;
    if (!menubar) return;
    // Direct children only: each top-level wrapper's first [role="menuitem"] is its trigger.
    const topButtons = Array.from(menubar.children)
      .map((child) => child.querySelector<HTMLElement>('[role="menuitem"]'))
      .filter(
        (el): el is HTMLElement =>
          el != null &&
          !el.hasAttribute('disabled') &&
          el.getAttribute('aria-disabled') !== 'true'
      );

    if (openKey != null) {
      const submenu = document.getElementById(`${baseId}-submenu-${openKey}`);
      if (submenu) {
        const subItems = Array.from(
          submenu.querySelectorAll<HTMLElement>('[role="menuitem"]')
        ).filter(
          (el) =>
            el.getAttribute('aria-disabled') !== 'true' &&
            !el.hasAttribute('disabled')
        );
        const active = document.activeElement as HTMLElement | null;
        const subIdx = active ? subItems.indexOf(active) : -1;
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          (subIdx === -1
            ? subItems[0]
            : subItems[(subIdx + 1) % subItems.length]
          )?.focus();
          return;
        }
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          (subIdx === -1
            ? subItems[subItems.length - 1]
            : subItems[(subIdx - 1 + subItems.length) % subItems.length]
          )?.focus();
          return;
        }
        if (event.key === 'Escape') {
          event.preventDefault();
          closeAll();
          onClose?.();
          menubar
            .querySelector<HTMLElement>(`[data-index="${openKey}"]`)
            ?.focus();
          return;
        }
        if (event.key === 'Enter' || event.key === ' ') return; // let control activate
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        closeAll();
        onClose?.();
        return;
      }
    }

    const focused = document.activeElement as HTMLElement | null;
    const idx = focused ? topButtons.indexOf(focused) : -1;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      if (topButtons.length === 0) return;
      topButtons[idx === -1 ? 0 : (idx + 1) % topButtons.length]?.focus();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      if (topButtons.length === 0) return;
      topButtons[
        idx === -1
          ? topButtons.length - 1
          : (idx - 1 + topButtons.length) % topButtons.length
      ]?.focus();
      return;
    }
    if (
      isContextMenu &&
      (event.key === 'ArrowDown' || event.key === 'ArrowUp')
    ) {
      event.preventDefault();
      if (topButtons.length === 0) return;
      const next =
        event.key === 'ArrowDown'
          ? topButtons[idx === -1 ? 0 : (idx + 1) % topButtons.length]
          : topButtons[
              idx === -1
                ? topButtons.length - 1
                : (idx - 1 + topButtons.length) % topButtons.length
            ];
      next?.focus();
      return;
    }
    if (event.key === 'ArrowDown') {
      if (idx >= 0) {
        const keyAttr = focused?.getAttribute('data-index');
        if (keyAttr == null) return;
        const trigger = menubar.querySelector<HTMLElement>(
          `[data-index="${keyAttr}"]`
        );
        if (trigger?.getAttribute('aria-haspopup') === 'menu') {
          event.preventDefault();
          pendingFocusRef.current = keyAttr;
          setOpenKey(keyAttr);
        }
      }
      return;
    }
    if (event.key === 'Home') {
      event.preventDefault();
      topButtons[0]?.focus();
      return;
    }
    if (event.key === 'End') {
      event.preventDefault();
      topButtons[topButtons.length - 1]?.focus();
      return;
    }
    // Single-char typeahead across top-level items (Radzen parity).
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      const names = topButtons.map((el) => el.textContent ?? '');
      const start = idx === -1 ? 0 : (idx + 1) % topButtons.length;
      for (let o = 0; o < topButtons.length; o++) {
        const cand = (start + o) % topButtons.length;
        if (names[cand]?.toLowerCase().startsWith(event.key.toLowerCase())) {
          event.preventDefault();
          topButtons[cand]?.focus();
          break;
        }
      }
    }
  };

  return (
    <nav
      ref={rootRef}
      aria-label={ariaLabel}
      className={[
        styles.root,
        isContextMenu ? styles.vertical : styles.horizontal,
        responsive ? styles.responsive : null,
        responsive && mobileOpen ? styles.mobileOpen : null,
        flyout ? styles.flyoutRoot : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {responsive ? (
        <button
          type="button"
          aria-label={toggleAriaLabel}
          aria-expanded={mobileOpen}
          className={styles.hamburger}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon icon="menu" size={20} />
        </button>
      ) : null}
      <div
        ref={menubarRef}
        role={isContextMenu ? 'menu' : 'menubar'}
        aria-label={ariaLabel}
        className={styles.menubar}
        onKeyDown={handleMenubarKeyDown}
      >
        <MenuContext.Provider value={ctx}>
          {topItems.map((child, i) =>
            isMenuItem(child) ? (
              <MenuItemNode
                key={`top-${i}`}
                itemKey={String(i)}
                props={(child as React.ReactElement<MenuItemProps>).props}
              />
            ) : (
              <Fragment key={`top-custom-${i}`}>{child}</Fragment>
            )
          )}
        </MenuContext.Provider>
      </div>
    </nav>
  );
}

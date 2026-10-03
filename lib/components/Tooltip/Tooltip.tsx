import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import styles from './Tooltip.module.css';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: ReactNode;
  /** Trigger element wrapped in the hit area. Omit when using `targetSelector`. */
  children?: ReactNode;
  placement?: TooltipPlacement;
  delayMs?: number;
  /**
   * Auto-dismiss this many ms after showing. Omit for the sticky default
   * (stays until pointer leaves, blur, or Escape).
   */
  durationMs?: number;
  /**
   * Delegate to every element matching a document-wide CSS selector
   * instead of wrapping `children`. The tooltip renders position:fixed
   * next to the hovered/focused target and wires aria-describedby on it
   * while open. Dismisses on Escape or scroll (position goes stale).
   */
  targetSelector?: string;
  className?: string;
}

/** Fixed-position gap between target edge and tooltip edge. */
const FLOATING_GAP = 8;

function floatingPosition(
  rect: DOMRect,
  placement: TooltipPlacement
): CSSProperties {
  switch (placement) {
    case 'bottom':
      return {
        top: rect.bottom + FLOATING_GAP,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, 0)',
      };
    case 'left':
      return {
        top: rect.top + rect.height / 2,
        left: rect.left - FLOATING_GAP,
        transform: 'translate(-100%, -50%)',
      };
    case 'right':
      return {
        top: rect.top + rect.height / 2,
        left: rect.right + FLOATING_GAP,
        transform: 'translate(0, -50%)',
      };
    default:
      return {
        top: rect.top - FLOATING_GAP,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, -100%)',
      };
  }
}

export function Tooltip({
  content,
  children,
  placement = 'top',
  delayMs = 300,
  durationMs,
  targetSelector,
  className,
}: TooltipProps) {
  const id = useId();
  const timer = useRef<number | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);
  // Target mode keeps its dismissal closure for the duration effect below.
  const hideFloatingRef = useRef<() => void>(() => {});
  const [open, setOpen] = useState(false);
  // targetSelector mode: the element the floating tooltip is showing for.
  const [activeTarget, setActiveTarget] = useState<Element | null>(null);

  const clearTimers = () => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  };

  // Wrapper mode (children): hover/focus on the wrapped trigger.
  const show = () => {
    clearTimers();
    timer.current = window.setTimeout(() => {
      timer.current = null;
      setOpen(true);
    }, delayMs);
  };
  const hide = () => {
    clearTimers();
    setOpen(false);
  };

  useEffect(() => () => clearTimers(), []);

  // durationMs counts from the committed open, not from the hover event: the
  // dismiss timer must not be able to outrun the first render, or a slow paint
  // collapses both updates into one and the tooltip never appears.
  useEffect(() => {
    if (!open || durationMs == null) return;
    const id = window.setTimeout(() => setOpen(false), durationMs);
    return () => window.clearTimeout(id);
  }, [open, durationMs]);

  // Wrapper mode: Escape dismisses while open.
  useEffect(() => {
    if (targetSelector || !open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hide();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetSelector, open]);

  // Target mode: document-level delegation. One tooltip instance serves
  // every element matching the selector (Radzen TargetSelector parity).
  useEffect(() => {
    if (!targetSelector) return;
    let pendingId: number | null = null;
    let current: Element | null = null;

    const clearPending = () => {
      if (pendingId !== null) {
        window.clearTimeout(pendingId);
        pendingId = null;
      }
    };
    const hideFloating = () => {
      clearPending();
      current = null;
      setActiveTarget(null);
    };
    hideFloatingRef.current = hideFloating;
    const showFloating = (element: Element) => {
      clearPending();
      current = element;
      pendingId = window.setTimeout(() => {
        pendingId = null;
        setActiveTarget(element);
      }, delayMs);
    };
    const match = (node: EventTarget | null): Element | null =>
      node instanceof Element ? node.closest(targetSelector) : null;

    const onOver = (event: Event) => {
      const element = match(event.target);
      if (!element || element === current) return;
      showFloating(element);
    };
    const onOut = (event: Event) => {
      const element = match(event.target);
      if (!element || element !== current) return;
      // Both mouseout and focusout carry relatedTarget.
      const to = (event as MouseEvent).relatedTarget;
      if (to instanceof Element && element.contains(to)) return;
      hideFloating();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') hideFloating();
    };
    // Fixed positioning goes stale on scroll; resize likewise.
    const dismiss = () => hideFloating();

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('focusin', onOver);
    document.addEventListener('focusout', onOut);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('scroll', dismiss, true);
    window.addEventListener('resize', dismiss);
    return () => {
      clearPending();
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('focusin', onOver);
      document.removeEventListener('focusout', onOut);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('scroll', dismiss, true);
      window.removeEventListener('resize', dismiss);
      current = null;
      setActiveTarget(null);
    };
  }, [targetSelector, delayMs]);

  // Target mode: same contract as wrapper mode — the window starts once the
  // floating tooltip has committed, not when the hover event was handled.
  useEffect(() => {
    if (!targetSelector || activeTarget === null || durationMs == null) return;
    const id = window.setTimeout(() => hideFloatingRef.current(), durationMs);
    return () => window.clearTimeout(id);
  }, [targetSelector, activeTarget, durationMs]);

  // Target mode: expose the tooltip to AT through the active element.
  useLayoutEffect(() => {
    const element = activeTarget;
    if (!element) return;
    const previous = element.getAttribute('aria-describedby');
    element.setAttribute(
      'aria-describedby',
      [previous, id].filter(Boolean).join(' ')
    );
    return () => {
      if (previous == null) element.removeAttribute('aria-describedby');
      else element.setAttribute('aria-describedby', previous);
    };
  }, [activeTarget, id]);

  // Target mode: measure once at show time; scroll hides instead of
  // tracking (see the delegation effect).
  useLayoutEffect(() => {
    const tip = tipRef.current;
    const element = activeTarget;
    if (!tip || !element) return;
    Object.assign(
      tip.style,
      floatingPosition(element.getBoundingClientRect(), placement)
    );
  }, [activeTarget, placement]);

  if (targetSelector) {
    if (!activeTarget) return null;
    return (
      <span
        ref={tipRef}
        role="tooltip"
        id={id}
        className={[
          styles.tooltip,
          styles[placement],
          styles.floating,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {content}
        <span className={styles.arrow} aria-hidden="true" />
      </span>
    );
  }

  const trigger = isValidElement(children)
    ? cloneElement(children, {
        'aria-describedby':
          [
            (children.props as Record<string, unknown>)['aria-describedby'],
            open ? id : null,
          ]
            .filter((v): v is string => typeof v === 'string')
            .join(' ') || undefined,
      } as Record<string, unknown>)
    : children;

  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span
      className={[styles.trigger, className].filter(Boolean).join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {trigger}
      {open && (
        <span
          role="tooltip"
          id={id}
          className={[styles.tooltip, styles[placement]]
            .filter(Boolean)
            .join(' ')}
        >
          {content}
          <span className={styles.arrow} aria-hidden="true" />
        </span>
      )}
    </span>
  );
}

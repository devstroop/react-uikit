import {
  Children,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import styles from './Layout.module.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

type LayoutCommonProps = {
  children?: ReactNode;
};

export type LayoutProps = LayoutCommonProps &
  (
    | ({ bare?: false } & HTMLAttributes<HTMLDivElement>)
    | {
        /**
         * Render children without the layout wrapper (deliberate bare
         * pages such as 404s). Wrapper props (className, id, style…)
         * are a type error in this mode, so nothing is silently
         * dropped.
         */
        bare: true;
      }
  );

type SidebarElement = ReactElement<{
  position?: 'left' | 'right' | 'start' | 'end';
  fullHeight?: boolean;
  className?: string;
}>;

export function Layout(props: LayoutProps) {
  if (props.bare === true) {
    return <>{props.children}</>;
  }
  const { className, children, ...rest } = props;
  const header: ReactNode[] = [];
  const footer: ReactNode[] = [];
  const body: ReactNode[] = [];
  const left: ReactNode[] = [];
  const right: ReactNode[] = [];
  const sidebars: SidebarElement[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      body.push(child);
      return;
    }
    if (child.type === Header) {
      header.push(child);
    } else if (child.type === Footer) {
      footer.push(child);
    } else if (child.type === Sidebar) {
      const sidebar = child as SidebarElement;
      const position = sidebar.props.position;
      sidebars.push(sidebar);
      (position === 'right' || position === 'end' ? right : left).push(sidebar);
    } else {
      body.push(child);
    }
  });

  // Grid placement engages for exactly one sidebar and only when it is
  // fullHeight: the sidebar spans header-through-footer rows while the
  // remaining column takes header/body/footer (Radzen FullHeight
  // parity). Each region renders inside a single grid cell, so duplicate
  // headers/bodies/footers stack normally instead of overlapping.
  // Anything else keeps the classic flex row.
  const gridSidebar =
    sidebars.length === 1 && sidebars[0]?.props.fullHeight === true
      ? sidebars[0]
      : null;
  const gridRight =
    gridSidebar != null &&
    (gridSidebar.props.position === 'right' ||
      gridSidebar.props.position === 'end');

  if (gridSidebar) {
    const aside = gridRight ? right : left;
    return (
      <div
        className={[
          styles.layout,
          styles.grid,
          gridRight ? styles.gridRight : null,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {header.length > 0 && <div className={styles.gridHeader}>{header}</div>}
        <div className={styles.gridContents}>
          {aside}
          <div className={styles.gridBody}>{body}</div>
        </div>
        {footer.length > 0 && <div className={styles.gridFooter}>{footer}</div>}
      </div>
    );
  }

  return (
    <div
      className={[styles.layout, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {header}
      <div className={styles.row}>
        {left}
        {body}
        {right}
      </div>
      {footer}
    </div>
  );
}

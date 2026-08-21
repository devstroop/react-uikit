import styles from "./Breadcrumb.module.css";

export interface BreadcrumbItem {
  text: string;
  path?: string;
  icon?: string;
  disabled?: boolean;
}

export interface BreadcrumbItemEventArgs {
  text: string;
  path?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onClick?: (args: BreadcrumbItemEventArgs) => void;
  /** @deprecated use onClick */
  Click?: (args: BreadcrumbItemEventArgs) => void;
  ariaLabel?: string;
  className?: string;
}

export function Breadcrumb({ items, onClick, Click, ariaLabel = "Breadcrumb", className }: BreadcrumbProps) {
  const handler = onClick ?? Click;
  const emit = (item: BreadcrumbItem) => {
    if (item.disabled) return;
    handler?.({ text: item.text, path: item.path });
  };

  return (
    <nav aria-label={ariaLabel} className={[styles.root, className].filter(Boolean).join(" ")}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const disabled = !!item.disabled;
          return (
            <li key={`${item.text}-${index}`} className={styles.item}>
              {isLast ? (
                disabled ? (
                  <span
                    className={[styles.current, styles.disabled].filter(Boolean).join(" ")}
                    aria-current="page"
                    aria-disabled="true"
                    tabIndex={-1}
                  >
                    {item.icon ? (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : null}
                    {item.text}
                  </span>
                ) : item.path ? (
                  <a
                    href={item.path}
                    className={styles.link}
                    aria-current="page"
                    onClick={(e) => {
                      e.preventDefault();
                      emit(item);
                    }}
                  >
                    {item.icon ? (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : null}
                    <span className={styles.text}>{item.text}</span>
                  </a>
                ) : (
                  <span
                    className={styles.current}
                    aria-current="page"
                    tabIndex={0}
                  >
                    {item.icon ? (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : null}
                    {item.text}
                  </span>
                )
              ) : disabled ? (
                <span
                  className={[styles.link, styles.disabled].filter(Boolean).join(" ")}
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  {item.icon ? (
                    <span className={styles.icon} aria-hidden="true">
                      {item.icon}
                    </span>
                  ) : null}
                  <span className={styles.text}>{item.text}</span>
                </span>
              ) : item.path ? (
                <a
                  href={item.path}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    emit(item);
                  }}
                >
                  {item.icon ? (
                    <span className={styles.icon} aria-hidden="true">
                      {item.icon}
                    </span>
                  ) : null}
                  <span className={styles.text}>{item.text}</span>
                </a>
              ) : (
                <button
                  type="button"
                  className={styles.linkButton}
                  tabIndex={0}
                  onClick={() => emit(item)}
                >
                  {item.icon ? (
                    <span className={styles.icon} aria-hidden="true">
                      {item.icon}
                    </span>
                  ) : null}
                  <span className={styles.text}>{item.text}</span>
                </button>
              )}
              {!isLast ? (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

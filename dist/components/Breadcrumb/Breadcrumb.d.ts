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
export declare function Breadcrumb({ items, onClick, Click, ariaLabel, className }: BreadcrumbProps): import("react").JSX.Element;

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
    ariaLabel?: string;
    className?: string;
}
export declare function Breadcrumb({ items, onClick, ariaLabel, className, }: BreadcrumbProps): import("react").JSX.Element;

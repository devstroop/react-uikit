import { HTMLAttributes, ReactNode } from 'react';
type LayoutCommonProps = {
    children?: ReactNode;
};
export type LayoutProps = LayoutCommonProps & (({
    bare?: false;
} & HTMLAttributes<HTMLDivElement>) | {
    /**
     * Render children without the layout wrapper (deliberate bare
     * pages such as 404s). Wrapper props (className, id, style…)
     * are a type error in this mode, so nothing is silently
     * dropped.
     */
    bare: true;
});
export declare function Layout(props: LayoutProps): import("react").JSX.Element;
export {};

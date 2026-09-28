import type { ReactNode } from 'react';
import { IndexPage } from './pages/index';
import { LayoutDemos } from './pages/layout';
import { TypographyDemos } from './pages/typography';
import { ButtonDemos } from './pages/buttons';
import { FormDemos } from './pages/forms';
import { FeedbackDemos } from './pages/feedback';
import { NavigationDemos } from './pages/navigation';
import { DataDemos } from './pages/data';
import { DisplayDemos } from './pages/display';
import { ThemeDemos } from './pages/theme';
import { RecipeDemos } from './pages/recipes';

/** Demo props: every routed page receives its slug (Blazor route-data parity). */
export type DemoProps = { slug: string };

/**
 * Route registry: hash slug → page component (Blazor `@page` table parity).
 * The index route is the empty slug. Unknown slugs resolve to null and the
 * shell renders its NotFound fallback — same as Blazor's `<NotFound>`.
 */
export const ROUTE_COMPONENTS: Record<string, (props: DemoProps) => ReactNode> =
  {
    '': IndexPage,
    layout: LayoutDemos,
    header: LayoutDemos,
    body: LayoutDemos,
    footer: LayoutDemos,
    sidebar: LayoutDemos,
    sidebartoggle: LayoutDemos,
    row: LayoutDemos,
    column: LayoutDemos,
    stack: LayoutDemos,
    autogrid: LayoutDemos,
    text: TypographyDemos,
    icon: TypographyDemos,
    button: ButtonDemos,
    togglebutton: ButtonDemos,
    splitbutton: ButtonDemos,
    fabmenu: ButtonDemos,
    form: FormDemos,
    field: FormDemos,
    formfield: FormDemos,
    fieldset: FormDemos,
    input: FormDemos,
    textbox: FormDemos,
    textarea: FormDemos,
    password: FormDemos,
    mask: FormDemos,
    numeric: FormDemos,
    select: FormDemos,
    dropdown: FormDemos,
    autocomplete: FormDemos,
    listbox: FormDemos,
    checkbox: FormDemos,
    checkboxlist: FormDemos,
    radiobuttonlist: FormDemos,
    switch: FormDemos,
    slider: FormDemos,
    rating: FormDemos,
    colorpicker: FormDemos,
    datepicker: FormDemos,
    timespanpicker: FormDemos,
    securitycode: FormDemos,
    upload: FormDemos,
    selectbar: FormDemos,
    label: FormDemos,
    alert: FeedbackDemos,
    progress: FeedbackDemos,
    skeleton: FeedbackDemos,
    emptystate: FeedbackDemos,
    toast: FeedbackDemos,
    dialog: FeedbackDemos,
    tooltip: FeedbackDemos,
    breadcrumb: NavigationDemos,
    link: NavigationDemos,
    menu: NavigationDemos,
    panelmenu: NavigationDemos,
    profilemenu: NavigationDemos,
    tabs: NavigationDemos,
    steps: NavigationDemos,
    toc: NavigationDemos,
    pager: NavigationDemos,
    table: DataDemos,
    datagrid: DataDemos,
    datalist: DataDemos,
    tree: DataDemos,
    picklist: DataDemos,
    pivot: DataDemos,
    chart: DataDemos,
    gantt: DataDemos,
    scheduler: DataDemos,
    timeline: DataDemos,
    datafilter: DataDemos,
    qrcode: DataDemos,
    barcode: DataDemos,
    card: DisplayDemos,
    badge: DisplayDemos,
    avatar: DisplayDemos,
    stat: DisplayDemos,
    accordion: DisplayDemos,
    carousel: DisplayDemos,
    splitter: DisplayDemos,
    themeswitcher: ThemeDemos,
    themetoggle: ThemeDemos,
    'recipe-login': RecipeDemos,
    'recipe-404': RecipeDemos,
  };

export function resolveRoute(
  slug: string
): ((props: DemoProps) => ReactNode) | null {
  return ROUTE_COMPONENTS[slug] ?? null;
}

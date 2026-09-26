export interface DemoRoute {
  slug: string;
  title: string;
}

export interface DemoGroup {
  title: string;
  routes: DemoRoute[];
}

/** Showcase registry: one route per component, grouped for the nav. */
export const DEMO_GROUPS: DemoGroup[] = [
  {
    title: 'Layout',
    routes: [
      { slug: 'layout', title: 'Layout' },
      { slug: 'header', title: 'Header' },
      { slug: 'body', title: 'Body' },
      { slug: 'footer', title: 'Footer' },
      { slug: 'sidebar', title: 'Sidebar' },
      { slug: 'sidebartoggle', title: 'SidebarToggle' },
      { slug: 'row', title: 'Row' },
      { slug: 'column', title: 'Column' },
      { slug: 'stack', title: 'Stack' },
      { slug: 'autogrid', title: 'AutoGrid' },
    ],
  },
  {
    title: 'Typography',
    routes: [
      { slug: 'text', title: 'Text' },
      { slug: 'icon', title: 'Icon' },
    ],
  },
  {
    title: 'Buttons',
    routes: [
      { slug: 'button', title: 'Button' },
      { slug: 'togglebutton', title: 'Togglebutton' },
      { slug: 'splitbutton', title: 'Splitbutton' },
      { slug: 'fabmenu', title: 'FabMenu' },
    ],
  },
  {
    title: 'Forms',
    routes: [
      { slug: 'form', title: 'Form' },
      { slug: 'field', title: 'Field' },
      { slug: 'formfield', title: 'FormField' },
      { slug: 'fieldset', title: 'Fieldset' },
      { slug: 'input', title: 'Input' },
      { slug: 'textbox', title: 'Textbox' },
      { slug: 'textarea', title: 'Textarea' },
      { slug: 'password', title: 'Password' },
      { slug: 'mask', title: 'Mask' },
      { slug: 'numeric', title: 'Numeric' },
      { slug: 'select', title: 'Select' },
      { slug: 'dropdown', title: 'Dropdown' },
      { slug: 'autocomplete', title: 'Autocomplete' },
      { slug: 'listbox', title: 'Listbox' },
      { slug: 'checkbox', title: 'Checkbox' },
      { slug: 'checkboxlist', title: 'Checkboxlist' },
      { slug: 'radiobuttonlist', title: 'Radiobuttonlist' },
      { slug: 'switch', title: 'Switch' },
      { slug: 'slider', title: 'Slider' },
      { slug: 'rating', title: 'Rating' },
      { slug: 'colorpicker', title: 'Colorpicker' },
      { slug: 'datepicker', title: 'Datepicker' },
      { slug: 'timespanpicker', title: 'Timespanpicker' },
      { slug: 'securitycode', title: 'SecurityCode' },
      { slug: 'upload', title: 'Upload' },
      { slug: 'selectbar', title: 'Selectbar' },
      { slug: 'label', title: 'Label' },
    ],
  },
  {
    title: 'Feedback',
    routes: [
      { slug: 'alert', title: 'Alert' },
      { slug: 'progress', title: 'Progress' },
      { slug: 'skeleton', title: 'Skeleton' },
      { slug: 'emptystate', title: 'EmptyState' },
      { slug: 'toast', title: 'Toast' },
      { slug: 'dialog', title: 'Dialog' },
      { slug: 'tooltip', title: 'Tooltip' },
    ],
  },
  {
    title: 'Navigation',
    routes: [
      { slug: 'breadcrumb', title: 'Breadcrumb' },
      { slug: 'link', title: 'Link' },
      { slug: 'menu', title: 'Menu' },
      { slug: 'panelmenu', title: 'PanelMenu' },
      { slug: 'profilemenu', title: 'ProfileMenu' },
      { slug: 'tabs', title: 'Tabs' },
      { slug: 'steps', title: 'Steps' },
      { slug: 'toc', title: 'Toc' },
      { slug: 'pager', title: 'Pager' },
    ],
  },
  {
    title: 'Data',
    routes: [
      { slug: 'table', title: 'Table' },
      { slug: 'datagrid', title: 'DataGrid' },
      { slug: 'datalist', title: 'DataList' },
      { slug: 'tree', title: 'Tree' },
      { slug: 'picklist', title: 'PickList' },
      { slug: 'pivot', title: 'Pivot' },
      { slug: 'chart', title: 'Chart' },
      { slug: 'gantt', title: 'Gantt' },
      { slug: 'scheduler', title: 'Scheduler' },
      { slug: 'timeline', title: 'Timeline' },
      { slug: 'datafilter', title: 'DataFilter' },
      { slug: 'qrcode', title: 'QRCode' },
      { slug: 'barcode', title: 'Barcode' },
    ],
  },
  {
    title: 'Display',
    routes: [
      { slug: 'card', title: 'Card' },
      { slug: 'badge', title: 'Badge' },
      { slug: 'avatar', title: 'Avatar' },
      { slug: 'stat', title: 'Stat' },
      { slug: 'accordion', title: 'Accordion' },
      { slug: 'carousel', title: 'Carousel' },
      { slug: 'splitter', title: 'Splitter' },
    ],
  },
  {
    title: 'Theme',
    routes: [{ slug: 'themeswitcher', title: 'ThemeSwitcher' }],
  },
  {
    title: 'Recipes',
    routes: [
      { slug: 'recipe-login', title: 'Login split card' },
      { slug: 'recipe-404', title: 'Bare 404' },
    ],
  },
];

export function routeTitle(slug: string): string {
  for (const group of DEMO_GROUPS) {
    const found = group.routes.find((r) => r.slug === slug);
    if (found) return found.title;
  }
  return slug;
}

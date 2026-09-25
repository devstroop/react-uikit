export interface TreeItem {
    id: string;
    text: string;
    children?: TreeItem[];
    disabled?: boolean;
    expanded?: boolean;
    selected?: boolean;
    [key: string]: unknown;
}
export interface TreeChangeArgs {
    item: TreeItem;
    selectedItem?: TreeItem | null;
    selectedItems?: TreeItem[];
}
export interface TreeExpandArgs {
    item: TreeItem;
}
export interface TreeCollapseArgs {
    item: TreeItem;
}
export interface TreeProps {
    data?: TreeItem[];
    Data?: TreeItem[];
    children?: (item: TreeItem) => TreeItem[] | undefined;
    Children?: (item: TreeItem) => TreeItem[] | undefined;
    textProperty?: string;
    TextProperty?: string;
    keyProperty?: string;
    KeyProperty?: string;
    selectionMode?: 'single' | 'multiple';
    SelectionMode?: 'single' | 'multiple';
    selectedItem?: TreeItem | null;
    SelectedItem?: TreeItem | null;
    selectedItems?: TreeItem[];
    SelectedItems?: TreeItem[];
    defaultSelectedItem?: TreeItem | null;
    defaultSelectedItems?: TreeItem[];
    onChange?: (args: TreeChangeArgs) => void;
    Change?: (args: TreeChangeArgs) => void;
    onExpand?: (args: TreeExpandArgs) => void;
    Expand?: (args: TreeExpandArgs) => void;
    onCollapse?: (args: TreeCollapseArgs) => void;
    Collapse?: (args: TreeCollapseArgs) => void;
    loadChildData?: (item: TreeItem) => Promise<TreeItem[]>;
    LoadChildData?: (item: TreeItem) => Promise<TreeItem[]>;
    template?: (item: TreeItem) => React.ReactNode;
    Template?: (item: TreeItem) => React.ReactNode;
    itemTemplate?: (item: TreeItem) => React.ReactNode;
    ItemTemplate?: (item: TreeItem) => React.ReactNode;
    ariaLabel?: string;
    AriaLabel?: string;
    /** Render checkboxes with full cascade (Radzen AllowCheckBoxes parity). */
    allowCheckBoxes?: boolean;
    /** Controlled checked keys. Omit for uncontrolled. */
    checkedKeys?: string[];
    defaultCheckedKeys?: string[];
    onCheckedChange?: (keys: string[]) => void;
    /** Checking a parent checks descendants (default true). */
    allowCheckChildren?: boolean;
    className?: string;
}
export declare function Tree({ data, Data, children, Children, textProperty, TextProperty, keyProperty, KeyProperty, selectionMode, SelectionMode, selectedItem, SelectedItem, selectedItems, SelectedItems, defaultSelectedItem, defaultSelectedItems, onChange, Change, onExpand, Expand, onCollapse, Collapse, loadChildData, LoadChildData, template, Template, itemTemplate, ItemTemplate, ariaLabel, AriaLabel, allowCheckBoxes, checkedKeys, defaultCheckedKeys, onCheckedChange, allowCheckChildren, className, }: TreeProps): import("react").JSX.Element;
export type { TreeProps as TreePropsAlias };

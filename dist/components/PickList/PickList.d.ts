export interface PickListItem {
    id: string;
    text: string;
    disabled?: boolean;
    [key: string]: unknown;
}
export interface PickListMoveArgs {
    source: PickListItem[];
    target: PickListItem[];
    moved: PickListItem[];
    direction: "toTarget" | "toSource" | "up" | "down" | "allToTarget" | "allToSource";
}
export interface PickListProps {
    source?: PickListItem[];
    Source?: PickListItem[];
    target?: PickListItem[];
    Target?: PickListItem[];
    value?: PickListItem[];
    Value?: PickListItem[];
    targetValue?: PickListItem[];
    TargetValue?: PickListItem[];
    data?: PickListItem[];
    Data?: PickListItem[];
    onSourceChange?: (items: PickListItem[]) => void;
    SourceChange?: (items: PickListItem[]) => void;
    onTargetChange?: (items: PickListItem[]) => void;
    TargetChange?: (items: PickListItem[]) => void;
    keyProperty?: string;
    KeyProperty?: string;
    onMove?: (args: PickListMoveArgs) => void;
    Move?: (args: PickListMoveArgs) => void;
    ariaLabel?: string;
    AriaLabel?: string;
    className?: string;
    disabled?: boolean;
    Disabled?: boolean;
}
export declare function PickList({ source, Source, target, Target, value, Value, targetValue, TargetValue, data, Data, onSourceChange, SourceChange, onTargetChange, TargetChange, keyProperty, KeyProperty, onMove, Move, ariaLabel, AriaLabel, className, }: PickListProps): import("react").JSX.Element;

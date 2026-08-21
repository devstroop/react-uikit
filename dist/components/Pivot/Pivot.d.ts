export interface PivotField {
    property: string;
    title?: string;
}
export interface PivotAggregate extends PivotField {
    aggregate: "Sum" | "Average" | "Count" | "Min" | "Max";
}
export interface PivotProps {
    data: Record<string, unknown>[];
    rowFields?: PivotField[];
    columnFields?: PivotField[];
    aggregateFields?: PivotAggregate[];
    onFieldsChange?: (args: {
        rowFields: PivotField[];
        columnFields: PivotField[];
        aggregateFields: PivotAggregate[];
    }) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Pivot({ data, rowFields, columnFields, aggregateFields, onFieldsChange, ariaLabel, className }: PivotProps): import("react").JSX.Element;

export interface GanttTask {
    id: string;
    name: string;
    start: Date;
    end: Date;
    progress?: number;
    dependencies?: string[];
    resource?: string;
}
export interface GanttProps {
    tasks: GanttTask[];
    view?: "day" | "week";
    onTaskClick?: (args: {
        task: GanttTask;
    }) => void;
    onTaskChange?: (args: {
        task: GanttTask;
        newStart: Date;
        newEnd: Date;
    }) => void;
    onDependencyChange?: (args: {
        from: string;
        to: string;
    }) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Gantt({ tasks, view, onTaskClick, ariaLabel, className }: GanttProps): import("react").JSX.Element;

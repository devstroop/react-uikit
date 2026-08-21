export interface SchedulerEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    resource?: string;
    allDay?: boolean;
}
export interface SchedulerResource {
    id: string;
    name: string;
}
export interface SchedulerProps {
    data: SchedulerEvent[];
    view?: "day" | "week" | "month";
    date?: Date;
    onDateChange?: (date: Date) => void;
    resources?: SchedulerResource[];
    onEventClick?: (args: {
        event: SchedulerEvent;
    }) => void;
    onSlotClick?: (args: {
        date: Date;
        resource?: string;
    }) => void;
    onEventChange?: (args: {
        event: SchedulerEvent;
        newStart: Date;
        newEnd: Date;
    }) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Scheduler({ data, view, date: controlledDate, onDateChange, resources, onEventClick, onSlotClick, ariaLabel, className, }: SchedulerProps): import("react").JSX.Element;

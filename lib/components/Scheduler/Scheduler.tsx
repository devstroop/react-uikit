import { useState } from "react";
import styles from "./Scheduler.module.css";

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
  onEventClick?: (args: { event: SchedulerEvent }) => void;
  onSlotClick?: (args: { date: Date; resource?: string }) => void;
  onEventChange?: (args: { event: SchedulerEvent; newStart: Date; newEnd: Date }) => void;
  ariaLabel?: string;
  className?: string;
}

function fmt(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function Scheduler({
  data,
  view = "week",
  date: controlledDate,
  onDateChange,
  resources,
  onEventClick,
  onSlotClick,
  ariaLabel = "Scheduler",
  className,
}: SchedulerProps) {
  const [internalDate, setInternalDate] = useState(controlledDate ?? new Date());
  const date = controlledDate ?? internalDate;
  const setDate = (d: Date) => {
    if (!controlledDate) setInternalDate(d);
    onDateChange?.(d);
  };
  const days = view === "day" ? [date] : view === "week" ? Array.from({ length: 7 }, (_, i) => { const d = new Date(date); d.setDate(date.getDate() - date.getDay() + i); return d; }) : Array.from({ length: 30 }, (_, i) => { const d = new Date(date); d.setDate(1 + i); return d; });
  const hours = Array.from({ length: 12 }, (_, i) => 8 + i);
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} role="grid" aria-label={ariaLabel}>
      <div className={styles.header}>
        <button type="button" className={styles.navBtn} aria-label="Previous" onClick={() => { const d = new Date(date); d.setDate(d.getDate() - 7); setDate(d); }}>‹</button>
        <span className={styles.title}>{date.toLocaleDateString()}</span>
        <button type="button" className={styles.navBtn} aria-label="Next" onClick={() => { const d = new Date(date); d.setDate(d.getDate() + 7); setDate(d); }}>›</button>
      </div>
      {resources && (
        <div className={styles.resources} role="row">
          {resources.map((r) => (
            <div key={r.id} className={styles.resource} role="columnheader" aria-label={r.name}>{r.name}</div>
          ))}
        </div>
      )}
      <div className={styles.grid}>
        <div className={styles.timeCol}>
          {hours.map((h) => (
            <div key={h} className={styles.timeCell}>{h}:00</div>
          ))}
        </div>
        {days.map((day) => (
          <div key={day.toISOString()} className={styles.dayCol} role="gridcell" onClick={() => onSlotClick?.({ date: day })} tabIndex={0} aria-label={day.toLocaleDateString()}>
            <div className={styles.dayHeader}>{day.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}</div>
            {hours.map((h) => (
              <div key={h} className={styles.slot} role="gridcell" aria-selected={false} tabIndex={-1} onClick={() => { const d = new Date(day); d.setHours(h); onSlotClick?.({ date: d }); }} />
            ))}
            {data.filter((ev) => ev.start.toDateString() === day.toDateString()).map((ev) => (
              <button
                key={ev.id}
                type="button"
                className={styles.event}
                aria-label={`${ev.title} ${fmt(ev.start)} - ${fmt(ev.end)}`}
                aria-pressed={false}
                onClick={() => onEventClick?.({ event: ev })}
              >
                {ev.title}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

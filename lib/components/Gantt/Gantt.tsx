import { useState } from "react";
import styles from "./Gantt.module.css";

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
  onTaskClick?: (args: { task: GanttTask }) => void;
  onTaskChange?: (args: { task: GanttTask; newStart: Date; newEnd: Date }) => void;
  onDependencyChange?: (args: { from: string; to: string }) => void;
  ariaLabel?: string;
  className?: string;
}

export function Gantt({ tasks, view = "week", onTaskClick, ariaLabel = "Gantt", className }: GanttProps) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} role="grid" aria-label={ariaLabel} aria-rowcount={tasks.length}>
      <div className={styles.header} role="row">
        <div className={styles.headerCell} role="columnheader">Task</div>
        <div className={styles.timeline} role="columnheader">Timeline ({view})</div>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className={styles.row} role="row" aria-selected={selected === task.id}>
          <div className={styles.taskName} role="gridcell">{task.name}</div>
          <div className={styles.timelineCell} role="gridcell">
            <div
              className={styles.bar}
              role="button"
              aria-label={`${task.name} ${task.start.toLocaleDateString()} - ${task.end.toLocaleDateString()}${task.progress !== undefined ? `, ${task.progress}% complete` : ""}`}
              aria-pressed={selected === task.id}
              tabIndex={0}
              onClick={() => {
                setSelected(task.id);
                onTaskClick?.({ task });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(task.id);
                  onTaskClick?.({ task });
                }
              }}
            >
              <div className={styles.progress} style={{ width: `${task.progress ?? 0}%` }} />
            </div>
            {task.dependencies?.map((dep) => (
              <svg key={dep} className={styles.dep} aria-hidden="true"><line x1="0" y1="10" x2="20" y2="10" stroke="var(--dt-color-border)" /></svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

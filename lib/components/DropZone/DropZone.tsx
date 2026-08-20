import { forwardRef, useImperativeHandle, useRef, useState, type DragEvent } from "react";
import styles from "./DropZone.module.css";

export interface DropZoneHandle {
  open: () => void;
}

export interface DropZoneProps {
  accept?: string;
  multiple?: boolean;
  onDrop?: (files: FileList) => void;
  label?: string;
  dragLabel?: string;
  browseText?: string;
  disabled?: boolean;
  className?: string;
}

function matchesAccept(file: File, accept: string): boolean {
  if (!accept) return true;
  return accept.split(",").some((part) => {
    part = part.trim();
    if (!part) return false;
    if (part.startsWith(".")) return file.name.toLowerCase().endsWith(part.toLowerCase());
    if (part.endsWith("/*")) {
      const type = part.slice(0, -1);
      return file.type.startsWith(type);
    }
    return file.type === part;
  });
}

export const DropZone = forwardRef<DropZoneHandle, DropZoneProps>(function DropZone(
  {
    accept,
    multiple = false,
    onDrop,
    label = "Drop files here or browse",
    dragLabel = "Drop to attach",
    browseText = "Browse",
    disabled = false,
    className,
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const emitDrop = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const filtered = [...files].filter((f) => matchesAccept(f, accept ?? ""));
    if (filtered.length === 0) return;
    onDrop?.(filtered as unknown as FileList);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    setDragging(false);
    emitDrop(e.dataTransfer.files);
  };

  useImperativeHandle(ref, () => ({
    open: () => inputRef.current?.click(),
  }));

  return (
    <div
      role="region"
      aria-label={label}
      className={[styles.zone, dragging ? styles.dragging : null, disabled ? styles.disabled : null, className]
        .filter(Boolean)
        .join(" ")}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p className={styles.caption}>{dragging ? dragLabel : label}</p>
      {!disabled && (
        <button type="button" className={styles.browse} onClick={() => inputRef.current?.click()}>
          {browseText}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple={multiple}
        accept={accept}
        data-testid="dropzone-input"
        onChange={(e) => {
          emitDrop(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
});
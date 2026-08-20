import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Upload.module.css";

export interface UploadedFile {
  file: File;
  state: "pending" | "uploading" | "complete" | "error";
  progress: number;
  message?: string;
}

export interface UploadHandle {
  open: () => void;
  upload: () => void;
}

export interface UploadProps {
  url?: string;
  multiple?: boolean;
  parameterName?: string;
  auto?: boolean;
  headers?: Record<string, string>;
  accept?: string;
  chooseText?: string;
  children?: ReactNode;
  onProgress?: (name: string, progress: number) => void;
  onComplete?: (name: string) => void;
  onError?: (name: string, message: string) => void;
}

function formatSize(size: number): string {
  return size > 0 ? `${Math.max(1, Math.round(size / 1024))} KB` : "0 KB";
}

export const Upload = forwardRef<UploadHandle, UploadProps>(function Upload(
  {
    url,
    multiple = false,
    parameterName = "files",
    auto = true,
    headers,
    accept,
    chooseText = "Upload",
    children,
    onProgress,
    onComplete,
    onError,
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const xhrs = useRef(new Map<string, XMLHttpRequest>());

  const updateFile = (name: string, patch: Partial<UploadedFile>) => {
    setFiles((prev) => prev.map((f) => (f.file.name === name ? { ...f, ...patch } : f)));
  };

  const startUpload = (entry: UploadedFile) => {
    if (!url) return;
    const xhr = new XMLHttpRequest();
    xhrs.current.set(entry.file.name, xhr);
    const fd = new FormData();
    fd.append(parameterName, entry.file);

    xhr.upload.addEventListener("progress", (e) => {
      if (!e.lengthComputable) return;
      const progress = Math.round((e.loaded / e.total) * 100);
      updateFile(entry.file.name, { state: "uploading", progress });
      onProgress?.(entry.file.name, progress);
    });
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        updateFile(entry.file.name, { state: "complete", progress: 100 });
        onComplete?.(entry.file.name);
      } else {
        updateFile(entry.file.name, { state: "error", message: `HTTP ${xhr.status}` });
        onError?.(entry.file.name, `HTTP ${xhr.status}`);
      }
    });
    xhr.addEventListener("error", () => {
      updateFile(entry.file.name, { state: "error", message: "Network error" });
      onError?.(entry.file.name, "Network error");
    });
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
    }
    xhr.open("POST", url);
    xhr.send(fd);
    updateFile(entry.file.name, { state: "uploading", progress: 0 });
  };

  const handleSelect = (list: FileList | null) => {
    if (!list) return;
    const selected = [...list].map<UploadedFile>((f) => ({
      file: f,
      state: "pending",
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...selected]);
    if (inputRef.current) inputRef.current.value = "";
    if (auto) selected.forEach(startUpload);
  };

  const removeFile = (name: string) => {
    const xhr = xhrs.current.get(name);
    xhr?.abort();
    xhrs.current.delete(name);
    setFiles((prev) => prev.filter((f) => f.file.name !== name));
  };

  const trigger = children ?? (
    <button type="button" className={styles.trigger} onClick={() => inputRef.current?.click()}>
      <Icon name="upload" size={14} />
      {chooseText}
    </button>
  );

  useImperativeHandle(ref, () => ({
    open: () => inputRef.current?.click(),
    upload: () => files.forEach((f) => (f.state === "pending" ? startUpload(f) : null)),
  }));

  return (
    <div className={styles.wrapper}>
      {trigger}
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple={multiple}
        accept={accept}
        data-testid="upload-input"
        onChange={(e) => handleSelect(e.target.files)}
      />
      {!children && files.length > 0 && (
        <ul className={styles.list}>
          {files.map(({ file, state, progress, message }) => (
            <li key={file.name} className={styles.row} data-state={state} data-testid="upload-row">
              <span className={styles.name}>{file.name}</span>
              <span className={styles.size}>{formatSize(file.size)}</span>
              <span
                className={styles.progress}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              >
                <span className={styles.fill} style={{ width: `${progress}%` }} />
              </span>
              <span className={styles.status} role="status">
                {state === "uploading" ? "Uploading" : state === "complete" ? "Complete" : state === "error" ? (message ?? "Failed") : "Pending"}
              </span>
              <button
                type="button"
                className={styles.remove}
                aria-label={`Remove ${file.name}`}
                onClick={() => removeFile(file.name)}
              >
                <Icon name="close" size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
import { ReactNode } from 'react';
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
    /** Maximum files kept in the list (default unlimited). Extras are rejected via onError. */
    maxFileCount?: number;
    /** Maximum bytes per file. Oversize files are rejected via onError. */
    maxFileSize?: number;
    chooseText?: string;
    children?: ReactNode;
    onProgress?: (name: string, progress: number) => void;
    onComplete?: (name: string) => void;
    onError?: (name: string, message: string) => void;
}
export declare const Upload: import('react').ForwardRefExoticComponent<UploadProps & import('react').RefAttributes<UploadHandle>>;

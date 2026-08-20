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
export declare const DropZone: import('react').ForwardRefExoticComponent<DropZoneProps & import('react').RefAttributes<DropZoneHandle>>;

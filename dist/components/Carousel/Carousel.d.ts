export interface CarouselProps {
    items: React.ReactNode[];
    selectedIndex?: number;
    SelectedIndex?: number;
    defaultIndex?: number;
    auto?: boolean;
    Auto?: boolean;
    interval?: number;
    Interval?: number;
    pauseOnHover?: boolean;
    PauseOnHover?: boolean;
    showArrows?: boolean;
    ShowArrows?: boolean;
    showIndicators?: boolean;
    ShowIndicators?: boolean;
    onChange?: (index: number) => void;
    Change?: (index: number) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Carousel({ items, selectedIndex, SelectedIndex, defaultIndex, auto, Auto, interval, Interval, pauseOnHover, PauseOnHover, showArrows, ShowArrows, showIndicators, ShowIndicators, onChange, Change, ariaLabel, className, }: CarouselProps): import("react").JSX.Element | null;

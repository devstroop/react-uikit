import { useMemo } from "react";
import styles from "./Barcode.module.css";

export interface BarcodeProps {
  value: string;
  format?: "Code128";
  height?: number;
  showValue?: boolean;
  ariaLabel?: string;
  className?: string;
}

// Code 128 pattern widths (bar/space alternating), standard 107-entry table.
const PATTERNS = [
  "212222", "222122", "222221", "121223", "121322", "131222", "122213", "122312", "132212", "221213",
  "221312", "231212", "112232", "122132", "122231", "113222", "123122", "123221", "223211", "221132",
  "221231", "213212", "223112", "312131", "311222", "321122", "321221", "312212", "322112", "322211",
  "212123", "212321", "232121", "111323", "131123", "131321", "112313", "132113", "132311", "211313",
  "231113", "231311", "112133", "112331", "132131", "113123", "113321", "133121", "313121", "211331",
  "231131", "213113", "213311", "213131", "311123", "311321", "331121", "312113", "312311", "332111",
  "314111", "221411", "431111", "111224", "111422", "121124", "121421", "141122", "141221", "112214",
  "112412", "122114", "122411", "142112", "142211", "241211", "221114", "413111", "241112", "134111",
  "111242", "121142", "121241", "114212", "124112", "124211", "411212", "421112", "421211", "212141",
  "214121", "412121", "111143", "111341", "131141", "114113", "114311", "411113", "411311", "113141",
  "114131", "311141", "411131", "211412", "211214", "211232", "2331112",
] as const;

const START_B = 104;
const STOP = 106;

function encode(value: string): number[] {
  const codes: number[] = [START_B];
  for (let i = 0; i < value.length; i++) {
    const ch = value.charCodeAt(i);
    codes.push(ch >= 32 && ch <= 126 ? ch - 32 : 0);
  }
  let sum = START_B;
  for (let i = 1; i < codes.length; i++) sum += i * codes[i]!;
  codes.push(sum % 103, STOP);
  return codes;
}

export function Barcode({ value, format = "Code128", height = 60, showValue = false, ariaLabel, className }: BarcodeProps) {
  void format;
  const label = ariaLabel ?? `Barcode ${value}`;
  const bars = useMemo(() => {
    const modules: { x: number; w: number }[] = [];
    let x = 0;
    for (const code of encode(value)) {
      const widths = PATTERNS[code] ?? PATTERNS[0]!;
      for (let i = 0; i < widths.length; i++) {
        const w = Number(widths[i]);
        if (i % 2 === 0) modules.push({ x, w });
        x += w;
      }
    }
    return { modules, total: x };
  }, [value]);

  return (
    <span className={[styles.root, className].filter(Boolean).join(" ")}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${bars.total} ${height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={label}
        data-value={value}
      >
        <rect width={bars.total} height={height} fill="var(--dt-color-surface)" />
        {bars.modules.map((m, i) => (
          <rect key={i} x={m.x} y={0} width={m.w} height={height} fill="var(--dt-color-text)" />
        ))}
      </svg>
      {showValue && <span className={styles.value}>{value}</span>}
    </span>
  );
}

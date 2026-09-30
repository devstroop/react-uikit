/**
 * Minimal MD5 (RFC 1321) returning lowercase hex.
 *
 * Vendored (no dependency) for a single use: Gravatar URL hashing in
 * `Avatar`. Render must stay synchronous and browsers exclude MD5 from
 * `crypto.subtle`, so a tiny local implementation beats a package.
 * UTF-8 encodes the input (Gravatar emails are ASCII in practice;
 * normalization — trim + lowercase — happens at the call site).
 */
export function md5Hex(message: string): string {
  const bytes = new TextEncoder().encode(message);
  const bitLen = bytes.length * 8;
  const paddedLen = (((bytes.length + 8) >> 6) + 1) * 64;
  const padded = new Uint8Array(paddedLen);
  padded.set(bytes);
  padded[bytes.length] = 0x80;
  const view = new DataView(padded.buffer);
  view.setUint32(paddedLen - 8, bitLen >>> 0, true);
  view.setUint32(paddedLen - 4, Math.floor(bitLen / 0x100000000), true);

  const SHIFTS = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  const TABLE = Array.from({ length: 64 }, (_, i) =>
    Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000)
  );

  const add = (x: number, y: number): number => (x + y) | 0;
  const rotateLeft = (x: number, n: number): number =>
    (x << n) | (x >>> (32 - n));

  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;

  for (let offset = 0; offset < paddedLen; offset += 64) {
    const block: number[] = [];
    for (let i = 0; i < 16; i += 1) {
      block.push(view.getUint32(offset + i * 4, true));
    }
    let a = a0;
    let b = b0;
    let c = c0;
    let d = d0;
    for (let i = 0; i < 64; i += 1) {
      let f: number;
      let g: number;
      if (i < 16) {
        f = (b & c) | (~b & d);
        g = i;
      } else if (i < 32) {
        f = (d & b) | (~d & c);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        f = b ^ c ^ d;
        g = (3 * i + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * i) % 16;
      }
      f = add(add(add(f, a), TABLE[i]!), block[g]!);
      a = d;
      d = c;
      c = b;
      b = add(b, rotateLeft(f, SHIFTS[Math.floor(i / 16) * 4 + (i % 4)]!));
    }
    a0 = add(a0, a);
    b0 = add(b0, b);
    c0 = add(c0, c);
    d0 = add(d0, d);
  }

  const wordHex = (word: number): string => {
    let out = '';
    for (let i = 0; i < 4; i += 1) {
      out += `0${((word >>> (i * 8)) & 0xff).toString(16)}`.slice(-2);
    }
    return out;
  };
  return wordHex(a0) + wordHex(b0) + wordHex(c0) + wordHex(d0);
}

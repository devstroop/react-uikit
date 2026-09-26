/**
 * Minimal MD5 (RFC 1321) returning lowercase hex.
 *
 * Vendored (no dependency) for a single use: Gravatar URL hashing in
 * `Avatar`. Render must stay synchronous and browsers exclude MD5 from
 * `crypto.subtle`, so a tiny local implementation beats a package.
 * UTF-8 encodes the input (Gravatar emails are ASCII in practice;
 * normalization — trim + lowercase — happens at the call site).
 */
export declare function md5Hex(message: string): string;

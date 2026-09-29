import { describe, expect, it } from 'vitest';
import { resolveGap } from './gap';

describe('resolveGap', () => {
  it('turns unitless numbers into px', () => {
    expect(resolveGap(8)).toBe('8px');
    expect(resolveGap(20)).toBe('20px');
  });

  it('treats digits-only strings as px (Radzen Gap parity)', () => {
    expect(resolveGap('16')).toBe('16px');
    expect(resolveGap('0')).toBe('0px');
  });

  it('passes CSS lengths through verbatim', () => {
    expect(resolveGap('0.5rem')).toBe('0.5rem');
    expect(resolveGap('2em')).toBe('2em');
    expect(resolveGap('16px')).toBe('16px');
    expect(resolveGap('calc(1rem + 2px)')).toBe('calc(1rem + 2px)');
  });
});

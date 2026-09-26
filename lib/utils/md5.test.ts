import { describe, expect, it } from 'vitest';
import { md5Hex } from './md5';

describe('md5Hex', () => {
  it('matches RFC 1321 test vectors', () => {
    expect(md5Hex('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
    expect(md5Hex('a')).toBe('0cc175b9c0f1b6a831c399e269772661');
    expect(md5Hex('abc')).toBe('900150983cd24fb0d6963f7d28e17f72');
    expect(md5Hex('message digest')).toBe('f96b697d7cb7938d525a2f31aaf161d0');
    expect(md5Hex('abcdefghijklmnopqrstuvwxyz')).toBe(
      'c3fcd3d76192e4007dfb496cca67e13b'
    );
  });

  it('hashes the Gravatar canonical form', () => {
    // trim + lowercase applied by the caller; spot-check a real address.
    expect(md5Hex('user@example.com')).toBe('b58996c504c5638798eb6b511e6f49af');
  });

  it('handles multi-block inputs', () => {
    expect(
      md5Hex('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@')
      // Verified against system md5sum; 64 bytes forces two blocks.
    ).toBe('26883cb1c5f46c1ef8cb252068767e59');
  });
});

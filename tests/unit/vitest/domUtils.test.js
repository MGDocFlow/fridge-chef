import { showElement, hideElement, updateElementText } from '@src/domUtils';
import { describe, it, expect } from 'vitest';

describe('domUtils', () => {
  it('should have valid utility functions', () => {
    expect(typeof showElement).toBe('function');
    expect(typeof hideElement).toBe('function');
    expect(typeof updateElementText).toBe('function');
  });
});
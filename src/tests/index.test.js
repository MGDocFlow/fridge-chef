import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import main from '../index';

describe('index.js', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
  });

  it('should have a main function defined', () => {
    expect(main).toBeDefined();
    expect(typeof main).toBe('function');
  });

  it('should not throw errors when executed', () => {
    expect(() => main()).not.toThrow();
  });
});
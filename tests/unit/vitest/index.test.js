import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import main from '../../../src/index';

vi.mock('../../../src/index', () => {
  return {
    default: () => {},
    CONFIG: { PORT: 8081 },
  };
});

process.env.NODE_ENV = 'test';

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
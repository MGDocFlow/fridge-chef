import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    include: ['tests/unit/vitest/*.test.js'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    environment: 'jsdom',
    reporters: ['default', 'junit', 'html'],
    outputFile: {
      junit: 'test-results/junit-report.xml',
      html: 'test-results/html-report.html',
    },
  },
});
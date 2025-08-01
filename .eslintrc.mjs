import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname, // Using traditional __dirname instead of import.meta
  recommendedConfig: {
    js: { rules: {} },
    ts: { rules: {} }
  }
});

export default [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    }
  }),
  {
    ignores: ['node_modules/', '.next/', 'dist/']
  }
];
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';

export default [
  ...tseslint.configs.recommended,
  eslint.configs.recommended,
  {
    ignores: ['dist', 'tests','*.mjs'],
  },
  {
    files: ['src'],
    languageOptions: {
      globals: globals.browser,
      parser,
    },
  },
];


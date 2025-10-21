import personalConfig from '@goloto/eslint-config';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [
      personalConfig,
      jsEslint.configs.recommended, 
      tsEslint.configs.strict,
      tsEslint.configs.stylistic,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
    ],
    files: ['**/*.{ts,tsx}'],
  },
])

import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslintConfigPrettier,
];

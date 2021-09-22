'use strict';

module.exports = {
  bracketSpacing: true,
  printWidth: 120,
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  plugins: [
    '@prettier/plugin-php',
    '@prettier/plugin-xml',
    'prettier-plugin-java',
    'prettier-plugin-organize-imports',
    'prettier-plugin-package',
    'prettier-plugin-sh',
    'prettier-plugin-solidity'
  ]
};

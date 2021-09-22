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
    '@prettier/plugin-pug',
    '@prettier/plugin-ruby',
    '@prettier/plugin-xml',
    'prettier-plugin-go-template',
    'prettier-plugin-ini',
    'prettier-plugin-java',
    'prettier-plugin-organize-imports',
    'prettier-plugin-package',
    'prettier-plugin-properties',
    'prettier-plugin-sh',
    'prettier-plugin-solidity'
  ]
};

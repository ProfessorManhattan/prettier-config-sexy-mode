const prettierOptions = {
  bracketSpacing: true,
  goTemplateBracketSpacing: true,
  overrides: [
    {
      files: ['*.go.html'],
      options: {
        parser: 'go-template'
      }
    },
    {
      files: ['*.yml'],
      options: {
        printWidth: 160
      }
    }
  ],
  plugins: [
    '@prettier/plugin-php',
    '@prettier/plugin-pug',
    '@prettier/plugin-ruby',
    '@prettier/plugin-xml',
    'prettier-plugin-go-template',
    'prettier-plugin-ini',
    'prettier-plugin-java',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-imports',
    'prettier-plugin-package-perfection',
    'prettier-plugin-properties',
    'prettier-plugin-sh',
    'prettier-plugin-solidity',
    'prettier-plugin-sql'
  ],
  printWidth: 120,
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = prettierOptions

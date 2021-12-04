const prettierOptions = {
  bracketSpacing: true,
  printWidth: 120,
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  goTemplateBracketSpacing: true,
  overrides: [
    {
      files: ["*.go.html"],
      options: {
        parser: "go-template",
      }
    },
    {
      files: ["*.yml"],
      options: {
        printWidth: 160
      }
    }
  ],
  plugins: [
    '@prettier/plugin-xml',
    'prettier-plugin-go-template',
    'prettier-plugin-ini',
    'prettier-plugin-organize-imports',
    'prettier-plugin-package-perfection',
    'prettier-plugin-properties',
    'prettier-plugin-sh'
  ]
};


module.exports = prettierOptions

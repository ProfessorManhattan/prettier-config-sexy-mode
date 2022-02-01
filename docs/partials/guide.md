## Installation

To install this shareable configuration, you should start by adding the project to your `devDependencies` by running:

```shell
npm install --save-dev prettier-plugin-sexy-mode
```

After that, you need to add the configuration to your `package.json` file under the `prettier` key. Your `package.json` might look something like this:

```json
{
  "name": "mypackage",
  "version": "1.0.4",
  ...
  "devDependencies": {
    "prettier-plugin-sexy-mode": "^1.0.0"
  },
  "prettier": "prettier-plugin-sexy-mode"
}
```

For more information on shareable configurations, check out [Prettier's guide](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Usage

After installing the package, you can simply run Prettier and it will determine which plugin to use based on the file extension. This logic is mostly baked into each plugin. For example:

```shell
npm install -g prettier
prettier --list-different .
```

The command above will scan through your entire project (if run in the root of the project) and list the files that Prettier has changes for.

## Plugins

This configuration attempts to include all the best, well-known Prettier plugins that have lots of stars on GitHub. For your reference, the chart below details which plugins are included:

{{ plugins.prettier }}

It might be important to note that although [@prettier/plugin-python](https://github.com/prettier/plugin-python) is popular on GitHub, we did not include it because the project's README.md suggests using [Black](https://github.com/psf/black) (a Python CLI) instead.

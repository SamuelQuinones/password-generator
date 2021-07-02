const { locales } = require("./locales.json");

module.exports = {
  createOldCatalogs: false,
  // Save the \_old files
  defaultNamespace: "translation",

  indentation: 2,
  // Indentation of the catalog files
  defaultValue: "",

  keepRemoved: false,
  // Keep keys from the catalog that are no longer in code

  // see below for more details
  lexers: {
    ts: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JsxLexer"],
  },

  // lineEnding: 'auto',
  // Control the line ending. See options at https://github.com/ryanve/eol

  locales: locales,
  // An array of the locales in your applications

  output: "src/lang/$NAMESPACE/$LOCALE.json",
  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()

  sort: false,
  // Whether or not to sort the catalog

  // useKeysAsDefaultValue: false,
  // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
  // The option `defaultValue` will not work if this is set to true

  verbose: true,
  // Display info about the parsing including some stats
};

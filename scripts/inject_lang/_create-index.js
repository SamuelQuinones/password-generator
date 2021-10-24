const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

function createIndex(lang) {
  const short_lang = lang.substring(0, 2);

  const english_index = path.join(
    process.cwd(),
    "/src/lang/translation/en/index.ts"
  );
  const output_index = path.join(
    process.cwd(),
    `/src/lang/translation/${short_lang.toLowerCase()}/index.ts`
  );

  const index_data = fs.readFileSync(english_index, "utf-8");
  const [lang_imports, lang_obj, lang_export] = index_data.split(
    /\/\/ [A-Za-z]+ Goes Here/gm
  );

  const new_lang_obj = lang_obj.replace(
    "\nconst EN",
    `\nconst ${short_lang.toUpperCase()}`
  );

  const new_lang_export = lang_export.replace(
    "default EN;",
    `default ${short_lang.toUpperCase()};`
  );

  const new_index_data = prettier.format(
    lang_imports + new_lang_obj + new_lang_export,
    {
      parser: "typescript",
    }
  );

  fs.writeFileSync(output_index, new_index_data, "utf-8");
}

module.exports = {
  createIndex,
};

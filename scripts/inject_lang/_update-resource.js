const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

function updateResource(lang) {
  //* Step 2 - update resources.ts
  const resource_file = path.join(process.cwd(), "/src/lang/resources.ts");
  const resource_data = fs.readFileSync(resource_file, "utf-8");
  const [imports, code, tail] = resource_data.split(
    /\/\/ new [A-Za-z]+ go above this line/gm
  );
  //* Step 2a - update imports
  const short_lang = lang.substring(0, 2);

  const import_statement = `import ${short_lang.toLowerCase()} from "./translation/${short_lang.toLowerCase()}";`;

  if (new RegExp(import_statement, "gm").test(imports)) {
    throw new Error(`Language "${short_lang} - ${lang}" might already exist`);
  }

  const newImports =
    imports.trim() +
    `\n${import_statement}\n// new imports go above this line\n\n`;

  //* Step 2b - update the lang object
  const newCode =
    code.trim() +
    `\n${short_lang.toLowerCase()},\n// new langs go above this line`;

  const new_resource_data = prettier.format(newImports + newCode + tail, {
    parser: "typescript",
  });

  fs.writeFileSync(resource_file, new_resource_data, "utf-8");
}

module.exports = {
  updateResource,
};

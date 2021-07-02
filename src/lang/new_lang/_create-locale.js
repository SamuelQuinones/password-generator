const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const data = require("../locales.json");

function updateLocale(lang) {
  //* Step 1 - update the parser config
  const locale_file = path.join(process.cwd(), "/src/lang/locales.json");
  const short_lang = lang.substring(0, 2);

  if (data.locales.includes(short_lang.toLowerCase())) {
    throw new Error("Locale exists");
  }

  data.locales.push(short_lang.toLowerCase());
  fs.writeFileSync(
    locale_file,
    prettier.format(JSON.stringify(data), { parser: "json" }),
    "utf-8"
  );
}

module.exports = {
  updateLocale,
};

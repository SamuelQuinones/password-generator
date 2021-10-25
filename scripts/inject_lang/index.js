const execSync = require("child_process").execSync;
const { yellow, blue, green, red } = require("chalk");
const updateLocale = require("./_create-locale").updateLocale;
const updateResource = require("./_update-resource").updateResource;
const createIndex = require("./_create-index").createIndex;

const lang = process.argv[2];

if (!lang) throw new Error("No LANG arg provided");

try {
  console.log(yellow(`Attempting to add new language configuration: ${lang}`));
  console.log(blue("Updating locales.json"));
  updateLocale(lang);
  console.log(green("Update complete"));
  console.log(blue("Updating resources.ts"));
  updateResource(lang);
  console.log(green("Update complete"));
  console.log(blue(`Creating lang files for ${lang}`));
  execSync("npm run i18n:extract");
  console.log(green("Lang files created"));
  console.log(blue(`Creating lang index.ts for ${lang}`));
  createIndex(lang);
  console.log(green("File created"));
  console.log();
  console.log(green(`New lang: ${lang} has been added`));
} catch (error) {
  console.log(red("Something Went Wrong"));
  console.error(error);
}

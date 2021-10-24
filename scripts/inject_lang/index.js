const execSync = require("child_process").execSync;
const updateLocale = require("./_create-locale").updateLocale;
const updateResource = require("./_update-resource").updateResource;
const createIndex = require("./_create-index").createIndex;

const lang = process.argv[2];

if (!lang) throw new Error("No LANG arg provided");

try {
  updateLocale(lang);
  updateResource(lang);
  execSync("npm run i18n:extract");
  createIndex(lang);
} catch (error) {
  console.error(error);
}

const updateLocale = require("./_create-locale").updateLocale;
const updateResource = require("./_update-resource").updateResource;

const lang = process.argv[2];

if (!lang) throw new Error("No LANG arg provided");

try {
  updateLocale(lang);
  updateResource(lang);
} catch (error) {
  console.error(error);
}

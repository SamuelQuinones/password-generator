const { updateLocale } = require("./_create-locale");
const { updateResource } = require("./_update-resource");

const lang = process.argv[2];

if (!lang) throw new Error("No LANG arg provided");

try {
  updateLocale(lang);
  updateResource(lang);
} catch (error) {
  console.error(error);
}

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.yellow("Attempting to remove the following items:"));
console.log(chalk.blue("- Theme Class"));
console.log(chalk.blue("- Animate Class"));
console.log(chalk.blue("- ReactModalPortals"));

try {
  const buildFile = path.join(process.cwd(), "build/index.html");
  const data = fs.readFileSync(buildFile, "utf-8");
  const newData = data.replace(
    /<body class="pink(\sanimate-class)?">/gm,
    "<body>"
  );
  const evenNewerData = newData.replace(
    /(<div class="ReactModalPortal"><\/div>)/gm,
    ""
  );

  fs.writeFileSync(buildFile, evenNewerData, "utf-8");
  console.log(chalk.green("All Items Removed Removed"));
} catch (error) {
  console.log(chalk.red("Something Went Wrong"));
  console.error(error);
}

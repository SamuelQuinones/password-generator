const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

try {
  const buildFile = path.join(process.cwd(), "build/index.html");
  const data = fs.readFileSync(buildFile, "utf-8");
  const newData = data.replace('<body class="pink">', "<body>");

  fs.writeFileSync(buildFile, newData, "utf-8");
  console.log(chalk.green("Pink Class Removed"));
} catch (error) {
  console.log(chalk.red("Something Went Wrong"));
  console.error(error);
}

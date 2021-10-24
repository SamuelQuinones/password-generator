const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.yellow("Attempting to remove the following items:"));
console.log(chalk.blue("- Theme Class"));
console.log(chalk.blue("- Animate Class"));
console.log(chalk.blue("- ReactModalPortals"));
console.log(chalk.blue("- Active Dropdown"));

try {
  const out_file = path.join(process.cwd(), "build/index.html");
  const raw_html = fs.readFileSync(out_file, "utf-8");
  const no_theme = raw_html.replace(
    /<body class="pink(\sanimate-class)?">/gm,
    "<body>"
  );
  const no_theme_modal = no_theme.replace(
    /(<div class="ReactModalPortal"><\/div>)/gm,
    ""
  );
  /** No Theme, Modal, Dropdown */
  const no_t_m_dd = no_theme_modal.replace(
    /class="([A-Z]+)\slang-item\sdropdown-item\sactive"/gim,
    'class="$1 lang-item dropdown-item"'
  );

  fs.writeFileSync(out_file, no_t_m_dd, "utf-8");
  console.log(chalk.green("All Items Removed Removed"));
} catch (error) {
  console.log(chalk.red("Something Went Wrong"));
  console.error(error);
}

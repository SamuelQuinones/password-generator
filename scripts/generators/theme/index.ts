import { Actions, PlopGeneratorConfig } from "node-plop";
import { Themes } from "./current";
import * as path from "path";

const stylesDirectory = path.join(process.cwd(), "src/styles");
const themeDir = path.join(process.cwd(), "scripts/generators/theme");

export enum ThemePromptNames {
  overrideExisting = "overrideExisting",
  tailwindColor = "tailwindColor",
  bodyTextClass = "bodyTextClass",
  btnTextClass = "btnTextClass",
  dropdownTextClass = "dropdownTextClass",
  overrideToggle = "overrideToggle",
  toggleColor = "toggleColor",
  overrideAnchor = "overrideAnchor",
  anchorColor = "anchorColor",
}

type Answers = { [P in ThemePromptNames]: string };

/**
 * process for creating new themes
 */
export const themeGenerator: PlopGeneratorConfig = {
  description: "add a new theme configuration",
  prompts: [
    {
      type: "confirm",
      name: ThemePromptNames.overrideExisting,
      message: "Override existing file?",
      default: false,
    },
    {
      type: "input",
      name: ThemePromptNames.tailwindColor,
      message: "Please pick a tailwind color",
      validate: (input, answers) => {
        if (!Boolean(input.trim())) {
          return false;
        }
        if (answers?.overrideExisting) {
          return true;
        }
        if (Themes.map((t) => t.tailwindColor).includes(input)) {
          console.log("\nColor theme already exists");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: ThemePromptNames.bodyTextClass,
      message: "which tailwind text class will you use?",
      default: "text-white",
    },
    {
      type: "input",
      name: ThemePromptNames.btnTextClass,
      message: "which tailwind text class will you use for buttons?'",
      default: "text-white",
    },
    {
      type: "input",
      name: ThemePromptNames.dropdownTextClass,
      message: "which tailwind text class will you use for dropdown text?",
      default: "text-white",
    },
    {
      type: "confirm",
      name: ThemePromptNames.overrideToggle,
      message: "will you override the toggle button colors?",
      default: false,
    },
    {
      type: "input",
      name: "toggleColor",
      message: "please type a tailwind color",
      validate: (input) => Boolean(input.trim()),
      when: (response) => {
        return !!response.overrideToggle;
      },
    },
    {
      type: "confirm",
      name: ThemePromptNames.overrideAnchor,
      message:
        "will you override the anchor tag colors? type a tailwind color to use if so",
      default: false,
    },
    {
      type: "input",
      name: "anchorColor",
      message: "please type a tailwind color",
      validate: (input) => Boolean(input.trim()),
      when: (response) => {
        return !!response.overrideAnchor;
      },
    },
  ],
  actions: (data) => {
    const answers = data as Answers;
    const themePath = `${stylesDirectory}/themes/_{{lowerCase ${ThemePromptNames.tailwindColor}}}.scss`;

    const actions: Actions = [];

    //* creating a new theme
    if (!answers.overrideExisting) {
      actions.push({
        type: "add",
        path: themePath,
        templateFile: `${themeDir}/color.scss.hbs`,
        abortOnFail: true,
      });
      actions.push({
        type: "append",
        path: `${themeDir}/current.ts`,
        pattern: /(\/\/ APPEND HERE)/g,
        templateFile: `${themeDir}/themeobj.hbs`,
        abortOnFail: true,
      });
    } else {
      actions.push({
        type: "add",
        path: themePath,
        templateFile: `${themeDir}/color.scss.hbs`,
        abortOnFail: true,
        force: true,
      });
      actions.push({
        type: "modify",
        path: `${themeDir}/current.ts`,
        pattern: new RegExp(
          `\\{\n\\s+tailwindColor: "${answers.tailwindColor}",(?:\n\\s+[a-zA-Z]+:.+$)+\n\\s+\\},`,
          "gm"
        ),
        templateFile: `${themeDir}/themeobj.hbs`,
        abortOnFail: true,
      });
    }
    //* Actions that run regardless
    //* modify Helper.ts
    actions.push({
      type: "modify",
      path: `${path.join(
        process.cwd(),
        "src/components/ThemeSwitcher/Helper.ts"
      )}`,
      transform: (data) => {
        let newData = data;
        //* array
        const arrReg = new RegExp(
          `export const ThemesArr: Themes\\[\\] = \\[[\\s\\S]*?((?:"${answers.tailwindColor}",?[\\s\\S]*?)+)\\];\n\\/\\/ THEME ARR END`,
          "gm"
        );
        if (!arrReg.test(newData)) {
          newData = newData.replace(
            /export const ThemesArr: Themes\[\] = \[[\s\S]?((?:"[a-z]+",?[\s\S]?)+)\];\n\/\/ THEME ARR END/gm,
            `export const ThemesArr: Themes[] = [$1, "${answers.tailwindColor}"];\n// THEME ARR END`
          );
        }
        //* type
        const typeReg = new RegExp(
          `export type Themes =[\\s\\S]+?((?:\\s*?\\|?\\s?"${answers.tailwindColor}"[\\s\\S]*?)+);\n\\/\\/ THEME TYPE END`,
          "gm"
        );
        if (!typeReg.test(newData)) {
          newData = newData.replace(
            /(export type Themes =[\s\S]+?)((?:\s*?\|?\s?"[a-z]+"[\s\S]?)+);\n\/\/ THEME TYPE END$/gm,
            `$1$2 | "${answers.tailwindColor}";\n// THEME TYPE END`
          );
        }
        //* function
        const funcReg = new RegExp(
          `switch \\(input\\) \\{[\\S\\s]+case "${answers.tailwindColor}":\n\\s+return "${answers.tailwindColor}";|default:\n\\s+return "${answers.tailwindColor}";`,
          "gm"
        );
        if (!funcReg.test(newData)) {
          newData = newData.replace(
            /switch \(input\) \{((?:\n\s+case "([a-z]+)":\n\s+return "\2";)+\n\s+default:\n\s+return "[a-z]+";)/gm,
            `switch (input) {\ncase "${answers.tailwindColor}":\nreturn "${answers.tailwindColor}"$1`
          );
        }
        return newData;
      },
    });
    //* modify the import SCSS file
    actions.push({
      type: "append",
      path: `${stylesDirectory}/_themes.scss`,
      pattern: /(\/\/ APPEND HERE\s)/g,
      template: `@import "themes/{{lowerCase ${ThemePromptNames.tailwindColor}}}";`,
    });
    //* prettify files
    actions.push({
      type: "prettify",
      data: {
        path: `"${themeDir}/current.ts" "${stylesDirectory}/themes/_${answers.tailwindColor}.scss" "src/components/ThemeSwitcher/**/*.{ts,tsx}"`,
      },
    });
    return actions;
  },
};

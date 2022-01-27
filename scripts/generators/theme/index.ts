import { Actions, PlopGeneratorConfig } from "node-plop";
import * as path from "path";

const themeDirectory = path.join(__dirname, "../../../src/styles/themes");

export enum ThemePromptNames {
  tailwindColor = "tailwindColor",
  bodyTextClass = "bodyTextClass",
  btnTextClass = "btnTextClass",
  dropdownTextClass = "dropdownTextClass",
  overrideToggle = "overrideToggle",
  overrideAnchor = "overrideAnchor",
}

export const themeGenerator: PlopGeneratorConfig = {
  description: "add a new theme configuration",
  prompts: [
    {
      type: "input",
      name: ThemePromptNames.tailwindColor,
      message: "Please pick a tailwind color",
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
      type: "input",
      name: ThemePromptNames.overrideToggle,
      message:
        "will you override the toggle button colors? type a tailwind color to use if so",
      default: false,
    },
    {
      type: "input",
      name: ThemePromptNames.overrideAnchor,
      message:
        "will you override the anchor tag colors? type a tailwind color to use if so",
      default: false,
    },
  ],
  actions: (data) => {
    const themePath = `${themeDirectory}/_{{lowerCase ${ThemePromptNames.tailwindColor}}}.scss`;

    const actions: Actions = [
      {
        type: "add",
        path: themePath,
        templateFile: "./theme/template.scss.hbs",
        abortOnFail: true,
      },
      {
        type: "prettify",
        data: { path: themeDirectory },
      },
    ];

    return actions;
  },
};

/**
 * Available Theme Colors
 *
 * Currently designed to use / implement tailwind base colors
 */
export type Themes = "red" | "pink" | "blue" | "teal" | "cyan";

/**
 * Available Theme Colors as an array
 */
export const ThemesArr: Themes[] = ["pink", "red", "blue", "teal", "cyan"];

/**
 * returns one of the available themes - which will be added to the dom classlist
 *
 * used in initial dom load and in radio switch
 *
 * @param input string to check against list of themes
 * @returns one of the available themes
 */
export const checkTheme = (input: string | null): Themes => {
  switch (input) {
    case "red":
      return "red";
    case "blue":
      return "blue";
    case "teal":
      return "teal";
    case "cyan":
      return "cyan";
    default:
      return "pink";
  }
};

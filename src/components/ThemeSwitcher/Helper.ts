/**
 * Available Theme Colors
 *
 * Currently designed to use / implement tailwind base colors
 */
export type Themes = "red" | "pink" | "blue";

/**
 * returns one of the available themes - which will be added to the dom classlist
 *
 * used in initial dom load
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
    default:
      return "pink";
  }
};

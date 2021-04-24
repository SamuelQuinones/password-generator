export type Themes = "red" | "pink" | "blue";

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

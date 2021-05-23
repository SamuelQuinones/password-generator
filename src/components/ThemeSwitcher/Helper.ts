import { ChangeEvent } from "react";

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

/**
 * changes the theme / dom class-list
 *
 * There is a `theme` state that holds the current theme,
 * this state will be sued to remove the currnet theme after changing it to the input
 * before setting the state to the new value.
 *
 * @param e change event target, how we get the value from the radio
 * @param theme the currently active theme
 * @returns the theme to be passed into the store
 */
export const changeTheme = (
  e: ChangeEvent<HTMLInputElement>,
  theme: Themes
) => {
  const newTheme = checkTheme(e.currentTarget.value);
  //* just in case the theme were "changing" to is the same theme
  if (newTheme === theme) return theme;

  //* store values
  const docBody = document.body.classList;
  const LS_KEY = "color-theme";

  docBody.add(newTheme);
  docBody.remove(theme);

  localStorage.setItem(LS_KEY, newTheme);

  return newTheme;
};

export const doesWrapperHaveFocus = (
  ev: MouseEvent,
  wrapper: HTMLElement | null
) => {
  if (!wrapper) return false;
  const myTarget = ev.target as HTMLElement;
  return wrapper.contains(myTarget);
};

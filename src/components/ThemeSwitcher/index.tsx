import { FC, useEffect, useState } from "react";
import { Themes, checkTheme } from "./Helper";
import { ReactComponent as Palette } from "../../assets/palette-fill.svg";

/**
 * Produces buttons that will change the theme class to match the corresponding color.
 *
 * Buttons are circular, and stick to the bottom right
 */
const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState<Themes>("pink");

  /** Runs on first mount to get the initial theme */
  useEffect(() => {
    const LS_KEY = "color-theme";
    const storedTheme = localStorage.getItem(LS_KEY);
    const _theme = checkTheme(storedTheme);

    setTheme(_theme);
  }, []);

  /**
   * changes the theme / dom class-list
   *
   * There is a `theme` state that holds the current theme,
   * this state will be sued to remove the currnet theme after changing it to the input
   * before setting the state to the new value.
   *
   * @param newTheme one of the available themes that we will change to
   */
  const changeTheme = (newTheme: Themes) => {
    //* just in case the theme were "changing" to is the same theme
    if (newTheme === theme) return;

    //* store values
    const docBody = document.body.classList;
    const LS_KEY = "color-theme";
    //* for some reason, animations on page load causes an odd flash
    //* this block here will add an animation class on the first theme change
    if (!docBody.contains("animate-class")) docBody.add("animate-class");

    docBody.add(newTheme);
    docBody.remove(theme);
    setTheme(newTheme);
    localStorage.setItem(LS_KEY, newTheme);
  };

  return (
    <div className="fixed bottom-2 right-2">
      <button
        className="theme-changer-pink"
        disabled={theme === "pink"}
        onClick={() => changeTheme("pink")}
      >
        <Palette className="inline-block" />
      </button>
      <button
        className="theme-changer-red"
        disabled={theme === "red"}
        onClick={() => changeTheme("red")}
      >
        <Palette className="inline-block" />
      </button>
      <button
        className="theme-changer-blue"
        disabled={theme === "blue"}
        onClick={() => changeTheme("blue")}
      >
        <Palette className="inline-block" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;

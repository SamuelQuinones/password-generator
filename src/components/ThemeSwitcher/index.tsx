import { ChangeEvent, FC, useEffect, useState } from "react";
import { Themes, checkTheme } from "./Helper";
import ActiveIcon from "./ActiveIcon";

/**
 * Produces buttons that will change the theme class to match the corresponding color.
 *
 * Buttons are circular, and stick to the bottom right
 */
const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState<Themes>("pink");
  const [containsTransition, setContainsTransition] = useState(false);

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
   * @param e change event target, how we get the value from the radio
   */
  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = checkTheme(e.currentTarget.value);
    //* just in case the theme were "changing" to is the same theme
    if (newTheme === theme) return;

    //* store values
    const docBody = document.body.classList;
    const LS_KEY = "color-theme";
    //* for some reason, animations on page load causes an odd flash
    //* this block here will add an animation class on the first theme change
    if (!containsTransition) {
      docBody.add("animate-class");
      setContainsTransition(true);
    }

    docBody.add(newTheme);
    docBody.remove(theme);
    setTheme(newTheme);
    localStorage.setItem(LS_KEY, newTheme);
  };

  return (
    <div className="fixed bottom-2 right-2 theme-changer-master">
      {["pink", "red", "blue"].map((color, idx) => {
        return (
          <label key={idx} htmlFor={`radio-${color}`}>
            <input
              className={`theme-changer-${color} sr-only`}
              id={`radio-${color}`}
              name="theme"
              type="radio"
              value={color}
              onChange={changeTheme}
            />
            <div className="flex items-center justify-center changer-wrapper text-center">
              <ActiveIcon usingTheme={theme === color} />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;

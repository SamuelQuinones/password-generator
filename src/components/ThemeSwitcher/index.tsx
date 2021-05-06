//* Core
import { ChangeEvent, FC, useEffect, useState } from "react";
import { checkTheme, ThemesArr } from "./Helper";
import ActiveIcon from "./ActiveIcon";
import { UnmountClosed } from "react-collapse";
//* REDUX
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getTheme } from "store/selectors";
import { userActions } from "store/userSlice";

/**
 * Produces buttons that will change the theme class to match the corresponding color.
 *
 * Buttons are circular, and stick to the bottom right
 */
const ThemeSwitcher: FC = () => {
  //* Core
  const [showThemeButtons, setShowThemeButtons] = useState(false);
  const [containsTransition, setContainsTransition] = useState(false);
  //* REDUX
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);

  /** Runs on first mount to get the initial theme */
  useEffect(() => {
    const LS_KEY = "color-theme";
    const storedTheme = localStorage.getItem(LS_KEY);
    const _theme = checkTheme(storedTheme);
    dispatch(userActions.setTheme(_theme));
  }, [dispatch]);

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
    dispatch(userActions.setTheme(newTheme));

    localStorage.setItem(LS_KEY, newTheme);
  };

  return (
    <div className="fixed bottom-2 right-2 theme-changer-master">
      <button
        className={`theme-toggle-button block ml-auto ${
          showThemeButtons ? "open" : "closed"
        }`}
        onClick={() => setShowThemeButtons(!showThemeButtons)}
      >
        Select Theme
      </button>
      <UnmountClosed isOpened={showThemeButtons}>
        {ThemesArr.map((color, idx) => {
          return (
            <label key={idx} htmlFor={`radio-${color}`}>
              <input
                className={`theme-changer-${color} sr-only`}
                id={`radio-${color}`}
                name="theme"
                type="radio"
                value={color}
                onChange={changeTheme}
                checked={theme === color}
              />
              <div className="flex items-center justify-center changer-wrapper text-center">
                <ActiveIcon theme={color} usingTheme={theme === color} />
              </div>
            </label>
          );
        })}
      </UnmountClosed>
    </div>
  );
};

export default ThemeSwitcher;

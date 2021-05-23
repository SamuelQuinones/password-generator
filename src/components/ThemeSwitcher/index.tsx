//* Core
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { UnmountClosed } from "react-collapse";
import ActiveIcon from "./ActiveIcon";
import { ReactComponent as Bucket } from "../../assets/paint-bucket.svg";
import {
  checkTheme,
  ThemesArr,
  changeTheme,
  doesWrapperHaveFocus,
} from "./Helper";
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
  const wrapper = useRef<HTMLDivElement>(null);
  //* REDUX
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);

  const handleFocus = (e: MouseEvent) => {
    const hasFocus = doesWrapperHaveFocus(e, wrapper.current);
    if (!hasFocus) setShowThemeButtons(false);
  };

  /** adds event listener to dom, to help collapse on close out */
  useEffect(() => {
    document.body.addEventListener("mousedown", handleFocus);
    return () => {
      document.body.removeEventListener("mousedown", handleFocus);
    };
  }, []);

  /** Runs on first mount to get the initial theme */
  useLayoutEffect(() => {
    const LS_KEY = "color-theme";
    const storedTheme = localStorage.getItem(LS_KEY);
    const _theme = checkTheme(storedTheme);
    dispatch(userActions.setTheme(_theme));
  }, [dispatch]);

  return (
    <div ref={wrapper} className="fixed bottom-2 right-2 theme-changer-master">
      <button
        className={`theme-toggle-button block ml-auto ${
          showThemeButtons ? "open" : "closed"
        }`}
        onClick={() => setShowThemeButtons(!showThemeButtons)}
      >
        <span className="hidden md:inline-block">Select Theme</span>
        <span className="inline-block md:hidden">
          <Bucket
            title="Select Theme"
            height={20}
            width={20}
            className="inline-block"
          />
        </span>
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
                onChange={(e) => {
                  const newTheme = changeTheme(e, theme);
                  dispatch(userActions.setTheme(newTheme));
                }}
                checked={theme === color}
              />
              <div className="flex flex-col items-center justify-center changer-wrapper text-center overflow-hidden relative">
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

//* Core
import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import ActiveIcon from "./ActiveIcon";
import { Bucket } from "components/SVG-Icons";
import { checkTheme, ThemesArr, changeTheme } from "./Helper";
import useOutsideClick from "hooks/useClickOutside";
import classNames from "classnames";
//* REDUX
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getTheme } from "store/selectors";
import { userActions } from "store/userSlice";
//* Translation
import { useTranslation } from "react-i18next";

/**
 * Produces buttons that will change the theme class to match the corresponding color.
 *
 * Buttons are circular, and stick to the bottom right
 */
const ThemeSwitcher = () => {
  //* REDUX
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);
  //* Translation
  const { t } = useTranslation();
  //* Core
  const [showThemeButtons, setShowThemeButtons] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  //* Handle clicking outside the switcher
  useOutsideClick(wrapper, () => setShowThemeButtons(false));

  /** Runs on first mount to get the initial theme */
  //? Should this be useLayoutEffect
  useEffect(() => {
    const LS_KEY = "color-theme";
    const storedTheme = localStorage.getItem(LS_KEY);
    const _theme = checkTheme(storedTheme);
    dispatch(userActions.setTheme(_theme));
  }, [dispatch]);

  return (
    <div ref={wrapper} className="theme-changer-master fixed right-2 bottom-2">
      <button
        className={classNames(
          "theme-toggle-button ml-auto block rounded-md p-1.5 shadow-inner transition duration-250",
          showThemeButtons ? "open rounded-b-none" : "closed"
        )}
        onClick={() => setShowThemeButtons((current) => !current)}
      >
        <span className="hidden md:inline-block">{t("select_theme")}</span>
        <span className="inline-block md:hidden">
          <Bucket title={t("select_theme")} height={20} width={20} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {showThemeButtons && (
          <m.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.25 }}
          >
            <div className="theme-changer-body flex flex-row rounded-md rounded-tr-none p-3 transition-colors duration-250">
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

                    <ActiveIcon theme={color} usingTheme={theme === color} />
                  </label>
                );
              })}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;

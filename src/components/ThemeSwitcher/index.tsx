import { FC, useEffect, useState } from "react";
import { Themes, checkTheme } from "./Helper";
import { ReactComponent as Palette } from "../../assets/palette-fill.svg";

const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState<Themes>("pink");

  useEffect(() => {
    const LS_KEY = "color-theme";

    const storedTheme = localStorage.getItem(LS_KEY);

    const _theme = checkTheme(storedTheme);

    setTheme(_theme);
  }, []);

  const changeTheme = (newTheme: Themes) => {
    if (newTheme === theme) return;

    const docBody = document.body.classList;
    const LS_KEY = "color-theme";
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
        className="theme-changer-red bg-red-500 border-red-300"
        disabled={theme === "red"}
        onClick={() => changeTheme("red")}
      >
        <Palette className="inline-block" />
      </button>
      <button
        className="theme-changer-blue bg-blue-500 border-blue-300"
        disabled={theme === "blue"}
        onClick={() => changeTheme("blue")}
      >
        <Palette className="inline-block" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;

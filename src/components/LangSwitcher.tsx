/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

//TODO: Look into react-overlays if needing to build more dropdowns
//TODO: Switch library for dropdown / change active language logic

import { FC, useEffect, useState } from "react";
import Button from "./Button";
import { Translate } from "./SVG-Icons";
import { useTranslation } from "react-i18next";
import { langPickerConfig } from "lang/resources";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import classNames from "classnames";

const LangSwitcher: FC = () => {
  const { i18n, t } = useTranslation();
  const [activeKey, setActiveKey] = useState("");
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
    langPickerConfig.length
  );

  useEffect(() => {
    setActiveKey(i18n.languages[0]);
  }, [i18n.languages]);

  const toggleItem = (lang: string) => {
    setIsOpen(false);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="mb-5 relative flex justify-center">
      <Button
        style={{ padding: "0.25rem", borderRadius: 0 }}
        className="text-lg"
        onClick={() => setIsOpen(!isOpen)}
        {...buttonProps}
      >
        <Translate width="1em" height="1em" /> {t("lang_desc")}
      </Button>
      <div
        className={isOpen ? "dropdown visible shadow-md" : "dropwdown hidden"}
        role="menu"
        style={{ top: `${buttonProps.ref.current?.offsetHeight}px` }}
      >
        {langPickerConfig.map(({ key, display }, idx) => (
          <a
            id={`menu-item-${idx}`}
            key={key}
            onClick={() => toggleItem(key)}
            className={classNames(
              "block",
              "lang-item",
              "dropdown-item",
              activeKey === key && "active"
            )}
            {...itemProps[idx]}
          >
            {display}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LangSwitcher;

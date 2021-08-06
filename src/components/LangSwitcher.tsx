/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

//TODO: Look into react-overlays if needing to build more dropdowns

import { FC } from "react";
import Button from "./Button";
import { Translate } from "./SVG-Icons";
import { useTranslation } from "react-i18next";
import { langPickerConfig } from "lang/resources";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

const LangSwitcher: FC = () => {
  const { i18n, t } = useTranslation();
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
    langPickerConfig.length
  );

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
        className={isOpen ? "dropdown visible" : "dropwdown hidden"}
        role="menu"
        style={{ top: `${buttonProps.ref.current?.offsetHeight}px` }}
      >
        {langPickerConfig.map(({ key, display }, idx) => (
          <a
            id={`menu-item-${idx}`}
            key={key}
            onClick={() => toggleItem(key)}
            className={`block dropdown-item ${
              i18n.languages[0] === key ? "active" : ""
            }`.trim()}
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

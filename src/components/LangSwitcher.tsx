/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

//TODO: Look into react-overlays if needing to build more dropdowns
//TODO: Switch library for dropdown / change active language logic
//TODO: fix focus shift when using keyboard to select

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Translate } from "./SVG-Icons";
import { useTranslation } from "react-i18next";
import { langPickerConfig } from "lang/resources";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import classNames from "classnames";

const slideDownConfig = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
    },
    display: "block",
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
    },
    transitionEnd: { display: "none" },
  },
};

// const slideDownTransition = {

// }

const LangSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [activeKey, setActiveKey] = useState("");
  const { buttonProps, itemProps, isOpen, setIsOpen, moveFocus } =
    useDropdownMenu(langPickerConfig.length);

  useEffect(() => {
    setActiveKey(i18n.languages[0]);
    document.documentElement.setAttribute("lang", i18n.languages[0]);
  }, [i18n.languages]);

  const toggleItem = (lang: string) => {
    setIsOpen(false);
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
  };

  return (
    <section className="relative mb-5 flex shrink-0 justify-center">
      <Button
        className="rounded-none p-1 text-lg"
        // onClick={() => setIsOpen(!isOpen)}
        {...buttonProps}
      >
        <Translate width="1em" height="1em" /> {t("lang_desc")}
      </Button>
      <motion.div
        variants={slideDownConfig}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="dropdown rounded-sm shadow-md"
        role="menu"
        onAnimationComplete={() => isOpen && moveFocus(0)}
        style={{ top: `${buttonProps.ref.current?.offsetHeight}px` }}
      >
        {langPickerConfig.map(({ key, display }, idx) => (
          <a
            id={`menu-item-${idx}`}
            key={key}
            lang={key}
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
      </motion.div>
    </section>
  );
};

export default LangSwitcher;

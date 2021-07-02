import { FC } from "react";
import Dropdown from "rc-dropdown";
import Menu, { Item } from "rc-menu";
import Button from "./Button";
import { Translate } from "./SVG-Icons";
import { useTranslation } from "react-i18next";
import { langPickerConfig } from "lang/resources";

const LangSwitcher: FC = () => {
  const { i18n, t } = useTranslation();

  const LangMenu = (
    <Menu
      onSelect={({ key }) => i18n.changeLanguage(key)}
      selectedKeys={[i18n.languages[0]]}
    >
      {langPickerConfig.map(({ key, display }) => (
        <Item key={key}>{display}</Item>
      ))}
    </Menu>
  );

  return (
    <div className="mb-5 text-center">
      <Dropdown trigger={["click"]} overlay={LangMenu} animation="slide-up">
        <Button
          style={{ padding: "0.25rem", borderRadius: 0 }}
          className="text-lg"
        >
          <Translate width="1em" height="1em" /> {t("lang_desc")}
        </Button>
      </Dropdown>
    </div>
  );
};

export default LangSwitcher;

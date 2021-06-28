import { FC } from "react";
import AboutModal from "views/About";
import SecurityModal from "views/Security";
import { Github } from "./SVG-Icons";
//* Translation
import { Trans, useTranslation } from "react-i18next";

const Footer: FC = () => {
  //* Translation
  const { t } = useTranslation();
  return (
    <>
      <main className="flex-auto" />
      <footer className="footer p-3 text-center text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
          <div>
            {t("footer.version")}{" "}
            <strong>{process.env.REACT_APP_VERSION}</strong>
          </div>
          <div>
            <a
              href="https://github.com/SamuelQuinones/password-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.view_source")} <Github />
            </a>
          </div>
          <AboutModal />
        </div>
        <p className="mb-1">
          {t("footer.copyright_1")} &copy;{" "}
          <Trans i18nKey="footer.copyright_2" />
        </p>
        {t("footer.more_security")} <SecurityModal />.
      </footer>
    </>
  );
};

export default Footer;

import { FC } from "react";
import AboutModal from "views/About";
import SecurityModal from "views/Security";
import { Github } from "./SVG-Icons";
//* Translation
import { Trans, useTranslation } from "react-i18next";

const Footer: FC = () => {
  //* Translation
  const { t } = useTranslation("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="footer p-3 text-center text-sm flex-grow-0">
      <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
        <section>
          {t("version")} <strong>{process.env.REACT_APP_VERSION}</strong>
        </section>
        <section>
          <a
            href="https://github.com/SamuelQuinones/password-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("view_source")} <Github />
          </a>
        </section>
        <AboutModal />
      </div>
      <p className="mb-1">
        <Trans ns="footer" i18nKey="copyright" values={{ year }} />
      </p>
      <p>
        {t("more_security")} <SecurityModal />.
      </p>
    </footer>
  );
};

export default Footer;

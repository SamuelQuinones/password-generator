import { FC } from "react";
import AboutModal from "views/About";
import SecurityModal from "views/Security";
import { Github } from "./SVG-Icons";

const Footer: FC = () => {
  return (
    <>
      <main className="flex-auto" />
      <footer className="footer p-3 text-center text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
          <div>
            Version <strong>{process.env.REACT_APP_VERSION}</strong>
          </div>
          <div>
            <a
              href="https://github.com/SamuelQuinones/password-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              View The Source Code <Github />
            </a>
          </div>
          <AboutModal />
        </div>
        <p className="mb-1">
          Copytight &copy; 2021, all rights reserved. Any password generated on
          this site is <strong>NOT</strong> stored in any capacity.
        </p>
        For more information about security, please click <SecurityModal />.
      </footer>
    </>
  );
};

export default Footer;

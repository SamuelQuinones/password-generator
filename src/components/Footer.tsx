import { FC } from "react";
import { ReactComponent as Github } from "../assets/github.svg";
import AboutModal from "views/About";
import SecurityModal from "views/Security";

const Footer: FC = () => {
  return (
    <>
      <main className="flex-auto" />
      <footer className="footer p-3 text-center text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <div>
            Version <strong>{process.env.REACT_APP_VERSION}</strong>
          </div>
          <div>
            <a
              href="https://github.com/SamuelQuinones/password-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              View The Source Code <Github className="inline-block" />
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

import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <main className="flex-auto" />
      <footer className="footer">
        Version {process.env.REACT_APP_VERSION}
      </footer>
    </>
  );
};

export default Footer;

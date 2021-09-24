/** Core */
import { useEffect } from "react";
//* Views
import Form from "views/Form";
import Output from "views/Output";
//* Components
import Footer from "components/Footer";
import Button from "components/Button";
import LangSwitcher from "components/LangSwitcher";
import ThemeSwitcher from "components/ThemeSwitcher";
//* Translation
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    document.body.classList.add("animate-class");
  }, []);

  return (
    <div className="App bs-container">
      <h1 className="mb-5 text-center mt-5">{t("app_title")}</h1>
      <LangSwitcher />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Form />
        <Output />
        <Button
          form="password-form"
          type="submit"
          className="mt-3 md:col-span-2 text-lg"
        >
          {t("generate_password")}
        </Button>
      </div>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;

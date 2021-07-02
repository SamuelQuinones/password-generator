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
    <div className="App container mx-auto">
      <h1 className="mb-5 text-center">{t("app_title")}</h1>
      <LangSwitcher />
      <div className="grid grid-cols-2 gap-2">
        <Form />
        <Output />
        <Button
          form="password-form"
          type="submit"
          className="mt-3 col-span-2 text-lg"
        >
          {t("generate_password")}
        </Button>
      </div>
      <ThemeSwitcher />

      <Footer />
    </div>
  );
}

export default App;

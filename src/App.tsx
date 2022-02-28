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
      <header className="grow-0">
        <h1 className="mb-5 mt-5 text-center">{t("app_title")}</h1>
        <LangSwitcher />
      </header>
      <main className="grow">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Form />
          <Output />
        </div>
        <Button
          form="password-form"
          type="submit"
          className="mt-5 w-full text-lg"
        >
          {t("generate_password")}
        </Button>
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;

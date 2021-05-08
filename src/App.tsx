//TODO: Make it so that at least one of the form values has to be checked
//TODO: Find a way to remove body class from snap builds
//TODO: Add text styling / fonts
//TODO: Add "About" - preferably in a modal
//TODO: Add Password Strength Indicator
//TODO: Make a Logo
//TODO: Look into improving the generation of passwords
//TODO: Look into allowing the user to save their settings

//* Core
//* Views
import Form from "views/Form";
import Output from "views/Output";
//* Components
import Footer from "components/Footer";
import Button from "components/Button";
import ThemeSwitcher from "components/ThemeSwitcher";

function App() {
  return (
    <div className="App container mx-auto">
      <h1 className="mb-10 text-center">Secure Password Generator</h1>
      <div className="grid grid-cols-2 gap-2">
        <Form />
        <Output />
        <Button
          form="password-form"
          type="submit"
          className="mt-3 col-span-2 text-lg"
        >
          Generate Password
        </Button>
      </div>
      <ThemeSwitcher />

      <Footer />
    </div>
  );
}

export default App;

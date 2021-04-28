//TODO: Make it so that at least one of the form values has to be checked
//TODO: Add text styling / fonts
//TODO: Add "About" - preferably in a modal
//TODO: Add Password Strength Indicator
//TODO: Make a Logo
//TODO: Look into improving the generation of passwords
//TODO: Look into allowing the user to save their settings

import { useState } from "react";

import { generateRandomPW } from "util/generate-pw";

import Form from "views/Form";
import Output from "views/Output";
import { GeneratorContext } from "views/Output/Helper";
import Footer from "components/Footer";
import Button from "components/Button";
import ThemeSwitcher from "components/ThemeSwitcher";

function App() {
  const [generatedPW, setGeneratedPW] = useState<string | undefined>();

  return (
    <GeneratorContext.Provider value={{ generatedPW, setGeneratedPW }}>
      <div className="App container mx-auto">
        <h1 className="mb-10 text-center">Secure Password Generator</h1>
        <div className="grid grid-cols-2 gap-2">
          <Form onSubmit={(data) => setGeneratedPW(generateRandomPW(data))} />
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
    </GeneratorContext.Provider>
  );
}

export default App;

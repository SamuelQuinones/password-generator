import "./styles/App.scss";
import { useState } from "react";

import type { FormInput } from "views/Form/Helper";
import Form from "views/Form";

import Footer from "components/Footer";
import Button from "components/Button";
import Output from "views/Output";
import { GeneratorContext } from "views/Output/Helper";

function App() {
  const [generatedPW, setGeneratedPW] = useState<string | undefined>();

  const createPassword = (args: FormInput) => {
    console.log(JSON.stringify(args, null, 2));
  };

  return (
    <GeneratorContext.Provider value={{ generatedPW, setGeneratedPW }}>
      <div className="App container mx-auto">
        <h1 className="mb-10 text-center">Secure Password Generator</h1>
        <div className="grid grid-cols-2 gap-2">
          <Form onSubmit={createPassword} />
          <Output />
          <Button
            form="password-form"
            type="submit"
            className="mt-3 col-span-2 text-lg"
          >
            Generate Password
          </Button>
        </div>

        <Footer />
      </div>
    </GeneratorContext.Provider>
  );
}

export default App;

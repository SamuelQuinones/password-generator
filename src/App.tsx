import "./styles/App.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Footer from "components/Footer";
import Button from "components/Button";
import Form, { FormInput } from "views/Form";
import Card from "components/Card";

function App() {
  const [generatedPW, setGeneratedPW] = useState<string | undefined>();
  const [copied, setCopied] = useState(false);

  const createPassword = (args: FormInput) => {
    console.log(JSON.stringify(args, null, 2));
  };

  return (
    <div className="App container mx-auto">
      <h1 className="mb-10 text-center">Secure Password Generator</h1>
      <div className="grid grid-cols-2 gap-2">
        <Form onSubmit={createPassword} />
        <div className="col-span-2 md:col-span-1 text-center">
          <p>Your New Password</p>
          <Card>
            <div className="border-2 border-pink-400 p-2 rounded-md">
              {generatedPW ? <p>{generatedPW}</p> : <h3>Click Generate</h3>}
            </div>
            <CopyToClipboard
              onCopy={() => setCopied(true)}
              text={generatedPW || ""}
            >
              <Button disabled={generatedPW ? false : true} className="mt-4">
                Copy to Clipboard
              </Button>
            </CopyToClipboard>
            <div>{copied ? "Copied" : ""}&nbsp;</div>
            <Button
              onClick={(e) => {
                setGeneratedPW(undefined);
                e.currentTarget.blur();
              }}
              className="mt-4"
            >
              Reset Password
            </Button>
          </Card>
        </div>
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
  );
}

export default App;

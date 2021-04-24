import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "components/Card";
import Button from "components/Button";
import { useGeneratorContext } from "./Helper";

const Output = () => {
  const [copied, setCopied] = useState(false);
  const { generatedPW, setGeneratedPW } = useGeneratorContext();

  return (
    <div className="col-span-2 md:col-span-1 text-center">
      <p>Your New Password</p>
      <Card>
        <div className="click-gen-header border-2 p-2 rounded-md">
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
            setCopied(false);
          }}
          className="mt-4"
        >
          Reset Password
        </Button>
      </Card>
    </div>
  );
};
export default Output;

//* Core
import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "components/Card";
import Button from "components/Button";
import SavedSettingsCard from "./SavedSettingsCard";
//* REDUX
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getGeneratedPW, getSettingsSaved } from "store/selectors";
import { userActions } from "store/userSlice";

const Output: FC = () => {
  //* Core
  const [copied, setCopied] = useState(false);
  //* REDUX
  const dispatch = useAppDispatch();
  const generatedPW = useAppSelector(getGeneratedPW);
  const settingsSaved = useAppSelector(getSettingsSaved);

  return (
    <div className="col-span-2 md:col-span-1 text-center">
      <p>Your New Password</p>
      <Card className="my-2">
        <div className="click-gen-header border-2 p-2 rounded-md">
          {generatedPW ? <p>{generatedPW}</p> : <h3>Click Generate</h3>}
        </div>
        <CopyToClipboard
          onCopy={() => setCopied(true)}
          text={generatedPW || ""}
        >
          <Button disabled={generatedPW ? false : true} className="mt-4 w-full">
            Copy to Clipboard
          </Button>
        </CopyToClipboard>
        <div>{copied ? "Copied" : ""}&nbsp;</div>
        <Button
          onClick={(e) => {
            dispatch(userActions.resetGeneratedPW());
            e.currentTarget.blur();
            setCopied(false);
          }}
          className="mt-4 w-full"
        >
          Reset Password
        </Button>
      </Card>
      <SavedSettingsCard visible={settingsSaved} />
    </div>
  );
};
export default Output;

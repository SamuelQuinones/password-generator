//* Core
import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "components/Card";
import Button from "components/Button";
import SavedSettingsCard from "./SavedSettingsCard";
import { unSaveFormValues } from "views/Form/Helper";
//* REDUX
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getGeneratedPW, getSettingsSaved } from "store/selectors";
import { userActions } from "store/userSlice";
//* Translation
import { useTranslation } from "react-i18next";

const Output: FC = () => {
  //* Core
  const [copied, setCopied] = useState(false);
  //* REDUX
  const dispatch = useAppDispatch();
  const generatedPW = useAppSelector(getGeneratedPW);
  const settingsSaved = useAppSelector(getSettingsSaved);
  //* Translation
  const { t } = useTranslation();

  const onCopyText = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetSavedSettings = () => {
    dispatch(userActions.setSettingsSaved(false));
    unSaveFormValues();
  };

  return (
    <div className="text-center">
      <p>{t("output.title")}</p>
      <Card className="my-2">
        <div className="click-gen-header border-2 p-2 rounded-md">
          {generatedPW ? (
            <p>{generatedPW}</p>
          ) : (
            <h3>{t("output.click_prompt")}</h3>
          )}
        </div>
        <CopyToClipboard onCopy={() => onCopyText()} text={generatedPW || ""}>
          <Button disabled={generatedPW ? false : true} className="mt-4 w-full">
            {t("output.copy_to_clipboard")}
          </Button>
        </CopyToClipboard>
        <div>{copied ? t("output.copied") : ""}&nbsp;</div>
        <Button
          onClick={(e) => {
            dispatch(userActions.resetGeneratedPW());
            e.currentTarget.blur();
            setCopied(false);
          }}
          className="mt-4 w-full"
        >
          {t("output.reset_prompt")}
        </Button>
      </Card>
      <SavedSettingsCard
        visible={settingsSaved}
        hideCardFunc={resetSavedSettings}
      />
    </div>
  );
};
export default Output;

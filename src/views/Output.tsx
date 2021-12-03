//* Core
import { FC, useState } from "react";
import useIsClient from "hooks/useIsClient";
import { motion, AnimatePresence } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "components/Card";
import Button from "components/Button";
import { unSaveFormValues } from "views/Form/Helper";
//* REDUX
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getGeneratedPW, getSettingsSaved } from "store/selectors";
import { userActions } from "store/userSlice";
//* Translation
import { useTranslation } from "react-i18next";

const MotionCard = motion(Card);

const variants = {
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { delay: 0.1 },
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      opacity: { delay: 0.2 },
    },
  },
};

const Output: FC = () => {
  //* Core
  const [copied, setCopied] = useState(false);
  const isClient = useIsClient();
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
          <Button disabled={!!!generatedPW} className="mt-4 w-full">
            {t("output.copy_to_clipboard")}
          </Button>
        </CopyToClipboard>
        <span className={copied ? "block" : "invisible"}>
          {t("output.copied")}
        </span>
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
      {isClient && ( //* Still trying to get around the initial fade in - b/c of the initial state being false and changing
        <AnimatePresence initial={false} exitBeforeEnter>
          {settingsSaved && (
            <MotionCard
              variants={variants}
              initial="exit"
              animate="enter"
              exit="exit"
              className="flex justify-between items-center"
            >
              <h3>{t("output.saved_settings")}</h3>
              <Button
                className="ml-1 w-24 lg:w-48"
                onClick={() => resetSavedSettings()}
              >
                {t("reset")}
              </Button>
            </MotionCard>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
export default Output;

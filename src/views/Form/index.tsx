//* Core
import { ReactNode, useCallback, useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FormProvider } from "react-hook-form";
import Button from "components/Button";
import { LeftArrow, RightArrow } from "components/SVG-Icons";
import BaseSettings from "./_BaseSettings";
import AdvancedSettings from "./_AdvancedSettings";
import {
  checkStoredValue,
  FormInput,
  useGeneratorSettings,
  saveFormValues,
  baseVariants,
} from "./Helper";
//* REDUX
import { useAppDispatch } from "store/hooks";
import { userActions } from "store/userSlice";
//* Utility
import { generateRandomPW } from "util/generate-pw";
//* Translation
import { useTranslation } from "react-i18next";

const Form = () => {
  //* Core
  const [showAdvanced, setShowAdvanced] = useState(false);
  //* REDUX
  const dispatch = useAppDispatch();
  //* React Hook Form
  const methods = useGeneratorSettings();
  const setValue = methods.setValue;
  const reset = methods.reset;
  //* Translation
  const { t } = useTranslation("form");

  useEffect(() => {
    const savedSettings = localStorage.getItem("savedSettings");
    if (!savedSettings) return;
    reset(checkStoredValue(savedSettings));
    dispatch(userActions.setSettingsSaved(true));
  }, [reset, dispatch]);

  const onSubmit = useCallback(
    (data: FormInput) => {
      dispatch(userActions.setGeneratedPW(generateRandomPW(data)));
      if (data.advancedSettings.saveForNextTime) {
        saveFormValues(data);
        dispatch(userActions.setSettingsSaved(true));
        setValue("advancedSettings.saveForNextTime", false);
      }
    },
    [dispatch, setValue]
  );

  const makeButton = useCallback(
    (text: string, icon: ReactNode) => (
      <Button
        onClick={() => setShowAdvanced((a) => !a)}
        className="settings-change my-2 flex w-full items-center justify-between rounded-md p-3 text-left shadow-md"
        type="button"
      >
        <div>{text}</div>
        {icon}
      </Button>
    ),
    []
  );

  //TODO: see if this parent div can be removed
  return (
    <FormProvider {...methods}>
      <form id="password-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="overflow-y-auto overflow-x-hidden">
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {!showAdvanced && (
              <m.fieldset
                key="base"
                variants={baseVariants}
                initial="exit"
                animate="show"
                exit="exit"
              >
                <BaseSettings />
                {makeButton(
                  t("advanced_settings.title"),
                  <RightArrow height={20} width={20} />
                )}
              </m.fieldset>
            )}
            {showAdvanced && (
              <m.fieldset
                key="advanced"
                variants={baseVariants}
                initial="exit"
                animate="show"
                exit="exit"
              >
                <AdvancedSettings />
                {makeButton(
                  t("basic_title"),
                  <LeftArrow height={20} width={20} />
                )}
              </m.fieldset>
            )}
          </AnimatePresence>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;

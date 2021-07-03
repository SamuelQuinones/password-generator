//* Core
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Button from "components/Button";
import { LeftArrow, RightArrow } from "components/SVG-Icons";
import {
  checkStoredValue,
  FormInput,
  GeneratorSettings,
  saveFormValues,
} from "./Helper";
import BaseSettings from "./_BaseSettings";
import AdvancedSettings from "./_AdvancedSettings";
//* REDUX
import { useAppDispatch } from "store/hooks";
import { userActions } from "store/userSlice";
//* Utility
import { generateRandomPW } from "util/generate-pw";
//* Translation
import { useTranslation } from "react-i18next";

const Form: FC = () => {
  //* Core
  const [slideLeft, setSlideLeft] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  //* REDUX
  const dispatch = useAppDispatch();
  //* React Hook Form
  const { register, handleSubmit, watch, reset } = GeneratorSettings();
  //* Translation
  const { t } = useTranslation();

  useEffect(() => {
    const savedSettings = localStorage.getItem("savedSettings");
    if (!savedSettings) return;
    reset(checkStoredValue(savedSettings));
    dispatch(userActions.setSettingsSaved(true));
  }, [reset, dispatch]);

  const onSubmit = (data: FormInput) => {
    dispatch(userActions.setGeneratedPW(generateRandomPW(data)));
    if (data.advancedSettings.saveForNextTime) {
      saveFormValues(data);
      dispatch(userActions.setSettingsSaved(true));
    }
  };

  const makeButton = (text: string, icon: ReactNode) => (
    <Button
      onClick={() => setShowAdvanced(!showAdvanced)}
      className="flex w-full justify-between items-center settings-change"
      type="button"
    >
      <div>{text}</div>
      {icon}
    </Button>
  );

  return (
    <form
      id="password-form"
      className="col-span-2 md:col-span-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="overflow-x-hidden overflow-y-auto">
        <SwitchTransition>
          <CSSTransition
            key={String(showAdvanced)}
            addEndListener={(done) =>
              wrapper.current?.addEventListener("transitionend", done, false)
            }
            classNames={slideLeft ? "slide-left" : "slide-right"}
            onExited={() => setSlideLeft(true)} //* "swaps" places
            onEntered={() => setSlideLeft(false)} //* "swaps" places
            // onExited={() => setSlideLeft(slideLeft)} //* one way out
            // onEntered={() => setSlideLeft(!slideLeft)} //* one way in
            timeout={250}
            nodeRef={wrapper}
          >
            <div ref={wrapper}>
              {showAdvanced ? (
                <>
                  <AdvancedSettings watch={watch} register={register} />
                  {makeButton(
                    t("form.basic_title"),
                    <LeftArrow height={20} width={20} />
                  )}
                </>
              ) : (
                <>
                  <BaseSettings watch={watch} register={register} />
                  {makeButton(
                    t("form.advanced_settings.title"),
                    <RightArrow height={20} width={20} />
                  )}
                </>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </form>
  );
};

export default Form;

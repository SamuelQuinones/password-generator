//* Core
import { FC, useEffect } from "react";
import Card from "components/Card";
import Togglebutton from "components/ToggleButton";
import Slider from "components/Slider";
import DropdownMenu from "components/Dropdown";
import NumberInput from "components/NumberInput";
import {
  checkStoredValue,
  FormInput,
  GeneratorSettings,
  saveFormValues,
} from "./Helper";
//* REDUX
import { useAppDispatch } from "store/hooks";
import { userActions } from "store/userSlice";
//* Utility
import { generateRandomPW } from "util/generate-pw";
//* Translation
import { useTranslation } from "react-i18next";

const Form: FC = () => {
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

  const watched = watch(["advancedSettings.maxLength", "passwordLength"]);

  const onSubmit = (data: FormInput) => {
    dispatch(userActions.setGeneratedPW(generateRandomPW(data)));
    if (data.advancedSettings.saveForNextTime) {
      saveFormValues(data);
      dispatch(userActions.setSettingsSaved(true));
    }
  };

  return (
    <form
      id="password-form"
      className="col-span-2 md:col-span-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Length */}
      <label htmlFor="characterNum">
        {t("form.password_length")}: {watched[1]}
      </label>
      <Card className="my-2">
        <Slider
          htmlID="characterNum"
          min={6}
          max={watched[0]}
          step={1}
          {...register("passwordLength", { min: 6, max: 90 })}
        />
      </Card>
      {/* Additional Settings */}
      <div>{t("form.settings_label")}</div>
      <Card className="my-2">
        <Togglebutton
          htmlId="uppercase"
          label={t("form.include_uppercase")}
          {...register("includeUppercase")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="lowercase"
          label={t("form.include_lowercase")}
          {...register("includeLowercase")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="numbers"
          label={t("form.include_numbers")}
          {...register("includeNumbers")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="symbols"
          label={t("form.include_symbols")}
          {...register("includeSymbols")}
        />
      </Card>

      {/* Advanced Settings */}
      <DropdownMenu label={t("form.advanced_settings.title")}>
        <div>
          <Card>
            <NumberInput
              leftDisabled={watched[0].toString() === "24"}
              rightDisabled={watched[0].toString() === "90"}
              label={t("form.advanced_settings.max_length")}
              htmlId="maxLengthId"
              max={90}
              min={24}
              {...register("advancedSettings.maxLength", { min: 24, max: 90 })}
            />
          </Card>
        </div>
        <div>
          <Card>
            <Togglebutton
              htmlId="similarChars"
              label={t("form.advanced_settings.similar_symbols")}
              {...register("advancedSettings.includeSimilarCharacters")}
            />
            <small>( e.g. i, l, 1, L, o, 0, O )</small>
          </Card>
        </div>
        <div>
          <Card>
            <Togglebutton
              htmlId="ambiguousSymbols"
              label={t("form.advanced_settings.ambiguous_symbols")}
              {...register("advancedSettings.includeAmbiguousSymbols")}
            />
            <small>{"( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )"}</small>
          </Card>
        </div>
        <div>
          <Card>
            <Togglebutton
              htmlId="saveForNextTime"
              label={t("form.advanced_settings.save_for_next_time")}
              {...register("advancedSettings.saveForNextTime")}
            />
          </Card>
        </div>
      </DropdownMenu>
    </form>
  );
};

export default Form;

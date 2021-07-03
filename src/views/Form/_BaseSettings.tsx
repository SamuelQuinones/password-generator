import { FC } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormInput } from "./Helper";
import Card from "components/Card";
import Slider from "components/Slider";
import Togglebutton from "components/ToggleButton";
//* Translation
import { useTranslation } from "react-i18next";

type Props = {
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
};

const BaseSettings: FC<Props> = ({ register, watch }) => {
  const { t } = useTranslation();
  const watched = watch(["advancedSettings.maxLength", "passwordLength"]);

  return (
    <div>
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
    </div>
  );
};

export default BaseSettings;

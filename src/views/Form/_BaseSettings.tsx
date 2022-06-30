import { m } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { cardVariants, FormInput, spring, textVariants } from "./Helper";
import Card from "components/Card";
import Slider from "components/Slider";
import Togglebutton from "components/ToggleButton";
//* Translation
import { useTranslation } from "react-i18next";

const MotionCard = m(Card);

const BaseSettings = () => {
  const { t } = useTranslation("form");
  const { register, watch } = useFormContext<FormInput>();
  const watched = watch(["advancedSettings.maxLength", "passwordLength"]);

  return (
    <>
      {/* Length */}
      <m.label variants={textVariants} htmlFor="characterNum">
        {t("password_length")}: {watched[1]}
      </m.label>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Slider
          htmlID="characterNum"
          min={6}
          max={watched[0]}
          step={1}
          {...register("passwordLength", {
            min: 6,
            max: 90,
            valueAsNumber: true,
          })}
        />
      </MotionCard>
      {/* Additional Settings */}
      <m.span variants={textVariants}>{t("settings_label")}</m.span>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="uppercase"
          label={t("include_uppercase")}
          {...register("includeUppercase")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="lowercase"
          label={t("include_lowercase")}
          {...register("includeLowercase")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="numbers"
          label={t("include_numbers")}
          {...register("includeNumbers")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="symbols"
          label={t("include_symbols")}
          {...register("includeSymbols")}
        />
      </MotionCard>
    </>
  );
};

export default BaseSettings;

import { FC } from "react";
import { motion } from "framer-motion";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { cardVariants, FormInput, spring, textVariants } from "./Helper";
import Card from "components/Card";
import Slider from "components/Slider";
import Togglebutton from "components/ToggleButton";
//* Translation
import { useTranslation } from "react-i18next";

type Props = {
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
};

const MotionCard = motion(Card);

const BaseSettings: FC<Props> = ({ register, watch }) => {
  const { t } = useTranslation();
  const watched = watch(["advancedSettings.maxLength", "passwordLength"]);

  return (
    <>
      {/* Length */}
      <motion.label variants={textVariants} htmlFor="characterNum">
        {t("form.password_length")}: {watched[1]}
      </motion.label>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Slider
          htmlID="characterNum"
          min={6}
          max={watched[0]}
          step={1}
          {...register("passwordLength", { min: 6, max: 90 })}
        />
      </MotionCard>
      {/* Additional Settings */}
      <motion.span variants={textVariants}>
        {t("form.settings_label")}
      </motion.span>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="uppercase"
          label={t("form.include_uppercase")}
          {...register("includeUppercase")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="lowercase"
          label={t("form.include_lowercase")}
          {...register("includeLowercase")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="numbers"
          label={t("form.include_numbers")}
          {...register("includeNumbers")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="symbols"
          label={t("form.include_symbols")}
          {...register("includeSymbols")}
        />
      </MotionCard>
    </>
  );
};

export default BaseSettings;

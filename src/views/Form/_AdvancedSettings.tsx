import { FC } from "react";
import { motion } from "framer-motion";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import {
  cardVariants,
  FormInput,
  handleKeyDown,
  spring,
  textVariants,
} from "./Helper";
import Card from "components/Card";
import NumberInput from "components/NumberInput";
import Togglebutton from "components/ToggleButton";
//* Translation
import { useTranslation } from "react-i18next";

type Props = {
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
};

const MotionCard = motion(Card);

const AdvancedSettings: FC<Props> = ({ register, watch }) => {
  const watched = watch([
    "advancedSettings.maxLength",
    "passwordLength",
    "includeSymbols",
  ]);
  const { t } = useTranslation("form");

  return (
    <>
      <motion.span variants={textVariants}>
        {t("advanced_settings.title")}
      </motion.span>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <NumberInput
          leftDisabled={watched[0] === 24}
          rightDisabled={watched[0] === 90}
          label={t("advanced_settings.max_length")}
          htmlId="maxLengthId"
          max={90}
          min={24}
          onKeyDown={handleKeyDown}
          {...register("advancedSettings.maxLength", {
            min: 24,
            max: 90,
            valueAsNumber: true,
          })}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="similarChars"
          label={t("advanced_settings.similar_symbols")}
          {...register("advancedSettings.includeSimilarCharacters")}
        />
        <small>( i, l, 1, L, o, 0, O )</small>
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="ambiguousSymbols"
          label={t("advanced_settings.ambiguous_symbols")}
          disabled={!watched[2]}
          {...register("advancedSettings.includeAmbiguousSymbols")}
        />
        <small>{"( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )"}</small>
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="useDuplicateCharacters"
          label={t("advanced_settings.use_duplicates")}
          {...register("advancedSettings.useDuplicateCharacters")}
        />
      </MotionCard>
      <MotionCard variants={cardVariants} transition={spring} className="my-2">
        <Togglebutton
          htmlId="saveForNextTime"
          label={t("advanced_settings.save_for_next_time")}
          {...register("advancedSettings.saveForNextTime")}
        />
      </MotionCard>
    </>
  );
};

export default AdvancedSettings;

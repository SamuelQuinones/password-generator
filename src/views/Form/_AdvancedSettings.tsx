import { FC } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormInput, handleKeyDown } from "./Helper";
import Card from "components/Card";
import NumberInput from "components/NumberInput";
import Togglebutton from "components/ToggleButton";
//* Translation
import { useTranslation } from "react-i18next";

type Props = {
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
};

const AdvancedSettings: FC<Props> = ({ register, watch }) => {
  const watched = watch([
    "advancedSettings.maxLength",
    "passwordLength",
    "includeSymbols",
  ]);
  const { t } = useTranslation();

  return (
    <div>
      <span>{t("form.advanced_settings.title")}</span>
      <Card className="my-2">
        <NumberInput
          leftDisabled={watched[0].toString() === "24"}
          rightDisabled={watched[0].toString() === "90"}
          label={t("form.advanced_settings.max_length")}
          htmlId="maxLengthId"
          max={90}
          min={24}
          onKeyDown={handleKeyDown}
          {...register("advancedSettings.maxLength", { min: 24, max: 90 })}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="similarChars"
          label={t("form.advanced_settings.similar_symbols")}
          {...register("advancedSettings.includeSimilarCharacters")}
        />
        <small>( i, l, 1, L, o, 0, O )</small>
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="ambiguousSymbols"
          label={t("form.advanced_settings.ambiguous_symbols")}
          disabled={!watched[2]}
          {...register("advancedSettings.includeAmbiguousSymbols")}
        />
        <small>{"( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )"}</small>
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="useDuplicateCharacters"
          label={t("form.advanced_settings.use_duplicates")}
          {...register("advancedSettings.useDuplicateCharacters")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="saveForNextTime"
          label={t("form.advanced_settings.save_for_next_time")}
          {...register("advancedSettings.saveForNextTime")}
        />
      </Card>
    </div>
  );
};

export default AdvancedSettings;

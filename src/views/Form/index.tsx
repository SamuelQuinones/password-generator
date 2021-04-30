import { FC } from "react";
import Card from "components/Card";
import Togglebutton from "components/ToggleButton";
import Slider from "components/Slider";
import DropdownMenu from "components/Dropdown";
import NumberInput from "components/NumberInput";
import { FormProps, GeneratorSettings } from "./Helper";

const Form: FC<FormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, watch } = GeneratorSettings();

  const watched = watch(["advancedSettings.maxLength", "passwordLength"]);

  return (
    <form
      id="password-form"
      className="col-span-2 md:col-span-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Length */}
      <label htmlFor="characterNum">Length: {watched[1]}</label>
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
      <div>Settings</div>
      <Card className="my-2">
        <Togglebutton
          htmlId="uppercase"
          label="Include Uppercase"
          {...register("includeUppercase")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="lowercase"
          label="Include Lowercase"
          {...register("includeLowercase")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="numbers"
          label="Include Numbers"
          {...register("includeNumbers")}
        />
      </Card>
      <Card className="my-2">
        <Togglebutton
          htmlId="symbols"
          label="Include Symbols"
          {...register("includeSymbols")}
        />
      </Card>

      {/* Advanced Settings */}
      <DropdownMenu label="Advanced Settings">
        <div>
          <Card>
            <NumberInput
              leftDisabled={watched[0].toString() === "24"}
              rightDisabled={watched[0].toString() === "90"}
              label="Max Length"
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
              label="Include Similar Symbols"
              {...register("advancedSettings.includeSimilarCharacters")}
            />
            <small>( e.g. i, l, 1, L, o, 0, O )</small>
          </Card>
        </div>
        <div>
          <Card>
            <Togglebutton
              htmlId="ambiguousSymbols"
              label="Include Ambiguous Symbols"
              {...register("advancedSettings.includeAmbiguousSymbols")}
            />
            <small>{"( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )"}</small>
          </Card>
        </div>
      </DropdownMenu>
    </form>
  );
};

export default Form;

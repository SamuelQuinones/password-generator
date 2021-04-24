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
      <Card>
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
      <Card>
        <Togglebutton
          htmlId="uppercase"
          label="Include Uppercase"
          {...register("includeUppercase")}
        />
      </Card>
      <Card>
        <Togglebutton
          htmlId="lowercase"
          label="Include Lowercase"
          {...register("includeLowercase")}
        />
      </Card>
      <Card>
        <Togglebutton
          htmlId="numbers"
          label="Include Numbers"
          {...register("includeNumbers")}
        />
      </Card>
      <Card>
        <Togglebutton
          htmlId="symbols"
          label="Include Symbols"
          {...register("includeSymbols")}
        />
      </Card>

      {/* Advanced Settings */}
      {/* // TODO: make it so you can't tab in when collapsed */}
      <DropdownMenu label="Advanced Settings">
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
      </DropdownMenu>
    </form>
  );
};

export default Form;

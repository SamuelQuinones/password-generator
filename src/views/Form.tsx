import { FC } from "react";
import Card from "components/Card";
import Togglebutton from "components/ToggleButton";
import Slider from "components/Slider";
import DropdownMenu from "components/Dropdown";
import { useForm } from "react-hook-form";

export type FormInput = {
  passwordLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  advancedSettings: {
    maxLength: number;
  };
};

type Props = {
  onSubmit: (data: FormInput) => any;
};

const Form: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, watch } = useForm<FormInput>({
    defaultValues: {
      passwordLength: 6,
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: false,
      advancedSettings: {
        maxLength: 24,
      },
    },
  });

  const watched = watch(["advancedSettings.maxLength", "passwordLength"]);

  return (
    <form
      id="password-form"
      className="col-span-2 md:col-span-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Length */}
      <label className="block" htmlFor="characterNum">
        Length: {watched[1]}
      </label>
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
      <DropdownMenu label="Advanced Settings">
        <Card>
          <input
            type="number"
            max={90}
            min={24}
            {...register("advancedSettings.maxLength", {
              min: 24,
              max: 90,
            })}
          />
        </Card>
      </DropdownMenu>
    </form>
  );
};

export default Form;

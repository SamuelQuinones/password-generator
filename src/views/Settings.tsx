import { FC } from "react";
import Togglebutton from "components/ToggleButton";
import Card from "components/Card";
import { useInputValues } from "util/context";

const Settings: FC = () => {
  const {
    values: {
      includeLowercase,
      includeNumbers,
      includeSymbols,
      includeUppercase,
    },
    setters: {
      setIncludeLowercase,
      setIncludeNumbers,
      setIncludeSymbols,
      setIncludeUppercase,
    },
  } = useInputValues();

  return (
    <>
      <div>Settings</div>
      <Card>
        <Togglebutton
          htmlId="uppercase"
          label="Include Uppercase"
          checked={includeUppercase}
          onChange={() => {
            includeUppercase === true &&
              includeLowercase === false &&
              setIncludeLowercase(true);

            setIncludeUppercase(!includeUppercase);
          }}
        />
      </Card>
      <Card>
        <Togglebutton
          htmlId="lowercase"
          label="Include Lowercase"
          checked={includeLowercase}
          onChange={() => {
            includeLowercase === true &&
              includeUppercase === false &&
              setIncludeUppercase(true);
            setIncludeLowercase(!includeLowercase);
          }}
        />
      </Card>
      <Card>
        <Togglebutton
          htmlId="numbers"
          label="Include Numbers"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </Card>
      <Card>
        <Togglebutton
          htmlId="symbols"
          label="Include Symbols"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </Card>
    </>
  );
};

export default Settings;

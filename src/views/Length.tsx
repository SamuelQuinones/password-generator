import { FC } from "react";
import { useInputValues } from "util/context";
import Card from "components/Card";
import Slider from "components/Slider";

const Length: FC = () => {
  const {
    values: { passwordLength },
    setters: { setPasswordLength },
  } = useInputValues();

  return (
    <>
      <label className="block" htmlFor="characterNum">
        Length: {passwordLength}
      </label>
      <Card>
        <Slider
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.currentTarget.value))}
          htmlID="characterNum"
          min={6}
          max={24}
          step={1}
        />
      </Card>
    </>
  );
};

export default Length;

import { FC } from "react";
import { ReactComponent as Palette } from "../../assets/palette-fill.svg";
import { ReactComponent as CheckCircle } from "../../assets/check2-circle.svg";

type ActiveIconProps = {
  usingTheme: boolean;
  theme: string;
};

const ActiveIcon: FC<ActiveIconProps> = ({ usingTheme, theme }) => {
  return usingTheme ? (
    <CheckCircle
      title={`Using ${theme} Theme`}
      width={20}
      height={20}
      className="inline-block"
    />
  ) : (
    <Palette
      title={`Switch to ${theme} Theme`}
      width={20}
      height={20}
      className="inline-block"
    />
  );
};

export default ActiveIcon;

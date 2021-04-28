import { FC } from "react";
import { ReactComponent as Palette } from "../../assets/palette-fill.svg";
import { ReactComponent as CheckAll } from "../../assets/check2-circle.svg";

const ActiveIcon: FC<{ usingTheme: boolean }> = ({ usingTheme }) => {
  return usingTheme ? (
    <CheckAll width={20} height={20} className="inline-block" />
  ) : (
    <Palette width={20} height={20} className="inline-block" />
  );
};

export default ActiveIcon;

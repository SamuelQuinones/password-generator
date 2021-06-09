import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Palette, CheckCircle } from "components/SVG-Icons";

type ActiveIconProps = {
  usingTheme: boolean;
  theme: string;
};

const ActiveIcon: FC<ActiveIconProps> = ({ usingTheme, theme }) => {
  const check = useRef<HTMLDivElement>(null);
  const palette = useRef<HTMLDivElement>(null);

  const commonProps = {
    classNames: usingTheme ? "slide-down" : "slide-up",
    timeout: 250,
    unmountOnExit: true,
  };

  return (
    <div className="flex flex-col items-center justify-center changer-wrapper text-center overflow-hidden relative">
      <CSSTransition nodeRef={check} in={usingTheme} {...commonProps}>
        <div className="absolute" ref={check}>
          <CheckCircle title={`Using ${theme} Theme`} width={20} height={20} />
        </div>
      </CSSTransition>
      <CSSTransition nodeRef={palette} in={!usingTheme} {...commonProps}>
        <div className="absolute" ref={palette}>
          <Palette title={`Switch to ${theme} Theme`} width={20} height={20} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default ActiveIcon;

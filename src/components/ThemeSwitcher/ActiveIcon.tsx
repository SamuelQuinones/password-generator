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
    <div className="changer-wrapper flex flex-col items-center justify-center overflow-hidden relative rounded-full mx-1 w-9 h-9 border-2 shadow-lg transition duration-250">
      <CSSTransition nodeRef={check} in={usingTheme} {...commonProps}>
        <div className="absolute" ref={check}>
          <CheckCircle
            className="inline-block"
            title={`Using ${theme} Theme`}
            width={20}
            height={20}
          />
        </div>
      </CSSTransition>
      <CSSTransition nodeRef={palette} in={!usingTheme} {...commonProps}>
        <div className="absolute" ref={palette}>
          <Palette
            className="inline-block"
            title={`Switch to ${theme} Theme`}
            width={20}
            height={20}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default ActiveIcon;

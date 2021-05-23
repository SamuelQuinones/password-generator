import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Palette } from "../../assets/palette-fill.svg";
import { ReactComponent as CheckCircle } from "../../assets/check2-circle.svg";

type ActiveIconProps = {
  usingTheme: boolean;
  theme: string;
};

const ActiveIcon: FC<ActiveIconProps> = ({ usingTheme, theme }) => {
  const check = useRef<HTMLDivElement>(null);
  const palette = useRef<HTMLDivElement>(null);

  return (
    <>
      <CSSTransition
        nodeRef={check}
        classNames="slide"
        in={usingTheme}
        timeout={250}
        unmountOnExit
      >
        <div className="absolute" ref={check}>
          <CheckCircle
            title={`Using ${theme} Theme`}
            width={20}
            height={20}
            className="inline-block"
          />
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={palette}
        classNames="slide"
        in={!usingTheme}
        timeout={250}
        unmountOnExit
      >
        <div className="absolute" ref={palette}>
          <Palette
            title={`Switch to ${theme} Theme`}
            width={20}
            height={20}
            className="inline-block"
          />
        </div>
      </CSSTransition>
    </>
  );
};

export default ActiveIcon;

import { forwardRef, ReactNode } from "react";
import classNames from "classnames";

type Props = { className?: string; children?: ReactNode };

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={classNames("card", "card-theme", className)}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;

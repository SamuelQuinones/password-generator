import { forwardRef, ReactNode } from "react";

type Props = { className?: string; children?: ReactNode };

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`${
          className ? className : ""
        } card card-theme rounded-md shadow-md p-3`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;

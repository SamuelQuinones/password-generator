import { forwardRef, ReactNode } from "react";

type Props = { className?: string; children?: ReactNode };

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "no-cls-card" }, ref) => {
    return (
      <div ref={ref} className={`card card-theme ${className}`}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;

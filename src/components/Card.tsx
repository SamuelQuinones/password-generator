import { FC } from "react";

const Card: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } card card-theme rounded-md shadow-md p-3`}
    >
      {children}
    </div>
  );
};

export default Card;

import React from "react";

const Card: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } card rounded-md my-2 shadow-md p-3 bg-pink-700`}
    >
      {children}
    </div>
  );
};

export default Card;

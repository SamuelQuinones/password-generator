import React from "react";

const Card: React.FC = ({ children }) => {
  return (
    <div className="rounded-md my-2 shadow-md p-3 bg-pink-700">{children}</div>
  );
};

export default Card;

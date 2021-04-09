import React from "react";

const Button = React.forwardRef<HTMLButtonElement, any>(({ children }, ref) => {
  return (
    <button
      ref={ref}
      className="w-full rounded-md p-2 transition bg-pink-400 hover:bg-pink-500 focus:outline-none focus:bg-pink-500 focus:ring focus:ring-pink-300 focus:ring-opacity-60"
    >
      {children}
    </button>
  );
});
export default Button;
Button.displayName = "Button";

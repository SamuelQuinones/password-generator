import { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`${
          className ? className : ""
        } btn w-full rounded-md p-2 transition bg-pink-400 hover:bg-pink-500 focus:outline-none focus:bg-pink-500 focus:ring focus:ring-pink-300 focus:ring-opacity-60`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
export default Button;
Button.displayName = "Button";

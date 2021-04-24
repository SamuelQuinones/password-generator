import { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`${
          className ? className : ""
        } btn btn-theme w-full rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-60`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
export default Button;
Button.displayName = "Button";

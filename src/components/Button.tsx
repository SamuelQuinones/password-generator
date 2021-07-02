import { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "no-cls-btn", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn btn-theme rounded-md p-2 ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
export default Button;
Button.displayName = "Button";

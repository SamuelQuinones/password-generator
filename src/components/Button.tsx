import { forwardRef, ComponentPropsWithoutRef } from "react";
import classNames from "classnames";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames("btn", "btn-theme", className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
export default Button;
Button.displayName = "Button";

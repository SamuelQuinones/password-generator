import { ChangeEvent, forwardRef } from "react";
import useIsClient from "hooks/useIsClient";

type Props = {
  label: string;
  htmlId: string;
  name?: string;
  type?: "skinny" | "thick";
  disabled?: boolean;
  value?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
};

const Togglebutton = forwardRef<HTMLInputElement, Props>(
  (
    { label, htmlId, type = "skinny", name, disabled = false, value, onChange },
    ref
  ) => {
    const mounted = useIsClient();
    return (
      // <div className="flex items-center justify-between my-1">
      <label
        htmlFor={htmlId}
        className={`flex justify-between items-center ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <div>{label}</div>
        <div className="relative flex items-center">
          <input
            disabled={disabled}
            ref={ref}
            type="checkbox"
            name={name}
            id={htmlId}
            className="sr-only pwg-toggle"
            value={value}
            onChange={onChange}
          />
          {mounted && (
            <>
              {type === "skinny" ? (
                <>
                  <div className="sw-line w-10 h-4 bg-gray-400 rounded-full shadow-inner ease-in-out transition-colors" />
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 ease-in-out transition-custom" />
                </>
              ) : (
                <>
                  <div className="sw-line block bg-gray-600 w-14 h-8 rounded-full ease-in-out transition-colors" />
                  <div className="dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full ease-in-out transition-custom" />
                </>
              )}
            </>
          )}
        </div>
      </label>
      // </div>
    );
  }
);

export default Togglebutton;
Togglebutton.displayName = "ToggleButton";

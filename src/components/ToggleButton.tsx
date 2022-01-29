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
        className={`flex items-center justify-between ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <span>{label}</span>
        <div className="relative flex items-center">
          <input
            disabled={disabled}
            ref={ref}
            type="checkbox"
            name={name}
            id={htmlId}
            className="pwg-toggle sr-only"
            value={value}
            onChange={onChange}
          />
          {mounted && (
            <>
              {type === "skinny" ? (
                <>
                  <div className="sw-line h-4 w-10 rounded-full bg-gray-400 shadow-inner transition-colors ease-in-out" />
                  <div className="dot absolute -left-1 -top-1 h-6 w-6 rounded-full bg-white shadow transition-custom ease-in-out" />
                </>
              ) : (
                <>
                  <div className="sw-line block h-8 w-14 rounded-full bg-gray-600 transition-colors ease-in-out" />
                  <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-custom ease-in-out" />
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

import React from "react";

type Props = {
  label: string;
  htmlId: string;
  name?: string;
  type?: "skinny" | "thick";
  disabled?: boolean;
  value?: any;
  onChange: (x: any) => any;
};

const Togglebutton = React.forwardRef<HTMLInputElement, Props>(
  (
    { label, htmlId, type = "skinny", name, disabled = false, value, onChange },
    ref
  ) => {
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
            className="sr-only"
            value={value}
            onChange={onChange}
          />
          {type === "skinny" ? (
            <>
              <div className="sw-line w-10 h-4 bg-gray-400 rounded-full shadow-inner transition" />
              <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
            </>
          ) : (
            <>
              <div className="sw-line block bg-gray-600 w-14 h-8 rounded-full transition" />
              <div className="dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition" />
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

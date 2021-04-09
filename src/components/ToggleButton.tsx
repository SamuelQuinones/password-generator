import React from "react";

type Props = {
  label: string;
  htmlId: string;
  htmlName?: string;
  checked?: boolean;
  type?: "skinny" | "thick";
  onChange: (x: any) => any;
};

const Togglebutton = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      htmlId,
      checked = false,
      type = "skinny",
      htmlName = htmlId,
      onChange,
    },
    ref
  ) => {
    return (
      // <div className="flex items-center justify-between my-1">
      <label
        htmlFor={htmlId}
        className="flex justify-between items-center cursor-pointer"
      >
        <div>{label}</div>
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            name={htmlName}
            id={htmlId}
            className="sr-only"
            checked={checked}
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

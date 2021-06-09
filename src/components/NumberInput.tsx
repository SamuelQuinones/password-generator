import { forwardRef, ChangeEvent } from "react";
import { Minus, Plus } from "./SVG-Icons";

type Props = {
  htmlId: string;
  name?: string;
  min: number;
  max: number;
  label: string;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
};

const NumberInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      htmlId,
      name,
      max,
      min,
      onChange,
      label,
      rightDisabled = false,
      leftDisabled = false,
    },
    ref
  ) => {
    /**
     * Based on the value of the input, the value of the number will decrease or increase.
     *
     * This function exists to be used in conjunction with "react-hook-form" as it monopolizes the ref and state.
     * This is why the event is dispatched.
     *
     * meant to be called by buttons which "replace" the default steppers.
     *
     * @param input string with a value of "stepUp" or "stepDown"
     */
    const forceChange = (input: "stepUp" | "stepDown") => {
      const el = document.querySelector<HTMLInputElement>(`#${htmlId}`);
      const ev = new Event("change", { bubbles: true });
      el?.[input]();
      el?.dispatchEvent(ev);
    };

    return (
      <label className="flex justify-between cursor-pointer" htmlFor={htmlId}>
        {label}
        <div>
          <button
            disabled={leftDisabled}
            type="button"
            className="relative num-input-btn rounded-l-md px-1 border btn btn-theme"
            onClick={() => forceChange("stepDown")}
          >
            <Minus height={14} width={14} title="Lower Max" />
          </button>
          <input
            ref={ref}
            className="num-input-field text-center border-t border-b px-1"
            type="number"
            onChange={onChange}
            id={htmlId}
            name={name}
            max={max}
            min={min}
          />
          <button
            disabled={rightDisabled}
            type="button"
            className="relative num-input-btn rounded-r-md px-1 border btn btn-theme"
            onClick={() => forceChange("stepUp")}
          >
            <Plus height={14} width={14} title="Increase Max" />
          </button>
        </div>
      </label>
    );
  }
);

export default NumberInput;
NumberInput.displayName = "NumberInput";

import { forwardRef } from "react";
import { ReactComponent as Minus } from "../assets/dash.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";

type Props = {
  htmlId: string;
  name?: string;
  min: number;
  max: number;
  label: string;
  onChange: (x: React.ChangeEvent<HTMLInputElement>) => any;
};

const NumberInput = forwardRef<HTMLInputElement, Props>(
  ({ htmlId, name, max, min, onChange, label }, ref) => {
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
            type="button"
            className="num-input-btn bg-pink-400 rounded-l-md px-1 border btn transition"
            onClick={() => forceChange("stepDown")}
          >
            <Minus title="Lower Max" className="inline-block" />
          </button>
          <input
            ref={ref}
            className="num-input-field bg-pink-400 text-center border-t border-b px-1"
            type="number"
            onChange={onChange}
            id={htmlId}
            name={name}
            max={max}
            min={min}
          />
          <button
            type="button"
            className="num-input-btn bg-pink-400 rounded-r-md px-1 border btn transition"
            onClick={() => forceChange("stepUp")}
          >
            <Plus title="Increase Max" className="inline-block" />
          </button>
        </div>
      </label>
    );
  }
);

export default NumberInput;
NumberInput.displayName = "NumberInput";

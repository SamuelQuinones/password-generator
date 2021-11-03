import {
  forwardRef,
  ChangeEvent as ReactCE,
  KeyboardEvent as ReactKB,
} from "react";
import Button from "./Button";
import { Minus, Plus } from "./SVG-Icons";

type Props = {
  htmlId: string;
  name?: string;
  min: number;
  max: number;
  label: string;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  onChange: (e: ReactCE<HTMLInputElement>) => any;
  onKeyDown?: (e: ReactKB<HTMLInputElement>) => any;
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
      onKeyDown,
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
      const ev = new Event("input", { bubbles: true });
      el?.[input]();
      el?.dispatchEvent(ev);
    };

    return (
      <label className="flex justify-between cursor-pointer" htmlFor={htmlId}>
        {label}
        <div>
          <Button
            disabled={leftDisabled}
            type="button"
            className="relative num-input-btn rounded-r-none rounded-l-md px-1 border py-0"
            onClick={() => forceChange("stepDown")}
          >
            <Minus height={14} width={14} title="Decrease" />
          </Button>
          <input
            ref={ref}
            className="num-input-field text-center border-t border-b px-1"
            type="number"
            onChange={onChange}
            onKeyDown={onKeyDown}
            id={htmlId}
            name={name}
            max={max}
            min={min}
          />
          <Button
            disabled={rightDisabled}
            type="button"
            className="relative num-input-btn rounded-l-none rounded-r-md px-1 border py-0"
            onClick={() => forceChange("stepUp")}
          >
            <Plus height={14} width={14} title="Increase" />
          </Button>
        </div>
      </label>
    );
  }
);

export default NumberInput;
NumberInput.displayName = "NumberInput";

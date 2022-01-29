import { forwardRef, ChangeEvent } from "react";

type SliderProps = {
  min: number | string;
  max: number | string;
  step: number;
  htmlID: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
};

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ min, max, step, htmlID, name, onChange }, ref) => {
    return (
      <div className="flex">
        <span className="grow-0 pr-2">{min}</span>
        <input
          ref={ref}
          className="grow focus:outline-none"
          onChange={onChange}
          type="range"
          name={name}
          id={htmlID}
          min={min}
          max={max}
          step={step}
        />
        <span className="grow-0 pl-2">{max}</span>
      </div>
    );
  }
);

export default Slider;
Slider.displayName = "Slider";

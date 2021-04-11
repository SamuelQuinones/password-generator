import { forwardRef } from "react";

type SliderProps = {
  min: number;
  max: number;
  step: number;
  htmlID: string;
  name?: string;
  onChange: (x: React.ChangeEvent<HTMLInputElement>) => any;
};

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ min, max, step, htmlID, name = htmlID, onChange }, ref) => {
    return (
      <div className="flex">
        <span className="flex-grow-0 pr-2">{min}</span>
        <input
          ref={ref}
          className="flex-grow focus:outline-none"
          onChange={onChange}
          type="range"
          name={name}
          id={htmlID}
          min={min}
          max={max}
          step={step}
        />
        <span className="flex-grow-0 pl-2">{max}</span>
      </div>
    );
  }
);

export default Slider;
Slider.displayName = "Slider";

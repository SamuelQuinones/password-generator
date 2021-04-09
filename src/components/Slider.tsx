import React from "react";

type SliderProps = {
  min: number;
  max: number;
  step: number;
  htmlID: string;
  name?: string;
  onChange: (x: React.ChangeEvent<HTMLInputElement>) => any;
  value: number;
};

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  htmlID,
  name = htmlID,
  onChange,
  value,
}) => {
  return (
    <div className="flex">
      <span className="flex-grow-0 pr-2">{min}</span>
      <input
        className="flex-grow focus:outline-none"
        onChange={onChange}
        type="range"
        name={name}
        id={htmlID}
        min={min}
        max={max}
        value={value}
        step={step}
      />
      <span className="flex-grow-0 pl-2">{max}</span>
    </div>
  );
};

export default Slider;

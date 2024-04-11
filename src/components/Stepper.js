import React from "react";

const Stepper = ({ currentStep }) => {
  // Array of steps
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex h-12  justify-between items-center w-full md:w-3/4">
      {steps.map((index) => (
        <div
          className={`h-2 w-1/6  ${
            index - 1 < currentStep ? "bg-orange-300" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default Stepper;

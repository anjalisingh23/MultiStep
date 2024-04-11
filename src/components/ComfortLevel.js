import React, { useState } from "react";

const ComfortLevel = ({ formData, handleLevelChange, prevStep, nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState(formData.level);
  const mathLevels = [
    {
      id: 1,
      label: "Arithmetic",
      content: "5 × 1/2 = ?",
      level: "Introductory",
    },
    {
      id: 2,
      label: "Basic Algebra",
      content: "3x + 5 = 4",
      level: "Foundational",
    },
    {
      id: 3,
      label: "Intermediate Algebra",
      content: "x = (-b ± √(b^2 - 4ac)) / 2a",
      level: "Intermediate",
    },
    {
      id: 4,
      label: "Calculus",
      content: "∫x^2 dx = ?",
      level: "Advanced",
    },
  ];
  function handleNextStep() {
    if (formData.level !== "") nextStep();
    else {
      alert("Please select an option.");
    }
  }
  const handleOptions = (option) => {
    handleLevelChange(option);
    selectedOptionChange(option);
  };

  return (
      <div className="flex flex-col p-2 justify-start items-center h-full w-full md:w-2/3 lg:w-1/2 box-border ">
        <h2 className="text-2xl w-full text-center font-semibold ">
          What is your math comfort level?
        </h2>
        <p className=" text-sm text-center w-full text-gray-600 mb-4 ">
          Choose the highest level you feel confident in — you can always adjust
          later.
        </p>
        <div className="w-2/3 lg:flex lg:w-full ">
          {mathLevels.map((level) => (
            <div
              key={level.id}
              onClick={()=>handleOptions(level.id)}
              className={`p-2 rounded-md cursor-pointer text-center m-2 lg:w-1/4 border-2 border-orange-200 ${
                selectedOption === level.id
                  ? "bg-orange-200"
                  : "hover:bg-orange-100"
              }`}
            >
              <h3 className="text-md font-medium mb-1">{level.label}</h3>
              <p className="text-gray-600 text-sm font-mono">{level.content}</p>
              <p className="text-gray-500 text-sm">{level.level}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center m-4  w-full ">
        <button
          onClick={prevStep}
          className="mr-6 bg-orange-300 text-sm text-white font-medium py-2 px-4 rounded-md w-1/5 "
        >
          Prev
        </button>
        <button
          onClick={nextStep}
          className="ml-6 bg-orange-300 text-sm text-white font-medium py-2 px-4 rounded-md w-1/5 "
        >
          Continue
        </button>
      </div>
      </div>
  );
};

export default ComfortLevel;

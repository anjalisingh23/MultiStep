import { useState } from "react";

const Options = ({ formData,handleLevelChange, prevStep, nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState(formData.level);
  const options = [
    {
      id: 1,
      label: "Beginner",
      icon: "images/level.png",
    },
    {
      id: 2,
      label: "Novice",
      icon: "images/level.png",
    },
    {
      id: 3,
      label: "Intermediate",
      icon: "images/level.png",
    },
    {
      id: 4,
      label: "Advanced",
      icon: "images/level.png",
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
    
      <div className="flex flex-col justify-center items-center h-full w-full md:w-2/3 lg:w-1/2 box-border">
        <h2 className="text-3xl text-center font-semibold m-4 w-full ">
          What is your programming comfort level?
        </h2>
        <p className="text-center text-gray-600 mb-2 w-full ">
          Choose the highest level you feel confident in — you can always adjust
          later.
        </p>
        <div className="m-6 ml-8 w-3/4 md:w-2/3">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptions(option.id)}
              className={`flex  items-center space-x-2 cursor-pointer p-2 m-2 rounded border-2 border-orange-100 ${
                selectedOption === option.id
                  ? "bg-orange-200"
                  : "hover:bg-orange-100"
              }`}
            >
              <span className="text-4xl  w-14 ml-3"><img src={option.icon}/></span>
              <span className=" text-lg  ">{option.label}</span>
            </div>
          ))}
        </div>
        <div className="flex w-2/3 justify-center m-6 md:w-2/3  ">
          <button
            onClick={prevStep}
            className="mr-6 bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
          >
            Prev
          </button>
          <button
            onClick={handleNextStep}
            className="ml-6 bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
          >
            Continue
          </button>
        </div>
      </div>
  );
};
export default Options;

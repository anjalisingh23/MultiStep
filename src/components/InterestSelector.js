import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGlobe,
  faCalculator,
  faBrain,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const InterestSelector = ({
  formData,
  handleInterestsChange,
  nextStep,
  prevStep,
}) => {
  const [selectedOption, selectedOptionChange] = useState(formData.interests);
  const options = [
    {
      id: 1,
      label: "Learning specific skills to advance my career",
      icon: (
        <FontAwesomeIcon
          icon={faChartLine}
          className="w-6 h-6 text-gray-600 mr-2"
        />
      ),
      value: "career",
    },
    {
      id: 2,
      label: "Exploring new topics I'm interested in",
      icon: (
        <FontAwesomeIcon
          icon={faGlobe}
          className="w-6 h-6 text-gray-600 mr-2"
        />
      ),
      value: "topics",
    },
    {
      id: 3,
      label: "Refreshing my math foundations",
      icon: (
        <FontAwesomeIcon
          icon={faCalculator}
          className="w-6 h-6 text-gray-600 mr-2"
        />
      ),
      value: "math",
    },
    {
      id: 4,
      label: "Exercising my brain to stay sharp",
      icon: (
        <FontAwesomeIcon
          icon={faBrain}
          className="w-6 h-6 text-gray-600 mr-2"
        />
      ),
      value: "brain",
    },
    {
      id: 5,
      label: "Something else",
      icon: (
        <FontAwesomeIcon
          icon={faEllipsisH}
          className="w-6 h-6 text-gray-600 mr-2"
        />
      ),
      value: "other",
    },
  ];

  function handleNextStep() {
    if (formData.interests !== "") {
      nextStep();
    } else {
      alert("Please select an option. Choose just one. ");
    }
  }
  const handleOptions = (option) => {
    handleInterestsChange(option);
    selectedOptionChange(option);
  };
  return (
    <div className="flex flex-col justify-start items-center h-full w-full md:w-2/3 lg:w-1/2 box-border ">
      <h2 className="text-2xl text-center font-semibold m-2 w-full ">
        Which describes you best?
      </h2>
      <p className="text-sm text-center text-gray-600 mb-1 w-full ">
        This will help us personalize your experience.
      </p>
      <div className="m-4 ml-8 w-3/4 md:w-2/3 ">
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
            <span className="text-3xl  w-14 ml-3">{option.icon}</span>
            <span className=" text-sm  ">{option.label}</span>
          </div>
        ))}
      </div>
      <div className="flex w-2/3 justify-center mb-6 md:w-2/3 ">
        <button
          onClick={prevStep}
          className="mr-6 bg-orange-300 text-sm text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
        >
          Prev
        </button>
        <button
          onClick={handleNextStep}
          className="ml-6 bg-orange-300 text-sm text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default InterestSelector;

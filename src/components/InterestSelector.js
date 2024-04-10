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
  const [selectedOption, selectedOptionChange] = useState("");
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
    <div className="flex justify-center  h-screen box-border bg-white p-4 rounded-md shadow-md ">
      <div className=" md:basis-3/4 lg:basis-1/2 ">
        <h2 className="text-3xl text-center font-semibold m-4 ">
          Which are you most interested in?
        </h2>
        <p className="text-center text-gray-600 mb-4">
          This will help us get you started (but won't limit your experience).
        </p>
        <div className="m-6 ml-8 grid grid-cols-1 gap-6 ">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptions(option.id)}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded border-2 border-orange-100 ${
                selectedOption === option.id
                  ? "bg-orange-200"
                  : "hover:bg-orange-100"
              }`}
            >
              <span className="text-4xl  w-14 ml-3">{option.icon}</span>
              <span className=" text-lg  ">{option.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center m-6  ">
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
    </div>
  );
};

export default InterestSelector;

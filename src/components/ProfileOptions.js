import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faChild,
  faUserGraduate,
  faChalkboardTeacher,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ProfileOptions = ({
  formData,
  handleOptionsChange,
  nextStep,
  prevStep,
}) => {
  const [selectedOption, selectedOptionChange] = useState(
    formData.profileOptions
  );

  const options = [
    {
      id: 1,
      label: "Student or soon to be enrolled",
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
    {
      id: 2,
      label: "Professional pursuing a career",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      id: 3,
      label: "Parent of a school-age child",
      icon: <FontAwesomeIcon icon={faChild} />,
    },
    {
      id: 4,
      label: "Lifelong learner",
      icon: <FontAwesomeIcon icon={faUserGraduate} />,
    },
    {
      id: 5,
      label: "Teacher",
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
    },
    {
      id: 6,
      label: "Other",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
  ];

  const handleNextStep = () => {
    if (formData.profileOptions !== "") {
      nextStep();
    } else {
      alert("Please select an option.");
    }
  };
  const handleOptions = (option) => {
    handleOptionsChange(option);
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

export default ProfileOptions;

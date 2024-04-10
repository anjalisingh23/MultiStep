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
  const [selectedOption, selectedOptionChange] = useState("");

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
    <div className="flex justify-center  h-screen box-border bg-white p-4">
      <div className=" md:basis-3/4 lg:basis-1/2 ">
        <h2 className="text-3xl text-center font-semibold m-4 ">
          Which describes you best?
        </h2>
        <p className="text-center text-gray-600 mb-4">
          This will help us personalize your experience.
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

export default ProfileOptions;

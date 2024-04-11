import { useState } from "react";
const Math = ({ prevStep, nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "Foundational Math",
      content:
        " Build your foundational skills in algebra,geometry and probability",
      icon: "images/think.png",
      link: "https://brilliant.org/courses/math-fundamentals/",
    },
    {
      id: 2,
      heading: "Mathematical Thinking",
      content:
        " Build your foundational skills in algebra,geometry and probability",
      icon: "images/think.png",
      link: "https://www.coursera.org/learn/mathematical-thinking",
    },
  ];
  const handleChoice = () => {};
  const handleOptions = (option) => {
    selectedOptionChange(option);
  };

  return (
    <div className="flex flex-col p-2 justify-start items-center h-full w-full md:w-2/3 lg:w-1/2 box-border  ">
      <h2 className="text-2xl text-center font-semibold mb-1 w-full  ">
        Learning paths based on your answers
      </h2>
      <p className="text-sm text-center text-gray-600 mb-1 w-full">
        Choose one to get started.You can switch anytime
      </p>
      <div className="flex flex-col items-center p-2 h-2/3 m-1 w-full lg:grid lg:grid-cols-2 lg:h-auto ">
        {options.map((option) => (
          <a
            href={option.link}
            target="_blank"
            onClick={() => handleChoice(option.link)}
            className={`flex items-center h-1/4 w-4/5 lg:h-auto cursor-pointer p-1 m-2 rounded border-2 border-orange-100 ${
              selectedOption === option.id
                ? "bg-orange-200"
                : "hover:bg-orange-100"
            }`}
          >
            <div className="box-border h-full w-1/4 ">
              <img className="w-full h-full " src={option.icon} />
            </div>
            <p className="text-sm p-1 w-3/4 h-full">
              <span className=" font-semibold">{option.heading}</span>
              {option.content}
            </p>
          </a>
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
          Home
        </button>
      </div>
    </div>
  );
};

export default Math;

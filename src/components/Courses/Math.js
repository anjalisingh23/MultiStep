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
    <div className="flex justify-center items-start box-border h-screen w-full ">
      <div className="flex flex-col w-full h-full lg:w-2/3 ">
        <h2 className="text-3xl text-center font-semibold m-4 ">
          Learning paths based on your answers
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Choose one to get started.You can switch anytime
        </p>
        <div className="m-6 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:pl-10  ">
          {options.map((option) => (
            <a
              href={option.link}
              target="_blank"
              onClick={() => handleChoice(option.link)}
              className={`flex w-2/3  m-2 p-2 rounded-md cursor-pointer  lg:col-span-1 border-2 border-orange-200 ${
                selectedOption === option.id
                  ? "bg-orange-200"
                  : "hover:bg-orange-100"
              }`}
            >
              <img src={option.icon} />
              <p className="p-2">
                <span className="font-semibold">{option.heading}</span>
                {option.content}
              </p>
            </a>
          ))}
        </div>
        <div className="m-6 text-center ">
          <button
            onClick={prevStep}
            className="mr-6 bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-1/5"
          >
            Prev
          </button>
          <button
            onClick={nextStep}
            type="submit"
            className=" bg-orange-300  text-white font-medium py-2 px-2 rounded-md w-1/5 lg:w-1/6"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Math;

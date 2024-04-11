import { useState } from "react";
const BrainExercise = ({ prevStep,nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "BrainExercise",
      content:
        " Summa Health offers 6 ways to build your mental fitness to improve your....",
      icon: "images/brain.png",
      link: "https://www.summahealth.org/flourish/entries/2022/01/exercising-your-brain-6-ways-to-build-mental-fitness",
    },
    {
      id: 2,
      heading: "Puzzles",
      content:
        " Our online puzzles are so much fun that kids don't even realize they're building....",
      icon: "images/jigsaw.png",
      link: "https://toytheater.com/category/play/puzzles/",
    },
    {
      id: 3,
      heading: "Logical Thinking",
      content:
        " Logical thinking is an essential tool in the workplace to help analyze....",
      icon: "images/critical-thinking.png",
      link: "https://www.theforage.com/blog/skills/logical-thinking",
    },
    {
      id: 4,
      heading: "Memory Games",
      content:
        " One of the best web based games for memory exercises, Balls and Boxes....",
      icon: "images/memory.png",
      link: "https://www.improvememory.org/brain-games/memory-games/",
    },
  ];
  const handleChoice = () => {};
  const handleOptions = (option) => {
    selectedOptionChange(option);
  };
return (
  <div className="flex flex-col p-2 items-center h-full w-full md:w-2/3 lg:w-1/2 box-border ">
    <h2 className="text-3xl text-center font-semibold mb-1 w-full  ">
      Learning paths based on your answers
    </h2>
    <p className="text-center text-gray-600 mb-1 w-full">
      Choose one to get started.You can switch anytime
    </p>
    <div className="flex flex-col h-2/3 m-1 w-3/4 lg:grid lg:grid-cols-2 lg:h-auto   ">
      {options.map((option) => (
        <a
          href={option.link}
          target="_blank"
          onClick={() => handleChoice(option.link)}
          className={`flex items-center h-1/5 lg:h-auto cursor-pointer p-1 m-2 rounded border-2 border-orange-100 ${
            selectedOption === option.id
              ? "bg-orange-200"
              : "hover:bg-orange-100"
          }`}
        >
          <div className="box-border h-full w-1/4 ">
            <img className="w-full h-full " src={option.icon} />
          </div>
          <p className="p-1 w-3/4 h-full">
            <span className="font-semibold">{option.heading}</span>
            {option.content}
          </p>
        </a>
      ))}
    </div>
    <div className="flex w-2/3 justify-center m-1 md:w-2/3  ">
      <button
        onClick={prevStep}
        className="mr-6 bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
      >
        Prev
      </button>
      <button
        onClick={nextStep}
        type="submit"
        className=" bg-orange-300  text-white font-medium py-2 px-2 rounded-md w-1/3 lg:w-1/5"
      >
        Home
      </button>
    </div>
  </div>
);
};

export default BrainExercise;

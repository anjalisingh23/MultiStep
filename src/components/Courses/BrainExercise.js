import { useState } from "react";
const BrainExercise = ({ prevStep,nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "BrainExercise",
      content:
        " Summa Health offers 6 ways to build your mental fitness to improve your memory, attention and brain speed.....",
      icon: "images/brain.png",
      link: "https://www.summahealth.org/flourish/entries/2022/01/exercising-your-brain-6-ways-to-build-mental-fitness",
    },
    {
      id: 2,
      heading: "Puzzles",
      content:
        " Our online puzzles are so much fun that kids don't even realize they're building essential problem-solving....",
      icon: "images/jigsaw.png",
      link: "https://toytheater.com/category/play/puzzles/",
    },
    {
      id: 3,
      heading: "Logical Thinking",
      content:
        " Logical thinking is an essential tool in the workplace to help analyze problems, brainstorm ideas, and find answers.",
      icon: "images/critical-thinking.png",
      link: "https://www.theforage.com/blog/skills/logical-thinking",
    },
    {
      id: 4,
      heading: "Memory Games",
      content:
        " One of the best web based games for memory exercises, Balls and Boxes will train your brain",
      icon: "images/memory.png",
      link: "https://www.improvememory.org/brain-games/memory-games/",
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
        <div className="m-6 flex flex-col justify-center items-center lg:grid lg:grid-cols-2   ">
          {options.map((option) => (
            <a
              href={option.link}
              target="_blank"
              onClick={() => handleChoice(option.link)}
              className={`flex w-2/3  m-2 p-2 rounded-md cursor-pointer box-border lg:w-4/5 lg:h-4/5 border-2 border-orange-200 ${
                selectedOption === option.id
                  ? "bg-orange-200"
                  : "hover:bg-orange-100"
              }`}
            >
              <div className="box-border w-1/4  ">
                <img className="w-full h-full  " src={option.icon} />
              </div>
              <p className="p-2 w-3/4">
                <span className="font-semibold">{option.heading}</span>
                {option.content}
              </p>
            </a>
          ))}
        </div>
        <div className="m-2 text-center ">
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

export default BrainExercise;

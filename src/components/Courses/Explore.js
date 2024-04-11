import { useState } from "react";
const Explore = ({ prevStep, nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "Arts & Crafts",
      content:
        " Uncover your creativity at home with online arts and crafts courses today....",
      icon: "images/art.png",
      link: "https://www.udemy.com/courses/lifestyle/arts-and-crafts/",
    },
    {
      id: 2,
      heading: "Gardening",
      content:
        " Learn Gardening, earn certificates with paid and free online courses from Universitat ....",
      icon: "images/gardening.png",
      link: "https://www.classcentral.com/subject/gardening",
    },
    {
      id: 3,
      heading: "Culinary Skills",
      content:
        " In these finest-ever online master cooking classes with the Master Chef....",
      icon: "images/culinary-skill.png",
      link: "https://www.sanjeevkapooracademy.com/",
    },
    {
      id: 4,
      heading: "Music",
      content:
        " Learn music online. Best online guitar, piano, ukulele, autoharp and DJ courses online....",
      icon: "images/music.png",
      link: "https://www.udemy.com/courses/music/",
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
      <div className="flex flex-col items-center p-2 h-2/3 m-1 w-full lg:grid lg:grid-cols-2 lg:h-auto   ">
        {options.map((option) => (
          <a
            href={option.link}
            target="_blank"
            onClick={() => handleChoice(option.link)}
            className={`flex items-center h-1/5 w-4/5 lg:h-5/6 cursor-pointer p-1 m-2 rounded border-2 border-orange-100 ${
              selectedOption === option.id
                ? "bg-orange-200"
                : "hover:bg-orange-100"
            }`}
          >
            <div className="box-border h-full p-1 w-1/4 ">
              <img className="w-full h-full " src={option.icon} />
            </div>
            <p className="text-sm w-3/4 h-full">
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

export default Explore;

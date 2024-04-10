import { useState } from "react";
const Explore = ({ prevStep,nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "Arts & Crafts",
      content:
        " Uncover your creativity at home with online arts and crafts courses today. Learn skills like drawing, painting, soapmaking, and Procreate - for all ages!.....",
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
        " In these finest-ever online master cooking classes with the Master Chef, you will not only create healthy .",
      icon: "images/culinary-skill.png",
      link: "https://www.sanjeevkapooracademy.com/",
    },
    {
      id: 4,
      heading: "Music",
      content:
        " Learn music online. Best online guitar, piano, ukulele, autoharp and DJ courses online",
      icon: "images/music.png",
      link: "https://www.udemy.com/courses/music/",
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
                <img
                  className="w-full h-full  "
                  src={option.icon}
                />
              </div>
              <p className="p-2 w-3/4">
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

export default Explore;

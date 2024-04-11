import { useState } from "react";
const Skills = ({ prevStep, nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "Coding/Programming",
      content:
        " Learn how to code or build your skills in programming online to ....",
      icon: "images/programming.png",
      link: "https://www.futurelearn.com/subjects/it-and-computer-science-courses/coding-programming",
    },
    {
      id: 2,
      heading: "Digital Marketing",
      content:
        " Master Digital Marketing Strategy, Social Media Marketing,....",
      icon: "images/economist.png",
      link: "https://www.udemy.com/course/learn-digital-marketing-course/?couponCode=ST8MT40924",
    },
    {
      id: 3,
      heading: "UI/UX Design",
      content:
        " Offered by Meta. Learn the fundamentals of User Experience (UX) research....",
      icon: "images/ui.png",
      link: "https://www.coursera.org/learn/principles-of-ux-ui-design",
    },
    {
      id: 4,
      heading: "Business Analyst",
      content:
        " Master business analysis with our courses, gaining skills for today's market.",
      icon: "images/bullhorn.png",
      link: "https://www.coursera.org/courses?query=business%20analysis",
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
            className={`flex items-center h-1/5 w-4/5 lg:h-auto cursor-pointer p-1 m-2 rounded border-2 border-orange-100 ${
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

export default Skills;

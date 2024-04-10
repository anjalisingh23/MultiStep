import { useState } from "react";
const Skills = ({ prevStep, nextStep }) => {
  const [selectedOption, selectedOptionChange] = useState("");
  const options = [
    {
      id: 1,
      heading: "Coding/Programming",
      content:
        " Learn how to code or build your skills in programming online to gain a better understanding....",
      icon: "images/programming.png",
      link: "https://www.futurelearn.com/subjects/it-and-computer-science-courses/coding-programming",
    },
    {
      id: 2,
      heading: "Digital Marketing",
      content:
        " Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook....",
      icon: "images/economist.png",
      link: "https://www.udemy.com/course/learn-digital-marketing-course/?couponCode=ST8MT40924",
    },
    {
      id: 3,
      heading: "UI/UX Design",
      content:
        " Offered by Meta. Learn the fundamentals of User Experience (UX) research and design.",
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
              <div className="box-border w-1/4 ">
                <img className="w-full h-full " src={option.icon} />
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

export default Skills;

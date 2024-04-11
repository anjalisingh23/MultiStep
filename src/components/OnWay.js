import React from "react";

const OnWay = ({ formData, prevStep, nextStep }) => {
  return (
    <div className="flex flex-row justify-center  w-full md:w-3/4  h-full box-border lg:p-10 xl:p-8  shadow-md ">
      <div className=" basis-1/2">
        <img className="w-full h-full object-cover" src="/images/onway.jpg" />
      </div>
      <div className="flex flex-col justify-center basis-2/3 lg:basis-1/3 ">
        <div className="p-4 ">
          <h2 className="text-2xl text-left font-semibold m-4">
            You’re on your way!
          </h2>
          <p className="text-md text-left italic text-slate-500 m-4">
            “For all people like me, who love problem solving and all areas
            related, this app is heaven. If you like bending your mind over
            interesting problems or want to explore a rich world full of
            beautiful mysteries, this app will be a sure thing for you.”— Bob V.
          </p>
        </div>
        <div className="flex justify-center mt-6   ">
          <button
            onClick={prevStep}
            className="mr-6 bg-orange-300 text-sm text-white font-medium py-2 px-4 rounded-md w-1/3"
          >
            Prev
          </button>
          <button
            onClick={nextStep}
            className="ml-6 bg-orange-300 text-sm text-white font-medium py-2 px-4 rounded-md w-1/3 "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnWay;

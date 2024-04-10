import React from "react";

const OnWay = ({ formData, prevStep, nextStep }) => {
  return (
    <div className="flex justify-center h-screen box-border lg:p-4 border-4 border-red-400">
      <div className=" basis-1/3 lg:basis-1/4">
        <img className="w-full h-full object-cover" src="/images/onway.jpg" />
      </div>
      <div className="flex flex-col justify-center basis-2/3 lg:basis-1/3 ">
        <div className="p-4 ">
          <h2 className="text-3xl text-left font-semibold m-4">
            You’re on your way!
          </h2>
          <p className="text-lg text-left italic text-slate-500 m-4">
            “For all people like me, who love problem solving and all areas
            related, this app is heaven. If you like bending your mind over
            interesting problems or want to explore a rich world full of
            beautiful mysteries, this app will be a sure thing for you.”— Bob V.
          </p>
        </div>
        <div className="flex justify-center m-6  ">
          <button
            onClick={prevStep}
            className="mr-6 bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
          >
            Prev
          </button>
          <button
            onClick={nextStep}
            className="ml-6 bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-1/3 lg:w-1/5"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnWay;

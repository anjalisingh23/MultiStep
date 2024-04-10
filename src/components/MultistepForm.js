import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import ProfileOptions from "./ProfileOptions";
import InterestSelector from "./InterestSelector";
import RightPlace from "./RightPlace";
import ComfortLevel from "./ComfortLevel";
import Options from "./OnWay";
import OnWay from "./OnWay";
import Final from "./Final";
import Level from "./Level";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    profileOptions: "",
    interests: "",
    level:"",
  });

  const nextStep = () => {
   
    setStep((step+1)%7);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleOptionsChange = (options) => {
    setFormData({ ...formData, profileOptions: options });
  };

  const handleInterestsChange = (interests) => {
    setFormData({ ...formData, interests: interests });
  };

  const handleLevelChange = (options) => {
    setFormData({ ...formData, level: options });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <ProfileOptions
            formData={formData}
            handleOptionsChange={handleOptionsChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <InterestSelector
            formData={formData}
            handleInterestsChange={handleInterestsChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <RightPlace
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Level
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
            handleLevelChange={handleLevelChange}
          />
        );
      case 5:
        return (
          <OnWay
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 6:
        return <Final formData={formData} nextStep={nextStep} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default MultiStepForm;

  
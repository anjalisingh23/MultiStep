import ComfortLevel from "./ComfortLevel";
import Options from "./Options";

const Level =({formData,handleLevelChange,nextStep,prevStep})=>{

    return (
       
        formData.interests === 3 ? <ComfortLevel formData={formData}
        nextStep={nextStep}
        prevStep={prevStep}
        handleLevelChange={handleLevelChange}
        /> : <Options formData={formData}
        nextStep={nextStep}
        prevStep={prevStep}
        handleLevelChange={handleLevelChange}
        />
       
    )
}

export default Level ;
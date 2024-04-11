import Skills from "./Courses/Skills";
import BrainExercise from "./Courses/BrainExercise";
import Explore from "./Courses/Explore";
import Math from "./Courses/Math";
const Final=({formData,prevStep ,nextStep})=>{
    
    const step=formData.interests;
    const renderCourse=()=>{
        switch(step){
            case 1:
                return <Skills nextStep={nextStep} prevStep={prevStep}/>;
            case 2:
                return <Skills nextStep={nextStep} prevStep={prevStep}/>;
            case 3:
                return <Math nextStep={nextStep} prevStep={prevStep}/>;
            case 4:
                return <BrainExercise  nextStep={nextStep} prevStep={prevStep}/>;
            case 5:
                return <Explore nextStep={nextStep} prevStep={prevStep}/>;
            default:
                return null;
        }
    }

    return (
       
          <>{renderCourse()}</>
        
    )
}


export default Final;
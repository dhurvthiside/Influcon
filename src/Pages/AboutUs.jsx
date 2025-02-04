import React from "react";
import TeamGrid from "../Components/TeamGrid";
import Roadmap from "../Components/Roadmap";
import Founders from "../Components/Founders";
import Mentors from "../Components/Mentors";


const AboutUs = () => {
  return (
    <>
    <div>
    <TeamImageAboutUs/>
    </div>
     <div  >
      <Roadmap />
    </div>
    <div  >
      <Mentors />
    </div>
    <div  >
      <Founders />
    </div>
    <div className="bg-black text-white">
      <TeamGrid />
    </div>
    
    </>
  );
};

export default AboutUs;

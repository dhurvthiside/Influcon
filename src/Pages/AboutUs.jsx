import React from "react";
import TeamGrid from "../Components/TeamGrid";
import Roadmap from "../Components/Roadmap";
import Founders from "../Components/Founders";
import Mentors from "../Components/Mentors";


const AboutUs = () => {
  return (
    <>
    <div  >
      <Founders />
    </div>
    <div className="bg-black text-white">
      <TeamGrid />
    </div>
    <div  >
      <Roadmap />
    </div>
    <div  >
      <Mentors />
    </div>
    </>
  );
};

export default AboutUs;

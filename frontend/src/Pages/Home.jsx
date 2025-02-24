import React from "react";
import WhyChooseUs from "../Components/WhyChooseUs";
import AboutUsHome from "../Components/AboutUsHome";
import HeroSection from "../Components/Hero";
import ClientLogo from "../Components/ClientLogo.jsx";
import Testimonial from "../Components/Testimonial.jsx";
import OurServices from "../Components/OurServices.jsx";
import Video from "../Components/Video.jsx";
import WhyUs from "../Components/WhyUs.jsx";

const BackgroundWithSlideshowAndText = () => {
  return (
    <>
      {/* Wrapper for the Hero Section */}
      <div className="relative z-10 bg-white">
        <Video />
      </div>
      <div className="relative z-10 bg-white">
        <HeroSection />
      </div>
      <div className="relative z-10 bg-white">
        <WhyUs />
      </div>
      <div className="relative z-10 bg-gray-800">
        <OurServices />
      </div>
      <div className="relative z-10 bg-white">
        <WhyChooseUs />
      </div>


      <div className="relative">
        
          <ClientLogo />
        {/* Gradient overlay */}
        <div className="relative z-10 bg-lightBlue-100">
          <AboutUsHome />
        </div>
        <div className="relative z-10 bg-lightBlue-100">
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default BackgroundWithSlideshowAndText;

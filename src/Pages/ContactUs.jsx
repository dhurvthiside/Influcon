import React from "react";
import WhyChooseUs from "../Components/WhyChooseUs";
import AboutUsHome from "../Components/AboutUsHome";
import HeroSection from "../Components/Hero";
import ClientLogo from "../Components/ClientLogo.jsx";
import Testimonial from "../Components/Testimonial.jsx";
import OurServices from "../Components/OurServices.jsx";

const BackgroundWithSlideshowAndText = () => {
  return (
    <>
      {/* Wrapper for the Hero Section */}
      <div className="relative z-10 bg-white">
        <HeroSection />
      </div>
      <div className="relative z-10 bg-gray-800">
        <OurServices />
      </div>
      <div className="relative z-10 bg-white">
        <WhyChooseUs />
      </div>
      {/* Gradient transition between ClientLogo and AboutUsHome */}
      <div className="relative">
        <div className="relative z-10 bg-gray-800">
          <ClientLogo />
        </div>
        {/* Gradient overlay */}
        <div
          className="h-60 bg-gradient-to-b from-gray-800 to-lightBlue-100"
          aria-hidden="true"
        />
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

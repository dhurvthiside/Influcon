import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-10 lg:px-20">
        <h1 className="text-6xl lg:text-8xl font-bricksans text-blue-500">
          LOREM <br /> EPSOM
        </h1>
        <p className="text-lg lg:text-2xl mt-6 mb-8 font-medium text-gray-300">
          “Lorem ipsum dolor sit amet consectetur.”
        </p>
        <button className="px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1712397943847-e104395a1a8b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Graphic"
          className="w-4/5 lg:w-3/4"
        />
      </div>
    </div>
  );
};

export default HeroSection;

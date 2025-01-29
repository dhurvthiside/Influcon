import React, { useState } from "react";

const cities = [
  {
    name: "Chennai",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=80.2295%2C12.9211%2C80.2727%2C13.0869&layer=mapnik",
    question: "What is your name?",
  },
  {
    name: "Bhubaneswar",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=85.785%2C20.220%2C86.045%2C20.420&layer=mapnik",
    question: "What is your email address?",
  },
  {
    name: "Mumbai",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=72.775%2C18.887%2C72.965%2C19.111&layer=mapnik",
    question: "What is your business name?",
  },
  {
    name: "Delhi",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=77.086%2C28.485%2C77.211%2C28.785&layer=mapnik",
    question: "What service are you looking for?",
  },
  {
    name: "Kolkata",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=88.295%2C22.445%2C88.495%2C22.665&layer=mapnik",
    question: "What is your budget range?",
  },
  {
    name: "Bangalore",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=77.505%2C12.920%2C77.635%2C13.060&layer=mapnik",
    question: "What is your preferred timeline?",
  },
];

function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < cities.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsTransitioning(false);
      }, 500);
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        setCurrentStep(cities.length); // Show India after final submit
      }, 500);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      {/* Map Section */}
      <div className="absolute inset-0">
        <div
          className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          style={{
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src={isSubmitted ? "https://www.openstreetmap.org/export/embed.html?bbox=68.0%2C6.5%2C97.5%2C37.5&layer=mapnik" : cities[currentStep]?.mapSrc}
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.85)",
              transition: "opacity 1s ease-in-out",
            }}
          ></iframe>
        </div>
      </div>

      {/* Form Section */}
      <div className="container px-5 py-24 mx-auto flex relative z-10">
        <div
          className="lg:w-1/3 md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-xl"
          style={{ transition: "transform 0.5s ease-in-out" }}
        >
          <h2 className="text-white text-2xl mb-3 font-medium title-font">
            {isSubmitted ? "Thank You!" : "Contact Us"}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-100 text-lg">
            {isSubmitted
              ? "Thank you for filling out the form! We will get in touch with you soon."
              : cities[currentStep]?.question}
          </p>
          {!isSubmitted && (
            <div className="relative mb-6">
              <label htmlFor="answer" className="leading-7 text-sm text-gray-200">
                Your Answer
              </label>
              <input
                type="text"
                id="answer"
                name="answer"
                className="w-full bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          )}
          <button
            onClick={handleNext}
            className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            {isSubmitted ? "Go Back" : currentStep < cities.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>

      <div style={{ height: "100vh", backgroundColor: "transparent" }}></div>

    </section>
  );
}

export default SignUp;

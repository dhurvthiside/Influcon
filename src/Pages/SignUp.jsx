import React, { useState } from "react";
import SliderComponent from "../Components/SliderComponent";

const questions = [
  { question: "What is the name of your business?", placeholder: "Enter your business name" },
  { question: "What is your digital marketing budget?", placeholder: "Enter your budget" },
  { question: "What are your marketing goals?", placeholder: "Enter your goals" },
  { question: "What industries do you want to target?", placeholder: "Enter target industries" },
  { question: "How do you measure success?", placeholder: "Enter success metrics" },
  { question: "What is your timeline for this campaign?", placeholder: "Enter timeline" },
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotate, setRotate] = useState(45); // 🔥 Start at 45 degrees
  const [showPopup, setShowPopup] = useState(false); // Track the popup visibility
  const [redirecting, setRedirecting] = useState(false); // Track the redirecting status
  const rotateAdd = 360 / questions.length; // Adjust rotation increment based on number of questions

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % questions.length);  // Change question
    setRotate((prev) => prev + rotateAdd); // Rotate slider
  };

  const handleSubmit = () => {
    setShowPopup(true); // Show popup
    setTimeout(() => {
      setRedirecting(true); // Start redirecting
      window.location.reload(); // Refresh the page (or you can navigate elsewhere)
    }, 5000); // Redirect after 5 seconds
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-gray-900 h-screen text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 mt-16">
        {/* Left Section for Title */}
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-7xl text-white drop-shadow-lg font-[Pacifico] text-right">
            CONTACT US
          </h1>
        </div>

        {/* Right Section for Questions */}
        <div className="w-1/2 p-12 flex flex-col items-center justify-center bg-[#0D0E12] rounded-tl-3xl">
          <div className="max-w-sm text-center">
            <h1 className="text-4xl text-orange-400 mb-6 font-bold">
              {questions[activeIndex].question}
            </h1>
            <input
              type="text"
              placeholder={questions[activeIndex].placeholder}
              className="w-full p-3 mb-6 text-black rounded-full"
            />
            {activeIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-5 py-3 bg-green-500 rounded-full text-white hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={nextSlide}
                className="px-5 py-3 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition duration-300"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slider Component Below (Half Visible) */}
      <div className="relative">
        <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2">
          <SliderComponent activeIndex={activeIndex} setActiveIndex={setActiveIndex} rotate={rotate} />
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-black">We will contact you shortly on your submitted contact details.</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

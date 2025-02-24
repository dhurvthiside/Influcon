import React, { useState } from "react";
import SliderComponent from "../Components/SliderComponent";

const questions = [
  { question: "What’s your name and brand?", placeholder: "Enter your business name" },
  { question: "What’s your marketing headache?", placeholder: "Tell us your problem" },
  { question: "Do you have a budget in mind?", placeholder: "Enter your estimated budget" },
  { question: "What’s your dream outcome?", placeholder: "Enter your idea of success parameters" },
  { question: "Drop your website link! (Optional)", placeholder: "Enter your website link" },
  { question: "Share your email, we'll reach out soon!", placeholder: "Enter email" },
];

const backgroundGradients = [
  "bg-gradient-to-r from-lightBlue-400 to-gray-700",
  "bg-gradient-to-r from-lightBlue-500 to-gray-700",
  "bg-gradient-to-r from-lightBlue-600 to-gray-800",
  "bg-gradient-to-r from-lightBlue-700 to-gray-900",
  "bg-gradient-to-r from-lightBlue-800 to-gray-900",
  "bg-gradient-to-r from-lightBlue-900 to-black",
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotate, setRotate] = useState(45);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const rotateAdd = 360 / questions.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % questions.length);
    setRotate((prev) => prev + rotateAdd);
  };

  const handleSubmit = () => {
    setShowPopup(true);
    let count = 5;
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        window.location.reload();
      }
    }, 1000);
  };

  return (
    <div className={`h-screen text-white flex flex-col transition-all duration-700 ease-in-out ${backgroundGradients[activeIndex]}`}>
      {/* Main Content */}
      <div className="flex flex-1 mt-[-50px]">
        {/* Left Section for Title */}
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-7xl text-white drop-shadow-lg font-extrabold text-right">
            CONTACT US
          </h1>
        </div>

        {/* Right Section for Questions */}
        <div className="w-1/2 p-12 flex flex-col items-center justify-center bg-[#0D0E12] rounded-tl-3xl">
          <div className="max-w-sm text-center">
            <h1 className="text-4xl text-lightBlue-400 mb-6 font-bold">
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
                className="px-5 py-3 bg-gray-500 rounded-full text-white hover:bg-lightBlue-600 transition duration-300"
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
            <h2 className="text-2xl font-bold text-black mb-4">
              🎉 Thank you for reaching out! <br />
              We’ll be in touch very soon!
            </h2>
            <p className="text-gray-700 text-lg">
              Redirecting to homepage in <span className="text-red-500 font-bold">{countdown}</span>...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

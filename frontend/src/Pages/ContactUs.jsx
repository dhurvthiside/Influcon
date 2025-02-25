import React, { useState, useEffect } from "react";
import SliderComponent from "../Components/SliderComponent";

const questions = [
  { question: "What’s your name and brand?", placeholder: "Enter your business name", key: "businessName" },
  { question: "What’s your marketing headache?", placeholder: "Tell us your problem", key: "marketingIssue" },
  { question: "Do you have a budget in mind?", placeholder: "Enter your estimated budget", key: "budget" },
  { question: "What’s your dream outcome?", placeholder: "Enter your idea of success parameters", key: "dreamOutcome" },
  { question: "Drop your website link! (Optional)", placeholder: "Enter your website link", key: "websiteLink" },
  { question: "Share your email, we'll reach out soon!", placeholder: "Enter email", key: "email" },
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    businessName: "",
    marketingIssue: "",
    budget: "",
    dreamOutcome: "",
    websiteLink: "",
    email: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [questions[activeIndex].key]: e.target.value });
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % questions.length);
    setRotate((prev) => prev + 360 / questions.length);
  };

  const handleSubmit = () => {
    const formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSfeekXQTE1fAZnmGjrQPOaXdbCXr3Dnu3G7_VYzD44OToII6A/formResponse";
    const params = new URLSearchParams({
      "entry.2005620554": formData.businessName,
      "entry.1045781291": formData.marketingIssue,
      "entry.1065046570": formData.budget,
      "entry.1166974658": formData.dreamOutcome,
      "entry.839337160": formData.websiteLink,
      "entry.766977493": formData.email,
    });

    window.location.href = `${formBaseURL}?${params.toString()}`;
  };

  return (
    <div className={`h-screen text-white flex flex-col transition-all duration-700 ease-in-out ${backgroundGradients[activeIndex]}`}>
      {/* Desktop Layout */}
      {!isMobile ? (
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
                value={formData[questions[activeIndex].key]}
                onChange={handleChange}
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
      ) : (
        // Mobile Layout
        <div className="flex flex-col h-screen">
          {/* Title Section */}
          <div className="flex justify-center items-center flex-1 p-4">
            <h1 className="text-5xl text-white drop-shadow-lg font-extrabold text-center">
              CONTACT US
            </h1>
          </div>

          {/* Form Section */}
          <div className="flex flex-col flex-1 p-6 bg-[#0D0E12] rounded-t-3xl justify-center">
            <div className="text-center">
              <h1 className="text-3xl text-lightBlue-400 mb-6 font-bold">
                {questions[activeIndex].question}
              </h1>
              <input
                type="text"
                placeholder={questions[activeIndex].placeholder}
                value={formData[questions[activeIndex].key]}
                onChange={handleChange}
                className="w-full p-3 mb-6 text-black rounded-full"
              />
              {activeIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-5 py-3 bg-green-500 rounded-full text-white hover:bg-green-600 transition duration-300 w-full"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={nextSlide}
                  className="px-5 py-3 bg-gray-500 rounded-full text-white hover:bg-lightBlue-600 transition duration-300 w-full"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Slider Component (Only in Desktop View) */}
      {!isMobile && (
        <div className="relative">
          <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2">
            <SliderComponent activeIndex={activeIndex} setActiveIndex={setActiveIndex} rotate={rotate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

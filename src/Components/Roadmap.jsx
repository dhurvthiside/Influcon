import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Roadmap = () => {
  const steps = [
    {
      title: "Phase 1",
      date: "Q1 2024",
      description: "Project Initiation and Research. Understanding market needs.",
    },
    {
      title: "Phase 2",
      date: "Q2 2024",
      description: "Building MVP with essential features and usability testing.",
    },
    {
      title: "Phase 3",
      date: "Q3 2024",
      description: "Expanding feature set and integrating AI capabilities.",
    },
    {
      title: "Phase 4",
      date: "Q4 2024",
      description: "Beta launch and gathering feedback for final improvements.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleScrollY = (event) => {
    const scrollY = event.currentTarget.scrollTop;
    const containerHeight = event.currentTarget.offsetHeight;
    const stepIndex = Math.round(scrollY / containerHeight);
    setCurrentStep(stepIndex);
  };

  return (
    <div className="h-[100vh] flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center py-8">
        <h1 className="text-6xl font-extrabold text-[#0d2489]">ROADMAP</h1>
      </div>
      <div className="h-[50vh] flex">
        {/* Left Section - Descriptions */}
        <div
          className="w-1/2 overflow-scroll snap-y snap-mandatory flex flex-col"
          onScroll={handleScrollY}
          style={{ scrollSnapType: "y mandatory", overflowY: "scroll", overflowX: "hidden" }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="h-full min-h-full snap-center flex items-center justify-center p-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-xl p-8 w-3/4 max-w-lg text-center"
              >
                <h3 className="text-2xl font-semibold text-[#0d2489] mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium">{step.date}</p>
                <p className="text-gray-700 mt-4">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Section - Titles */}
        <div className="w-1/2 flex items-center justify-center bg-[#0d2489] text-white overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-4">{steps[currentStep].title}</h3>
              <p className="text-lg font-medium">{steps[currentStep].date}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
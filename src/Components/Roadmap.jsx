import React from "react";

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

  return (
    <div className="py-16 bg-[#c3e7ff] font-[Poppins]">
      <h2 className="text-center text-5xl font-extrabold text-[#0d2489] mb-12">
        ROADMAP
      </h2>
      <div className="flex items-center justify-center w-full overflow-x-auto px-8">
        <div className="relative flex w-full max-w-5xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-1/4 px-4 text-center group"
            >
              {/* Step Indicator */}
              <div className="w-14 h-14 flex items-center justify-center bg-[#0d2489] text-white font-bold text-lg rounded-full shadow-lg transition-transform group-hover:scale-110">
                {index + 1}
              </div>
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-[#0d2489] to-transparent transform -translate-y-1/2"></div>
              )}
              {/* Text Content */}
              <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-48 transition-transform transform hover:scale-105">
                <h3 className="text-lg font-semibold text-[#0d2489]">{step.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{step.date}</p>
                <p className="text-xs text-gray-500 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

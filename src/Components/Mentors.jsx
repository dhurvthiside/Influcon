import React from "react";
import { motion } from "framer-motion";

const mentors = [
  {
    name: "John Doe",
    role: "AI Researcher",
    description:
      "John is an experienced AI researcher with over 10 years in the field. He has worked on deep learning projects and has mentored hundreds of students in AI and ML.",
    image: "https://a-us.storyblok.com/f/1017006/912x1120/8e93856f41/dedy.jpg/m/456x560/filters:quality(80)",
  },
  {
    name: "Jane Smith",
    role: "Software Architect",
    description:
      "Jane is a seasoned software architect specializing in scalable web applications. She has led development teams in top tech firms and is passionate about mentoring.",
    image: "https://a-us.storyblok.com/f/1017006/912x1120/47b81c46eb/lee.jpg/m/456x560/filters:quality(80)",
  },
];

const MentorSection = () => {
  return (
    <section className="text-gray-600 body-font py-24 bg-gray-50">
      <div className="container px-5 mx-auto">
        {/* Title Section */}
        <h1 "text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0d2489] via-[#c3e7ff] to-[#000000] mb-12 font-[Brick Sans]">
          MEET OUR MENTORS
        </h1>

        {/* Mentors Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
              className="bg-white rounded-2xl overflow-hidden shadow-md max-w-sm p-6 text-center"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="rounded-lg mb-4 w-full h-60 object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-900 font-[Poppins]">
                {mentor.name}
              </h3>
              <p className="text-xl text-black font-['Poppins'] font-medium mt-2">
                {mentor.role}
              </p>
              <p className="text-lg text-black font-['Poppins'] mt-4 leading-relaxed">
                {mentor.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;

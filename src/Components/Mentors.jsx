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
    <div className="py-16 px-8 bg-white">
      {/* Title with animation */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 text-[#0d2489] font-['Brick_Sans']"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // Re-triggers animation every time it's in view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        OUR MENTORS
      </motion.h2>

      {/* Mentor Cards */}
      <div className="max-w-6xl mx-auto space-y-24">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} // Repeats animation when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image with Hover Effect Only (No Parallax) */}
            <motion.img
              src={mentor.image}
              alt={mentor.name}
              className="w-[350px] h-[350px] object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }} // Hover effect
            />

            {/* Text Section */}
            <motion.div
              className="max-w-lg p-6 bg-[#c3e7ff] rounded-xl shadow-md transition-all hover:shadow-lg"
              whileHover={{ scale: 1.02 }} // Hover effect on text box
            >
              <h3 className="text-3xl font-bold text-[#0d2489] font-['Brick_Sans']">
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

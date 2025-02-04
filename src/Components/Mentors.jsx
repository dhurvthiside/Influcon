import React from "react";
import { motion } from "framer-motion";

const mentors = [
  {
    name: "John Doe",
    image: "https://dummyimage.com/1201x501",
    description:
      "John is a seasoned expert with over 20 years of experience in the tech industry, specializing in software development and leadership.",
  },
  {
    name: "Jane Smith",
    image: "https://dummyimage.com/1202x502",
    description:
      "Jane has an extensive background in business strategy and entrepreneurship, helping mentees unlock their potential in launching and scaling startups.",
  },
];

const Mentors = () => {
  return (
    <section className="text-gray-600 body-font py-24 bg-gray-50">
      <div className="container px-5 mx-auto">
        {/* Title Section */}
        <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0d2489] via-[#c3e7ff] to-[#000000] mb-12 font-[Brick Sans]">
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
              </h2>
              <p className="mt-2 text-gray-600 font-[Montserrat]">
                {mentor.description}
              </p>
              <button className="mt-4 px-5 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;

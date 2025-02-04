import React from "react";
import { motion } from "framer-motion";

const Founders = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      {/* Title Section */}
      <motion.h1
        className="text-center text-6xl sm:text-7xl font-extrabold text-[#0d2489]"
        style={{ fontFamily: "Brick Sans, sans-serif" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        OUR FOUNDERS
      </motion.h1>

      {/* Founders' Image Section */}
      <div className="relative max-w-7xl mx-auto mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 opacity-40 rounded-lg shadow-2xl"></div>
        <motion.img
          className="w-full h-96 object-cover rounded-lg shadow-lg border-8 border-white transition-transform duration-500 hover:scale-105"
          src="https://media.gettyimages.com/id/1166409160/photo/friends-sitting-in-front-of-coffee-shop-talking-drinking-coffee.jpg?s=1024x1024&w=gi&k=20&c=v8s4244e437YjrDSyS3TNZz7Sh0_Tp2VW0ke-a1dies="
          alt="Founders Image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      {/* About Founders Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p
          className="text-xl sm:text-2xl font-medium text-[#000000] mb-8 leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Meet the dynamic individuals behind our success. With a shared vision of innovation, creativity, and service,
          our founders have united their passion and experience to create a company that stands for more than just business.
        </p>

        <p
          className="text-lg sm:text-xl text-[#000000] mb-6 leading-relaxed"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          They represent the values of integrity, resilience, and forward-thinking leadership. With years of expertise and
          a relentless drive to make a positive impact, they continue to inspire our team and guide us toward a brighter future.
        </p>

        <p
          className="text-lg sm:text-xl text-[#000000] leading-relaxed"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Through every challenge and opportunity, their leadership is a beacon of excellence. Their journey has shaped the
          foundation of our company and will continue to guide us in creating lasting value for our clients and the industry.
        </p>
      </motion.div>
    </div>
  );
};

export default Founders;

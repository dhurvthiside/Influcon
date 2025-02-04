import React from "react";
import "tailwindcss/tailwind.css";

const TeamSection = () => {
  return (
    <section className="relative w-full bg-[#ffffff] py-20 flex justify-center items-center">
      <div className="relative w-4/5 md:w-3/5 overflow-hidden rounded-2xl shadow-lg">
        <img
          src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2018/05/avengers-infinity-war-will-thanos-kill-this-hero-s-family-842126-1525139383.jpg"
          alt="Team"
          className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-['Brick Sans']">Meet Our Team</h2>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
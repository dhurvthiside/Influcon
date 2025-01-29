import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define box widths
  const boxWidths = [0.5, 0.25, 0.25, 0.25, 0.25]; // 1st box = 1/2 screen, others = 1/4 screen
  const totalScrollWidth = boxWidths.reduce((acc, width) => acc + width, 0) - 1;

  // Speed multiplier to adjust scroll speed
  const speedMultiplier = 1.5; // Increase for faster scrolling
  const x = useTransform(
    scrollYProgress,
    [0, 1 / speedMultiplier],
    ["0%", `-${totalScrollWidth * 100}vw`]
  );

  const services = [
    {
      title: "Talent Management",
      description:
        "We manage top-tier talent to deliver extraordinary digital experiences.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "Social Media Management",
      description:
        "Strategic management of social channels to build a strong brand presence.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-500",
    },
    {
      title: "Influencer Marketing",
      description:
        "Connecting brands with influencers to create impactful campaigns.",
      color: "bg-gradient-to-br from-green-500 to-teal-500",
    },
    {
      title: "Video Production",
      description:
        "Crafting high-quality videos that capture your brand's unique story.",
      color: "bg-gradient-to-br from-red-500 to-orange-500",
    },
  ];

  const handleWheel = (event) => {
    const scrollDirection = event.deltaY;
    const horizontalContainer = document.getElementById("horizontal-scroll");

    // When scrolling up, move left (only if within bounds)
    if (scrollDirection < 0) {
      horizontalContainer.scrollLeft -= 100;
    }
    // When scrolling down, move right (only if within bounds)
    else if (scrollDirection > 0) {
      horizontalContainer.scrollLeft += 100;
    }
  };

  return (
    <section
      ref={targetRef}
      className="relative h-[500vh] bg-neutral-900"
      onWheel={handleWheel}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          id="horizontal-scroll"
          style={{ x }}
          className="flex gap-0 w-[150vw] justify-start"
        >
          <IntroBox />
          {services.map((service, index) => (
            <HoverServiceCard
              key={index}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const IntroBox = () => {
  return (
    <div className="h-screen w-[50vw] bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Welcome to Our World
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-300 px-6">
        We are dedicated to revolutionizing digital experiences with innovative
        solutions. Scroll to explore our services!
      </p>
    </div>
  );
};

const HoverServiceCard = ({ title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-screen w-[25vw] ${color} flex justify-center items-center relative group overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title */}
      <motion.h3
        className={`absolute bottom-17 left-12 text-xl md:text-3xl font-bold text-white transition-transform duration-700 ease-in-out ${
          isHovered ? "translate-y-[-60%]" : "translate-y-0"
        }`}
      >
        {title}
      </motion.h3>
      {/* Description */}
      <motion.p
        className={`absolute bottom-12 left-12 right-12 text-lg text-white-200 transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default HorizontalScroll;

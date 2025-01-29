import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhyChooseUs from "../Components/WhyChooseUs";

const imageUrls = [
  "https://weddings.thegraphe.com/dist/img/tiles/AS/tile.jpg",
  "https://weddings.thegraphe.com/dist/img/tiles/AS/back.jpg",
  "https://weddings.thegraphe.com/dist/img/tiles/VD/tile.jpg",
  "https://weddings.thegraphe.com/dist/img/tiles/VD/back.jpg",
];

const colors = [
  "orange",
  "dodgerblue",
  "violet",
  "lavender",
  "gold",
  "royalblue",
  "darkorange",
  "mediumpurple",
  "lightcoral",
  "orchid",
];

const generateRandomMotion = () => ({
  x: [Math.random() * -200 + "vw", Math.random() * 200 + "vw"],
  y: [Math.random() * -200 + "vh", Math.random() * 200 + "vh"],
});

const BackgroundWithSlideshowAndText = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageUrls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative flex flex-col lg:flex-row w-screen h-screen bg-[#1a1a2e] overflow-hidden">
      {/* Blurry Circles in the Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 40 }, () => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.div
              key={Math.random()}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 100 + 80}px`,
                height: `${Math.random() * 100 + 80}px`,
                backgroundColor: randomColor,
                filter: "blur(20px)",
                boxShadow: `0 0 40px 20px ${randomColor}`,
              }}
              animate={generateRandomMotion()}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </div>

      {/* Left Section: Text */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 lg:px-16 z-10">
        <h1 className="text-white font-extrabold leading-snug text-5xl lg:text-6xl">
          INNOVATION
          <br /> IS OUR
          <br /> SECOND NAME
        </h1>
      </div>

      {/* Right Section: Slideshow */}
      <div className="flex-1 flex justify-center items-center relative px-4 lg:px-16 z-10">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={imageUrls[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="absolute w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </div>
    
    <div className="relative z-10 bg-white">
    <WhyChooseUs />
  </div>
  </>
  );
};

export default BackgroundWithSlideshowAndText;

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Products = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "url(https://weddings.thegraphe.com/dist/img/back.jpg)"
  );

  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);

  // Updated card dimensions and spacing
  const cardWidth = 400; // Increased width by 10px
  const cardHeight = 800; // Increased height by 10px
  const gap = 120; // Gap between cards
  const totalCards = 11; // Total number of cards
  const containerWidth = (cardWidth + gap) * totalCards - gap;

  // Perfectly center the first card
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      window.innerWidth / 2 + cardWidth + 200, // Center the first card
      -containerWidth/4 + window.innerWidth / 2 - cardWidth / 2, // Scroll range
    ]
  );

  const data = [
    { image: "https://weddings.thegraphe.com/dist/img/tiles/AS/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/AS/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/VD/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/VD/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/MD/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/MD/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/MM/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/MM/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/pn/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/pn/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/AR/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/AR/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/pg/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/pg/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/AN/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/AN/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/SA/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/SA/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/SN/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/SN/back.jpg" },
    { image: "https://weddings.thegraphe.com/dist/img/tiles/AS2/tile.jpg", bgImage: "https://weddings.thegraphe.com/dist/img/tiles/AS2/back.jpg" },
  ];

  const handleMouseEnter = (bgImage) => {
    setBackgroundImage(`url(${bgImage})`);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(
      "url(https://weddings.thegraphe.com/dist/img/back.jpg)"
    );
  };

  return (
    <div className="relative w-full h-[300vh] bg-cover bg-center" ref={containerRef}>
      {/* Static Background */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage,
        }}
      ></motion.div>

      {/* Cards Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          className="flex gap-[80px] mx-5" // Gap between cards is doubled
          style={{
            x,
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-[290px] h-[510px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 relative"
              onMouseEnter={() => handleMouseEnter(item.bgImage)}
              onMouseLeave={handleMouseLeave}
              whileHover={{
                scale: 1.1,
                zIndex: 10,
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={item.image}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

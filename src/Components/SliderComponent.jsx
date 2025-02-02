import React from "react";
import img1 from "./Assets/1.png";
import img2 from "./Assets/2.png";
import img3 from "./Assets/3.png";
import img4 from "./Assets/4.png";
import img5 from "./Assets/5.png";
import img6 from "./Assets/6.png";

const SliderComponent = ({ rotate }) => {
  const items = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative w-[500px] h-[500px] flex justify-center items-center">
      {/* Rotating Images */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full border border-gray-400/50 flex justify-center items-center transition-transform duration-500"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {items.map((img, index) => (
          <div
            key={index}
            className="absolute w-[150px] h-[150px] rounded-full"
            style={{
              transform: `rotate(${index * 60 + 45}deg) translate(180px) rotate(-${index * 60 + 45}deg)`,
            }}
          >
            <img
              src={img}
              alt={`Item ${index + 1}`}
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* Remove setActiveIndex calls here */}
    </div>
  );
};

export default SliderComponent;

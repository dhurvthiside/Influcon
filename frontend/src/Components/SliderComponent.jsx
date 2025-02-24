import React from "react";
import img1 from "./Assets/1_1.png";
import img2 from "./Assets/2_1.png";
import img3 from "./Assets/3_1.png";
import img4 from "./Assets/4_1.png";
import img5 from "./Assets/5_1.png";
import img6 from "./Assets/6_1.png";

const SliderComponent = ({ rotate }) => {
  const items = [img1, img2, img3, img4, img5, img6];

  // Manual offsets for correct upright positioning
  const offsets = [0, -360, -360, -360, -360, -360];

  return (
    <div className="relative w-[500px] h-[500px] flex justify-center items-center overflow-hidden">
      {/* Rotating Container with Initial -45° Offset */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full flex justify-center items-center transition-transform duration-500"
        style={{ transform: `rotate(${rotate - 45}deg)` }} // -45° offset
      >
        {items.map((img, index) => (
          <div
            key={index}
            className="absolute w-[150px] h-[150px] rounded-full flex justify-center items-center"
            style={{
              transform: `rotate(${index * 60}deg) translate(0px, -180px) rotate(${offsets[index]}deg)`, 
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
    </div>
  );
};

export default SliderComponent;

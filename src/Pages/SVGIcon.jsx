import React from "react";

const SvgIcon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="Icons"
        viewBox="0 0 32 32"
        className="w-16 h-16 text-black"
      >
        <style>
          {`
          .st0 {
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
          `}
        </style>
        <circle className="st0" cx="16" cy="16" r="14"></circle>
        <circle className="st0" cx="16" cy="13" r="5"></circle>
        <path
          className="st0"
          d="M5.4,25.1c1.8-4.1,5.8-7,10.6-7c4.8,0,8.9,2.9,10.6,7"
        ></path>
      </svg>
    </div>
  );
};

export default SvgIcon;

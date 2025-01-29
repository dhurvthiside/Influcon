import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import back_image from '../Components/Assets/home_wp.jpg';
import WhyChooseUs from '../Components/WhyChooseUs';

const Login = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showCursor, setShowCursor] = useState(true); // Control cursor visibility for first line

  return (
    <>
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${back_image})` }}
    >
      {/* First Line Typewriter Effect */}
      <h1 className="text-8xl text-white mb-5 font-poppins">
        <Typewriter
          words={['WHERE CREATIVITY MEETS']}
          loop={1}
          cursor={showCursor}
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          onType={() => {
            setTimeout(() => {
              setShowCursor(false); // Stop blinking cursor after first line finishes
              setShowSecondLine(true); // Show second line
            }, 2300); // Adjust delay to match typing duration
          }}
        />
      </h1>

      {/* Second Line Typewriter Effect */}
      {showSecondLine && (
        <p className="text-8xl text-white font-poppins">
          <Typewriter
            words={['CONVERSIONS']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      )}
    </div>
    <div className="relative z-10 bg-white">
    <WhyChooseUs />
  </div>
  </>
  );
};

export default Login;

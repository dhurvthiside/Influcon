import React from 'react';
import logo1 from './Assets/1.png';
import logo2 from './Assets/2.png';
import logo3 from './Assets/3.png';
import logo4 from './Assets/4.png';
import logo5 from './Assets/5.png';
import logo6 from './Assets/6.png';
import logo7 from './Assets/7.png';

const ClientLogo = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo1,logo2, logo3, logo4];

  return (
    <div className="relative flex overflow-x-hidden">
      {/* First Marquee */}
      <div className="py-12 animate-marquee whitespace-nowrap flex">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="mx-4 w-24 h-24"
          />
        ))}
      </div>

      {/* Second Marquee for continuity */}
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
        {logos.map((logo, index) => (
          <img
            key={`clone-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="mx-4 w-24 h-24"
          />
        ))}
      </div>
      
    </div>
    
  );
};

export default ClientLogo;

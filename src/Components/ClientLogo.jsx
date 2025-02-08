import React from 'react';
import logo1 from './Assets/1.png';
import logo2 from './Assets/2.png';
import logo3 from './Assets/3.png';
import logo4 from './Assets/4.png';
import logo5 from './Assets/5.png';
import logo6 from './Assets/6.png';
import logo7 from './Assets/7.png';
import logo8 from './Assets/8.png';
import logo9 from './Assets/9.png';
import logo10 from './Assets/10.png';
import logo11 from './Assets/11.png';
import logo12 from './Assets/12.png';

const ClientLogo = () => {
  const marquee1Logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const marquee2Logos = [logo7, logo8, logo9, logo10, logo11, logo12];

  return (
    <div className="bg-whitesmoke py-12">
      {/* First Marquee */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap space-x-24">
          {marquee1Logos.map((logo, index) => (
            <img
              key={`marquee1-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-44 h-36 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Second Marquee */}
      <div className="relative flex overflow-hidden mt-8">
        <div className="flex animate-scroll whitespace-nowrap space-x-24">
          {marquee2Logos.map((logo, index) => (
            <img
              key={`marquee2-${index}`}
              src={logo}
              alt={`Logo ${index + 7}`}
              className="w-44 h-36 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from "./Assets/1.png";
import logo2 from "./Assets/2.png";
import logo3 from "./Assets/3.png";
import logo4 from "./Assets/4.png";
import logo5 from "./Assets/5.png";
import logo6 from "./Assets/6.png";
import logo7 from "./Assets/7.png";
import logo8 from "./Assets/8.png";
import logo9 from "./Assets/9.png";
import logo10 from "./Assets/10.png";
import logo11 from "./Assets/11.png";
import logo12 from "./Assets/12.png";

gsap.registerPlugin(ScrollTrigger);

const ClientLogo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { backgroundColor: "#1f2937" }, // Start with gray-800
      {
        backgroundColor: "#e0f2fe", // Transition to lightBlue-100
        ease: "power2.inOut", // Smooth easing
        duration: 1.5, // Longer duration for smooth effect
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts transition earlier
          end: "top 20%", // Ends before the section fully exits
          scrub: 1, // Slower, smoother transition
        },
      }
    );
  }, []);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];

  return (
    <div ref={sectionRef} className="py-12 overflow-hidden transition-colors">
      <div className="relative flex w-full">
        <div className="flex min-w-max animate-scroll space-x-16">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img key={`logo-${index}`} src={logo} alt={`Logo ${index + 1}`} className="w-44 h-36 object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;

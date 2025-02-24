import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-8 lg:px-20"
    >
      {/* Hero Statement */}
      <h1
        className={`text-5xl lg:text-7xl font-bricksans text-blue-500 leading-tight transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
      >
        We don’t just build a presence.
      </h1>

      {/* Supporting Statement */}
      <p
        className={`mt-6 text-3xl lg:text-4xl font-semibold text-white transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
      >
        We Build Brands. We Build Stories. We Build an Experience.
      </p>

      {/* Final Call to Action */}
      <p
        className={`mt-4 text-lg lg:text-2xl text-gray-300 transition-all duration-1000 delay-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
      >
        Influence. Connect. Conquer. With{" "}
        <span className="text-white font-medium">InfluCon Digitals</span>.
      </p>

      {/* Call to Action Button */}


      <Link
        to="/contact"
        className={`mt-10 px-8 py-4 rounded-full bg-blue-600 text-lg lg:text-xl font-semibold hover:bg-blue-700 transition-all duration-1000 delay-900 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
      >
        Start Conquering!
      </Link>

    </div>
  );
};

export default HeroSection;

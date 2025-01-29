import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClientLogo from "../Components/ClientLogo.jsx";

const services = [
  "Social Media Marketing",
  "Digital Marketing",
  "Branding",
  "Web Development",
];

const App = () => {
  const [activeCircle, setActiveCircle] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleCircleClick = (index) => {
    setActiveCircle(index);
  };

  const handleBack = () => {
    setSelectedService(null);
    setActiveCircle(null);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const circleStyles = (position, top) => ({
    position: "absolute",
    top: top,
    [position]: "-5rem", // Partially outside the screen
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    backgroundColor: "black",
    cursor: "pointer",
    zIndex: 1,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <AnimatePresence>
        {!activeCircle && (
          <>
            {/* Four Semi-Circles */}
            <motion.div
              style={circleStyles("left", "10%")}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleCircleClick(0)}
            />
            <motion.div
              style={circleStyles("left", "70%")}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleCircleClick(1)}
            />
            <motion.div
              style={circleStyles("right", "10%")}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleCircleClick(2)}
            />
            <motion.div
              style={circleStyles("right", "70%")}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleCircleClick(3)}
            />

            {/* Home Page Content */}
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Raw Denim Heirloom Man Braid
                  </h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
                    mi pug.
                  </p>
                  <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                  </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  {[
                    {
                      id: 1,
                      title: "Shooting Stars",
                      description:
                        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
                      icon: "M22 12h-4l-3 9L9 3l-3 9H2",
                    },
                    {
                      id: 2,
                      title: "The Catalyzer",
                      description:
                        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
                      icon: "M6 6h3v3h-3zM6 18h3v3h-3zM18 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12",
                    },
                    {
                      id: 3,
                      title: "Neptune",
                      description:
                        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
                      icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="p-4 md:w-1/3 flex flex-col text-center items-center"
                    >
                      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-10 h-10"
                          viewBox="0 0 24 24"
                        >
                          <path d={item.icon}></path>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                          {item.title}
                        </h2>
                        <p className="leading-relaxed text-base">{item.description}</p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <ClientLogo />

                <h1 className="page-title title opacity-40 text-4xl font-bold tracking-wide leading-tight transform translate-x-[-15px]">
                  Reshu &amp;
                  <span className="slideshow__title__offset title__offset text-3xl font-medium text-gray-700">
                    Ashish
                  </span>
                </h1>

              </div>
            </section>
          </>
        )}

        {activeCircle !== null && (
          <motion.div
            key="black-screen"
            className="fixed top-0 left-0 w-full h-full bg-black"
            initial={{
              clipPath: `circle(0% at ${activeCircle === 0 || activeCircle === 1 ? "10%" : "90%"
                } ${activeCircle === 0 || activeCircle === 2 ? "10%" : "90%"})`,
            }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{
              clipPath: `circle(0% at ${activeCircle === 0 || activeCircle === 1 ? "10%" : "90%"
                } ${activeCircle === 0 || activeCircle === 2 ? "10%" : "90%"})`,
            }}
            transition={{ duration: 1 }}
          >
            {/* Services Page */}
            <div className="flex flex-col items-center justify-center h-full text-white">
              <motion.div
                className="absolute top-4 left-4 cursor-pointer text-gray-500 hover:text-white text-lg"
                onClick={handleBack}
                whileHover={{ scale: 1.2 }}
              >
                Back
              </motion.div>
              <motion.h1 className="text-5xl font-bold mb-12">
                SERVICES
              </motion.h1>
              <div className="w-full max-w-5xl flex flex-col items-center space-y-8 px-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`text-3xl ${selectedService === service ? "text-indigo-500" : "text-gray-300"
                      } font-medium cursor-pointer w-full text-center`}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

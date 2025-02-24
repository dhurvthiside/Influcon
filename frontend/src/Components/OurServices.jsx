const OurServices = () => {
    const services = [
      {
        title: "Digital Marketing",
        description: "Boost your brand with data-driven marketing strategies.",
        features: [
          "Social Media Marketing",
          "Search Engine Optimization (SEO)",
          "Performance Marketing",
        ],
      },
      {
        title: "Website Development",
        description: "Build stunning, high-performance websites tailored for your business.",
        features: ["Custom Coded Websites", "Shopify/WordPress Sites", "UI/UX Design"],
      },
      {
        title: "Software & App Development",
        description: "Create seamless and scalable digital solutions.",
        features: ["Mobile & Web Apps", "Custom Software", "API & Backend Development"],
      },
    ];
  
    return (
      <div className="bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Centered Heading */}
        <div className="flex justify-center items-center mb-12">
          <h1
            className="text-center font-bold font-bricksans leading-none tracking-tight text-white sm:text-5xl"
            style={{ fontSize: "8rem" }} // Keeping original font and size, now centered
          >
            OUR SERVICES
          </h1>
        </div>
  
        <div className="grid max-w-screen-lg gap-12 row-gap-12 sm:mx-auto lg:max-w-full lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <div className="sm:mr-6">
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-50">
                  <svg
                    className="w-14 h-14 text-green-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 font-semibold leading-5 text-white">
                  {service.title}
                </h6>
                <p className="mb-4 text-sm text-gray-300">{service.description}</p>
                <ul className="mb-5 -ml-1 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">
                        <svg
                          className="w-6 h-6 mt-px text-green-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          ></polygon>
                        </svg>
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/"
                  aria-label="Learn more"
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-200"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurServices;
  
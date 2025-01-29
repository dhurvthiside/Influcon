import React from "react";

const OurServices = () => {
    return (
        <div className="bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 text-white">
                        Brand new
                    </p>
                </div>
                {/* Adjust "OUR SERVICES" heading alignment */}
                <h1
                    className="text-left font-bold font-bricksans leading-none tracking-tight text-white sm:text-5xl ml-[-400px]"
                    style={{ fontSize: "8rem" }} // Adjust the size as needed (e.g., 8rem = 128px)
                >
                    OUR SERVICES
                </h1>
            </div>

            {/* Increase the width of the grid container */}
            <div className="grid max-w-screen-lg gap-12 row-gap-12 sm:mx-auto lg:max-w-full lg:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row bg-gray-700 p-8 rounded-lg shadow-lg"  // Increased padding
                    >
                        <div className="sm:mr-6">  {/* Increased margin for more spacing */}
                            <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-50"> {/* Increased size */}
                                <svg
                                    className="w-14 h-14 text-green-400"  // Increased size
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
                            <h6 className="mb-3 font-semibold leading-5 text-white"> {/* Increased margin */}
                                {service.title}
                            </h6>
                            <p className="mb-4 text-sm text-gray-300"> {/* Increased margin */}
                                {service.description}
                            </p>
                            <ul className="mb-5 -ml-1 space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-2"> {/* Increased spacing */}
                                            <svg
                                                className="w-6 h-6 mt-px text-green-400"  // Increased size
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

const services = [
    {
        title: "Website Development:",
        description:
            "Our website development service offers end-to-end solutions for creating and launching professional and visually appealing websites.",
        features: ["Computers", "Health", "Reference"],
    },
    {
        title: "Social Media Marketing:",
        description:
            "Our social media marketing service helps businesses establish a strong online presence and engage with their target audience effectively.",
        features: ["Computers", "Health", "Reference"],
    },
    {
        title: "Content Writing and Copywriting:",
        description:
            "Our content writing and copywriting service offers high-quality and engaging content that captivates your audience and drives conversions.",
        features: ["Computers", "Health", "Reference"],
    },
    {
        title: "Content Writing and Copywriting:",
        description:
            "Our content writing and copywriting service offers high-quality and engaging content that captivates your audience and drives conversions.",
        features: ["Computers", "Health", "Reference"],
    },
];

export default OurServices;

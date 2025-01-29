import React from "react";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <h2 className="text-center text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        ROADMAP
      </h2>
      <ol className="flex justify-center space-x-10">
        <li className="relative mb-6 w-1/4">
          <div className="flex items-center justify-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg">
              <svg
                className="w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Flowbite Library v1.0.0</h3>
            <time className="block text-sm text-gray-500">Released on December 2, 2021</time>
            <p className="mt-2 text-sm text-gray-600">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
        <li className="relative mb-6 w-1/4">
          <div className="flex items-center justify-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg">
              <svg
                className="w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Flowbite Library v1.2.0</h3>
            <time className="block text-sm text-gray-500">Released on December 23, 2021</time>
            <p className="mt-2 text-sm text-gray-600">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
        <li className="relative mb-6 w-1/4">
          <div className="flex items-center justify-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg">
              <svg
                className="w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Flowbite Library v1.3.0</h3>
            <time className="block text-sm text-gray-500">Released on January 5, 2022</time>
            <p className="mt-2 text-sm text-gray-600">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Roadmap;

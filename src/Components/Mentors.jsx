import React from "react";

const Mentors = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Title Section */}
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 mb-12">
          MEET OUR MENTORS
        </h1>

        {/* Mentors Section */}
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {/* Mentor 1 */}
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Mentor 1"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1201x501"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              John Doe
            </h2>
            <p className="leading-relaxed text-base text-gray-600">
              John is a seasoned expert with over 20 years of experience in
              the tech industry, specializing in software development and
              leadership. His mentorship has guided many aspiring developers
              toward success.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
          </div>

          {/* Mentor 2 */}
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Mentor 2"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1202x502"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Jane Smith
            </h2>
            <p className="leading-relaxed text-base text-gray-600">
              Jane has an extensive background in business strategy and
              entrepreneurship. She brings a unique perspective to mentorship,
              helping mentees unlock their potential in launching and scaling
              successful startups.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;

import React from "react";

const AboutUsHome = () => {
  
  return (
    <section className="bg-lightBlue-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* First Section: Image on the Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">ABOUT US</h2>
            <p className="mt-4 text-gray-600 text-lg">
              From Memes to Marketing—We Speak the Internet’s Language
              We are not just digital marketers, we are the creators of your brand legacy. A team that's driven by pure passion to take a leap with you to all new heights!
              We ideate, we innovate, and we execute!
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-600 hover:to-blue-500"
              >
                START CONQUERING!
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;

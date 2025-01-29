import React from "react";

const Founders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">
      {/* Title Section */}
      <h1 className="text-center text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 mb-12">
        OUR FOUNDERS
      </h1>

      {/* Founders' Image Section */}
      <div className="relative max-w-7xl mx-auto mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 opacity-40 rounded-lg shadow-2xl"></div>
        <img
          className="w-full h-96 object-cover rounded-lg shadow-lg border-8 border-white"
          src="https://media.gettyimages.com/id/1166409160/photo/friends-sitting-in-front-of-coffee-shop-talking-drinking-coffee.jpg?s=1024x1024&w=gi&k=20&c=v8s4244e437YjrDSyS3TNZz7Sh0_Tp2VW0ke-a1dies="
          alt="Founders Image"
        />
      </div>

      {/* About Founders Section */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-8 leading-relaxed">
          Meet the dynamic individuals behind our success. With a shared vision of innovation, creativity, and service,
          our founders have united their passion and experience to create a company that stands for more than just business.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
          They represent the values of integrity, resilience, and forward-thinking leadership. With years of expertise and
          a relentless drive to make a positive impact, they continue to inspire our team and guide us toward a brighter future.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Through every challenge and opportunity, their leadership is a beacon of excellence. Their journey has shaped the
          foundation of our company and will continue to guide us in creating lasting value for our clients and the industry.
        </p>
      </div>
    </div>
  );
};

export default Founders;

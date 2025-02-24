import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-lightBlue-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Contact Information */}
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">Don’t Just Chase Trends, Create Them</h4>
            <p className="text-lg mt-4 mb-2 text-blueGray-600 font-semibold">
              InfluCon Digitals LLP
            </p>
            <p className="text-blueGray-600">2/1 Dover Terrace, Kolkata 700019</p>
            <p className="text-blueGray-600">42 Babu Bagan Lane, Kolkata 700031</p>
            <p className="text-blueGray-600 mt-2">7439918045 | influcondigitals@gmail.com</p>

            {/* Social Media Buttons */}
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/about-us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © 2025 InfluCon Digital
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

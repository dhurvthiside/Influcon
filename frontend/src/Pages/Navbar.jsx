import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../Components/Assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4 md:px-0"
    >
      <nav className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md rounded-full shadow-md text-lightBlue-900 font-bold">
        {/* Left Side Links (Visible on Desktop) */}
        <div className="hidden md:flex gap-10">
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-red-500 transition-colors duration-200">
            About Us
          </Link>
        </div>

        {/* Centered Logo (Responsive) */}
        <Link to="/" className="flex items-center justify-center mx-auto">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 md:h-20 md:w-20 transition-transform duration-300"
          />
        </Link>

        {/* Right Side Links (Visible on Desktop) */}
        <div className="hidden md:flex gap-10">
          <Link to="/services" className="hover:text-red-500 transition-colors duration-200">
            Services
          </Link>
          <Link to="/contact" className="hover:text-red-500 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-lightBlue-900 w-10 h-10 relative focus:outline-none md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-lightBlue-900 transform transition duration-500 ease-in-out ${
                open ? "rotate-45 top-2.5" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-lightBlue-900 transform transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-lightBlue-900 transform transition duration-500 ease-in-out ${
                open ? "-rotate-45 -top-2.5" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu (Visible when Open) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg text-lightBlue-900 flex flex-col items-center py-6 gap-6 text-lg font-semibold transition-all ${
          open ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="hover:text-red-500 transition-colors duration-200" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about-us" className="hover:text-red-500 transition-colors duration-200" onClick={() => setOpen(false)}>
          About Us
        </Link>
        <Link to="/services" className="hover:text-red-500 transition-colors duration-200" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link to="/contact" className="hover:text-red-500 transition-colors duration-200" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

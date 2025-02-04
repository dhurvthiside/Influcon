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
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-black"
    >
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-3" />
          <span className="text-white font-bold text-lg">Mattismyname</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          <Link
            to="/"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-red-500 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white w-10 h-10 relative focus:outline-none md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Links */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 gap-4 md:hidden"
          >
            <Link
              to="/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="hover:text-red-500 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;

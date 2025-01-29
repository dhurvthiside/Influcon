import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
// import ProductDisplay from "./Components/ProductDisplay"; // Import ProductDisplay
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/product/:id" element={<ProductDisplay />} /> New route */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true, // animations fire only once
      duration: 800, // animation duration
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="font-Poppins text-gray-800">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

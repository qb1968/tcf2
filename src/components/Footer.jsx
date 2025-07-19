import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-8 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-base font-semibold text-gray-200 hover:text-white underline transition">
            <Link to="https://allwebcon.com" target="_blank">Allison Web Consultants, LLC</Link>
          </h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/about" className="hover:text-white transition">
            Author
          </a>
          <a href="/book" className="hover:text-white transition">
            About The Book
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

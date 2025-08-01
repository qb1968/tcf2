import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-8 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-base font-semibold text-gray-200 hover:text-white underline transition">
            <a
              href="https://allwebcon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Allison Web Consultants, LLC
            </a>
          </h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-6 text-md font-medium text-gray-300">
          <HashLink smooth to="/#home" className="hover:text-white transition">
            Home
          </HashLink>
          <Link to="/about" className="hover:text-white transition">
            Author
          </Link>
          <HashLink to="/book#book" className="hover:text-white transition">
            About The Book
          </HashLink>
          <HashLink to="/contact#contact2" className="hover:text-white transition">
            Contact
          </HashLink>
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 text-gray-300">
          <a
            href="https://www.linkedin.com/in/terry-fleitz-9006aa12/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border-b border-gray-700 shadow-md w-full">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Left side: links and mobile menu button */}
        <div className="flex items-center space-x-6">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation links */}
          <ul className="hidden md:flex space-x-6 text-lg underline font-medium text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                Author
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-white">
                About The Book
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: Shop link aligned to edge */}
        {/* <div className="text-sm font-medium text-gray-300">
          <Link to="/shop" className="hover:text-white text-lg underline">
            Shop
          </Link>
        </div> */}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-300">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Author
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                About The Book
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Shop
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
}

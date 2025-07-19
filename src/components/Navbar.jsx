import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl  px-6 py-4 flex justify-start items-center">
        {/* Mobile menu button */}
        <div className="md:hidden mr-4">
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

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition">
              Author
            </Link>
          </li>
          <li>
            <Link to="/book" className="hover:text-white transition">
              About The Book
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
          <li>
           
              {/* other links */}
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            
          </li>
        </ul>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-300">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Author
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                About The Book
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

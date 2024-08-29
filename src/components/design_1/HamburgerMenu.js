import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Button for Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="p-4 text-gray-800 bg-white  rounded-full focus:outline-none transition-transform transform hover:bg-[#e3cdbf] hover:scale-105"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 text-black bg-white shadow-lg rounded-lg p-4 w-56">
          <ul className="space-y-2 text-left">
            <li className="py-2 text-xl px-4 hover:bg-blue-200 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="py-2 px-4 text-xl hover:bg-blue-200 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Services
            </li>
            <li className="py-2 px-4 text-xl hover:bg-blue-200 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className="py-2 px-4 text-xl hover:bg-blue-200 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

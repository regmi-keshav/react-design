import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const showItemDetails = (item) => setActiveItem(item);
  const closeDetails = () => setActiveItem(null);

  return (
    <div className="relative">
      {/* Button for Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="p-4 text-white bg-gray-800 rounded-full focus:outline-none transition-transform transform hover:bg-gray-700 hover:scale-105"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg p-6 w-56">
          {activeItem ? (
            <div className="relative">
              <button
                onClick={closeDetails}
                className="absolute top-2 right-2 text-red-500"
              >
                <FaTimes size={20} />
              </button>
              <div className="mt-6 space-y-4">
                {activeItem === "Home" && (
                  <div className="py-2 px-4 hover:bg-gray-700 text-xl hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                    Home
                  </div>
                )}
                {activeItem === "Services" && (
                  <div className="py-2 px-4 hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                    Services
                  </div>
                )}
                {activeItem === "About" && (
                  <div className="py-2 px-4 hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                    About Us
                  </div>
                )}
                {activeItem === "Contact" && (
                  <div className="py-2 px-4 hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                    Contact
                  </div>
                )}
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              <li
                className="py-2 px-4 text-xl  hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                onClick={() => showItemDetails("Home")}
              >
                Home
              </li>
              <li
                className="py-2 px-4 text-xl  hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                onClick={() => showItemDetails("About")}
              >
                Services
              </li>
              <li
                className="py-2 px-4 text-xl  hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                onClick={() => showItemDetails("Services")}
              >
                About Us
              </li>
              <li
                className="py-2 px-4 text-xl  hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                onClick={() => showItemDetails("Contact")}
              >
                Contact
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

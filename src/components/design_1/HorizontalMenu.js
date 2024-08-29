import React from "react";

const HorizontalMenu = () => {
  return (
    <nav className="text-gray-800">
      <ul className="flex flex-col md:flex-row font-semibold md:space-x-8 justify-center">
        <li className="relative group">
          <a
            href="#"
            className="relative text-2xl  text-gray-800 hover:text-[#c55f17]  transition-colors duration-300"
          >
            Home
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-[#c55f17]  transition-all duration-300"></div>
          </a>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="relative text-2xl text-gray-800 hover:text-[#c55f17]  transition-colors duration-300"
          >
            Services
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-[#c55f17]  transition-all duration-300"></div>
          </a>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="relative text-2xl text-gray-800 hover:text-[#c55f17]  transition-colors duration-300"
          >
            About Us
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-[#c55f17] e transition-all duration-300"></div>
          </a>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="relative text-2xl text-gray-800 hover:text-[#c55f17]  transition-colors duration-300"
          >
            Contact
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-[#c55f17]  transition-all duration-300"></div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;

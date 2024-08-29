import React from "react";

const HorizontalMenu = () => {
  return (
    <nav className="text-white text-2xl font-semibold p-4 rounded-md">
      <ul className="flex space-x-6">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">Services</li>
        <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;

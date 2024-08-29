import React from "react";
import { FaEdit, FaFlag, FaTrash } from "react-icons/fa";

const TileView = ({ student, onSelect }) => {
  // Generate a unique image URL based on the student's email
  const avatarUrl = `https://robohash.org/${student.email}.png?size=128x128`;

  return (
    <div
      onClick={() => onSelect(student)}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer flex flex-col items-center"
    >
      <img
        src={avatarUrl}
        alt={student.name}
        className="w-24 h-24 bg-gray-200 rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold truncate">{student.name}</h3>
      <p className="text-gray-500">{student.email}</p>
      <p className="text-gray-500">{student.phone}</p>
      <div className="flex space-x-4 mt-4">
        <button className="text-blue-500 hover:text-blue-700">
          <FaEdit />
        </button>
        <button className="text-yellow-500 hover:text-yellow-700">
          <FaFlag />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TileView;

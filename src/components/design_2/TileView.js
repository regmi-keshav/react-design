import React from "react";
import { FaEdit, FaFlag, FaTrash } from "react-icons/fa";

const TileView = ({ student, onSelect }) => {
  // Generate the avatar URL based on the student's email
  const avatarUrl = `https://robohash.org/${student.email}.png?size=128x128`;

  return (
    <div
      onClick={() => onSelect(student)}
      className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition cursor-pointer flex flex-col items-center justify-center space-y-4 text-center"
    >
      {/* Avatar Image */}
      <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
        <img
          src={avatarUrl}
          alt={`${student.name}'s avatar`}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold truncate">{student?.name}</h3>
        <p className="text-gray-500">{student.email}</p>
        <p className="text-gray-500">{student.phone}</p>
      </div>

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

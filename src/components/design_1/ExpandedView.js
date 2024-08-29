import React from "react";

const ExpandedView = ({ student, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
            <img
              src={`https://robohash.org/${student?.email}.png?size=128x128`}
              alt={`${student?.name}'s avatar`}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            {student?.name}
          </h2>
          <p className="text-gray-600">{student?.email}</p>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Phone:</span>
            <span className="text-gray-600">{student?.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Company:</span>
            <span className="text-gray-600">{student?.company.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Website:</span>
            <a
              href={`https://${student?.website}`}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {student?.website}
            </a>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Address:</span>
            <span className="text-gray-600">
              {student?.address.street}, {student?.address.city}
            </span>
          </div>
        </div>
        <button
          onClick={onBack}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ExpandedView;

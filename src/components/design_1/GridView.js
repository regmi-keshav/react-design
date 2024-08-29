import React, { useEffect, useState } from "react";
import axios from "axios";
import TileView from "./TileView";

const GridView = ({ onSelectTile }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setStudents(response.data));
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Student Grid View - V1
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {students.map((student) => (
          <TileView
            key={student.id}
            student={student}
            onSelect={onSelectTile}
          />
        ))}
      </div>
    </div>
  );
};

export default GridView;

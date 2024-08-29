// Home Page --> Version 2

import React, { useState } from "react";
import HamburgerMenu from "../components/design_2/HamburgerMenu";
import HorizontalMenu from "../components/design_2/HorizontalMenu";
import GridView from "../components/design_2/GridView";
import ExpandedView from "../components/design_2/ExpandedView";

function Design2() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="font-sans">
      <header className="p-4 bg-slate-800 text-white flex justify-between items-center">
        <HamburgerMenu />
        {/* Hide HorizontalMenu on small screens and show it on medium screens and up */}
        <div className="hidden md:flex">
          <HorizontalMenu />
        </div>
      </header>
      <main className="p-6">
        {!selectedStudent && <GridView onSelectTile={setSelectedStudent} />}
        {selectedStudent && (
          <ExpandedView
            student={selectedStudent}
            onBack={() => setSelectedStudent(null)}
          />
        )}
      </main>
    </div>
  );
}

export default Design2;

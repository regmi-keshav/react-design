import React, { useState } from "react";
import HamburgerMenu from "../components/design_1/HamburgerMenu";
import HorizontalMenu from "../components/design_1/HorizontalMenu";
import GridView from "../components/design_1/GridView";
import ExpandedView from "../components/design_1/ExpandedView";

function Design1() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="font-sans">
      <header className="p-4 bg-[#e7eae9] shadow-lg text-white flex justify-between items-center">
        <HamburgerMenu />
        {/* Hide HorizontalMenu on small screens and show it on medium screens and up */}
        <div className="hidden md:flex w-full justify-center">
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

export default Design1;

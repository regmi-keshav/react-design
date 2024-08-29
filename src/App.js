// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Design1 from "./pages/Design1";
// import Design2 from "./pages/Design2";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <nav className="p-4 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 font-extrabold text-xl text-white flex justify-center">
//           <Link
//             className="mx-4 px-6 py-3 rounded-full bg-white text-blue-900 font-semibold text-lg hover:bg-blue-800 hover:text-white shadow-lg transition-all duration-300"
//             to="/design1"
//           >
//             Design 1
//           </Link>
//           <Link
//             className="mx-4 px-6 py-3 rounded-full bg-white text-blue-900 font-semibold text-lg hover:bg-blue-800 hover:text-white shadow-lg transition-all duration-300"
//             to="/design2"
//           >
//             Design 2
//           </Link>
//         </nav>
//         <Routes>
//           <Route path="/design1" element={<Design1 />} />
//           <Route path="/design2" element={<Design2 />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Design1 from "./pages/Design1";
import Design2 from "./pages/Design2";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="p-4 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 font-extrabold text-xl text-white flex justify-center">
          <Link
            className="mx-4 px-6 py-3 rounded-full bg-white text-blue-900 font-semibold text-lg hover:bg-blue-800 hover:text-white shadow-lg transition-all duration-300"
            to="/design1"
          >
            Design 1
          </Link>
          <Link
            className="mx-4 px-6 py-3 rounded-full bg-white text-blue-900 font-semibold text-lg hover:bg-blue-800 hover:text-white shadow-lg transition-all duration-300"
            to="/design2"
          >
            Design 2
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/design1" />} />
          <Route path="/design1" element={<Design1 />} />
          <Route path="/design2" element={<Design2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

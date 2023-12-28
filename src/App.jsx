import React from "react";
import "./assets/styles/tailwind.css";
import Aside from "./components/aside";
import CvDisplay from "./components/cvDisplay";

function App() {
  return (
    <div className="flex overflow-auto min-h-screen max-w-screen-xl ">
      <Aside />
      <CvDisplay />
    </div>
  );
}

export default App;

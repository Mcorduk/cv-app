import React from "react";
import "./assets/styles/global.css";
import "./assets/styles/tailwind.css";
import Aside from "./components/aside";
import CvDisplay from "./components/cvDisplay";
function App() {
  return (
    <div className="flex min-h-screen max-w-screen-2xl m-auto ">
      <Aside />
      <CvDisplay />
    </div>
  );
}

export default App;

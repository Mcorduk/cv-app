import React, { useState } from "react";
import "./assets/styles/tailwind.css";
import Aside from "./components/Aside";
import CvDisplay from "./components/CvDisplay";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAdress] = useState("");

  return (
    <div className="flex overflow-auto min-h-screen max-w-screen-xl ">
      <Aside />
      <CvDisplay />
    </div>
  );
}

export default App;

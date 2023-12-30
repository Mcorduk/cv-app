import React, { useState } from "react";
import "./assets/styles/tailwind.css";
import Aside from "./components/Aside";
import CvDisplay from "./components/CvDisplay";

function App() {
  // General Section States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAdress] = useState("");

  // Education Section States
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [eduStartDate, setEduStartDate] = useState("");
  const [eduEndDate, setEduEndDate] = useState("");
  const [eduLocation, setEduLocation] = useState("");

  // Experience Section States
  const [company, setCompany] = useState("");
  const [expTitle, setExpTitle] = useState("");
  const [expStartDate, setExpStartDate] = useState("");
  const [eduExpDate, setExpEndDate] = useState("");
  const [expLocation, setExpLocation] = useState("");

  return (
    <div className="flex overflow-auto min-h-screen max-w-screen-xl ">
      <Aside />
      <CvDisplay />
    </div>
  );
}

export default App;

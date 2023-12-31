import React, { useState } from "react";
import "./assets/styles/tailwind.css";
import Aside from "./components/Aside";
import CvDisplay from "./components/CvDisplay";

function App() {
  // General Information State
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "NIKOLA TESLA",
    email: "nikolatesla@gmail.com",
    number: "+90 553 33 33",
    address: "La Volaria, Noche Varia St. Brazil",
  });

  // Update function for education
  const updateGeneral = (field, value) => {
    setGeneralInfo((prevGeneral) => ({
      ...prevGeneral,
      [field]: value,
    }));
  };

  // Education State
  const [education, setEducation] = useState({
    school: "University of Hong Kong",
    degree: "Msc.",
    startDate: "1998-11-10",
    endDate: "2002-11-10",
    location: "Hong Kong",
  });

  // Update function for education
  const updateEducation = (field, value) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [field]: value,
    }));
  };

  // Experience State
  const [experience, setExperience] = useState({
    company: "Tesla Inc.",
    title: "Founder",
    startDate: "2007-11-10",
    endDate: "Present",
    location: "Texas, USA",
    description:
      "I am the founder of Tesla. I operated day to day activities as well as supervising workers. I am quite a big deal",
  });

  // Update function for experience
  const updateExperience = (field, value) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      [field]: value,
    }));
  };

  return (
    <div className="flex overflow-auto min-h-screen max-w-screen-xl ">
      <Aside
        generalInfo={generalInfo}
        updateGeneral={updateGeneral}
        education={education}
        updateEducation={updateEducation}
        experience={experience}
        updateExperience={updateExperience}
      />
      <CvDisplay
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./assets/styles/tailwind.css";
import Aside from "./components/Aside";
import CvDisplay from "./components/CvDisplay";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
  });

  // Update function for education
  const updateGeneral = (field, value) => {
    setGeneralInfo((prevGeneral) => ({
      ...prevGeneral,
      [field]: value,
    }));
  };

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  // Update function for education
  const updateEducation = (field, value) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [field]: value,
    }));
  };

  const [experience, setExperience] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
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
        updateExperince={updateExperience}
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

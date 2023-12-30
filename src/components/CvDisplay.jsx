import React from "react";
import CvHeader from "./Headers/CvHeader";
import EduSection from "./Sections/EducationSection";
import ExpSection from "./Sections/ExperienceSection";

export default function CvDisplay() {
  return (
    <div>
      <div className=" w-1/2 p-4 border-4 m-5 h-screen fixed self-start">
        <CvHeader />
        <EduSection />
        <ExpSection />
      </div>
    </div>
  );
}

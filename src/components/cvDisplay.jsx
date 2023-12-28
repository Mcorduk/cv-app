import React from "react";
import CvHeader from "./Headers/cvHeader";
import EduSection from "./Sections/educationSection";
import ExpSection from "./Sections/experienceSection";

export default function CvDisplay() {
  return (
    <div className="flex-grow p-4 border-4 m-5 ">
      <CvHeader />
      <EduSection />
      <ExpSection />
    </div>
  );
}

import React from "react";
import CvHeader from "./Headers/CvHeader";
import EduSection from "./Sections/EducationSection";
import ExpSection from "./Sections/ExperienceSection";

export default function CvDisplay({ generalInfo, education, experience }) {
  return (
    <div>
      <div className=" w-1/2 p-4 border-4 m-5 h-screen fixed self-start">
        <CvHeader generalInfo={generalInfo} />
        <EduSection education={education} />
        <ExpSection experience={experience} />
      </div>
    </div>
  );
}

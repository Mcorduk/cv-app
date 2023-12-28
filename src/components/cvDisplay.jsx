import React from "react";
import CvHeader from "./Headers/cvHeader";
import Section from "./Sections/educationSection";
export default function CvDisplay() {
  return (
    <div className="flex-grow p-4 border-4 m-5 ">
      <CvHeader />
      <Section />
      <Section />
    </div>
  );
}

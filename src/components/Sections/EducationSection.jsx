import React from "react";
import { SectionHeader, SectionInfo } from "./Section";

export default function EduSection({ education }) {
  return (
    <>
      <SectionHeader text={"Education Section"} />
      <SectionInfo
        // Passing individual pieces of experiences state object as props
        startDate={education.startDate}
        endDate={education.endDate}
        location={education.location}
        // Assuming company represents the school in this context
        institution={education.school}
        title={education.degree}
      />
    </>
  );
}

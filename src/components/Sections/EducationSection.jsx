import React from "react";
import { SectionHeader, SectionInfo } from "./Section";

export default function EduSection({ education }) {
  return (
    <>
      <SectionHeader text={"Education Section"} />
      <SectionInfo
        startDate={education.startDate}
        endDate={education.endDate}
        location={education.location}
        institution={education.school}
        title={education.degree}
      />
    </>
  );
}

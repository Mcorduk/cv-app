import React from "react";
import { SectionHeader, SectionInfo } from "./ExperienceSection";

export default function ExpSection({ experience }) {
  return (
    <>
      <SectionHeader text="Experience Section" />
      <SectionInfo
        startDate={experience.startDate}
        endDate={experience.endDate}
        location={experience.location}
        institution={experience.school}
        title={experience.degree}
        description={experience.description}
      />
    </>
  );
}

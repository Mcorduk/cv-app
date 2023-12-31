import React from "react";
import { SectionHeader, SectionInfo } from "./Section";

export default function ExpSection({ experience }) {
  return (
    <>
      <SectionHeader text="Experience Sectoni <3" />
      <SectionInfo
        // Passing individual pieces of experiences state object as props
        startDate={experience.startDate}
        endDate={experience.endDate}
        location={experience.location}
        // Assuming company represents the institution in this context
        institution={experience.company}
        title={experience.title}
        description={experience.description}
      />
    </>
  );
}

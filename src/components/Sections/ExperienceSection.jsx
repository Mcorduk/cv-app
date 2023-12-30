import React from "react";
import { SectionHeader, SectionInfo } from "./EducationSection";

export default function ExpSection() {
  return (
    <>
      <SectionHeader text="Experience Section" />
      <SectionInfo
        startDate="08/2020"
        location="Istanbul, Turkey"
        institution="Aperture Science Laboratories"
        title="Research Asistant"
        description={
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
        }
      />
    </>
  );
}

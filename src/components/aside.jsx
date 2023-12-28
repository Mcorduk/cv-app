import React from "react";
import { Collapse } from "./Collapse/collapseContainer";
import { EducationForm } from "./Forms/educationForm";
import { ExperienceForm } from "./Forms/experienceForm";
import { GeneralForm } from "./Forms/generalForm";

export default function Aside() {
  return (
    <div className="flex flex-col items-center min-w-100 max-w-screen-sm w-1/2 p-4 dark:bg-gray-700 gap-2">
      <GeneralForm />
      <EducationForm />
      <Collapse text="Add Education">
        {" "}
        <EducationForm />
      </Collapse>
      <ExperienceForm />
      <Collapse text="Add Experience">
        <ExperienceForm />
      </Collapse>
    </div>
  );
}

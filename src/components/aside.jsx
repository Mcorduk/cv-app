import React from "react";
import { EducationForm } from "./Forms/educationForm";
import { ExperienceForm } from "./Forms/experienceForm";
import { GeneralForm } from "./Forms/generalForm";

export default function Aside() {
  return (
    <div className="flex flex-col items-center min-w-0 max-w-screen-sm w-1/3 p-4 dark:bg-gray-700 gap-2">
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}

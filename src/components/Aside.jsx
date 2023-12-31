import React from "react";
import { EducationForm } from "./Forms/EducationForm";
import { ExperienceForm } from "./Forms/ExperienceForm";
import { GeneralForm } from "./Forms/GeneralForm";

export default function Aside({
  generalInfo,
  updateGeneral,
  education,
  updateEducation,
  experience,
  updateExperience,
}) {
  return (
    <div className="flex flex-col items-center min-w-100 max-w-screen-sm w-1/2 p-4 dark:bg-gray-700 gap-2">
      {/* General Form is only created once. Only one form can be filled */}
      <GeneralForm generalInfo={generalInfo} updateGeneral={updateGeneral} />
      {/* First education form to be filled. */}
      <EducationForm education={education} updateEducation={updateEducation} />
      {/* <Collapse text="Add Education">
        {" "}
        <EducationForm />
      </Collapse> */}
      {/* First Experience form to be filled. */}
      <ExperienceForm
        experience={experience}
        updateExperience={updateExperience}
      />
      {/* <Collapse text="Add Experience">
        <ExperienceForm />
      </Collapse> */}
    </div>
  );
}

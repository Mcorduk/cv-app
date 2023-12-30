import React from "react";
import { SectionHeader, SectionInfo } from "../Sections/EducationSection";
import InputField from "./InputField";

export default function EduSection() {
  return (
    <>
      <SectionHeader text={"Education Section"} />
      <SectionInfo
        startDate="04/2018"
        endDate="02/2019"
        location="Singapore, Singapore"
        institution="Black Mesa Labs"
        title="Research Asistant"
        description={
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
        }
      />
    </>
  );
}

export function EducationForm() {
  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">Education Section</h1>
      <form className="space-y-2" action="#">
        <div className="flex">
          <InputField
            name="school"
            text="School"
            placeholder="Enter school / university"
            className="flex-grow pr-4"
          />
          <InputField
            name="degree"
            text="Degree"
            placeholder="Enter Degree Title (Bsc., Msc. etc)"
            className="flex-grow"
          />
        </div>
        <div className="flex">
          <InputField
            name="eduStartDate"
            type="date"
            text="Start Date"
            placeholder="Enter Start Date"
            className="flex-grow pr-4"
          />
          <InputField
            name="eduEndDate"
            type="date"
            text="End Date"
            placeholder="Enter End Date"
            className="flex-grow"
          />
        </div>
        <InputField
          name="location"
          text="Location"
          placeholder="Enter Location"
        />
      </form>
    </div>
  );
}

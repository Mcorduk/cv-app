import React from "react";
import InputField from "./InputField";

export function EducationForm({ education, updateEducation }) {
  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">Education Section</h1>
      <form className="space-y-2" action="#">
        <div className="flex">
          <InputField
            name="school"
            text="School"
            placeholder="Enter school / university"
            value={education.school}
            onChange={(e) => updateEducation("school", e.target.value)}
            className="flex-grow pr-4"
          />
          <InputField
            name="degree"
            text="Degree"
            placeholder="Enter Degree Title (Bsc., Msc. etc)"
            value={education.degree}
            onChange={(e) => updateEducation("degree", e.target.value)}
            className="flex-grow"
          />
        </div>
        <div className="flex">
          <InputField
            name="eduStartDate"
            type="date"
            text="Start Date"
            placeholder="Enter Start Date"
            value={education.startDate}
            onChange={(e) => updateEducation("startDate", e.target.value)}
            className="flex-grow pr-4"
          />
          <InputField
            name="eduEndDate"
            type="date"
            text="End Date"
            placeholder="Enter End Date"
            value={education.endDate}
            onChange={(e) => updateEducation("endDate", e.target.value)}
            className="flex-grow"
          />
        </div>
        <InputField
          name="location"
          text="Location"
          placeholder="Enter Location"
          value={education.location}
          onChange={(e) => updateEducation("location", e.target.value)}
        />
      </form>
    </div>
  );
}

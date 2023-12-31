import React from "react";
import InputField from "./InputField";

export function ExperienceForm({ experience, updateExperience }) {
  return (
    //Main container Div with styling
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">Experience Sectoni :3</h1>
      {/* Form Container Div with styling */}
      <form className="space-y-2" action="#">
        <div className="flex ">
          <InputField
            name="company"
            text="Company Name"
            placeholder="Enter Company Name "
            value={experience.company}
            onChange={(e) => updateExperience("company", e.target.value)}
            className="flex-grow pr-4"
          />
          <InputField
            name="title"
            text="Position Title"
            placeholder="Enter Position Title"
            value={experience.title}
            onChange={(e) => updateExperience("title", e.target.value)}
            className="flex-grow"
          />
        </div>
        <div className="flex ">
          <InputField
            name="startDate"
            type="date"
            text="Start Date"
            placeholder="Enter Start Date"
            value={experience.startDate}
            onChange={(e) => updateExperience("startDate", e.target.value)}
            className="flex-grow pr-4"
          />
          <InputField
            name="endDate"
            type="date"
            text="End Date"
            placeholder="Enter End Date"
            value={experience.endDate}
            onChange={(e) => updateExperience("endDate", e.target.value)}
            className="flex-grow"
          />
        </div>
        <InputField
          name="location"
          text="Company Location"
          placeholder="Enter Location"
          value={experience.location}
          onChange={(e) => updateExperience("location", e.target.value)}
        />
        <InputField
          name="description"
          text="Description"
          type="textarea"
          placeholder="Enter Decription..."
          value={experience.description}
          onChange={(e) => updateExperience("description", e.target.value)}
        />
      </form>
    </div>
  );
}

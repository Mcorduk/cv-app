import React from "react";
import InputField from "./inputField";
export function ExperienceForm() {
  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">Experience Section</h1>
      <form className="space-y-2" action="#">
        <InputField
          id="companyName"
          text="Full Name"
          placeholder="Enter Company Name "
        />
        <InputField
          name="positionTitle"
          text="Position Title"
          placeholder="Enter Position Title"
        />
        <InputField
          name="startDate"
          text="Start Date"
          type="date"
          placeholder="Enter Start Date"
        />
        <InputField
          name="endDate"
          text="End Date"
          type="date"
          placeholder="Enter End Date"
        />
        <InputField
          name="location"
          text="Location"
          placeholder="Enter Location"
        />
        <InputField
          name="description"
          text="Description"
          type="textarea"
          placeholder="Enter Decription.."
        />
      </form>
    </div>
  );
}

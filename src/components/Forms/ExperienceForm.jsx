import React from "react";
import InputField from "./InputField";

export function ExperienceForm({ children }) {
  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">Experience Section</h1>
      <form className="space-y-2" action="#">
        <div className="flex ">
          {children}
          <InputField
            id="companyName"
            text="Full Name"
            placeholder="Enter Company Name "
            className="flex-grow pr-4"
          />
          <InputField
            name="positionTitle"
            text="Position Title"
            placeholder="Enter Position Title"
            className="flex-grow"
          />
        </div>
        <div className="flex ">
          <InputField
            name="startDate"
            type="date"
            text="Start Date"
            placeholder="Enter Start Date"
            className="flex-grow pr-4"
          />
          <InputField
            name="endDate"
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
        <InputField
          name="description"
          text="Description"
          type="textarea"
          placeholder="Enter Decription..."
        />
      </form>
    </div>
  );
}

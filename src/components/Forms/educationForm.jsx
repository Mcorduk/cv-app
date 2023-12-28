import React from "react";
import InputField from "./inputField";

export function EducationForm() {
  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">Education Section</h1>
      <form className="space-y-2" action="#">
        <InputField
          name="school"
          text="School"
          placeholder="Enter school / university"
        />
        <InputField
          name="degree"
          text="Degree"
          placeholder="Enter Degree Title (Bsc., Msc. etc)"
        />
        <InputField
          name="eduStartDate"
          type="date"
          text="Start Date"
          placeholder="Enter Start Date"
        />
        <InputField
          name="eduEndDate"
          type="date"
          text="End Date"
          placeholder="Enter End Date"
        />
        <InputField
          name="location"
          text="Location"
          placeholder="Enter Location"
        />
      </form>
    </div>
  );
}

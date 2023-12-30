import React from "react";
import InputField from "./InputField";

export function GeneralForm({ generalInfo, updateGeneral }) {
  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 md:pt-4 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white pb-2">General Section</h1>
      <form className="space-y-2" action="#">
        <div className="flex">
          <InputField
            name="name"
            text="Full Name"
            placeholder="Enter First and Last Name "
            className="flex-grow pr-4"
            value={generalInfo.fullName}
            onChange={(e) => updateGeneral("fullName", e.target.value)}
          />
          <InputField
            name="email"
            type="email"
            text="Email"
            placeholder="Enter Email"
            value={generalInfo.email}
            onChange={(e) => updateGeneral("email", e.target.value)}
            className="flex-grow"
          />
        </div>
        <div className="flex">
          <InputField
            name="phone"
            text="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
            value={generalInfo.number}
            onChange={(e) => updateGeneral("number", e.target.value)}
            className="flex-grow pr-4"
          />
          <InputField
            name="address"
            text="Address"
            placeholder="Enter City, Country"
            value={generalInfo.address}
            onChange={(e) => updateGeneral("address", e.target.value)}
            className="flex-grow"
          />
        </div>
      </form>
    </div>
  );
}

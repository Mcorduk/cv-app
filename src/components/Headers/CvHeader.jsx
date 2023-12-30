import React from "react";

export default function CvHeader({ generalInfo }) {
  return (
    <div className="flex flex-col justify-center items-center w-auto border-b-2">
      <h1 className="text-4xl">{generalInfo.fullName}</h1>
      <ul className="flex justify-around size-full py-3">
        <li>{generalInfo.email}</li>
        <li>{generalInfo.number}</li>
        <li>{generalInfo.address}</li>
      </ul>
    </div>
  );
}

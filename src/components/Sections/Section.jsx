import React from "react";

// Component for displaying a section header
export function SectionHeader({ text }) {
  return (
    // Container for the section header with styling
    <div className="flex justify-center items-center bg-slate-400 py-3">
      <h3 className="text-xl">{text}</h3>
    </div>
  );
}

// Component for displaying detailed information about a section
export function SectionInfo({
  startDate,
  endDate = "present",
  location = "Undisclosed Location",
  institution,
  title,
  description = null,
}) {
  return (
    // Container for the section information with styling
    <article className="flex gap-6 py-3">
      {/* Sidebar for displaying start and end dates, and location */}
      <aside className=" flex flex-col min-w-fit w-1/3">
        <p>
          <span>{startDate}</span>
          <span> - </span>
          <span>{endDate}</span>
        </p>
        <p>{location}</p>
      </aside>
      <main className="grow">
        <p>{institution}</p>
        <p>{title}</p>
        <p>{description}</p>
      </main>
    </article>
  );
}

import React from "react";

function SectionHeader({ text }) {
  return (
    <div className="flex justify-center items-center bg-slate-400 py-3">
      <h3 className="text-xl">{text}</h3>
    </div>
  );
}

function SectionInfo({
  startDate,
  endDate = "present",
  location = "Undisclosed Location",
  institution,
  title,
  description = null,
}) {
  return (
    <article>
      <aside>
        <p>
          <span>{startDate}</span>
          <span> - </span>
          <span>{endDate}</span>
        </p>
        <p>{location}</p>
      </aside>
      <main>
        <p>{institution}</p>
        <p>{title}</p>
        <p>{description}</p>
      </main>
    </article>
  );
}

export default function Section() {
  return <SectionHeader text={"Education Section"} />;
}

import React from "react";

export default function CvHeader() {
  return (
    <div className="flex flex-col justify-center items-center w-auto border-b-2">
      <h1 className="text-4xl">Firstname Lastname</h1>
      <ul className="flex justify-around size-full py-3">
        <li>something@gmail.com</li>
        <li> +50 345 3030</li>
        <li>Seattle, USA</li>
      </ul>
    </div>
  );
}

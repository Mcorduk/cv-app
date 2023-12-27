import React, { useState } from "react";
export default function InputField({
  name,
  type = "text",
  text = "Input Name",
  placeholder = "Type Here...",
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      {/* <p>Input Value: {inputValue}</p> */}
    </>
  );
}

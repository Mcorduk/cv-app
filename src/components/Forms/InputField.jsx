import React from "react";
export default function InputField({
  name,
  type = "text",
  text = "Input Name",
  placeholder = "Type Here...",
  className = "",
  value,
  onChange,
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={className}>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={name}
      >
        {text}:
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      {/* <p>Input Value: {inputValue}</p> */}
    </div>
  );
}

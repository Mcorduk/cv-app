import React, { useCallback, useState } from "react";

export const Collapse = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded);
  }, []);

  return (
    <>
      <button
        onClick={toggleIsExpanded}
        className="bg-gray-800 text-white rounded-lg px-4 py-2"
      >
        {props.text}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isExpanded ? "500px" : "0px" }}
      >
        <div className="fade-in-animation">
          {/* Hey I am some content, isn&apos;t that Crazy? */}
          {props.children}
        </div>
      </div>
    </>
  );
};

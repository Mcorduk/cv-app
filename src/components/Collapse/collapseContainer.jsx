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
        Toggle Collapse
      </button>
      <div
        className={`overflow-hidden transition-opacity ${
          isExpanded ? "opacity-100" : "opacity-0"
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

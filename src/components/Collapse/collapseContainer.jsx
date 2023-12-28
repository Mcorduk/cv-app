import React, { useCallback, useState } from "react";

export const Collapse = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded);
  }, []);

  return (
    <>
      <button
        onClick={toggleIsExpanded}
        className="bg-blue-500 text-white px-4 py-2"
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
          Hey I am some content, isn&apos;t that Crazy?
        </div>
      </div>
    </>
  );
};

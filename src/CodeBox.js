import React from "react";

const CodeBox = ({ children }) => {
  return (
    <div
      className="bg-grey-700 p-xxl grey-50 my-xxxl rounded-l"
      style={{ fontFamily: "monospace" }}
    >
      {children}
    </div>
  );
};

export default CodeBox;

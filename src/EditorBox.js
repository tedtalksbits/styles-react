import React from "react";
import { X } from "phosphor-react";
const EditorBox = ({
  children,
  showState = true,
  fadeIn = false,
  setShowState,
}) => {
  const show = {
    visibility: "visible",
    tranform: "scale(1)",
    transition: "all ease .3s",
    opacity: 1,
    top: "-20rem",
    position: "absolute",
    left: " 0px",
    right: "0px",
    maxInlineSize: "99ch",
    marginInline: "auto",
  };
  const hide = {
    visibility: "hidden",
    tranform: "scale(.1)",
    transition: "all ease .3s",
    opacity: 0,
    top: "3rem",
    position: "absolute",
    left: " 0px",
    right: "0px",
    maxInlineSize: "99ch",
    marginInline: "auto",
  };
  return (
    <>
      <div
        className="editbox bg-white-a-700 p-xxl rounded-l shadow-l blur-xl"
        style={showState && fadeIn ? show : hide}
      >
        <div className="flex justify-between">
          <h3>Edit styles</h3>
          <X size={20} onClick={setShowState} style={{ cursor: "pointer" }} />
        </div>
        {children}
      </div>
    </>
  );
};

export default EditorBox;

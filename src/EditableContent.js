import React, { useEffect, useState } from "react";
import { Pencil, X } from "phosphor-react";
import CodeBox from "./CodeBox";
import EditorBox from "./EditorBox";

const EditableContent = () => {
  const colors = [
    "blue",
    "cyan",
    "green",
    "pink",
    "yellow",
    "orange",
    "red",
    "purple",
    "grey",
    "teal",
    "gradient",
  ];
  const color_values = {
    light: ["50", "100", "200", "300", "400"],
    dark: ["500", "600", "700", "800", "900"],
  };

  const [bgColor, setBgColor] = useState("grey");
  const [bgColorValue, setBgColorValue] = useState("700");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleColor, setTitleColor] = useState("grey");
  const [titleColorValue, setTitleColorValue] = useState("700");
  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };
  const handleTitleColorChange = (e) => {
    setTitleColor(e.target.value);
  };
  const handleTitleValChange = (e) => {
    setTitleColorValue(e.target.value);
  };
  const handleBgColorValChange = (e) => {
    setBgColorValue(e.target.value);
  };
  const handleIsEditing = () => {
    setIsEditing((prev) => !prev);
  };
  const handleIsEditileTitle = () => {
    setIsEditingTitle((prev) => !prev);
  };

  useEffect(() => {
    if (Number(bgColorValue) > 500) {
      setTitleColorValue("300");
    } else {
      setTitleColorValue("700");
    }
  }, [bgColorValue]);
  return (
    <>
      <div
        className={`full-bleed bg-${bgColor}-${bgColorValue} flex-v align-center justify-center gap-xxl relative vh-100`}
      >
        <div className="editable-item relative w-100">
          <h1
            className={`font-xxxl center ${titleColor}-${titleColorValue}`}
            contentEditable
            onClick={() => setIsEditingTitle(true)}
          >
            Hello There, edit this text
            <span className="animateIn">😎</span>
          </h1>

          <EditorBox
            showState={isEditingTitle}
            fadeIn={true}
            setShowState={handleIsEditileTitle}
          >
            <select
              className=" p-m mt-xl font-l rounded-m"
              name="select"
              id="select"
              onChange={handleTitleColorChange}
              value={titleColor}
            >
              <option value="">Select a color</option>
              {colors.map((color, key) => {
                return (
                  <option key={key} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
            <select
              className=" p-m mt-xl font-l rounded-m"
              name="select"
              id="select"
              onChange={handleTitleValChange}
              value={titleColorValue}
            >
              <option value="">Select a color values</option>
              {Object.keys(color_values).map((group, key) => (
                <optgroup key={key} label={group}>
                  {color_values[`${group}`].map((val, key) => (
                    <option key={key} value={val}>
                      {val}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <CodeBox>
              {`<h1 class="font-xxxl center `}
              <span className={`${titleColor}-${titleColorValue}`}>
                {titleColor}-{titleColorValue}
              </span>
              {` white-a-900">   
            </h1>`}
            </CodeBox>
          </EditorBox>
        </div>

        <h4
          className={`font-xl center ${
            Number(bgColorValue) > 500 ? "white-a-600" : "grey-600"
          }`}
        >
          Welcome to the style system, click the text above to edit
        </h4>

        <button
          onClick={handleIsEditing}
          className={`py-m px-xxl my-xl font-l rounded-m bg-${bgColor}-200 flex alignCenter`}
        >
          <Pencil />
          Edit Styles
        </button>

        <div className="editable-item relative w-100">
          <EditorBox
            showState={isEditing}
            setShowState={handleIsEditing}
            fadeIn={true}
          >
            <select
              className=" p-m mt-xl font-l rounded-m ml-xl"
              name="select"
              id="select"
              onChange={handleBgColorChange}
              value={bgColor}
            >
              <option value="">Select a color</option>
              {colors.map((color, key) => {
                return (
                  <option key={key} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
            <select
              className=" p-m mt-xl font-l rounded-m ml-xl"
              name="select"
              id="select"
              onChange={handleBgColorValChange}
              value={bgColorValue}
            >
              <option value="">Select a color values</option>
              {Object.keys(color_values).map((group, key) => (
                <optgroup key={key} label={group}>
                  {color_values[`${group}`].map((val, key) => (
                    <option key={key} value={val}>
                      {val}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <CodeBox>
              {`<header class="full-bleed bg-`}
              <span className={`${bgColor}-300`}>
                {bgColor}-{bgColorValue}
              </span>
              {` flex-v align-center justify-center">   
            </header>`}
            </CodeBox>
          </EditorBox>
        </div>
      </div>
    </>
  );
};

export default EditableContent;

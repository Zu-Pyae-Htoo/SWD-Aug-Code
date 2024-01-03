// HideShowComponent.js

import React, { useState } from "react";
import Content from "./Content";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className=" flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-10">Hide/Show Component</h1>
      <button
        onClick={toggleVisibility}
        className="mb-4 px-6 py-2 bg-blue-500 text-white"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <Content />}
    </div>
  );
};

export default HideShow;

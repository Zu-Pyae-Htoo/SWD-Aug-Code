import React, { useState } from "react";

const InputText = () => {
  const [text, setText] = useState("");
  const handler = (event) => {
    setText(event.target.value);
  };
  console.log(text);
  return (
    <div>
      <h1 className=" mb-3">Text Input</h1>
      <input
        type="text"
        className=" border border-gray-600 px-3 py-1 rounded-lg"
        value={text}
        onChange={handler}
      />
    </div>
  );
};

export default InputText;

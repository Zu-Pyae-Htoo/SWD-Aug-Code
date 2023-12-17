import React, { useState } from "react";

const Accordion = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div
        onClick={openHandler}
        className="bg-gray-400 border-y border-gray-400 select-none p-3 cursor-pointer flex justify-between"
      >
        <h1 className="">{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 duration-200 ${!open ? "-rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {open && (
        <div className="p-5 animate__animated animate__fadeIn duration-100">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

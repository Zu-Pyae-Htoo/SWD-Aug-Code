import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div>
        <h1
          className="bg-gray-400 select-none p-3 cursor-pointer"
          onClick={openHandler}
        >
          Accordion
        </h1>
      </div>
      {open && (
        <div className="p-5 animate__animated animate__fadeIn duration-100">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            labore vero veniam non quis minima quibusdam? Veritatis fugiat at
            eligendi assumenda itaque laboriosam quasi possimus, a dolore
            temporibus quis enim!
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

import React, { useState } from "react";

const Checker = () => {
  const [done, setDone] = useState(true);

  const handler = () => {
    setDone(!done);
  };
  console.log(done);
  return (
    <div>
      <div className="flex gap-5 justify-center items-center">
        <input
          checked={done}
          onChange={handler}
          type="checkbox"
          className="w-5 h-5 "
          id="x"
        />
        <label htmlFor="x" className=" 5xl font-bold select-none">
          Checker
        </label>
      </div>
    </div>
  );
};

export default Checker;

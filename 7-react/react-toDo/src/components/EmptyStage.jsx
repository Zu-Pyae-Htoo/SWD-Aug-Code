import React from "react";
import EmptySvg from "../img/save.svg";

const EmptyStage = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
      <img
        width={150}
        className="mb-5"
        src={EmptySvg}
        alt="empty stage"
        style={{ filter: "invert(0)" }}
      />
      <p className="text-sm">There is no list.</p>
    </div>
  );
};

export default EmptyStage;

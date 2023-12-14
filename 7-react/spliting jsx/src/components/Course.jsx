import React from "react";

const Course = ({ id, title, count }) => {
  const bgCLassName = count === 0 ? "bg-red-200 border-red-300" : "bg-gray-200";

  //conditional(recommended)
  // =============
  return (
    count > 0 && (
      <div className={`mb-3 p-2 border-s-4 border-neutral-400 ${bgCLassName}`}>
        {title} {count}
      </div>
    )
  );

  //if else
  // ==========
  // if (count > 0) {
  //   return (
  //     <div className={`mb-3 p-2 border-s-4 border-neutral-400 ${bgCLassName}`}>
  //       {title} {count}
  //     </div>
  //   );
  // }
};

export default Course;

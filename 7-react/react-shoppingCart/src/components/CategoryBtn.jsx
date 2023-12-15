import React from "react";

const CategoryBtn = ({text}) => {
  return (
    <button type="button" className="category-btn">
      {text}
    </button>
  );
};

export default CategoryBtn;

import React from "react";
import CategoryBtn from "./CategoryBtn";
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const CategoryGroup = () => {
  const id = Date.now();
  return (
    <div className="flex gap-3" id="categoryGroup">
      <button type="button" className="category-btn active ">
        All
      </button>
      {categories.map((category) => {
        return <CategoryBtn key={category} text={category} />;
      })}
    </div>
  );
};

export default CategoryGroup;

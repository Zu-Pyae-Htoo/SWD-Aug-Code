import React from "react";
import CategoryBtn from "./CategoryBtn";
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const CategoryGroup = () => {
  return (
    <div className="flex gap-3" id="categoryGroup">
      <button type="button" className="category-btn active ">
        All
      </button>
      {/* {categories.map((el, key) => {
        return <CategoryBtn text={el} key={key} />;
      })} */}
    </div>
  );
};

export default CategoryGroup;

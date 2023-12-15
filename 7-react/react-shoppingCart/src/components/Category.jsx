import React from "react";
import CategoryGroup from "./CategoryGroup";

const Category = () => {
  return (
    <section className="mt-8">
      <div className="box">
        <h3 className="mb-3 font-heading font-semibold">Product Catagories</h3>
        <CategoryGroup/>
      </div>
    </section>
  );
};

export default Category;

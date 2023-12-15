import React from "react";
import ProductCreateForm from "./ProductCreateForm";
import ProductGroup from "./ProductGroup";
import ProductHeader from "./ProductHeader";

const ProductDrawer = () => {
  return (
    <div
      id="productDrawer"
      className="h-screen w-96 bg-white fixed right-0 shadow-lg overflow-scroll duration-200"
    >
      <ProductHeader />
      <ProductGroup />
      <ProductCreateForm />
    </div>
  );
};

export default ProductDrawer;

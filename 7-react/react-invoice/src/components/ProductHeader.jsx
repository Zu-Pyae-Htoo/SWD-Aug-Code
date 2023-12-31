import React from "react";

const ProductHeader = () => {
  return (
    <div className="p-3 flex items-center justify-between">
      <div className>
        <h1 className="text-3xl font-bold text-gray-700">Your Product</h1>
        <h4 className="text-xl text-gray-500">Manage Product</h4>
      </div>
      <button id="closeDrawer" className="p-3 bg-blue-100 text-blue-600" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductHeader;

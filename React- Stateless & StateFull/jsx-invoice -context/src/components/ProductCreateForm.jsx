import React, { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContextProvider";

const ProductCreateForm = () => {
  const { addProduct } = useContext(GeneralContext);
  const nameRef = useRef("");
  const priceRef = useRef("");
  // const labelRef = useRef("");

  const handlerAddBtn = () => {
    // console.log(labelRef.current.getBoundingClientRect());
    // console.log(nameRef.current.value);
    // console.log(priceRef.current.valueAsNumber);

    const newProduct = {
      id: Date.now(),
      name: nameRef.current.value,
      price: priceRef.current.valueAsNumber,
    };

    addProduct(newProduct);
    nameRef.current.value = "";
    priceRef.current.value = "";
  };
  return (
    <div className="border-t-2 p-3">
      <div id="newProductForm">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3">
            <label
              // ref={labelRef}
              htmlFor="newProductName"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              New Product Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="newProductName"
              name="new_product_name"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="newProductPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              ref={priceRef}
              type="number"
              id="newProductPrice"
              name="new_product_price"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              onClick={handlerAddBtn}
              type="submit"
              className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateForm;

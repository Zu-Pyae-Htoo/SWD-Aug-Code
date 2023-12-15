import React from "react";

const Drawer = () => {
  return (
    <div
      id="cart-drawer"
      className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-80 transform-none"
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex flex-col h-screen">
        <div className="cart-drawer-header border-b-2 border-neutral-700 py-5 px-3 mb-3">
          <div className="flex justify-between items-center">
            <div>
              <h5
                id="drawer-right-label"
                className="inline-flex items-center text-2xl font-bold font-heading text-neutral-700="
              >
                Your Cart
              </h5>
              <p>
                Items in cart
                <span className="cart-item-count bg-red-200 text-red-700 text-sm px-2 py-1 rounded-lg">
                  1
                </span>
              </p>
            </div>
            <button
              type="button"
              data-drawer-hide="cart-drawer"
              aria-controls="cart-drawer"
              className="text-neutral-700 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
        </div>
        <div
          id="cartGroup"
          className="cart-drawer-body flex-grow flex flex-col overflow-scroll"
        >
          <div className="hidden last:flex flex-col justify-center items-center mt-32">
            <img
              src="./img/Add to Cart-cuate.svg"
              alt
              style={{ filter: "invert(0)" }}
            />
            <p>There is no item yet!</p>
          </div>
          {/* <div class="product-in-cart p-3">
    <img
      class="h-20 -mb-10 ml-3"
      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      alt=""
    />
    <div class="border border-neutral-400 rounded-lg p-3">
      <p class="line-clamp-1 font-heading font-bold mt-10 mb-2">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <div class="flex justify-between">
        <p class="font-semibold text-neutral-500">
          $<span class="font-bold font-heading text-neutral-900"
            >123</span
          >
        </p>

        <div class="cart-quantity-control flex">
          <button
            class="bg-neutral-200 text-neutral-900 px-2 py-1 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <p class="w-8 text-end pe-2">1</p>
          <button
            class="bg-neutral-200 text-neutral-900 px-2 py-1 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div> */}
          <div className="product-in-cart p-3" product-in-cart-id={3}>
            <img
              className="cart-img h-20 -mb-10  ml-3 relative z-30"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt
              style={{ filter: "invert(0)" }}
            />
            <div className="border border-neutral-400 rounded-lg p-3 relative group">
              <button className="bg-red-100 text-red-700 rounded-lg p-1 absolute right-2 top-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-200 translate-x-full group-hover:translate-x-0 del-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <p className="cart-title line-clamp-1 font-heading font-bold mt-10 mb-2">
                Mens Cotton Jacket
              </p>
              <div className="flex justify-between">
                <p className="font-semibold text-neutral-600">
                  $
                  <span className="font-bold font-heading text-neutral-900 cart-price">
                    55.99
                  </span>
                  <span className="hidden cart-cost">55.99</span>
                </p>
                <div className="cart-quantity-control flex">
                  <button className="bg-neutral-200 text-neutral-900 px-2 py-1 rounded-md cart-decrease">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <p className="w-8 text-end pe-2 cart-quantity">1</p>
                  <button className="bg-neutral-200 text-neutral-900 px-2 py-1 rounded-md cart-increase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-drawer-footer border-t-2 border-gray-700 p-3">
          <p className="text-neutral-600 text-end font-bold">Total</p>
          <h1 className="font-heading font-bold text-xl text-end">
            $<span id="costTotal">55.99</span>
          </h1>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-3 block w-full mt-3"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

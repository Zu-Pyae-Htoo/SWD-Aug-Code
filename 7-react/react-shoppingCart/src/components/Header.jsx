import React from "react";

const Header = () => {
  return (
    <header className="border-b-2 border-gray-700 py-5 fixed w-full left-0 top-0 bg-white z-10">
      <div className="box">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-heading font-bold text-2xl">MMS Solution</h1>
            <p className="font-semibold text-gray-600">E-Commerce</p>
          </div>
          <div className="flex gap-3">
            <div>
              <input
                type="text"
                name
                id="searchInput"
                className="opacity-0 pointer-events-none duration-100 text-neutral-700 border border-neutral-700 focus:ring-4 focus:ring-neutral-300 focus:outline-none rounded-lg"
                placeholder="search products"
              />
            </div>
            <button
              id="searchBtn"
              type="button"
              className="text-neutral-700 border border-neutral-700 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-2 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <button
              id="cartBtn"
              type="button"
              data-drawer-target="cart-drawer"
              data-drawer-show="cart-drawer"
              data-drawer-placement="right"
              aria-controls="cart-drawer"
              className="text-white border-neutral-700 bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 relative"
            >
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="cart-item-count bg-red-700 text-white w-5 h-5 text-sm rounded-full border border-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const ProductCard = ({ img, title, description, price, rate, count }) => {
  let stars = "";
  const fillStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
  const outLineStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
  for (let i = 1; i <= 5; i++) {
    if (i <= rate.toFixed(0)) {
      stars += fillStar;
    } else {
      stars += outLineStar;
    }
  }
  return (
    <div id="productCard" className="product-card" product-card-id={1}>
      <img
        className="product-img h-32 -mb-16 ml-3"
        src={img}
        alt
        style={{ filter: "invert(0)" }}
      />
      <div className="border border-neutral-500 p-5 rounded-lg">
        <h3 className="line-clamp-1 font-bold text-lg font-heading mt-12 product-title">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm text-neutral-600 mb-3 product-description">
          {description}
        </p>
        <div className="flex justify-between border-b-2 border-neutral-400 pb-3 mb-3">
          <div className="product-stars flex gap-1">
              
          </div>
          <p className="rating">
            (<span className="product-rate">{rate}</span> /
            <span className="product-count">{count}</span>)
          </p>
        </div>
        <p className="price mb-3">
          $<span className="font-bold font-heading product-price">{price}</span>
        </p>
        <button
          type="button"
          className="add-to-cart-btn text-neutral-700 hover:text-white border border-gray-700 hover:bg-neutral-700 font-medium rounded-lg text-sm px-5 py-2 text-center block w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

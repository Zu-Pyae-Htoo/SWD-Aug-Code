import { products } from "./data";
import { cartGroup, cartTemplate, costTotal } from "./selectors";


export const cartUi = ({ id, image, title, price }) => {
  const cart = cartTemplate.content.cloneNode(true);

  cart.querySelector(".cart-img").src = image;
  cart.querySelector(".cart-title").innerText = title;
  cart.querySelector(".cart-price").innerText = price;
  cart.querySelector(".cart-cost").innerText = price;
  cart.querySelector(".cart-quantity").innerText = 1;

  return cart;
};

export const productGroupHandler = (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const currentProductCard = event.target.closest(".product-card");
    const currentProductCardId = parseInt(
      currentProductCard.getAttribute("product-card-id")
    );
    const card = products.find((el) => el.id === currentProductCardId);
    cartGroup.append(cartUi(card));

    // cart

    const cartCount = cartGroup.querySelectorAll(".product-in-cart").length;
    app
      .querySelectorAll(".cart-item-count")
      .forEach((el) => (el.innerText = cartCount));

    const cartCostTotal = [...cartGroup.querySelectorAll(".cart-cost")].reduce(
      (pv, cv) => pv + parseFloat(cv.innerText),
      0
    );

   costTotal.innerText = cartCostTotal;
  }
};

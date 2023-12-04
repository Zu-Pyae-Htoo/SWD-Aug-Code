import { products } from "./data";
import { cartGroup, cartTemplate } from "./selectors";

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
    const currentProductCardId = parseInt(currentProductCard.getAttribute("product-card-id"));
    const card =products.find(el=> el.id === currentProductCardId)
    cartGroup.append(cartUi(card))
   
  }
};

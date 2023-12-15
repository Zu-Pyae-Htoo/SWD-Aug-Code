import { products } from "./data";
import { cartGroup, cartTemplate, costTotal } from "./selectors";
import { comfirmBox } from "./functions";

export const cartUi = ({ id, image, title, price }) => {
  const cart = cartTemplate.content.cloneNode(true);
  cart.querySelector(".product-in-cart").setAttribute("product-in-cart-id", id);
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
  }
};

export const cartGroupObserver = () => {
  const process = () => {
    //cart count
    const cartCount = cartGroup.querySelectorAll(".product-in-cart").length;
    app
      .querySelectorAll(".cart-item-count")
      .forEach((el) => (el.innerText = cartCount));

    //cart
    const cartCostTotal = [...cartGroup.querySelectorAll(".cart-cost")].reduce(
      (pv, cv) => pv + parseFloat(cv.innerText),
      0
    );

    costTotal.innerText = cartCostTotal.toFixed(2);
  };
  const options = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(process);
  observer.observe(cartGroup, options);
};

export const cartRemove = (id) => {
  const currentCart = cartGroup.querySelector(`[product-in-cart-id='${id}']`);
  comfirmBox(() => {
    currentCart.remove();
  });
};

export const cartGroupHandler = (event) => {
  if (event.target.classList.contains("del-btn")) {
    const cartID = event.target
      .closest(".product-in-cart")
      .getAttribute("product-in-cart-id");
    cartRemove(cartID);
  }
};

export const cartQuantityUpdate = (id, quantity) => {
  const currentCart = cartGroup.querySelector(`[product-in-cart-id='${id}']`);

  const currentCartQuantity = currentCart.querySelector(".record-quantity");
  const currentCartprice = currentCart.querySelector(".record-price");
  const currentCartcost = currentCart.querySelector(".record-cost");
  if (quantity > 0 || currentCartQuantity.innerText > 1) {
    currentCartQuantity.innerText =
      parseInt(currentCartQuantity.innerText) + quantity;

    currentCartcost.innerText =
      currentCartprice.innerText * currentCartQuantity.innerText;
  }
};

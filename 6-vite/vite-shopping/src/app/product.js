import { products } from "../core/data";
import { productGroup, productTemplate } from "../core/selectors";

export const productUi = ({
  id,
  title,
  image,
  description,
  price,
  rating: { rate, count },
}) => {
  const product = productTemplate.content.cloneNode(true);
  product.querySelector(".product-title").innerText = title;
  product.querySelector(".product-description").innerText = description;
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-price").innerText = price;
  product.querySelector(".product-rate").innerText = rate;
  product.querySelector(".product-count").innerText = count;
  return product;
};

export const productRender = (lists) => {
  lists.forEach((list) => productGroup.append(productUi(list)));
};

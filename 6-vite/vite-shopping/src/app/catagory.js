import { products } from "../core/data.js";
import { categoryGroup, categoryTemplate } from "../core/selectors.js";
import { productRender } from "./product.js";

export const categoryRender = (lists) => {
  lists.forEach((list) => {
    return categoryGroup.append(categoryUi(list));
  });
};
export const categoryUi = (text) => {
  console.log(text);
  const category = categoryTemplate.content.cloneNode(true);

  category.querySelector(".category-btn").innerText = text;
  return category;
};

export const categoryHandler = (event) => {
  if (event.target.classList.contains("category-btn")) {
    const selectedCategory = event.target.innerText;
    const filteredProduct = products.filter(
      (product) =>
        product.category === selectedCategory || "All" === selectedCategory
    );
    productRender(filteredProduct);
  }
};

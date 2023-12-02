import { categoryGroup, categoryTemplate } from "../core/selectors.js"


export const categoryRender = (lists) => {
    lists.forEach(list => {
        return  categoryGroup.append(categoryUi(list));
    });
}
export const categoryUi = (text) => {
    console.log(text);
    const category = categoryTemplate.content.cloneNode(true);
   
    category.querySelector(".category-btn").innerText = text;
    return category;
}

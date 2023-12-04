import { categoryHandler } from "../app/catagory"
import { productGroupHandler } from "./cart";
import { searchBtnHandler, searchInputHandler } from "./handler";
import { categoryGroup, productGroup, searchBtn, searchInput } from "./selectors"

export const listeners = () => {
    categoryGroup.addEventListener("click",categoryHandler);
    searchBtn.addEventListener("click",searchBtnHandler);
    searchInput.addEventListener("keyup",searchInputHandler);
    productGroup.addEventListener("click",productGroupHandler)
}
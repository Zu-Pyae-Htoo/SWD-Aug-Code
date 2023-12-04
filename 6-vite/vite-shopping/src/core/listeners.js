import { categoryHandler } from "../app/catagory"
import { searchBtnHandler } from "./handler";
import { categoryGroup, searchBtn } from "./selectors"

export const listeners = () => {
    categoryGroup.addEventListener("click",categoryHandler);
    searchBtn.addEventListener("click",searchBtnHandler);
}
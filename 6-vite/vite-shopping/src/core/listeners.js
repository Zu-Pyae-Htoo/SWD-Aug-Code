import { categoryHandler } from "../app/catagory"
import { categoryGroup } from "./selectors"

export const listeners = () => {
    categoryGroup.addEventListener("click",categoryHandler);
}
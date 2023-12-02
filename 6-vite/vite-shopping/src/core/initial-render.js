import { categoryRender } from "../app/catagory"
import { productRender } from "../app/product";
import { categories, products } from "./data";

const initialRender = () => {
    categoryRender(categories);
    productRender(products);
}

export default initialRender;
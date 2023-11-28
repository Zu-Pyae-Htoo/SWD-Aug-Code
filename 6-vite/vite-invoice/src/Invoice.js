import { productRender } from "./app/products";
import { products } from "./core/variables";

class Invoice {
    initialRender () {
        productRender(products)
    }
    listner(){

    }
    init() {
        console.log("Invoice App started");
        this.initialRender();
    }
}

export default Invoice;
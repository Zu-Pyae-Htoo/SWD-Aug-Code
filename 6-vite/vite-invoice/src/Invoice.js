import { productRender } from "./app/products";
import { newProductFormHandler, productDrawerHandler, recordFormHandler, recordGroupHandler } from "./core/handler";
import { newProductForm, productManageBtn, recordForm, recordGroup } from "./core/selector";
import {products} from "./core/variables"
class Invoice {
    listener(){
        productManageBtn.addEventListener("click",productDrawerHandler);
        closeDrawer.addEventListener("click",productDrawerHandler);
        newProductForm.addEventListener("submit",newProductFormHandler);
        recordForm.addEventListener("submit",recordFormHandler)
    }
    initialRender(){
        productRender(products);
    }
    init() {
        console.log("Invoice App started");
        this.initialRender();
        this.listener();
    }
}

export default Invoice;
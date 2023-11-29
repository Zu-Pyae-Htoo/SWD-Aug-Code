import { productRender } from "./app/products";
import { recordObserver } from "./app/record";
import { newProductFormHandler, printBtnHandler, productDrawerHandler, recordFormHandler, recordGroupHandler } from "./core/handler";
import { drawer, newProductForm, productManageBtn, recordForm, recordGroup } from "./core/selector";
import {products} from "./core/variables"
class Invoice {
    observers(){
        recordObserver();
    }
    listener(){
        productManageBtn.addEventListener("click",productDrawerHandler);
        closeDrawer.addEventListener("click",productDrawerHandler);
        newProductForm.addEventListener("submit",newProductFormHandler);
        recordForm.addEventListener("submit",recordFormHandler);
        recordGroup.addEventListener("click",recordGroupHandler);
        printBtn.addEventListener("click",printBtnHandler)
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
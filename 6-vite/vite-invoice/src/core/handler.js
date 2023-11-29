import { templateUI } from "../app/products";
import { calRecordTotal, recordUI } from "../app/record";
import { app, drawer, newProductForm, productSelect, quantityInput, recordForm, recordGroup } from "./selector";
import { products } from "./variables";

export const productDrawerHandler = () => {
    drawer.classList.toggle("translate-x-full");
    drawer.classList.add("duration-200");
  };

export const newProductFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(newProductForm);
  
    // console.log(formData.get("new_product_name"));
    // console.log(formData.get("new_product_price"));
  
    const newProduct = {
      id: Date.now(),
      name: formData.get("new_product_name"),
      price: formData.get("new_product_price"),
    };
  
    productGroup.append(templateUI(newProduct));
    productSelect.append(new Option(newProduct.name, newProduct.id));
    products.push(newProduct);
  
    newProductForm.reset();
  };

  export const recordFormHandler = (event) => {
    event.preventDefault();
    // idကနေ => product(objအခန်း)ရှာ => price,name
    let currentProduct = products.find(
      (product) => product.id == productSelect.value
    );
  
    // console.log(productSelect.value);
    // console.log(currentProduct.name);
    // console.log(quantityInput.valueAsNumber);
    const isExistProduct = app.querySelector(
      `[product-id='${currentProduct.id}']`
    );
  
    if (isExistProduct) {
      const currentRow = event.target.closest("tr");
      const currentRowQ = isExistProduct.querySelector(".record-q");
      const currentRowCost = isExistProduct.querySelector(".record-cost");
      const currentRowPrice = isExistProduct.querySelector(".record-price");
  
      currentRowQ.innerText =
        parseInt(currentRowQ.innerText) + quantityInput.valueAsNumber;
      currentRowCost.innerText =
        currentRowPrice.innerText * currentRowQ.innerText;
      calRecordTotal();
  
      calRecordTotal();
    } else {
      recordGroup.append(
        recordUI(
          currentProduct.id,
          currentProduct.name,
          currentProduct.price,
          quantityInput.valueAsNumber
        )
      );
      calRecordTotal();
    }
  
    recordForm.reset();
  };
  
  
  export const recordGroupHandler = (event) => {
    // console.log(event.target);
    // const x = event.target.classListcontains("record-del");
    //   console.log(x);
    if (event.target.classList.contains("record-del")) {
      console.log(event.target.closest("tr").remove());
      calRecordTotal();
    } else if (event.target.classList.contains("add-q")) {
      // console.log(event.target);
      const currentRow = event.target.closest("tr");
      const currentRowQ = currentRow.querySelector(".record-q");
      const currentRowCost = currentRow.querySelector(".record-cost");
      const currentRowPrice = currentRow.querySelector(".record-price");
  
      currentRowQ.innerText = parseInt(currentRowQ.innerText) + 1;
      currentRowCost.innerText =
        currentRowPrice.innerText * currentRowQ.innerText;
      calRecordTotal();
    } else if (event.target.classList.contains("sub-q")) {
      // console.log(event.target);
      const currentRow = event.target.closest("tr");
      const currentRowQ = currentRow.querySelector(".record-q");
      const currentRowCost = currentRow.querySelector(".record-cost");
      const currentRowPrice = currentRow.querySelector(".record-price");
  
      if (currentRowQ.innerText > 0) {
        currentRowQ.innerText = parseInt(currentRowQ.innerText) - 1;
        currentRowCost.innerText =
          currentRowPrice.innerText * currentRowQ.innerText;
        calRecordTotal();
      }
    }
  };
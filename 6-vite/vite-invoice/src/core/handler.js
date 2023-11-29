import { templateUI } from "../app/products";
import { calRecordTotal, recordUI, updateRecord } from "../app/record";
import {
  app,
  drawer,
  newProductForm,
  productSelect,
  quantityInput,
  recordForm,
  recordGroup,
} from "./selector";
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
    updateRecord(currentProduct.id, quantityInput.valueAsNumber);
  } else {
    recordGroup.append(
      recordUI(
        currentProduct.id,
        currentProduct.name,
        currentProduct.price,
        quantityInput.valueAsNumber
      )
    );
  }

  recordForm.reset();
};

//delete,increase,decrease button
export const recordGroupHandler = (event) => {
  if (event.target.classList.contains("record-del")) {
    event.target.closest("tr").remove();
    calRecordTotal();
  } else if (event.target.classList.contains("add-q")) {
    const id = event.target.closest("tr").getAttribute("product-id");
    updateRecord(id, 1);
  } else if (event.target.classList.contains("sub-q")) {
    const id = event.target.closest("tr").getAttribute("product-id");
    updateRecord(id, -1);
  }
};

export const printBtnHandler = () => {
  print();
};

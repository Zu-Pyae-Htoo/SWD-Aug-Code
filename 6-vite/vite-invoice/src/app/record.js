import { recordGroup, recordTotal, templateForRecordList } from "../core/selector";

export const recordObserver = () => {
  const options = { 
    attribute: true,childList : true,subtree : true,
  }

  const callback = () => {
      calRecordTotal();
  }
  
  const observer = new MutationObserver(callback);
  observer.observe(recordGroup,options);
}

export const recordUI = (id, name, price, quantity) => {
  const record = templateForRecordList.content.cloneNode(true);
  const cost = price * quantity;
  record.querySelector("tr").setAttribute("record-id", id);
  record.querySelector(".record-name").innerText = name;
  record.querySelector(".record-price").innerText = price;
  record.querySelector(".record-quantity").innerText = quantity;
  record.querySelector(".record-cost").innerText = cost;
  return record;
};

export const updateRecord = (id, quantity) => {
  const row = app.querySelector(`tr[product-id='${id}']`);
  const rowQuantity = row.querySelector(".record-quantity");
  const price = row.querySelector(".record-price");
  const cost = row.querySelector(".record-cost");
  if(quantity>0 || rowQuantity.innerText> 1){
    rowQuantity.innerText = parseInt(rowQuantity.innerText)+quantity;
    console.log(price,rowQuantity);
   cost.innerText = price.innerText *rowQuantity.innerText;
  }
   
};

export const calRecordTotal = () => {
  // let total = 0;
  // const costs = app.querySelectorAll(".record-cost");
  // costs.forEach((el) => (total += parseFloat(el.innerText)));

  const total = [...document.querySelectorAll(".record-cost")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  recordTotal.innerText = total;
  return total;
};



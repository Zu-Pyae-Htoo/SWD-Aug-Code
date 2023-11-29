import { recordTotal, templateForRecordList } from "../core/selector";

export const recordUI = (id,name,price,quantity) => {
  const record = templateForRecordList.content.cloneNode(true);
  const cost = price*quantity;
  record.querySelector("tr").setAttribute("record-id",id);
  record.querySelector(".record-name").innerText = name;
  record.querySelector(".record-price").innerText = price;
  record.querySelector(".record-quantity").innerText = quantity;
  record.querySelector(".record-cost").innerText = cost;
  return record;
}



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
  

export const productRender = (items) => {
    items.forEach((item) => {
      productSelect.append(new Option(item.name, item.id));
      productGroup.append(templateUI(item));
    });
  };

export const templateUI = ({ name, price }) => {
    const product = productTemplate.content.cloneNode(true);
  
    product.querySelector(".productName").innerText = name;
    product.querySelector(".productPrice").innerText = price;
    return product;
  };
  
import React, { createContext, useState } from 'react'

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const fruitArr = [
    { id: 1, name: "Apple", price: 1.0 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 0.8 },
    { id: 4, name: "Grapes", price: 2.5 },
  ];

  const [products, setProducts] = useState(fruitArr);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [records, setRecords] = useState([]);

  const addRecord = (newRecord) => {
    const isExistedRecord = records.find(record => record.productID == newRecord.productID);

    if (isExistedRecord) {
      updateRecord(isExistedRecord.id, isExistedRecord.quantity)
    } else {
      console.log(newRecord);
      setRecords([...records, newRecord])
    }
  };


  const removeRecord = (id) =>
    setRecords(records.filter((record) => record.id != id));

  const updateRecord = (id, quantity) => {
    setRecords(records.map(el => {
      if (el.id == id) {

        const newQuantity = el.quantity + quantity;
        const newCost = el.price * newQuantity;
        return {
          ...el,
          quantity: newQuantity,
          cost: newCost,
        }
      }
    }))
  }

  return (
    <GeneralContext.Provider value={{ openDrawer, toggleDrawer, products, addProduct, records, addRecord, removeRecord, updateRecord }}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider
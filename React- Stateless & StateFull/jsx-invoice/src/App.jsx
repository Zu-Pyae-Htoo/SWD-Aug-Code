import React, { useState } from "react";
import Header from "./components/Header";
import CheckOutForm from "./components/CheckOutForm";
import RecordTable from "./components/RecordTable";
import RecordGroup from "./components/RecordGroup";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const fruitArr = [
    { id: 1, name: "Apple", price: 1.0 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 0.8 },
    { id: 4, name: "Grapes", price: 2.5 },
  ];

  const [products,setProducts] = useState(fruitArr);


  const handlerDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const addProduct = (newProduct) => {
    setProducts([...products,newProduct])
  }

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckOutForm />
      <RecordTable />
      <Footer handlerDrawer={handlerDrawer} />
      <Drawer addProduct={addProduct} products={products} handlerDrawer={handlerDrawer} openDrawer={openDrawer} />
    </div>
  );
};

export default App;

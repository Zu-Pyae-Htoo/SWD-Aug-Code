import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import ProductGroup from "./components/ProductGroup";
import Footer from "./components/Footer";
import { Drawer } from "flowbite";

const App = () => {
  return (
    <>
      <main>
        <div>
          <Header />
          <div className="h-24" />
          <Category />
          <ProductGroup />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;

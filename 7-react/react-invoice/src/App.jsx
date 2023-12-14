import React from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";

import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  return (
    <div className="max-w-[700px] mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm />
      <RecordTable />
      <Footer />
      <ProductDrawer />
    </div>
  );
};

export default App;

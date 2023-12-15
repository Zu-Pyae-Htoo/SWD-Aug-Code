import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";

const App = () => {
  return (
    <main>
      <div>
        <Header />
        <div className="h-24" />
        <Category/>
        
      </div>
    </main>
  );
};

export default App;

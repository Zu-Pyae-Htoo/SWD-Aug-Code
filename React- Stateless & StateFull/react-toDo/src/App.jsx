import React from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div className="w-[400px] mx-auto mt-20">
      {/* <Heading/>
      <CreateForm/>
      <Status/>
      <ListGroup/> */}
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <Checker /> */}
      <Accordion />
    </div>
  );
};

export default App;

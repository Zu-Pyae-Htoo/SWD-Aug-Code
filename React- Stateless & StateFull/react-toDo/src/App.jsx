import React from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/AccordionGroup";

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
      <AccordionGroup />
    </div>
  );
};

export default App;

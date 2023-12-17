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
  const faqArray = [
    {
      id: 1,
      question: "What is the purpose of arrays?",
      answer:
        "Arrays are used to store and organize multiple values under a single variable name. They are a fundamental data structure in programming.",
    },
    {
      id: 2,
      question: "How do I access elements in an array?",
      answer:
        "You can access elements in an array by using their index. Indexing starts at 0, so the first element is at index 0.",
    },
    {
      id: 3,
      question: "Can an array store different data types?",
      answer:
        "In some programming languages, arrays can only store elements of the same data type. However, in languages like JavaScript, arrays can store elements of different data types.",
    },
  ];
  return (
    <div className="w-[400px] mx-auto mt-20">
      {/* <Heading/>
      <CreateForm/>
      <Status/>
      <ListGroup/> */}
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <Checker /> */}
      {faqArray.map(({ id, question, answer }) => (
        <Accordion key={id} id={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const faqArray = [
    {
      id: 1,
      question: "What is the purpose of arrays?",
      answer:
        "Arrays are used to store and organize multiple values under a single variable name. They are a fundamental data structure in programming.",
      isOpen: false,
    },

    {
      id: 2,
      question: "How do I access elements in an array?",
      answer:
        "You can access elements in an array by using their index. Indexing starts at 0, so the first element is at index 0.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Can an array store different data types?",
      answer:
        "In some programming languages, arrays can only store elements of the same data type. However, in languages like JavaScript, arrays can store elements of different data types.",
      isOpen: false,
    },
  ];

  const [faq, setFaq] = useState(faqArray);

  const openAccordion = (id) => {
    // setFaq(
    //   faq.map((el) => {
    //     if (el.id === id) {
    //       return { ...el, isOpen: true };
    //     }
    //     return { ...el, isOpen: false };
    //   })
    // );

    setFaq(
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
      )
    );
  };
  return (
    <div>
      <h1 className="mb-5 text-3xl">Faq Group</h1>
      {faq.map(({ id, question, answer, isOpen }) => (
        <Accordion
          key={id}
          id={id}
          openAccordion={openAccordion}
          isOpen={isOpen}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;

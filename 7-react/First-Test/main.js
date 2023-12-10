import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1",null,"Hello") //ReactNode

const App = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Foundation",
      studentCount: 0,
    },
    {
      id: 2,
      title: "Special Web Design",
      studentCount: 5,
    },
    {
      id: 3,
      title: "Web App Development",
      studentCount: 9,
    },
    {
      id: 4,
      title: "Basic UI Design",
      studentCount: 0,
    },
    {
      id: 5,
      title: "Premium UI Design",
      studentCount: 3,
    },
  ];
  return React.createElement(
    "div",
    { className: "p-10 mx-10 mt-5 border border-gray-400" },
    React.createElement(
      "h1",
      { className: "font-serif font-bold text-3xl text-blue-700 mb-5" },
      "Our Courses"
    ),
    React.createElement(
      "ul",
      null,
      courses
        .filter(({ studentCount }) => studentCount > 0)
        .map(({ id, title, studentCount }) =>
          React.createElement(
            "li",
            {
              key: id,
              className: `font-mono ${
                studentCount === 0 ? "bg-red-200" : "bg-gray-200"
              } mb-3 border-s-4 border-gray-400 p-2`,
            },
            title,
            " ",
            studentCount
          )
        )
    )
  );
};

root.render(App());

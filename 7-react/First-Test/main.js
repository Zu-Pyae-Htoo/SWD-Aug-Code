import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1",null,"Hello") //ReactNode

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Courses"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "SWD"),
      React.createElement("li", null, "WAD"),
      React.createElement("li", null, "BWD"),
      React.createElement("li", null, "BUD"),
      React.createElement("li", null, "PUD"),
    )
  );
};


root.render(App());
